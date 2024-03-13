 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Menu from './Menu'
import Dashboard from './Dashboard'
import { useState } from 'react'
import Landing from './Landing'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  const [user, setUser] = useState(null)

  const login =()=>{
    setUser({
      id:1,
      name:"jhon"
    })
  }
  const logout = ()=> setUser(null)

  return (
    <BrowserRouter>
    {
      user ? (
        <button onClick={logout}>Logout</button>
      ):(
        <button onClick={login}>Login</button>
      )
    }
    <Menu/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='/home' element={
          <ProtectedRoute user={user}>
            <Home/>
          </ProtectedRoute>
        }/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={
          <ProtectedRoute user={user}>
            <Dashboard/>
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
