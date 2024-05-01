import React from 'react';
import styles from './Todoitem.module.css';

const Todoitem = (props) => {
  const {item,upShow,downShow,id,updateCheckbox,updateDeleteItem,checked}=props;

  const updateCheckboxHandler=(ev)=>{
    // console.log(ev.target.parentElement.id);
    let val=ev.target.className;
    if(val=="checkbox"){
      updateCheckbox(id);
    }
    if(val=="deleteItem"){
      updateDeleteItem(id);
    }
  }

  let strikeOrNot=checked ? 'line-through': '';

  return (
    <div id={id} className={styles.TodoItem} onClick={updateCheckboxHandler}>
      <span className="leftItem">
        <input className="checkbox" type="checkbox"></input>
        <span style={{'textDecoration': strikeOrNot}}>{item.name}</span>
      </span>
      {/* {upShow && <button className="upArrow">⬆</button>}
      {downShow && <button className="downArrow">⬇</button>} */}
      <button className="deleteItem">🗑️</button>
    </div>
  )
}

export default Todoitem