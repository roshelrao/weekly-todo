export const CardItems = (props) => {
        return (
            props.inputData.day === props.divDay ? <div><input type="radio"/>{props.inputData.taskName}</div> : null
        )

}