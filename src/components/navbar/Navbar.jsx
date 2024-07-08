import React from 'react'
const Navbar = () => {
  return (
    <div className='border bg-gray-800 w-full flex justify-between items-center px-20 py-3'>
        <h1 className='text-white text-5xl '>ERP</h1>

        <div className='text-white  w-1/2 items-center text-2xl  flex justify-between'>
        <div className='flex justify-evenly w-full items-center'>

            <p className='hover:text-3xl duration-300 hover:text-slate-500' >Home</p>
            <p className='hover:text-3xl duration-300 hover:text-slate-500'>About</p>
            <p className='hover:text-3xl duration-300 hover:text-slate-500'>Features</p>
            <p className='hover:text-3xl duration-300 hover:text-slate-500'>Contact</p>
            </div>

            <div className='flex border-white w-1/3 justify-between'>
                <p>Login</p>
                <p>SignUp</p>
            </div>
        </div>
       

    </div>
  )
}

export default Navbar