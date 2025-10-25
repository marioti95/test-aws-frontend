import { store } from '../store'
import { logout, refreshTokenSuccess } from '../store/authSlice'
import { isTokenExpiringSoon } from '../utils/token.utils'
import { refreshToken } from './auth.api'

export interface ApiError {
  message: string
  status: number
}

export class ApiException extends Error {
  error: ApiError
  constructor(error: ApiError) {
    super(error.message)
    this.name = 'ApiException'
    this.error = error
  }
}

export async function apiClient<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const state = store.getState()
  let token = state.auth.accessToken

  // Refresh token if expiring soon
  if (token && isTokenExpiringSoon(token)) {
    try {
      const response = await refreshToken()
      store.dispatch(refreshTokenSuccess(response))
      token = response.accessToken
    } catch (error) {
      store.dispatch(logout())
      throw new ApiException({ status: 401, message: 'Session expired' })
    }
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const response = await fetch(endpoint, {
    ...options,
    credentials: 'include',
    headers,
  })

  if (response.status === 401) {
    store.dispatch(logout())
    throw new ApiException({ status: 401, message: 'Unauthorized' })
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }))
    throw new ApiException({ status: response.status, message: errorData.message })
  }

  return response.json() as T
}
