import { Routes, Route, Outlet } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './functions/Layout'
import Sign_in from './components/auth/Sign_in'


// Lazy load components
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
  </div>
)

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
      <Route path="/" element={<Outlet/>}>
        <Route index element={<Sign_in/>}/>
      </Route>
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
