import { useState } from "react";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { PlusCircle } from "phosphor-react";
import styles from "./App.module.css";
import { Task } from "./components/Task";
import { NoTask } from "./components/NoTask";

export function App() {
  const [tasks, setTasks] = useState([
    { content: "Arrumar a cama", isChecked: false },
    { content: "Lavar a louça", isChecked: false },
    { content: "Fazer a task", isChecked: false },
  ]);
  const [newTask, setNewTask] = useState("");
  function handleNewTask() {
    setNewTask({ content: event.target.value, isChecked: false });
  }
  function handleCreateNewTask() {
    setTasks([...tasks, newTask]);
  }
  function onDelete(taskToDelete) {
    const arrayWithoutDeletedTask = tasks.filter((task) => {
      return task.content !== taskToDelete;
    });
    setTasks(arrayWithoutDeletedTask);
  }
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <label htmlFor="search" className={styles.srOnly}>
            Adicione uma nova tarefa
          </label>
          <input
            id="search"
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTask}
          />
          <button onClick={handleCreateNewTask}>
            Criar
            <PlusCircle size={16} />
          </button>
        </div>

        <div className={styles.filters}>
          <Button text={"Tarefas criadas"} count={tasks.length} />
          <Button
            text={"Concluídas"}
            color={"purple"}
            count={`${tasks.length} de ${tasks.length}`}
          />
        </div>
        <main className={styles.contentWrap}>
          {tasks.length === 0 ? (
            <NoTask />
          ) : (
            tasks.map((task) => {
              return (
                <Task
                  key={task.content}
                  content={task.content}
                  onDeleteTask={onDelete}
                  isChecked={task.isChecked}
                />
              );
            })
          )}
        </main>
      </div>
    </>
  );
}
