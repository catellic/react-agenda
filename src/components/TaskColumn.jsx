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

        <section className={`task-column flex-vertical flex-1  max-w-sm rounded p-8 text-center ${column} ${column === 'doing' ? ' bg-blue-400 ' : 'bg-blue-200'}`}>
            <h2 className='font-bold rounded p-2 m-2'>{column.toUpperCase()}</h2>
            {
                filteredTasks.map(task => (

                    <div key={task.id} className={`task-card w-full bg-blue-100 rounded flex m-2 p-2 justify-between items-center hover:shadow-xl hover:scale-105 transition-all duration-300`}>
                        <section className={task.priority === 'high'
                            ? `font-medium p-2 rounded-lg shadow-md border bg-red-300`
                            : `p-2 rounded-lg shadow-md border bg-green-200`}>

                            {task.priority}
                        </section>
                        <div className='task-text m-1 p-1 overflow-x-auto whitespace-wrap'>
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
            }} className='flex gap-2 items-center items-center m-2'>
                <input value={inputText} onChange={e => setInputText(e.target.value)} placeholder="Note's text..." className="p-2 rounded flex-1 text-center bg-gray-100" />
                <select value={inputPriority} onChange={e => setInputPriority(e.target.value)} className='p-2 rounded'>
                    <option value='low'>Low</option>
                    <option value="high">High</option>
                </select>
                <button className="bg-blue-500 font-medium text-white p-2 rounded hover:bg-white hover:text-blue-500 hover:shadow-xl hover:scale-130 transition-all duration-300">+</button>
            </form>
        </section>
    )
}

export default TaskColumn