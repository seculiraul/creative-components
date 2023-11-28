import { Route, Routes } from 'react-router'
import ButtonsMain from './components/buttons/ButtonsMain'
import Homepage from './components/hompage/homepage'
import Navbar from './components/navbar/navbar'

const App = () => {
  return (
    <div className="h-screen bg-slate-900">
      <Navbar />
      <Routes>
        <Route path="/buttons" element={<ButtonsMain />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  )
}
export default App
