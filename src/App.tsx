import { Link, Route, Routes, useNavigate } from 'react-router'
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

  // handle logout redirect to home page
  const navigate = useNavigate();
  
  function handleLogout() {
    logout();
    // if not on admin page when logging out, redirect to home / logout on admin page will redirect to login page
    navigate("/");
  }

  return (
    <>
      {/* nav bar to show on every page */}
      <nav style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center'}}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        {/* conditional links/buttons */}
        <div>
          {isAuthenticated ? (
            <div style={{ display:'flex', gap:'2rem', alignItems:'center' }}>
              <Link to="/admin">Admin</Link>
              <button onClick={handleLogout} style={{color: "white"}}>Logout</button>
            </div>
          ) : (
            <Link to="/login" id="button-link" style={{color: "white"}}>Login</Link>
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
