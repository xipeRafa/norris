import React from "react";
import "./Quote.css";

const Quote = ({ quote, updateQuote }) => {
  return (
    <>
      <button onClick={updateQuote}>Random Joke</button>
      
      <h2> {quote} </h2>
    </>
  );
};

export default Quote;
