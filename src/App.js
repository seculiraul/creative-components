import { Route, Routes } from 'react-router'
import ButtonsMain from './components/buttons/ButtonsMain'

const App = () => {
  return (
    <div className="h-screen bg-slate-900 ">
      <Routes>
        <Route path="/buttons" element={<ButtonsMain />} />
      </Routes>
    </div>
  )
}
export default App
