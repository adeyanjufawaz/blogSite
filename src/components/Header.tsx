import React from 'react'
import { Link } from "react-router-dom"

function Header() {

  let openNav = () => {
    let nav: any = document.getElementById("nav")
    let close: any = document.getElementById("close")
    let open: any = document.getElementById("open")
    let root: any = document.getElementById("root")
    console.log(root);

    close.style.display = "block"
    open.style.display = "none"
    nav.style.width = "100%"
    nav.style.minHeight = "100vh"
    root.style.maxHeight = "10vh"
    nav.style.display = "block"
    nav.style.position = "fixed"
    nav.style.right = "0"
    nav.style.top = "8%"
    nav.style.backgroundColor = "white"

  }

  let closeNav = () => {
    let nav = document.getElementById("nav") as HTMLElement
    let close = document.getElementById("close") as HTMLElement
    let open = document.getElementById("open") as HTMLElement

    open.style.display = "block"
    close.style.display = "none"
    nav.style.width = "100%"
    nav.style.display = "none"
  }
  return (
    <div className=" flex flex-col justify-start items-end py-4 px-6 lg:flex-row lg:w-full lg:items-center lg:py-0 lg:px-[3.5rem] static top-0 ">
      <div className="w-full flex justify-between items-center lg:w-1/4">
        <Link to="/">
          <h2 className="self-start font-bold text-[#543EE0] text-[2rem] uppercase ">chatter</h2>
        </Link>
        <span onClick={openNav} className='open hover:cursor-pointer lg:hidden' id='open'>Open</span>
        <span onClick={closeNav} className='hidden close hover:cursor-pointer' id='close'>close</span>
      </div>
      <div id="nav" className="hidden lg:flex lg:flex-row lg:w-3/4 lg:justify-between">
        <nav className="flex flex-col w-full  justify-between my-6 items-center list-none px-8 lg:flex-row lg:w-[40%] lg:x-auto lg:items-center lg">
          <li className="my-6 lg:my-3 font-bold text-[1rem] cursor-pointer">Home</li>
          <li className="my-6 lg:my-3 font-bold text-[1rem] cursor-pointer">About us</li>
          <li className="my-6 lg:my-3 font-bold text-[1rem] cursor-pointer">Contact</li>
          <li className="my-6 lg:my-3 font-bold text-[1rem] cursor-pointer">Blog</li>
        </nav>
        <div className="flex flex-col justify-between items-center lg:flex-row lg:w-[35%]">
          <Link to="/login">
            <button className=" min-w-[9rem] border  my-2 font-bold mx-auto py-2 text-[1.125rem] hover:opacity-70">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="DMsans min-w-[9rem] bg-[#543EE0] border-transparent border my-2 font-bold mx-auto py-2 text-[1.125rem] text-white hover:opacity-70
]">Sign up</button>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Header