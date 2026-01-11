import { Link, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import Login from './pages/Login'
import { ProtectedRoute } from './routes/ProtectedRoute'
import Admin from './pages/Admin'
import { useAuth } from './contexts/AuthenticationContext'

function App() {
  // import auth state
  const { isAuthenticated, logout} = useAuth();

  return (
    <>
      {/* nav bar to show on every page */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        {/* conditional links/buttons */}
        <div>
          {isAuthenticated ? (
            <div>
              <Link to="/admin">Admin</Link>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <button><Link to="/login">Login</Link></button>
          )}
        </div>
      </nav>

      {/* routes */}
      <Routes>
        {/* root of the whole app */}
        <Route index element={<Home />} />
        <Route path='blog'>
          {/* root of the blog tree */}
          <Route index element={<BlogIndex />}/>
          {/* child element */}
          <Route path=":slug" element={<BlogPost />} />
        </Route>
        {/* login page route */}
        <Route path='login' element={<Login />}/>

        {/* protected admin page route dependent on auth status */}
        <Route element={<ProtectedRoute />}>
          <Route path='admin' element={<Admin />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
