import React, { useEffect, useState } from "react";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const data = await res.json();
      console.log(data.data.tools);
      setData(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <h1>Hello card</h1>
    </div>
  );
};

export default Cards;
