import React from 'react';
import './TodoList.css';
import {TodoTasks} from './TodoTasks.js';

export class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={tasks: []};
        this.addTask=this.addTask.bind(this);
        this.deleteTask=this.deleteTask.bind(this);
    };
    addTask(event){
        var newTask=[{taskName: this._inputElement.value,key: Date.now()}];
        //this.setState({tasks: this.state.tasks.concat(newTask)});
        this.setState((prevState)=>{
            return({tasks: prevState.tasks.concat(newTask)});
        });
        this._inputElement.value="";
        event.preventDefault();
    };
    deleteTask(key){
        var updatedTasks=this.state.tasks.filter((task)=>{
            return task.key!==key;
        });
        this.setState({tasks: updatedTasks});
    }
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <h2 className="main-heading">Todo-Do List</h2>
                    <form onSubmit={this.addTask}>
                        <input type="text" placeholder="Write a Task.." ref={(a)=>this._inputElement=a}></input>
                        <button type="submit">Add Task</button>
                    </form>
                </div>
                <TodoTasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
            </div>
        );
    };
};