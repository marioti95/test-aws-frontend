import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routes/routes'
import { store } from './store'

const router = createRouter({
  routeTree,
  context: { store },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return <RouterProvider router={router} />
}
