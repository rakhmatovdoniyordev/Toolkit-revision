import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { IoClose, IoMenu  } from "react-icons/io5";
import { toast } from 'react-toastify';

const Header = () => {
    const navigate = useNavigate()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleLogOut = () => {
        localStorage.clear()
        navigate("/login")
    }
  return (
    <header className='bg-white shadow-md sticky top-0 z-50'>
        <div className="container__person">
            <nav >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <Link href="/" className="flex-shrink-0">
                    <span className="text-2xl font-bold text-blue-600">Logo</span>
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink href="/">Features</NavLink>
                    <NavLink href="/">Pricing</NavLink>
                    <NavLink href="/">About</NavLink>
                    <NavLink href="/">Contact</NavLink>
                    <button className='px-5 py-2 rounded-lg bg-red-400 text-white' onClick={handleLogOut}>Log out</button>
                </div>
                <div className="md:hidden flex items-center">
                    <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    >
                    <span className="sr-only">Open main menu</span>
                    {isMenuOpen ? (
                        <IoClose className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <IoMenu  className="block h-6 w-6" aria-hidden="true" />
                    )}
                    </button>
                </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden border-t">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center gap-3">
                    <NavLink href="/">Features</NavLink>
                    <NavLink href="/">Pricing</NavLink>
                    <NavLink href="/">About</NavLink>
                    <NavLink href="/">Contact</NavLink>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                    <div className="flex items-center px-5">
                    <button className='px-5 py-2 rounded-lg bg-red-400 text-white mx-auto' onClick={handleLogOut}>Log out</button>
                    </div>
                </div>
                </div>
            )}
            </nav>
        </div>
    </header>
  )
}

export default Header