import {React,useState} from 'react';
import './Todoinput.css';

const Todoinput = (props) => {
  const {updateTodo}=props;
  const [newtask,setNewtask]=useState("");

  const inputChangeHandler=(ev)=>{
    // console.log(ev.target.value);
    setNewtask(ev.target.value);
  }

  const btnClickHandler=()=>{
    updateTodo(newtask);
    setNewtask("");
  }

  return (
    <div>
        <input
          className='inputComp'
          onChange={inputChangeHandler}
          placeholder="Add Task"
          value={newtask}
        >
        </input>
        <button className='buttonComp' onClick={btnClickHandler}>Add</button>
    </div>
  )
}

export default Todoinput