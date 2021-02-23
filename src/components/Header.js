import React from "react"
import { Link } from "gatsby"

// Styles
import style from "./Header.module.scss"


const Header = () => {
  return (
    <div className={style.background}>
      <Link to="/">
        <h2>
          Blog - Challenge
        </h2>
      </Link>
    </div>
  );
}

export default Header;