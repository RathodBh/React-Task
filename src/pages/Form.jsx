import React, { useState } from "react";
import Achievement from "./Achievement";
const Form = () => {
  const [fnameErr, setFnameErr] = useState("");
  const [lnameErr, setLnameErr] = useState("");
  const [mailErr, setMailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [dobErr, setdobErr] = useState("");
  const [genderErr, setGenderErr] = useState("");
  const [addErr, setAddErr] = useState("");
  const [hobbiesErr, setHobbiesErr] = useState("");
  const [achTitleErr, setAchTitleErr] = useState("");
  const [achYearErr, setAchYearErr] = useState("");
  
  const [ach, setAch] = useState([
    {
      title: "",
      year: "",
    },
  ]);
  // const [err,setErr] = useState({});

  const checkVal = (
    condition,
    setState,
    msg,
    condition2 = false,
    msg2 = "",
    condition3 = false,
    msg3 = ""
  ) => {
    if (condition) {
      setState(msg);
    } else if (condition2) {
      setState(msg2);
    } else if (condition3) {
      setState(msg3);
    } else {
      setState("");
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
    // const achTitles = e.target.achievementTitle;
    // const achYears = e.target.achievementYear;

    // console.log("🚀 ~ file: Form.jsx:53 ~ handleSubmit ~ achTitles:", achTitles,achYears)
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
      setFnameErr,
      "Please Enter FirstName",
      fname.length < 2,
      "First name should be greater than 1 characters"
    );
    checkVal(
      !lname,
      setLnameErr,
      "Please Enter Last Name",
      lname.length < 2,
      "Last name should be greater than 1 characters"
    );
    checkVal(!gender, setGenderErr, "Please Select a gender");
    checkVal(
      !dob,
      setdobErr,
      "Please Select a Date of birth",
      1980 < new Date(dob).getFullYear(),
      "Please Enter date of birth less than 1980"
    );
    checkVal(
      !email,
      setMailErr,
      "Please Enter your email ID",
      !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email),
      "Please Enter valid Email ID"
    );
    checkVal(
      !phone,
      setPhoneErr,
      "Please Enter your phone number",
      phone.length !== 10,
      "Please Enter valid Phone number, Phone number must be 10 digits"
    );
    checkVal(!add, setAddErr, "Please Enter address");

    checkVal(
      hobbiesArr.length === 0,
      setHobbiesErr,
      "Please Select atleast one Interest"
    );
    checkVal(
      nullTitles.length > 0,
      setAchTitleErr,
      "Please enter all achievement titles"
    );
    checkVal(
      nullYears.length > 0,
      setAchYearErr,
      "Please enter all achievement titles"
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
      <form onSubmit={handleSubmit}>
        <div className="m-2">
          <input
            className="p-2"
            type="text"
            name="fname"
            id="fname"
            placeholder="Enter First name"

            // required
          />
          <span className="err">{fnameErr}</span>
        </div>
        <div className="m-2">
          <input
            className="p-2"
            type="text"
            name="lname"
            id="lname"
            placeholder="Enter Last name"
            // required
          />
          <span className="err">{lnameErr}</span>
        </div>
        <div className="m-2">
          <input
            className="p-2"
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter Phone number"
            // required
          />
          <span className="err">{phoneErr}</span>
        </div>
        <div className="m-2">
          <input
            className="p-2"
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email ID"
            // required
          />
          <span className="err">{mailErr}</span>
        </div>
        <div className="m-2">
          <input
            className="p-2"
            type="date"
            name="dob"
            id="dob"
            placeholder="Enter DOB"
            // required
          />
          <span className="err">{dobErr}</span>
        </div>
        <div className="m-2">
          <input
            className="p-2 m-2"
            type="radio"
            name="gender"
            value="Male"
            id="male"
            // required
          />
          <label htmlFor="male">Male</label>
          <br />

          <input
            className="p-2 m-2"
            type="radio"
            name="gender"
            value="female"
            id="female"
            // required
          />
          <label htmlFor="female">Female</label>
          <br />
          <span className="err">{genderErr}</span>
        </div>
        <div className="m-2">
          <textarea
            name="add"
            id="add"
            cols="30"
            rows="4"
            placeholder="Enter address"
          ></textarea>
          <span className="err">{addErr}</span>
        </div>
        <div className="m-2">
          <input
            className="p-2 m-2"
            type="checkbox"
            name="hobbies"
            value="Reading"
            id="Reading"
          />
          <label htmlFor="Reading">Reading</label>
          <br />
          <input
            className="p-2 m-2"
            type="checkbox"
            name="hobbies"
            value="Writing"
            id="Writing"
          />
          <label htmlFor="Writing">Writing</label>
          <br />
          <input
            className="p-2 m-2"
            type="checkbox"
            name="hobbies"
            value="Web Surfing"
            id="WebSurfing"
          />
          <label htmlFor="WebSurfing">Web Surfing</label>
          <br />
          <span className="err">{hobbiesErr}</span>
        </div>
        <div className="m-2">
          {ach.map((a, i) => (
            <div className="m-2 mx-0" key={i}>
              <Achievement
                title={a.title}
                year={a.year}
                setVal={setAch}
                oldVal={[...ach]}
                id={i}
              />

              {ach.length > 1 && i !== ach.length ? (
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
          <button
            type="button"
            className="m-2 mx-0 p-2"
            onClick={addAchievement}
          >
            + Add Achievement
          </button>
          <br />
          <span className="err">{achTitleErr}</span>
          <br />
          <span className="err">{achYearErr}</span>
        </div>
        <div className="m-2">
          <button type="submit" className="p-2">
            SIGN UP
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
