import React from "react";
import TextField from "@mui/material/TextField";

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
      <TextField
        className="p-2 mx-0"
        type="text"
        name="achievementTitle"
        id="title1"
        label="Enter achievement title"
        onChange={changeTitle}
        value={title}
      />
      &nbsp; &nbsp;
      <TextField
        className="p-2 mx-0"
        type="number"
        name="achievementYear"
        id="year1"
        label="Enter achievement Year"
        value={year}
        onChange={changeYear}
      />
    </>
  );
};

export default Achievement;
