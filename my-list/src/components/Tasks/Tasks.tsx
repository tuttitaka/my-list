import React, { FormEvent, useState } from "react";
import styles from "./styles.module.scss";


interface task {
    title : string;
    done : boolean;
    id : number;
}

export const Tasks: React.FC = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [task, setTask] = useState([] as task[]);

    function handleSubmitAddTask(event: FormEvent) {
        event.preventDefault()
        console.log(taskTitle);

        if (taskTitle.length < 3){
            alert("Não é possivel adicionar uma tarefa com menos de 3 letras.");
            return
        }

        setTask([
            ...task,
            { id:1 ,title: taskTitle, done: false},
        ])
        setTaskTitle("");

    }



    return (
        <section className={styles.container}>
            <form onSubmit={handleSubmitAddTask} >
                <div>
                <label htmlFor="task-title">Adicionar Tarafe</label>
                <input 
                    value={taskTitle} 
                    onChange= {(event) => setTaskTitle(event.target.value)}
                    type="text" 
                    id="task-title" 
                    placeholder="Titulo da tarefa" 
                />
                </div>
                <button type="submit">Adicionar tarefa</button>
            </form>

            <ul>
                {task.map(task =>{
                    return (
                        <li>
                            <input type="checkbox" id={`task-${task.id}`} />
                            <label htmlFor={`task-${task.id}`}>{task.title}</label>
                        </li>   
                    )
                })}
            </ul>
        </section>
    )
}