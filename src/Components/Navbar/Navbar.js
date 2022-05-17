import "./Navbar.css";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <header className="navbar__header">
      <img src={logo} alt="" className="navbar__logo" />
      <nav className="navbar">
        <ul className="navbar__ul">
          <li className="navbar__li">Welcome, {userInfo?.name} </li>
        </ul>
      </nav>
      <button onClick={() => handleLogout()}> Logout </button>{" "}
    </header>
  );
};

export default Navbar;
