import React from "react"
import { Link } from "gatsby"

// Components
import Header from "./Header"
import Main from "./Main"


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Link to="/">
        </Link>
        {children}
      </Main>
    </>
  );
}

export default Layout;