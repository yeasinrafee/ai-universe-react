import React, { useEffect, useState } from "react";
import Card from "../SingleData/SingleData";
import Button from "../Button/Button";
const Cards = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

  const showMore = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <Card singleData={singleData} key={singleData.id} />
        ))}
      </div>
      {!showAll && (
        <span onClick={showMore}>
          <Button>See More</Button>
        </span>
      )}
    </>
  );
};

export default Cards;
