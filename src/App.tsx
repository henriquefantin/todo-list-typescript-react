import { useState } from 'react'

// CSS
import styleApp from './App.module.css'

// Components
import Footer from './components/Footer'
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Modal from './components/Modal'

// Interfaces
import type { ITask } from './interfaces/Task'

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      })
    )
  }

  const hideShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  }

  const editTask = (task: ITask): void => {
    hideShowModal(true);
    setTaskToUpdate(task);
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty }
    const updatedItens = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItens)
    hideShowModal(false);
  }

  return (
    <>
      <Modal children={
        <TaskForm
          btnText='Editar Tarefa'
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask}
        />}
      />
      <Header />
      <main className={styleApp.main}>
        <div>
          <h2>O que vai ser feito hoje?</h2>
          <TaskForm
            btnText="Adicionar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Sua lista de tarefas</h2>
          <TaskList
            taskList={taskList}
            handleEdit={editTask}
            handleDelete={deleteTask}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
