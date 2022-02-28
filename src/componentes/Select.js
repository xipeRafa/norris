import React, { useState } from "react";
import axios from "axios";
import "./Select.css";

const Select = ({ setVal }) => {
  const [array, setArray] = useState(["animal"]);

  const urlCategories = "https://api.chucknorris.io/jokes/categories";

  axios
    .request(urlCategories)
    .then((response) => setArray(response.data))
    .catch((error) => console.log(error));

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
