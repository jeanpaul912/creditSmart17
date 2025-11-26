import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Simulator from './pages/Simulator'
import RequestCredit from './pages/RequestCredit'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/request" element={<RequestCredit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App