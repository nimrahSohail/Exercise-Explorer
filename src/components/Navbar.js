import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import logo from "../assets/images/Logo.png";

function Navbar() {
  return (
    <Stack direction='row' justifyContent='space-around'
    sx={{gap:{sm:'122px', xs:'40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent:'none'}} px="20px">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>

      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end" >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#fff",
            borderBottom: "3px solid #FF9209",
          }}
        >
          Home
        </Link>
        <a
          href="#exercise"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
