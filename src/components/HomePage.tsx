import { Link } from '@tanstack/react-router'

export function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome</h1>
        <p className="text-gray-600 mb-8">Public home page</p>
        <div className="space-x-4">
          <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Login
          </Link>
          <Link
            to="/dashboard"
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
