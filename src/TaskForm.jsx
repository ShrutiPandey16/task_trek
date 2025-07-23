import React from 'react'

const TaskForm = () => {
  return (
      <div>
          <header className='app_header'>
              <form action="">
                  <input type="text" className='task_input' placeholder='Enter your task' />
                  <div className='task_form_bottom_line'>
                    <button className='tag'>HTML</button>
                    <button className='tag'>CSS</button>
                    <button className='tag'>JavaScript</button>
                    <button className='tag'>React</button>

                    <select className="task_status" id="">
                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                      
                    <button type='submit' className='task_submit'>+ Add task</button>  
                  </div>
              </form>
          </header>
    </div>
  )
}

export default TaskForm