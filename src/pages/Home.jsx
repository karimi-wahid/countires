import React from 'react'
import SearchInput from '../components/SearchInput'
import Navbar from '../components/Navbar'
import CountriesList from '../components/CountriesList'
import Pagination from '../features/Pagination'

const Home = () => {
  return (
    <div className="place-items-center">
      <Navbar />
      <SearchInput />
      <CountriesList />
      <Pagination />
    </div>
  )
}

export default Home