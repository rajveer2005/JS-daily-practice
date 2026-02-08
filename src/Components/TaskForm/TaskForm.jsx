import React from 'react'
import "./TaskForm.css"


const TaskForm = () => {
  return (
        <header className='app-header'>
            <form>
                <div>
                <input type="text " 
                placeholder='enter task details' 
                className='task-input' />
                </div>
                <div className='task_form_bottom'>
                <div className='tag'>
                    <button type='button' className='tag'>DEV</button>
                    <button type='button' className='tag'>DEV</button>
                    <button type='button' className='tag'>DEV</button>
                </div>
                <div className='task_status'>
                    <select>
                        <option value="ready for develpomenyt">ready for develpomenyt</option>
                        <option value="in progress">in progress</option>
                        <option value="ready for test">ready for test</option>
                        <option value="closed">closed</option>
                    </select>
                    <button className='task-submit' type='submit'>A++</button>
                </div>
                </div>
            </form>
        </header>
  )
}

export default TaskForm
