import { useState } from "react";
import { Header } from "./components/Header";
import { Button } from "./components/Button";
import { PlusCircle } from "phosphor-react";
import styles from "./App.module.css";
import { Task } from "./components/Task";
import { NoTask } from "./components/NoTask";

export function App() {
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
          />
          <button>
            Criar
            <PlusCircle size={16} />
          </button>
        </div>

        <div className={styles.filters}>
          <Button text={"Tarefas criadas"} />
          <Button text={"Concluídas"} color={"purple"} />
        </div>
        <main className={styles.contentWrap}>
          <Task />
          <Task />
        </main>
      </div>
    </>
  );
}
