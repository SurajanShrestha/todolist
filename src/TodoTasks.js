import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export class TodoTasks extends React.Component{
    constructor(props){
        super(props);
        this.listTasks=this.listTasks.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(event){
        var keyValue=parseInt(event.target.id);
        this.props.deleteTask(keyValue);
    }
    listTasks(){
        var tasksList=this.props.tasks.map((task)=>{
            return <li id={task.key} key={task.key} onClick={this.handleClick}>{task.taskName}</li>;
        });
        return tasksList;
    };
    render(){
        var tasksList=this.listTasks();
        return(                
            <div className="tasksList-container">
                <ul>
                    <FlipMove enterAnimation={"fade"} leaveAnimation={"elevator"}>
                        {tasksList}
                    </FlipMove>                    
                </ul>
            </div>
        );
    };
};

TodoTasks.propTypes={
    tasks: PropTypes.array
};