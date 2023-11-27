import { Route, Routes } from 'react-router'
import ButtonsMain from './components/buttons/ButtonsMain'
import Homepage from './components/hompage/homepage'

const App = () => {
  return (
    <div className="h-screen bg-slate-900">
      <Routes>
        <Route path="/buttons" element={<ButtonsMain />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  )
}
export default App
