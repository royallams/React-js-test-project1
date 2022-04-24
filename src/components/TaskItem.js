import TaskDate from "./TaskDate";
import "./TaskItem.css"; 

 function TaskItem(props){
 
    // const month = props.date.toLocaleString('en-US',{month:'long'});
    // const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    // const year = props.date.getFullYear();
 	return (
        <div className="task-item">
            <TaskDate date={props.date}></TaskDate>
            <div className="task-item__description">
                <h2> {props.title}</h2>
                <div className="task-item__priority"> {props.priority} </div>
            </div>

        </div>
        );
 }



 export default TaskItem;