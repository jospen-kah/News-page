"use client";
import Image from 'next/image'
import './globals.css'

import Navbar from '@/components/Navbar'
import { useState } from 'react'


export default function Home() {
const [isClicked, setisClicked] = useState(false)

const handleClicked = () => {
  setisClicked(!isClicked)
}

  return (
    <div>
      <Navbar />
      <div className='h-full flex-col  flex gap-4 px-60 py-2 '>
        <div className='  w-full flex flex-row gap-4' >
          <div className=' w-2/3 flex-1 gap-1 flex-col'>
            <div className='bg-blue-500 h-60'>
            <Image src="/image-web-3-desktop.jpg" alt="desktop" width={400} height={4} className='w-full h-full' />
            </div>
            <div className=' flex items-center justify-evenly p-2 '> 
              <div className=' flex-1 text-6xl font-semibold'>The Bright <br/> future of<br/> Web3.0</div>
              <div className='flex flex-1 flex-col border-2 justify-between'>
                <div className=' text-xl '>
                  <h1 className=''>We have to dive into the next evolution of web that claims to pput the power of the platform back into the hands of the people. But it is really fullfilling it promise</h1>
                </div>
                <div className='py-4' >
                  <button  onClick={handleClicked} className={isClicked ? 'bg-red-400  text-black px-7 py-3 font-semibold' : 'bg-black/90 text-white px-7 py-3 font-semibold'}>READ MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-black/90 text-white p-2'>The fear of the lord is the beginning of wisdom</div>
        </div>
        <div className='border bg-green-500 w-full'>
          <div className='bg-black/0'>
            
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}