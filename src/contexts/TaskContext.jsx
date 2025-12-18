import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

const TaskContext = createContext()


function TaskProvider({ children }) {

    const [tasks, setTasks] = useState(() => {
        
        const saved = localStorage.getItem("tasks")

        return (saved 
            ? JSON.parse(saved)
            : [
                { id: uuidv4(), text: 'Welcome high task!', priority: 'high', status: 'todo' },
                { id: uuidv4(), text: 'Welcome low task!', priority: 'low', status: 'todo' }])
    })

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    },[tasks])


    function addTask(taskText, taskPriority, taskStatus) {
        const newTask = { id: uuidv4(), text: taskText, priority: taskPriority, status: taskStatus }
        setTasks([...tasks, newTask])
    }

    function deleteTask(taskId) {
        const updatedTasks = tasks.filter(
            task => task.id != taskId
        )
        setTasks(updatedTasks)
    }

    function moveTask(taskId, newStatus) {
        const updatedTasks = tasks.map(
            task => task.id === taskId ? { ...task, status: newStatus } : task
        )
        setTasks(updatedTasks)
    }


    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, moveTask }}>
            {children}
        </TaskContext.Provider>
    )
}
export default TaskProvider;
export { TaskContext };