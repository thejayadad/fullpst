import React from 'react'

const Sidebar = () => {
  return (
    <section className='h-full w-1/5 flex flex-col justify-center sticky top-10 left-0'>
        <div className='h-96 flex justify-center sticky top-4 left-0'>
            <ul className='flex flex-col justify-between '>
                <li className='bg-sky-100 p-6 m-2 w-24'>All</li>
                <li className='bg-sky-100 p-6 m-2'>All</li>
                <li className='bg-sky-100 p-6 m-2'>All</li>
                <li className='bg-sky-100 p-6 m-2'>All</li>
                <li className='bg-sky-100 p-6 m-2'>All</li>
                <li className='bg-sky-100 p-6 m-2'>All</li>
                <li className='bg-sky-100 p-6 m-2'>All</li>
                <li className='bg-sky-100 p-6 m-2'>All</li>
             </ul>
        </div>


    </section>
  )
}

export default Sidebar