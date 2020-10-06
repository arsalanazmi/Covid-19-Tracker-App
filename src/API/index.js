import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchGlobalData = async (country) => {
  let changeableUrl = url;
  if(country){
    changeableUrl = `${url}/countries/${country}`
  }
  try {
    const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
    return error;
  }
};

const fetchCountries = async () => {
  try {
    const {data:{countries}} = await axios.get(`${url}/countries`)
    return countries.map((country)=>country.name)
  } catch (error) {
    return error
  }
}

const wrapPromise = (promise) => {
  let status = "loading";
  let result;
  let suspender = promise.then(
    (data) => {
      status = "success";
      result = data;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      if (status === "loading") {
        throw suspender;
      } else if (status === "success") {
        return result;
      } else if (status === "error") {
        return result;
      }
    },
  };
};

const createResource = (country) => {
  return {
    globalData: wrapPromise(fetchGlobalData(country)),
    countriesList: wrapPromise(fetchCountries(country)),
  };
};

export default createResource;