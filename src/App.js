import { Route, Routes } from 'react-router'
import TestButton from './components/buttons/TestButton'

const App = () => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/buttons" element={<TestButton />} />
      </Routes>
    </div>
  )
}
export default App
