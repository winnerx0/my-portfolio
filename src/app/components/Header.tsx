import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='fixed top-0 bg-background px-4 flex h-16 w-full items-center justify-between'>
        <h1>Winner</h1>
        <ul className='flex gap-4'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"#projects"}>Projects</Link></li>
            <li><Link href={"#contact"}>Contact Me</Link></li>
        </ul>
    </nav>
  )
}

export default Header