import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    // <div>Main</div>
    <>
      <Link to="/user" className="underline-none">
        /user
      </Link> <br />
      <Link to="/form" className="underline-none">
        /form
      </Link> <br />
    </>
  );
};

export default Main;
