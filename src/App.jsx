
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Project from './pages/Project'
import Footer from './components/Footer'





function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/Register' element={<Auth insideRegister/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/*' element={<Navigate to={'/'}/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
