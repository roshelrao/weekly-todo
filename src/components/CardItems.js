import { RiDeleteBin6Line } from 'react-icons/ri'

export const CardItems = (props) => {
        return (
            props.inputData.map((task) => {
                return task.day === props.divDay ?
                <div className='task-item'>
                    <div className="task-item-name">
                    <input type="radio"/>{task.taskName}
                    </div>
                    <RiDeleteBin6Line/>
                </div> : null
            })
        )

}