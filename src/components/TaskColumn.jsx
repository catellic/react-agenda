import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext"
import { useState } from "react";

function TaskColumn({ column }) {

    const { tasks, addTask, deleteTask, moveTask } = useContext(TaskContext)

    const filteredTasks = tasks.filter(
        task => task.status === column
    )

    const [inputText, setInputText] = useState('')
    const [inputPriority, setInputPriority] = useState('low')

    return (

        <section className={`task-column ${column} ${column === 'doing' ? 'flex-vertical m-4 p-2 bg-blue-400 rounded' : 'flex-vertical m-4 p-2 bg-blue-200 rounded'}`}>
            <h2 className='font-bold rounded'>{column.toUpperCase()}</h2>
            {
                filteredTasks.map(task => (

                    <div key={task.id} className={`task-card bg-blue-100 border border-gray-500 rounded flex m-4 p-2 justify-between items-center hover:shadow-xl hover:scale-110 transition-all duration-300`}>
                        <section className={task.priority === 'high'
                            ? `high-priority-task font-medium p-2 rounded-lg shadow-md border bg-red-300`
                            : `low-priority-task p-2 rounded-lg shadow-md border bg-green-200`}>

                            {task.priority}
                        </section>
                        <div className='task-text'>
                            {task.text}
                        </div>
                        <select value={task.status} onChange={e => moveTask(task.id, e.target.value)} className='rounded p-1'>
                            <option value='todo'>To do</option>
                            <option value='doing'>Doing</option>
                            <option value='done'>Done</option>
                        </select>
                        <button onClick={() => deleteTask(task.id)} className='border text-red-500 hover:text-white hover:bg-red-500 w-8 h-8 rounded-full pl-1 pr-1 ml-2 mr-1'>X</button>
                    </div>
                ))
            }
            <form onSubmit={e => {
                e.preventDefault()
                addTask(inputText, inputPriority, column)
                setInputText('')
                setInputPriority('low')
            }} className='flex gap-2 items-center mt-2'>
                <input value={inputText} onChange={e => setInputText(e.target.value)} placeholder="Note's text..." className="p-2 rounded flex-1 text-center bg-gray-100" />
                <select value={inputPriority} onChange={e => setInputPriority(e.target.value)} className='p-2 rounded'>
                    <option value='low'>Low</option>
                    <option value="high">High</option>
                </select>
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add note</button>
            </form>
        </section>
    )
}

export default TaskColumn