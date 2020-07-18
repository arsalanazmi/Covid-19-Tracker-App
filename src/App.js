import React, { Suspense, useState} from "react";
import "./App.css";
import createResource from "./API";
import { fetchGlobalData } from "./API";
import { NavBar, Covid19, CountryPicker, InfoPanel, Charts, Footer } from "./Components";
import Loader from "react-loader-spinner";
import {Banner,Header} from "./Images"

function App() {
  const [country, setCountry] = useState();
  const fetchedData = createResource(country);
  
  const handleCountryChange = async (country) => {
     await fetchGlobalData(country);
    setCountry(await country);
  };

  return (
    <div>
      <NavBar />
      <img src={Banner} className="banner" alt="banner" />
      <Covid19 />
      <img src={Header} className="covid" alt="Covid_19"/>

      <Suspense fallback={<Loader type="ThreeDots" className="spinner" color="#2BAD60" height="100" width="100" />}>
        <CountryPicker data={fetchedData} handleCountryChange={handleCountryChange} />
      </Suspense>

      <Suspense fallback={<Loader type="ThreeDots" className="spinner" color="#2BAD60" height="100" width="100" />}>
        <InfoPanel data={fetchedData} id="infoPanel" /><br/>
      </Suspense>

      <Suspense fallback={<Loader type="ThreeDots" className="spinner" color="#2BAD60" height="100" width="100" />}>
        <Charts data={fetchedData} country={country} />
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;