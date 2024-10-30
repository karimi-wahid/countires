import React from 'react'
import CountryCard from './CountryCard'

const CountriesList = () => {
  return (
    <div className='w-[90%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center'>
      <CountryCard />
    </div>
  )
}

export default CountriesList