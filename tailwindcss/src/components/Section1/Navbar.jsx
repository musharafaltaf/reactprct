import React from 'react'
import {MoveUpRight} from 'lucide-react'

const Navbar = () => {
  return (
    <div>
        <div className="box1 bg-amber-50 h-140 w-280 ml-15 mt-12">
            <div className="nav">
                <nav className='h-11px bg-white flex gap-44 p-4'>
            <div className="one font-bold">Horizon Courts</div>
            <div className="two flex gap-10 ">
                <h1 className='bg-white border text-xs w-16 h-5 pl-2 pt-0.5 rounded-2xl'>About Us</h1>
                <h1 className='bg-white border text-xs w-16 h-5 pl-2 pt-0.5 rounded-2xl'>Serviecs</h1>
                <h1 className='bg-white border text-xs w-16 h-5 pl-2 pt-0.5 rounded-2xl'>coaches</h1>
                <h1 className='bg-white border text-xs w-16 h-5 pl-2 pt-0.5 rounded-2xl'>Events</h1>
                <h1 className='bg-white border text-xs w-20 h-5 pl-2 pt-0.5 rounded-2xl'>Contect Us</h1>
            </div>
            <div className="three flex text-xs font-medium text-amber-50 h-7 bg-black w-25 rounded-2xl pl-4">
                <button>Book Now</button>
                <div className="icon pt-2"><MoveUpRight size={13} strokeWidth={1.9} /></div>
            </div>
        </nav>
            </div>
            <div className="box2 bg-blue-400 w-265 h-100 ml-8 rounded-2xl"></div>
        </div>
    </div>
  )
}

export default Navbar
