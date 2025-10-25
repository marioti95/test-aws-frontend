import { createRootRoute, createRoute } from '@tanstack/react-router'
import { HomePage } from '../components/HomePage'
import RootLayout from '../components/layout/RootLayout'

const rootRoute = createRootRoute({
  component: RootLayout,
})

// Home route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

export const routeTree = rootRoute.addChildren([indexRoute])
