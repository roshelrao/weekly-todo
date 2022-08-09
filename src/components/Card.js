import "./Card.css"
import { CardItems } from "./CardItems";
import { useState } from "react";

export const Card = (props) => {

    const [taskList, setTaskList] = useState([]);

    const AddTask = (day) => {
        console.log(`Task added for ${props.day}`);
        const inputTask = prompt(`Please enter task for ${day}`);
        setTaskList(...taskList, {taskName:inputTask, day:props.day});
        console.log(taskList);
    }

    return(
        <div className="card">
            <div className="card-title" style={{backgroundColor:props.color}}>
                <div className="card-day">{props.day}</div>
                <div className="card-add" onClick={() => {AddTask(props.day)}}>+</div>
            </div>
            <div className="card-body" day={props.day} style={{border:`solid 2px ${props.color}`, height:250}}>
                <CardItems inputData = {taskList} divDay= {props.day}/>
            </div>
        </div>
    )
}