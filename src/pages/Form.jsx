import React, { useState } from "react";
import Achievement from "./Achievement";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Form = () => {
  const [err, setErr] = useState({});

  const [ach, setAch] = useState([
    {
      title: "",
      year: "",
    },
  ]);

  const checkVal = (
    condition,
    errName,
    msg,
    condition2 = false,
    msg2 = "",
    condition3 = false,
    msg3 = ""
  ) => {
    if (condition) {
      setErr((err) => ({
        ...err,
        [errName]: msg,
      }));
    } else if (condition2) {
      setErr((err) => ({
        ...err,
        [errName]: msg2,
      }));
    } else if (condition3) {
      setErr((err) => ({
        ...err,
        [errName]: msg3,
      }));
    } else {
      setErr((err) => ({
        ...err,
        [errName]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const dob = e.target.dob.value;
    const gender = e.target.gender.value;
    const add = e.target.add.value;
    const hobbies = e.target.hobbies;

    let hobbiesArr = [];

    hobbies?.forEach((cur) => {
      if (cur.checked) {
        hobbiesArr.push(cur.value);
      }
    });

    const nullTitles = ach.filter((a) => a.title === "");
    const nullYears = ach.filter((a) => a.year === "");

    // check conditions
    checkVal(
      !fname,
      "setFnameErr",
      "Please Enter FirstName",
      fname.length < 2,
      "First name should be greater than 1 characters"
    );
    checkVal(
      !lname,
      "setLnameErr",
      "Please Enter Last Name",
      lname.length < 2,
      "Last name should be greater than 1 characters"
    );
    checkVal(!gender, "setGenderErr", "Please Select a gender");
    checkVal(
      !dob,
      "setdobErr",
      "Please Select a Date of birth",
      1980 < new Date(dob).getFullYear(),
      "Please Enter date of birth less than 1980"
    );
    checkVal(
      !email,
      "setMailErr",
      "Please Enter your email ID",
      !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email),
      "Please Enter valid Email ID"
    );
    checkVal(
      !phone,
      "setPhoneErr",
      "Please Enter your phone number",
      phone.length !== 10,
      "Please Enter valid Phone number, Phone number must be 10 digits"
    );
    checkVal(!add, "setAddErr", "Please Enter address");

    checkVal(
      hobbiesArr.length === 0,
      "setHobbiesErr",
      "Please Select atleast one Interest"
    );
    checkVal(
      nullTitles.length > 0,
      "setAchTitleErr",
      "Please enter all achievement titles"
    );
    checkVal(
      nullYears.length > 0,
      "setAchYearErr",
      "Please enter all achievement year"
    );
  };

  const addAchievement = () => {
    setAch([
      ...ach,
      {
        title: "",
        year: "",
      },
    ]);
  };
  const removeAchievement = (i) => {
    const tempArr = ach.filter((a, id) => i !== id);
    setAch([...tempArr]);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="all-center w-100">
        <div className="w-50 all-center">
            <h1>USER FORM</h1>
        </div>
        <div className="w-50">
          <TextField
            variant="outlined"
            className="p-2 w-100"
            type="text"
            name="fname"
            id="fname"
            label="Enter First name"
          />
          <span className="err px-0">{err["setFnameErr"]}</span>
        </div>

        <div className="w-50">
          <TextField
            variant="outlined"
            className="p-2 w-100"
            type="text"
            name="lname"
            id="lname"
            label="Enter Last name"
          />
          <span className="err px-0">{err["setLnameErr"]}</span>
        </div>
        <div className="w-50">
          <TextField
            variant="outlined"
            className="p-2 w-100"
            type="number"
            name="phone"
            id="phone"
            label="Enter Phone Number"
          />
          <span className="err px-0">{err["setPhoneErr"]}</span>
        </div>
        <div className="w-50">
          <TextField
            variant="outlined"
            className="p-2 w-100"
            type="email"
            name="email"
            id="email"
            label="Enter email"
          />
          <span className="err px-0">{err["setMailErr"]}</span>
        </div>
        <div className="w-50">
          <TextField
            variant="outlined"
            className="p-2 w-100"
            type="date"
            name="dob"
            id="dob"
            // label="Enter date of birth"
          />
          <span className="err px-0">{err["setdobErr"]}</span>
        </div>
        <div className="w-50">
          <input
            className="p-2 m-2 ms-0"
            type="radio"
            name="gender"
            value="Male"
            id="male"
          />
          <label htmlFor="male">Male</label>
          <br />

          <input
            className="p-2 m-2 ms-0"
            type="radio"
            name="gender"
            value="female"
            id="female"
          />
          <label htmlFor="female">Female</label>
          <br />
          <span className="err px-0">{err["setGenderErr"]}</span>
        </div>
        <div className="w-50">
          <TextField
            className="p-2 w-100"
            name="add"
            id="add"
            label="Enter address"
            rows={4}
            multiline
          />
          <span className="err px-0">{err["setAddErr"]}</span>
        </div>
        <div className="w-50">
          <input
            className="p-2 m-2 ms-0"
            type="checkbox"
            name="hobbies"
            value="Reading"
            id="Reading"
          />
          <label htmlFor="Reading">Reading</label>
          <br />
          <input
            className="p-2 m-2 ms-0"
            type="checkbox"
            name="hobbies"
            value="Writing"
            id="Writing"
          />
          <label htmlFor="Writing">Writing</label>
          <br />
          <input
            className="p-2 m-2 ms-0"
            type="checkbox"
            name="hobbies"
            value="Web Surfing"
            id="WebSurfing"
          />
          <label htmlFor="WebSurfing">Web Surfing</label>
          <br />
          <span className="err px-0">{err["setHobbiesErr"]}</span>
        </div>
        <div className="w-50">
          {ach.map((a, i) => (
            <div className="m-2 mx-0 all-center fr jcsb" key={i}>
              <Achievement
                title={a.title}
                year={a.year}
                setVal={setAch}
                oldVal={[...ach]}
                id={i}
              />

              {ach?.length > 1 && i !== ach?.length ? (
                <button 
                  type="button"
                  className="m-2 p-2"
                  onClick={() => removeAchievement(i)}
                >
                  -
                </button>
              ) : (
                ""
              )}
            </div>
          ))}
          <Button variant="outlined"
            type="button"
            className="m-2 mx-0 p-2"
            onClick={addAchievement}
          >
            + Add Achievement
          </Button>
          <br />
          <span className="err">{err["setAchTitleErr"]}</span>
          <br />
          <span className="err">{err["setAchYearErr"]}</span>
        </div>
        <div className="w-50">
          <Button variant="contained" type="submit" className="p-2 w-100">
            SIGN UP
          </Button>
        </div>
      </form>
    </>
  );
};

export default Form;
