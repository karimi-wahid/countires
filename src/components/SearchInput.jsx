import React, { useContext } from 'react'
import { BiSearch } from 'react-icons/bi'
import Options from './Options'
import { AppContext } from '../features/AppContext'

const SearchInput = () => {
  const {inputValue, setInputValue} = useContext(AppContext)
  return (
    <div className='flex items-center justify-between w-full mt-3 px-5 mb-5'>
        <div className='flex items-center rounded-full border border-slate-200 w-[30%] px-3 py-1'>
            <input type="text" placeholder='Search for a country here...'
            className='w-[95%] outline-none border-none'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
            <BiSearch
            className='text-xl' />
        </div>
        <Options />
    </div>
  )
}

export default SearchInput