import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//MUI
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


//USER COMPONENT
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Post</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.length > 0 &&
              user.map((cur) => (
                <StyledTableRow key={cur.id}>
                  <StyledTableCell component="th" scope="row">
                    {cur.id}
                  </StyledTableCell>
                  <StyledTableCell align="right">{cur.name}</StyledTableCell>
                  <StyledTableCell align="right">{cur.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {" "}
                    {cur.address.street +
                      "," +
                      cur.address.city +
                      "," +
                      cur.address.zipcode}
                  </StyledTableCell>
                  <StyledTableCell align="right">{cur.phone}</StyledTableCell>
                  <StyledTableCell align="right">
                    <Link to="/user-post" state={{ id: cur.id }} className="underline-none">
                      &#128065;
                    </Link>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
};

export default User;
