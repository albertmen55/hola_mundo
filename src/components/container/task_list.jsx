import React from 'react';
import {Task} from "../../models/task.class"
import {LEVELS} from "../../models/levels.enum";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('Cambiar estado de una tarea')
    }

    return (
        <div>
             <div>
                 <h1>
                     Your Tasks:
                 </h1>
             </div>
            {/*Aplicar un for/map para renderizar cada tarea*/}
            <TaskComponent task={defaultTask}>

            </TaskComponent>
        </div>
    );
};

TaskListComponent.propTypes = {

};

export default TaskListComponent;