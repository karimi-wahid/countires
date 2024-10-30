import React, { useContext } from "react";
import { AppContext } from "../features/AppContext";
import { Link, useParams } from "react-router-dom";

const SingleCountry = () => {
  const { countryData, value_converter } = useContext(AppContext);
  const { name } = useParams();
  let country = countryData.find(
    (country) => name == country.name.common.toLowerCase()
  );

  if (!country) return <h1>no country found</h1>;
  return (
    <div className="w-full h-screen grid place-items-center bg-slate-800">
      <div className="w-[80%] h-[80%] flex justify-between items-center p-5 bg-slate-100">
        <div className="basis-[30%]">
          <img
            src={country.flags.png}
            alt="country image"
            className="w-[400px] h-[200px]"
          />
        </div>
        <div className="basis-[50%]">
          <h1 className="text-2xl font-[700] pb-3">{country.name.official}</h1>
          <h3 className="text-xl font-[700] pb-3">
            {country.translations.ara.official}
          </h3>
          <p>
            <span className="text-[16px] font-semibold mr-3">Population: </span>
            {value_converter(country.population)}
          </p>
          <p>
            <span className="text-[16px] font-semibold mr-3"> Region: </span>
            {country.region}
          </p>
          <p>
            <span className="text-[16px] font-semibold mr-3"> Capital: </span>
            {country.capital}
          </p>
          <p>
            <span className="text-[16px] font-semibold mr-3"> Timezone: </span>
            {country.timezones}
          </p>
          <p className="mb-4">
            <span className="text-[16px] font-semibold mr-3"> Borders: </span>
            {country.borders.map((item) => item + " , ")}
          </p>
          <Link
            to="/"
            className="px-5 py-2 border-slate-400 border hover:bg-cyan-600 hover:text-white rounded-lg">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
