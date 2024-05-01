import {React,useState,useEffect} from 'react';
import Todoinput from '../Todoinput/Todoinput';
import Todolist from '../Todolist/Todolist';
import {v4 as uuidv4} from 'uuid';
import './Todo.css';
import TodoHeading from '../TodoHeading/TodoHeading';

// const initialTodos=[
//     {name: 'Cricket', id: 1},
//     {name: 'Basketball', id: 2},
//     {name: 'Swimming', id: 3},
//     {name: 'Dance', id: 4},
// ];

const Todo = () => {
  let initialTodos=JSON.parse(localStorage.getItem('todos')) || [];
  const [todos,setTodos]=useState(initialTodos);

  useEffect(()=>{
    console.log("I am useEffect hook");
  },[todos]);

  const updateTodo=(newTask)=>{
    // setTodos([{name: newTask,id: uuidv4()},...todos]);
    let newTodo=JSON.parse(localStorage.getItem('todos')) || [];
    newTodo.unshift({name: newTask, id: uuidv4(), checked: false});
    localStorage.setItem('todos',JSON.stringify(newTodo))
    setTodos(newTodo);
  }

  const updateCheckbox=(id)=>{
    setTodos((prevState)=>
      prevState.map((item)=>{
        return item.id==id ? {name: item.name, id: item.id, checked: !item.checked} : item
      })
    )
    let newTodo=[];
    todos.map((t)=>{
      newTodo.push(t);
    })
    localStorage.setItem('todos',JSON.stringify(newTodo))
  }

  const updateDeleteItem=(id)=>{
    setTodos((prevState)=>
      prevState.filter((item)=>{
        return item.id==id? false: true
      })
    )
    let newTodo=[];
    todos.map((t)=>{
      newTodo.push(t);
    })
    localStorage.setItem('todos',JSON.stringify(newTodo))
  }

  // Yeh neeche wala sahi nahi hai krna
  // const newTodo=todos;
  // newTodo.push(newTask);
  // setTodos(newTodo);
  // Yeh neeche wala sahi hai karna
  // const newTodo=[];
  // todos.map((i)=>{
  //   newTodo.push(i);
  // })
  // newTodo.push(newTask);
  // setTodos(newTodo);

  return (
    <div className='todoComp'>
        <TodoHeading />
        <Todoinput updateTodo={updateTodo}/>
        <Todolist updateCheckbox={updateCheckbox} updateDeleteItem={updateDeleteItem} todos={todos}/>
        {/* <div className="TodoItem">
          Random text to see styling
        </div> */}
    </div>
  )
}

export default Todo