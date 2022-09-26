import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProjectView from './pages/ProjectView'

export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={
            <Home />} />
          <Route path='projects/:id' element={ <ProjectView/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
