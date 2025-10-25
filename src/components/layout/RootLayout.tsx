import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export default function RootLayout() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  )
}
