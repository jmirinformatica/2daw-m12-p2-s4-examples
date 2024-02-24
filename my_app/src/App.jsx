import './App.scss'
import Logger from './library/Logger'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/404'
import Home from './pages/Home'

function App() {

  if (process.env.APP_ENV) {
    console.log("Environment: " + process.env.APP_ENV)
  }
  
  if (process.env.APP_DEBUG) {
    console.log("Debug enabled")
  }

  Logger.debug('App root component')

  return (
    <Routes>
      <Route path='*' element={<NotFound/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default App
