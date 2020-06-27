import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between md:justify-start p-2">
            <img className="w-32 h-8 cursor-pointer" src="/img/new-logo.svg" alt="logo" />
            <ul className="hidden md:flex flex-wrap mx-auto items-center md:justify-center text-lg text-teal-700">
                <li className="mx-5 cursor-pointer hover:text-teal-400 border-transparent hover:border-teal-700 border-b-2 transform duration-500">
                    <Link to="/">Home</Link>
                </li>
                <li className="mx-5 cursor-pointer hover:text-teal-400 border-transparent hover:border-teal-700 border-b-2 transform duration-500">
                    <Link to="/about">About</Link>
                </li>
                <li className="mx-5 cursor-pointer hover:text-teal-400 border-transparent hover:border-teal-700 border-b-2 transform duration-500">
                    <Link to="/services">Services</Link>
                </li>
                <li className="mx-5 cursor-pointer hover:text-teal-400 border-transparent hover:border-teal-700 border-b-2 transform duration-500">
                    <Link to="/contact">Contact us</Link>
                </li>
            </ul>
            <img className="md:hidden w-6 h-8 m2" src="/img/menu.svg" alt="menu" />
        </nav>
    )
}
