import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footerContainer}>
         <h2 className={styles.footerContainer__made}>Develop, Design by hanseulhee</h2>
    </div>
  );
}

export default Footer;
