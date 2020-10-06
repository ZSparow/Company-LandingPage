import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between md:justify-start py-4 px-4">
            <img className="w-32 cursor-pointer" src="/img/logo.svg" alt="logo" />
            {/* <ul className="hidden md:flex flex-wrap mx-auto items-center md:justify-center text-xl font-semibold text-brand-primary">
                <li className="mx-5 cursor-pointer hover:text-brand-secondary border-transparent hover:border-brand-secondary border-b-2 transform duration-500">
                    <Link to="/">Home</Link>
                </li>
                <li className="mx-5 cursor-pointer hover:text-brand-secondary border-transparent hover:border-brand-secondary border-b-2 transform duration-500">
                    <Link to="/about">About</Link>
                </li>
                <li className="mx-5 cursor-pointer hover:text-brand-secondary border-transparent hover:border-brand-secondary border-b-2 transform duration-500">
                    <Link to="/services">Services</Link>
                </li>
                <li className="mx-5 cursor-pointer hover:text-brand-secondary border-transparent hover:border-brand-secondary border-b-2 transform duration-500">
                    <Link to="/contact">Contact us</Link>
                </li>
            </ul> */}
            <img className="md:hidden w-6 h-8 m2" src="/img/menu.svg" alt="menu" />
        </nav>
    )
}
