import React, { useState, useEffect } from "react";
import axios from "axios";

import Quote from "./componentes/Quote";
import Spinner from "./componentes/Spinner";
import Select from "./componentes/Select";


function App() {
  const [quote, setQuote] = useState();
  const [val, setVal] = useState();
  const [loading, setLoading] = useState(false);

  const updateQuote = () => {
    setLoading(true);

    const url = "https://api.chucknorris.io/jokes/random";
    axios
      .request(url)
      .then((response) => setQuote(response.data.value))
      .catch((error) => console.log(error));

    setLoading(false);
  };

  const random = () => {
    setLoading(true);

    const urlCategoriesSelected = `https://api.chucknorris.io/jokes/random?${val}'`;
    axios
      .request(urlCategoriesSelected)
      .then((response) => setQuote(response.data.value))
      .catch((error) => console.log(error));

    setLoading(false);
  };

  useEffect(() => {
    random();
  }, [val]);


  return (
    <div className="app">

      <img
        src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
        alt=""
      />

      {loading ? <Spinner /> : <Select setVal={setVal} />}

      {loading ? (
        <Spinner />
      ) : (
        <Quote quote={quote} updateQuote={updateQuote} />
      )}

    </div>
  );
}

export default App;
