import { Link, Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import BlogIndex from './pages/BlogIndex'
import BlogPost from './pages/BlogPost'
import Login from './pages/Login'

function App() {

  return (
    <>
      {/* nav bar to show on every page */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/login">Login</Link>
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
      </Routes>
    </>
  )
}

export default App
