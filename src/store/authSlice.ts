import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AuthState, LoginResponse, RefreshTokenResponse } from '../types/auth.types'

const initialState: AuthState = {
  accessToken: localStorage.getItem('accessToken') ?? '',
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      state.accessToken = action.payload.accessToken
      state.user = action.payload.user
      state.isAuthenticated = true
      state.error = null
      state.isLoading = false
      localStorage.setItem('accessToken', action.payload.accessToken)
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.accessToken = ''
      state.user = null
      state.isAuthenticated = false
      state.error = null
      state.isLoading = false
      localStorage.removeItem('accessToken')
    },
    refreshTokenSuccess: (state, action: PayloadAction<RefreshTokenResponse>) => {
      state.accessToken = action.payload.accessToken
      localStorage.setItem('accessToken', action.payload.accessToken)
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout, refreshTokenSuccess } =
  authSlice.actions
export default authSlice.reducer
