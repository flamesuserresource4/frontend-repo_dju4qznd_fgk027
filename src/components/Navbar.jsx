import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-blue-200/70 text-blue-900'
        : 'text-blue-900/80 hover:text-blue-900 hover:bg-blue-200/50'
    }`

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-blue-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-300 to-yellow-200 shadow-inner" />
              <span className="font-extrabold tracking-tight text-blue-900">Pastel Trips</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/gallery" className={linkClasses}>Gallery</NavLink>
            <NavLink to="/about" className={linkClasses}>About</NavLink>
            <NavLink to="/testimonials" className={linkClasses}>Testimonials</NavLink>
          </nav>

          <div className="hidden md:flex">
            <Link to="/" className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-300 to-yellow-200 text-blue-900 font-semibold shadow hover:shadow-md transition">Book Now</Link>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md text-blue-900/80 hover:bg-blue-200/50"><Menu /></button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-blue-200/50 bg-white/80">
          <div className="px-4 py-3 space-y-1">
            <NavLink onClick={() => setOpen(false)} to="/" className={linkClasses}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/gallery" className={linkClasses}>Gallery</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={linkClasses}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/testimonials" className={linkClasses}>Testimonials</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
