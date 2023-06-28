import { useContext } from "react";
import React from "react";
import ToDoContext from "../../Context/ToDoContext";
import './ToDoItems.css'
import {AiFillDelete} from 'react-icons/ai'
const ToDoItems = () => {
    const ctx = useContext(ToDoContext)
    return ( 
        <React.Fragment>
            <ul className="myItems">
                {ctx.myItems.length === 0 ? <h2 className="defaultStatement">Add a Task!</h2>:ctx.myItems.map(item=>{
                    return(
                        <li className="todoTask" key={item.id}>
                            <div className="left">
                                <input onChange ={(e)=>ctx.upDateItem(e, item)} type="checkbox" checked={item.status === 'completed'}/>
                                <p className={item.status === 'completed' ? "checked myTask" : "myTask"}>{item.name}</p>
                            </div>
                            {ctx.currentTab === 'completed' &&
                                <div className="right">
                                    <AiFillDelete onClick={()=>ctx.deleteTask(item.id)} color="gray" size={25} cursor={'pointer'}/>
                                </div>
                            }
                        </li>
                    )
                })}
            </ul>
            {ctx.currentTab === 'completed' &&
                <button className="clear" onClick={ctx.clear}>
                    <AiFillDelete size={15} color="white"/>
                    delete all
                </button>
            }
        </React.Fragment>
    );
}
export default ToDoItems;