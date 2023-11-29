import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex flex-row gap-4 p-4">
      <Link to={'/buttons'} className="text-white">
        Buttons
      </Link>
      <Link to={'/home'} className="text-white">
        Homepage
      </Link>
      <Link className="text-white">Menus</Link>
      <Link className="text-white">Lists</Link>
    </div>
  )
}

export default Navbar
