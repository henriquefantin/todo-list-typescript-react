import React from 'react'

// CSS
import styles from './TaskList.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Interfaces
import type { ITask } from '../interfaces/Task'

interface Props {
  taskList: ITask[]
  handleDelete(id: number): void
  handleEdit(task: ITask): void
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {
        taskList.length > 0 ? (
          <p>Existem {taskList.length} tarefas na lista</p>
        ) : (
          <p>Não existem tarefas na lista</p>
        )
      }
      {
        taskList.length > 0 ? (
          taskList.map((task) => (
            <div key={task.id} className={styles.task}>
              <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div className={styles.actions}>
                <i
                  className="bi bi-pencil"
                  aria-label="Editar"
                  onClick={() => {handleEdit(task)}}
                ></i>
                <i
                  className="bi bi-trash"
                  aria-label="Excluir"
                  onClick={() => { handleDelete(task.id) }}
                ></i>
              </div>
            </div>
          ))
        ) : null
      }
    </>
  )
}

export default TaskList