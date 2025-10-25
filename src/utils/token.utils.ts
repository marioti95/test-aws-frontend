export function isTokenExpired(token: string): boolean {
  if (!token) return true

  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const expiry = payload.exp * 1000
    return Date.now() >= expiry
  } catch {
    return true
  }
}

export function isTokenExpiringSoon(token: string, thresholdMinutes = 5): boolean {
  if (!token) return true

  try {
    const payload = JSON.parse(atob(token.split('.')[1]))
    const expiry = payload.exp * 1000
    const threshold = thresholdMinutes * 60 * 1000
    return Date.now() >= expiry - threshold
  } catch {
    return true
  }
}
