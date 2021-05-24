import React from "react";
import TopMenu from "../topmenu/TopMenu";
import HeaderText from "./HeaderText"
import Buttons from "../Buttons"
import image from "../../images/pattern.png"
import dasbhoard from "../../icons/dashboard.svg"
import "./header.scss"
function Header() {

  return <header style={{
    backgroundImage: `url(${image})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }}>
    <TopMenu />
    <HeaderText />
    <Buttons />
    <div className="dashboard">
    <img src={dasbhoard} alt="Logo"></img>
    </div>
  </header>
}

export default Header
