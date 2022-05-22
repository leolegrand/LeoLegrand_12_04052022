import '../styles/app.css'
import Dashboard from '../Pages/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from '../Pages/Error404'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/:id/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
