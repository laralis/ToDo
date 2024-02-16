import { useState } from "react";
import { CheckBox } from "./CheckBox";
import styles from "./Task.module.css";
import { Trash, Check } from "phosphor-react";
export function Task({ content, onDeleteTask, isChecked }) {
  const [taskDone, setTaskDone] = useState([]);

  function handleDeletedTask() {
    onDeleteTask(content);
  }
  return (
    <div className={styles.taskWrap}>
      <CheckBox />
      <p>{content} </p>
      <button onClick={handleDeletedTask}>
        <Trash size={13} />
      </button>
    </div>
  );
}
