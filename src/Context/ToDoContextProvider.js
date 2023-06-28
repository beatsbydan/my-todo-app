import ToDoContext from "./ToDoContext";
import { useEffect, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
const ToDoContextProvider = (props) => {
    const [myItems, setMyItems] = useLocalStorage('todo',[])
    const [myFilteredItems, setMyFilteredItems] = useState([])
    const [todoInput, setTodoInput] = useState('')
    const [currentTab, setCurrentTab] = useState('all')
    const handleChange = (e) => {
        setTodoInput(e.target.value)
    }
    const handleAdd = (task) => {
        if(todoInput !== ''){
            let whatToDo = {
                id: Math.random(),
                name: task,
                status: 'active'
            }
            setTodoInput('')
            setMyItems((prev)=>{
                return [...prev, whatToDo]
            })    
        }
    }
    useEffect(()=>{
        setMyFilteredItems([...myItems])
        setCurrentTab('all')
    },[myItems])
    const deleteTask = (id) => {
        const remainingItems = myItems.filter(task=>{
            return task.id !== id
        })
        setMyItems(remainingItems)
    }
    const clearCompleted = () => {
        const remainingItems = myItems.filter(item=>{
            return item.status !== 'completed'
        })
        setMyItems(remainingItems)
        setCurrentTab('all')
    }
    const handleFilter = (category) => {
        setCurrentTab(category)
        if(category === "all"){
            setMyFilteredItems([...myItems])
        }
        else{
            const currentItems = myItems.filter(item=>{
                return item.status === category
            })
            setMyFilteredItems(currentItems)
        }        
    }
    const upDateItem = (e, item) => {
        if(e.target.checked){
            myItems[myItems.indexOf(item)].status = 'completed'
        }
        else{
            myItems[myItems.indexOf(item)].status = 'active'
        }
        setMyItems([...myItems])
    }
    const updatedContext = {
        myItems: myFilteredItems,
        todoInput: todoInput,
        currentTab: currentTab,
        handleChange: handleChange,
        handleFilter: handleFilter,
        handleAdd: handleAdd,
        upDateItem: upDateItem,
        deleteTask: deleteTask,
        clear: clearCompleted
    }
    return ( 
        <ToDoContext.Provider value={updatedContext}>
            {props.children}
        </ToDoContext.Provider>
    );
}
export default ToDoContextProvider;