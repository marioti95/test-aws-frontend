import { z } from 'zod'

export const LoginRequestSchema = z.object({
  email: z.email(),
  password: z.string().min(8, 'Password must be at least 8 characters'),
})

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
})

export const LoginResponseSchema = z.object({
  accessToken: z.string(),
  user: UserSchema,
})

export const RefreshTokenResponseSchema = z.object({
  accessToken: z.string(),
})

export type LoginRequest = z.infer<typeof LoginRequestSchema>
export type User = z.infer<typeof UserSchema>
export type LoginResponse = z.infer<typeof LoginResponseSchema>
export type RefreshTokenResponse = z.infer<typeof RefreshTokenResponseSchema>
