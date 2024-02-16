import React, { useState } from "react";
import styles from "./Checkbox.module.css";
import check from "../assets/check.svg";

export function CheckBox() {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  return (
    <label className={styles.checkboxContainer}>
      <input type="checkbox" checked={checked} onChange={handleChecked} />
      <span className={styles.checkmark}>
        {checked && <img src={check} className={styles.checkboxImage} />}
      </span>
    </label>
  );
}
