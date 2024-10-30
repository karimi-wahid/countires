import axios from "axios";
import { createContext, useEffect, useState } from "react";
const AppContext = createContext()


const AppProvider = ({ children }) => {
  const [countryData, setCountryData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filteredData, setFilteredData] = useState(countryData);
  const [optionValue, setOptionValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const fetchCountryData = async () => {
    const res = await axios.get(`https://restcountries.com/v3.1/all`)
    setCountryData(res.data)
  }
  useEffect(() => {
    fetchCountryData()

  }, [])

  useEffect(() => {
    let updatedData = countryData;

    if (inputValue) {
      updatedData = updatedData.filter(country =>
        country.name.common.toLowerCase().includes(inputValue.toLowerCase())
      );
    }

    if (optionValue && optionValue !== 'all') {
      updatedData = updatedData.filter(country =>
        country.region.toLowerCase() === optionValue.toLowerCase()
      );
    }
    updatedData.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );

    setFilteredData(updatedData);
  }, [inputValue, countryData, optionValue]);

  let lastPostIndex = currentPage * postsPerPage;
  let firstPostIndex = lastPostIndex - postsPerPage;
  let currentPost = filteredData.slice(firstPostIndex, lastPostIndex)
  let totalPost = filteredData.length


  const value_converter = (value) => {
    if (value >= 1000000) {
      return Math.floor(value / 1000000) + "M";
    } else if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    } else {
      return value;
    }
  };

  return <AppContext.Provider value={{ countryData, value_converter, inputValue, setInputValue, filteredData, currentPost, setOptionValue, currentPage, setCurrentPage, totalPost, postsPerPage }}>
    {children}
  </AppContext.Provider>
}

export { AppContext, AppProvider }