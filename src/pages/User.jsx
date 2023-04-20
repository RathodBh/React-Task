import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);
  

  const getUser = async () => {
    const userFetch = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const ans = await userFetch.json();
    setUser(ans);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <table className="table-auto w-full rounded-lg border">
        <caption className="table-caption">User's Data</caption>
        <thead>
          <tr className="table-row bg-slate-300">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Phone Number</th>
            <th className="border p-2">Post</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 &&
            user.map((cur) => {
              return (
                <tr key={cur.id} className="table-row bg-slate-200">
                  <td className="border p-2">{cur.id}</td>
                  <td className="border p-2">{cur.name}</td>
                  <td className="border p-2">{cur.email}</td>
                  <td className="border p-2">
                    {cur.address.street +
                      "," +
                      cur.address.city +
                      "," +
                      cur.address.zipcode}
                  </td>
                  <td className="border p-2">{cur.phone}</td>
                  <td className="border p-2">
                    <Link to="/user-post" state={{ id: cur.id }}>
                      &#128065;
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default User;
