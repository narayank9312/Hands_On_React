import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log("onlineStatus-----------", onlineStatus);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>online Status : {onlineStatus ? "✅" : "🔴"} </li>
          <Link className="nav-item-container" to={"/"}>
            <li>Home</li>
          </Link>
          <Link className="nav-item-container" to={"/about"}>
            <li>About US</li>
          </Link>
          <Link className="nav-item-container" to={"/contact"}>
            <li>Contact Us</li>
          </Link>
          <Link className="nav-item-container">
            <li>Cart</li>
          </Link>
          <button
            className={`login nav-item-container`}
            onClick={() => {
              btnName === "Login" ? setBtnName("logOut") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
