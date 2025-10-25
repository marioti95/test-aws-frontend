export interface User {
  id: string
  email: string
  name: string
}

export interface AuthState {
  accessToken: string
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  user: User
}

export interface RefreshTokenResponse {
  accessToken: string
}
