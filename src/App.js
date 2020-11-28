import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";

import "./App.scss";
import axios from "axios";
function App() {
  const [quote, setQuote] = useState("");
  const [authorName, setAuthor] = useState("");
  useEffect(() => {
    axios
      .get("https://quote-garden.herokuapp.com/api/v2/quotes/random")
      .then((response) => {
        console.log(response.data.quote);
        setQuote(response.data.quote.quoteText);
        setAuthor(response.data.quote.quoteAuthor);
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
