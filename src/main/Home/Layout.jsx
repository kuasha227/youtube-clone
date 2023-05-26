import React from 'react'
import { useState } from 'react'
import { FaAlignJustify,FaQuestion,FaSlidersH,FaJava,FaGamepad,FaBell,FaPlusSquare,FaSearch,FaHome,FaLaptopMedical,FaSubscript,FaMixcloud,FaMusic,FaHistory,FaThumbsUp,FaRegClock } from "react-icons/fa";

const Layout = ({children}) => {
    const [open,setOpen]= useState(true);
    const menus = [
      {
        label:'Home',
        icon:<FaHome />
      },
      {
        label:'Shorts',
        icon:<FaLaptopMedical />
      },
      {
        label:'Subscribe',
        icon:<FaSubscript />
      },
      {
        label:'History',
        icon:<FaHistory />
      },
      {
        label:'Liked Videos',
        icon:<FaThumbsUp />
      },
      {
        label:'Watch Later',
        icon:<FaRegClock />
      },
      {
        label:'Music',
        icon:<FaMusic />
      },
      {
        label:'Mix',
        icon:<FaMixcloud />
      },
      {
        label:'Gaming',
        icon:<FaGamepad />
      },
      {
        label:'JavaScript',
        icon:<FaJava />
      },
      {
        label:'Help',
        icon:<FaQuestion />
      },
      {
        label:'Setting',
        icon:<FaSlidersH />
      },
  ]
  return (
    <div >
      <nav className='bg-white border-b fixed top-0 left-0 w-full h-16 z-10 px-5 flex justify-between items-center'>
        <div className='flex items-center'>
        <button onClick={()=>setOpen(!open)} className='hover:bg-gray-100 h-10 w-10 rounded-full flex justify-center items-center'>
            <span className='flex items-center text-size-25'> <FaAlignJustify /></span>
        </button>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png'alt='logo'className='w-16'/>
        </div>
        <div className='w-1/2 flex flex-col'>
        <form className='flex'>
          <input className='border border-slate-300 rounded-l h-10 flex-1 p-3' placeholder='Search'/>
          <button className='border border-slate-300 border-l-0 rounded-r h-10 w-10 flex items-center justify-center'>
            <span className='text-slate-400'>
              <FaSearch />
            </span>
          </button>
        </form>
        </div>
        <div className='flex items-center'>
        <button  className='hover:bg-gray-100 h-10 w-10 rounded-full flex justify-center items-center'>
            <span className='flex items-center text-size-25'> <FaPlusSquare /></span>
        </button>
        <button  className='hover:bg-gray-100 h-10 w-10 rounded-full flex justify-center items-center'>
            <span className='flex items-center text-size-25'> <FaBell /></span>
        </button>
        <img src='https://yt3.ggpht.com/UqzcA-YBT3G_eTIX6HWKFpsMybAZEPuXoZl4O3QvrOcunSp3YvN6N6iozOy3mF4f_w2cpAu2I9w=s88-c-k-c0x00ffffff-no-rj-mo'alt='logo'className='w-10 h-10 rounded-full '/>
        </div>
      </nav>
      <aside className='overflow-auto bg-white border-r h-full fixed top-0 left mt-16 flex flex-col gap-y-2 py-3 px-3' style={
    {
        width:open?200:70,
        transition:'0.2s',
    }
      }>
      {
        menus.map((item,index)=>(
          <button 
          key={index} 
          className={`flex ${open ? 'flex-row':'flex-col'} ${open?'items-start':'items-center'} gap-x-5 py-2 rounded-lg hover:bg-gray-100 px-2`}>
            <span className='text-slate-600'>{item.icon}</span>
            <span 
            className={`text-slate-600 ${open? null : 'text-xs'}`}>
              {item.label}</span>
          </button>
          ))
      }
      </aside>
      <section className='mt-16 p-5' style={{
        marginLeft:open?200:70,
        transition:'0.2s',
      }}>
     {children}
      </section>
    </div>
  )
}

export default Layout
