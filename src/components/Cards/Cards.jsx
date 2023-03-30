import React, { useEffect, useState } from "react";
import Card from "../SingleData/SingleData";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
const Cards = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [uniqueId, setUniqueId] = useState(null);

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

  const handleSort = () => {
    const sortedData = data.sort((a, b) => {
      return new Date(a.published_in) - new Date(b.published_in);
    });
    setData([...data, sortedData]);
  };

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data));
  }, [uniqueId]);

  return (
    <>
      <div onClick={handleSort}>
        <Button>Sort by date</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => (
          <Card
            singleData={singleData}
            key={singleData.id}
            setUniqueId={setUniqueId}
          />
        ))}
      </div>
      {!showAll && (
        <span onClick={showMore}>
          <Button>See More</Button>
        </span>
      )}
      <Modal singleData={singleData} />
    </>
  );
};

export default Cards;
