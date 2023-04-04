import React from 'react'




const Post = () => {
  return (
    <div
    className='flex w-48 h-64 bg-sky-200 hover:bg-sky-700 m-2 flex-col cursor-pointer hover:scale-125'
    >
    <img

    className='h-40 w-40 ml-auto mr-auto p-2'
    src="https://images.pexels.com/photos/1150988/pexels-photo-1150988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt='postImage'
    />
    <div className=' flex justify-between aitems-center'>
      <div
      className='h-5 rounded-full pl-3'
      >
      <img
      className='h-5 rounded-full'
alt="pro"
src="https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
/>
      </div>

      <h7 className="pr-2 text-xs">UserName</h7>
    </div>

    <div className='p-2 flex justify-around'>
      <h4 className='pl-1'>Title</h4>
      <h8 className="text-xs">Category</h8>

    </div>
    <div className='p-1 pl-3 pt-0'>
      <h5>Description goes here maybe or ill just have the title and likes</h5>
    </div>
    <div className=''>
      <h8><i class="fas fa-thumbs-up pl-3 pb-2"></i></h8>
      <span className='pl-1 text-xs'>0</span>
    </div>

    </div>
  )
}

export default Post