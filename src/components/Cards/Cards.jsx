import React, { useEffect, useState } from "react";
import Card from "../SingleData/SingleData";
const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const value = await res.json();
      setData(value.data.tools);
    };
    loadData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6">
        {data.slice(0, 6).map((singleData) => (
          <Card singleData={singleData} key={singleData.id} />
        ))}
      </div>
    </>
  );
};

export default Cards;
