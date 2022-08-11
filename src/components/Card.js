import "./Card.css"
import { useState, useEffect } from "react";
import { RiDeleteBin6Line } from 'react-icons/ri'

export const Card = (props) => {
 
    const [taskList, setTaskList] = useState([]);

    const AddTask = (day) => {
        console.log(`Task added for ${props.day}`);
        const inputTask = prompt(`Please enter task for ${day}`);
        setTaskList([...taskList,{taskId:taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1, taskName:inputTask, day:props.day}]);
        console.log(taskList);
    }

    const deleteTask = (id) => {
        setTaskList(taskList.filter((task) => task.taskId !== id && task.day !== taskList.day));
    }

    return(
        <div className="card">
            <div className="card-title" style={{backgroundColor:props.color}}>
                <div className="card-day">{props.day}</div>
                <div className="card-add" onClick={() => {AddTask(props.day)}}>+</div>
            </div>
            <div className="card-body" day={props.day} style={{border:`solid 2px ${props.color}`, height:250}}>
            {taskList.map((task) => {
            return task.day === props.day ?
            <div className='task-item'>
                <div className="task-item-name">
                <input type="radio"/>{task.taskName}
                </div>
                <RiDeleteBin6Line className="delete-btn" onClick={() => deleteTask(task.taskId)}/>
                </div> : null})}
            </div>  
        </div>
    )
}