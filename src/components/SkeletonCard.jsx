import React from 'react'

const SkeletonCard = () => {
  return (
    <div className='flex flex-col gap-2'>
      {/* Main thumbnail placeholder */}
      <div className='bg-neutral-600  animate-pulse w-full h-48 rounded-xl'></div>
      {/* Channel placeholder */}
      <div className='bg-neutral-600  animate-pulse w-10 h-10 rounded-full'></div>
      <div className='flex flex-col gap-2 flex-1'>
      {/* Title placeholder */}
      <div className='bg-neutral-600 animate-pulse h-5 w-full rounded-md'></div>
      {/* Channel name placeholder */}
      <div className='bg-neutral-600 animate-pulse h-4 w-1/3 rounded-md'></div>
      </div>
    </div>
  )
}

export default SkeletonCard