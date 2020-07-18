import React from "react";
import { FormControl, NativeSelect,FormHelperText } from "@material-ui/core";

const CountryPicker = ({ data, handleCountryChange }) => {
  const countriesList = data.countriesList.read();

  return (
    <div>
      <FormControl style={{margin:'0 auto',display:'flex', justifyContent:"center",alignItems:'center'}}>
        <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {countriesList.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
        <FormHelperText style={{fontWeight:"bold",fontSize:"14px"}}>Select a Country</FormHelperText>
      </FormControl>
    </div>
  );
};

export default CountryPicker;