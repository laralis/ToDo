import logo from "../assets/rocket.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div>
      <header>
        <img src={logo} alt="" />
        <h1>
          <span>to</span>
          <span>do</span>
        </h1>
      </header>
      
    </div>
  );
}
