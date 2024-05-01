import React from 'react';
import Todoitem from '../Todoitem/Todoitem';
import './Todolist.css';

const Todolist = (props) => {
    const {todos}=props;
    return (
      <div>
        {todos.map((task,indx)=>{
            return <Todoitem
              item={task}
              key={task.id}
              id={task.id}
              // upShow={indx==0? false: true}
              // downShow={indx==todos.length-1? false: true}
              updateCheckbox={props.updateCheckbox}
              updateDeleteItem={props.updateDeleteItem}
              checked={task.checked}
            />
        })}
      </div>
    )
}

export default Todolist