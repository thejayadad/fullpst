import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Category from '../components/Category'



const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='flex bg-sky-600'>
            <Sidebar />
            <Category />
        </div>


    </div>
  )
}

export default Home