"use client";
import Image from 'next/image'
import './globals.css'

import Navbar from '@/components/Navbar'
import { useState } from 'react'


export default function Home() {
  const [isClicked, setisClicked] = useState(false)
  const data = [
    {
      id: 1,
      title: 'Reviving Retro PCs',
      description: 'What happens when old PCs are given modern upgrades',
      image: '/image-web-3-desktop.jpg'
    },
    {
      id: 2,
      title: 'Top 10 Laptops of 2022',
      description: 'Our best picks for various needs and budgets',
      image: '/image-web-3-desktop.jpg'
    },
    {
      id: 3,
      title: 'The Growth of Gaming',
      description: 'How the pandemic has sparked fresh opportunities',
      image: '/image-web-3-desktop.jpg'
    }
  ]
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
              <div className=' flex-1 text-6xl font-semibold'>The Bright <br /> future of<br /> Web3.0</div>
              <div className='flex flex-1 flex-col gap-3  justify-between  px-1'>
                <div className=' text-xl '>
                  <h1 className=''>We have to dive into the next evolution of web that claims to pput the power of the platform back into the hands of the people. But it is really fullfilling it promise</h1>
                </div>
                <div >
                  <button onClick={handleClicked} className={isClicked ? 'bg-red-400  text-black px-7 py-3 font-semibold' : 'bg-black/90 text-white px-7 py-3 font-semibold'}>READ MORE</button>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-black/90 text-white p-2'>The fear of the lord is the beginning of wisdom</div>
        </div>
        <div className='border  w-full grid grid-cols-3 gap-4'>
          {data.map((item) => (

            <div className='flex flex-row gap-2 justify-between' key={item.id}>
              <div className='w-1/3 '>
                <Image src={item.image} alt="desktop" width={400} height={4} className="h-full w-full"  />
              </div>
              <div className='flex flex-col gap-2v px-2'>
                <h1 className='text-2xl font-semibold text-red-500'>0{item.id}</h1>
                <h1 className='text-2xl font-semibold'>{item.title}</h1>
                <p className='text-lg'>{item.description}</p>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  )
}