import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";

import "./App.scss";
import axios from "axios";
function App() {
  const [quote, setQuote] = useState("");
  const [authorName, setAuthor] = useState("");
  useEffect(() => {
    axios
      .get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((response) => {
        console.log(response.data[0].quote);
        setQuote(response.data.quote[0].quoteText);
        setAuthor(response.data.quote[0].quoteAuthor);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <div className="App">
        <Card quote={quote} authorName={authorName} />
      </div>
    </>
  );
}

export default App;
