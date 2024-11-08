//import { Navbar } from "react-bootstrap";
import abLogo from "../assets/airbnb-logo.png";


function NavBar () {
    return (
        <nav className="navbar flex-row">
          <img src={abLogo} alt="air-bnb-logo" className="ab-logo" /> 
        </nav>
    );
};

export default NavBar;
