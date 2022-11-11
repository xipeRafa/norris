/* import React, { useState } from "react";
import axios from "axios"; */
import "./Select.css";

const Select = ({ setVal }) => {
  const array = ['animal', 'career', 'celebrity', 'dev', 'explicit', 'fashion', 'food', 'history', 'money', 'movie', 'music', 'political', 'religion', 'science', 'sport', 'travel']

/*
const [array, setArray] = useState(["animal"]);

const urlCategories = "https://api.chucknorris.io/jokes/categories";
 console.log(array)
  axios
    .get(urlCategories)
    .then((response) => {
      if(array.length==1){
        setArray(response.data)
      }
      console.log(response.data, 'array.length:', array.length) 
    } )
    .catch((error) => console.log(error)); */

  return (
    <select onChange={(e) => setVal(e.target.value)}>
      {array?.map((el, i) => (
        <option key={i} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
};

export default Select;

