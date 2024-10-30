import React, { useContext } from "react";
import { AppContext } from "../features/AppContext";
import { Link, useParams } from "react-router-dom";

const CountryCard = () => {
  const { filteredData, currentPost ,value_converter } = useContext(AppContext);

  return (
    <>
      {currentPost.map((country, index) => (
        <Link
          to={`country/${country.name.common.toLowerCase()}`}
          className="w-[220px] h-[260px] flex justify-between items-center flex-col shadow-lg shadow-neutral-300 py-2 hover:scale-105 duration-200 cursor-pointer"
          key={index}>
          <img
            src={country.flags.svg}
            alt="country-flag"
            className="w-[90%] h-[40%] object-cover"
          />
          <div className="p-1 pt-3 w-[80%] text-start">
            <h1 className="pb-3 font-[600] text-[18px]">
              {country.name.common}
            </h1>
            <p className="text-[12px]">
              <b className="">Population</b> :{" "}
              <span>{value_converter(country.population)}</span>
            </p>
            <p className="text-[12px]">
              <b>Region</b> : <span>{country.region}</span>
            </p>
            <p className="text-[12px]">
              <b>Capital</b> : <span>{country.capital}</span>
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CountryCard;
