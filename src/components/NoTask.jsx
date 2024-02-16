import Clipboard from "../assets/Clipboard.svg";
import styles from "./NoTask.module.css";
export function NoTask() {
  return (
    <div className={styles.emptyContainer}>
      <img src={Clipboard} alt="Uma prancheta de anotações" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
