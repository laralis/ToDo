import { useState } from "react";

import styles from "./Task.module.css";
import { Trash, Check } from "phosphor-react";

import check from "../assets/check.svg";
export function Task({
  content,
  onDeleteTask,
  isChecked,
  listTasksDone,
  unlistTaskUndone,
}) {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
    isChecked = !checked;

    if (isChecked == true) {
      listTasksDone(content);
    } else {
      unlistTaskUndone(content);
    }
  }
  function handleDeletedTask() {
    onDeleteTask(content);
  }

  return (
    <div className={styles.taskWrap}>
      <label className={styles.checkboxContainer}>
        <input type="checkbox" checked={checked} onChange={handleChecked} />
        <span className={styles.checkmark}>
          {checked && <img src={check} className={styles.checkboxImage} />}
        </span>
      </label>
      <p>{content} </p>
      <button onClick={handleDeletedTask}>
        <Trash size={13} />
      </button>
    </div>
  );
}
