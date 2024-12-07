import { Link } from "react-router-dom";
import { useCharStates } from "../Components/utils/global.context";

const Navbar = () => {
  const { state, theme, toggleTheme } = useCharStates();

  return (
    <nav className={`navbar ${theme}`}>
      <img src="/DH.ico" alt="DH" className="logo" />
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favs">Favs</Link>
        <Link to="/Contact">Contact</Link>
      </div>

      <button onClick={toggleTheme} className="theme-button">
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
