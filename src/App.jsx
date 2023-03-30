import React from "react";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Cards from "./components/Cards/Cards";

const App = () => {
  return (
    <>
      <Header />
      <Button>Sort By Date</Button>
      <Cards />
    </>
  );
};

export default App;
