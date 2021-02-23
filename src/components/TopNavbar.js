import React from "react"
import { Link } from "gatsby"

// React Bootstrap
import { Navbar, Nav } from "react-bootstrap"

// Styles
import style from "./TopNavbar.module.scss"

const TopNavbar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Link to={"/"}>
      <Navbar.Brand>Blog - challenge</Navbar.Brand>
      </Link>
      <Nav className={`ml-auto ${style.nav}`}>
        <Link activeClassName={style.activeLink} to={"/category1"}>Category 1</Link>
        <Link activeClassName={style.activeLink} to={"/category2"}>Category 2</Link>
        <Link activeClassName={style.activeLink} to={"/category3"}>Category 3</Link>
      </Nav>
    </Navbar>
  );
}

export default TopNavbar;