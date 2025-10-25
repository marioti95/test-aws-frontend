import { apiClient } from './client'
import { LoginResponseSchema, RefreshTokenResponseSchema } from '../schemas/auth.schema'
import type { LoginRequest, LoginResponse, RefreshTokenResponse } from '../types/auth.types'

const API_BASE_URL = import.meta.env.API_BASE_URL || 'https://api.example.com'

export async function login(credentials: LoginRequest): Promise<LoginResponse> {
  const response = await apiClient<LoginResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })
  return LoginResponseSchema.parse(response)
}

export async function refreshToken(): Promise<RefreshTokenResponse> {
  const response = await apiClient<unknown>(`${API_BASE_URL}/auth/refresh`, {
    method: 'POST',
  })

  return RefreshTokenResponseSchema.parse(response)
}

export async function logoutApi(): Promise<void> {
  await apiClient(`${API_BASE_URL}/auth/logout`, {
    method: 'POST',
  })
}
