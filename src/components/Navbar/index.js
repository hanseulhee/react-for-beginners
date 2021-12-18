import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.navContainer__logo} />
      </Link>
    </div>
  );
}

export default Navbar;
