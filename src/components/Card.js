import "./Card.css"
import { useState, useEffect } from "react";
import { RiDeleteBin6Line } from 'react-icons/ri'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md'

export const Card = (props) => {
    const [taskList, setTaskList] = useState([]);
    const [isCompleted, setIsCompleted] = useState(false);

    const AddTask = (day) => {
        console.log(`Task added for ${props.day}`);
        const inputTask = prompt(`Please enter task for ${day}`);
        let newTaskList = [...taskList,{taskId:taskList.length === 0 ? 1 : taskList[taskList.length - 1].taskId + 1, taskName:inputTask, day:props.day, isCompleted:isCompleted}]
        setTaskList(newTaskList)
        // localStorage.setItem("tasks", JSON.stringify(newTaskList))
        console.log(taskList)
    }

    const deleteTask = (id) => {
        console.log(id);
        setTaskList(taskList.filter((task) => task.taskId !== id && task.day !== taskList.day));
        console.log(taskList);
    }

    const updateTask = (name, id, day, status) => {
        setTaskList(taskList.map(task => {
            if(task.taskId === id){
                return { ...task, isCompleted: !status}
            }else{
                return task
            }
        }))
    }

    return(
        <div className="card">
            <div className="card-title" style={{backgroundColor:props.color}}>
                <div className="card-day">{props.day}</div>
                <div className="card-add" onClick={() => {AddTask(props.day)}}>+</div>
            </div>
            <div className="card-body" day={props.day} style={{border:`solid 2px ${props.color}`, height:250}}>
            {taskList.map((task) => {
                console.log(taskList)
            return task.day === props.day ?
            <div className='task-item'>
                <div className="task-item-name" style={{textDecoration:(task.isCompleted ? "line-through" : "none")}}>
                <div className="completed-btn" onClick={() => {updateTask(task.taskName, task.taskId, task.day, task.isCompleted)}}>
                {isCompleted ?
                <MdOutlineCheckBox/>:
                <MdOutlineCheckBoxOutlineBlank/> 
                }
                </div>
                {task.taskName}
                </div>
                <RiDeleteBin6Line className="delete-btn" onClick={() => deleteTask(task.taskId)}/>
                </div> : null})}
            </div>  
        </div>
    )
}