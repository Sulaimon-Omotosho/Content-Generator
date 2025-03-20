'use client'

import { File, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {
  const MenuList = [
    { name: 'Home', icon: Home, path: '/dashboard' },
    { name: 'History', icon: File, path: '/dashboard/History' },
    { name: 'Billing', icon: Wallet, path: '/dashboard/billing' },
    { name: 'Setting', icon: Settings, path: '/dashboard/setting' },
  ]

  const path = usePathname()
  console.log('path', path)

  return (
    <div className='h-screen p-5 shadow-sm border'>
      <div className='flex justify-center'>
        <Image src={'/logo.svg'} alt='logo' width={80} height={80} />
      </div>
      <hr className='my-6 border' />
      <div className='mt-10'>
        {MenuList.map((menu, index) => (
          <div
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
              path.startsWith(menu.path) ? 'bg-primary text-white' : ''
            }`}
            key={index}
          >
            <menu.icon />
            <h2 className='text-lg'>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideNav
