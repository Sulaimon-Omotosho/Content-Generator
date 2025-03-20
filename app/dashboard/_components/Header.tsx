import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between bg-white items-center'>
      <div className='flex gap-2 items-center p-2 border rounded-lg border-slate-500 bg-white'>
        <Search />
        <input type='text' placeholder='Search...' className='outline-none' />
      </div>
      <div className='bg-primary p-3 rounded-full text-xs text-white'>
        Join Membership 19.99/Month
      </div>
    </div>
  )
}

export default Header
