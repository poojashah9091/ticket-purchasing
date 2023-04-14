import React from "react";
import Logo from "../../images/logo.svg";
import "./style.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () =>{

    const location = useLocation();

    return(
        <div className="header_container">
            <div className="brand">
                <Link to="/" className="brand_logo"> <img src={Logo} alt="Logo"/></Link>
                <Link to="/" className="brand_name">  <label>Fun Times</label></Link>
            </div>
        </div>
    )

}   

export default Header;