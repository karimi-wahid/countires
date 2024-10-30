import React, { useContext } from 'react'
import { AppContext } from '../features/AppContext'

const Options = () => {
  const { setOptionValue } = useContext(AppContext)

  let options = [
    { value: 'all', label: 'All' },
    { value: 'asia', label: "Asia" },
    { value: 'europe', label: "Europe" },
    { value: 'americas', label: "America" },
    { value: 'africa', label: "Africa" },
  ]

  return (
    <select
    onChange={(e) => setOptionValue(e.target.value)}
    className='outline-none border border-neutral-300 rounded-lg px-4 py-2 text-neutral-500'>
      {options.map((option) => (
        <option
        value={option.value}
        key={option.value}
        >
        {option.label}
        </option>
      ))}
    </select>
  )
}

export default Options