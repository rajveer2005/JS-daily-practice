import React from 'react'
import "./App.css"
import TaskForm from './Components/TaskForm/TaskForm'

const App = () => {
  return (
    <div className='app'>
      <h1>JIRA BOARD</h1>
      <TaskForm/>
      <main className='app-main'>
        <section className='task-columnn'> section 1 </section>
        <section className='task-columnn'> section 1 </section>
        <section className='task-columnn'> section 1 </section>
        <section className='task-columnn'> section 1 </section>

      </main>
    </div>
  )
}

export default App
