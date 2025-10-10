import React from 'react'
import { Link } from 'react-router-dom'
import { FaDownload, FaStar } from 'react-icons/fa'

const AppCard = ({ App }) => {
  const { title, image,  downloads, ratingAvg, ratings } = App

  
   ratings?.reduce((sum, r) => sum + r.count, 0)

  return (
    
    <Link to={`/apps/${App.id}`}>
    <div className='border border-gray-200 rounded-xl shadow-sm p-4 hover:scale-105 transition ease-in-out bg-white'>
      {/* Image */}
      <figure className='h-40 overflow-hidden mb-3'>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={image}
          alt={title}
        />
      </figure>

      {/* Info */}
      <h2 className='text-sm font-semibold text-gray-800 mb-2'>{title}</h2>

      <div className='flex justify-between text-xs text-gray-500 mb-2'>
        {/* Downloads */}
        <div className='flex items-center gap-1 bg-[#F1F5E8] p-2 rounded'>
          <FaDownload className='text-[#00D390]' />
          <span className='text-[#00D390]' >{downloads.toLocaleString()}</span>
        </div>

        {/* Rating */}
        <div className='flex items-center gap-1 bg-[#FFF0E1] p-2 rounded'>
          <FaStar className='text-[#FF8811]' />
          <span className='text-[#FF8811]'>{ratingAvg}</span>
        </div>
      </div>
      
    </div>
    </Link>
  )
}

export default AppCard
