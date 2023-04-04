import React from 'react'




const Post = () => {
  return (
    <div
    className='flex w-48 h-64 bg-sky-200 hover:bg-sky-700 m-2 flex-col'
    >
    <img

    className='h-40 w-40 ml-auto mr-auto p-2'
    src="https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt='postImage'
    />
    <div className=' flex justify-evenly'>
      <div
      className='h-7 rounded-full'
      >
      <img
      className='h-7 rounded-full'
alt="pro"
src="https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
/>
      </div>

      <h7>UserName</h7>
      <h8>Category</h8>
    </div>

    <div className=''>
      <h4>Title</h4>
    </div>

    </div>
  )
}

export default Post