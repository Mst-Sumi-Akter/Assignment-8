import React, { useState } from 'react'
import useApps from '../Hooks/useApps'
import AppCard from '../Components/AppCard'
import SkeletonLoader from '../Components/SkeletonLoader'

const Apps = () => {
  const { apps, loading } = useApps()
  const [search, setSearch] = useState('')

  const term = search.trim().toLocaleLowerCase()

  const searchedApps = term
    ? apps.filter(app => app.title.toLocaleLowerCase().includes(term))
    : apps

  if (loading) {
    return <SkeletonLoader count={15} />
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-center">
      {/* Header & Description */}
      {searchedApps.length > 0 && (
        <>
          <h1 className='text-2xl sm:text-3xl font-bold text-black p-5 pt-10'>
            Our All Applications
          </h1>
          <p className='pb-10'>
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </>
      )}

      {/* Header & Search */}
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-6'>
        <h1 className='text-xl sm:text-3xl font-semibold'>
          <span className='text-xl sm:text-3xl font-semibold text-black'>
            ({searchedApps.length})
          </span>
          Apps Found
        </h1>

        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          type='search'
          placeholder='🔍 Search apps...'
          className='border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-72'
        />
      </div>

      {/* Content */}
      {searchedApps.length === 0 ? (
        <h2 className='text-2xl font-bold text-black p-20'>
          No Apps Found
        </h2>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {searchedApps.map(app => (
            <AppCard key={app.id} App={app} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Apps
