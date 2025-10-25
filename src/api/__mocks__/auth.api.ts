import type { LoginRequest, LoginResponse, RefreshTokenResponse } from '../../types/auth.types'

const MOCK_USER = {
  id: 'user-123',
  email: 'test@example.com',
  name: 'Test User',
}

const MOCK_TOKEN =
  'mock-jwt-token.' + btoa(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + 3600 }))

export async function login(credentials: LoginRequest): Promise<LoginResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500))

  if (credentials.email === 'test@example.com' && credentials.password === 'password123') {
    return {
      accessToken: MOCK_TOKEN,
      user: MOCK_USER,
    }
  }

  throw new Error('Invalid credentials')
}

export async function refreshToken(): Promise<RefreshTokenResponse> {
  await new Promise((resolve) => setTimeout(resolve, 300))

  return {
    accessToken: MOCK_TOKEN,
  }
}

export async function logoutApi(): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 200))
}
