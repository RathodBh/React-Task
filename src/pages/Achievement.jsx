import React from "react";

const Achievement = ({ title, year, setVal, oldVal, id }) => {

  const changeTitle = (e) => {
    const tmpTitle = e.target.value;
    const tempArr = oldVal;
    const arrayObj = tempArr.map((item, i) => {
      if (i === id) {
        return {
          ...item,
          title: tmpTitle,
        };
      }
      return item;
    });
    
    setVal([...arrayObj]);
  };
  const changeYear = (e) => {
    const tmpYear= e.target.value;
    const tempArr = oldVal;
    const arrayObj = tempArr.map((item, i) => {
      if (i === id) {
        return {
          ...item,
          year: tmpYear,
        };
      }
      return item;
    });
    
    setVal([...arrayObj]);
  };
  return (
    <>
      <input
        className="p-2 mx-0"
        type="text"
        name="achievementTitle"
        id="title1"
        placeholder="Enter achievement title"
        onChange={changeTitle}
        value={title}
      />
      &nbsp; &nbsp;
      <input
        className="p-2 mx-0"
        type="number"
        name="achievementYear"
        id="year1"
        placeholder="Enter achievement Year"
        value={year}
        onChange={changeYear}
      />
    </>
  );
};

export default Achievement;
