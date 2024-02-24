import './App.scss'
import Logger from './library/Logger'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/404'
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import { UserContextProvider } from './contexts/UserContext'

function App() {

  if (process.env.APP_ENV) {
    console.log("Environment: " + process.env.APP_ENV)
  }
  
  if (process.env.APP_DEBUG) {
    console.log("Debug enabled")
  }

  Logger.debug('App root component')
  
  return (
    <UserContextProvider>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
