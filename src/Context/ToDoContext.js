import React from "react";

const ToDoContext = React.createContext({
    myItems: [],
    todoInput: '',
    currentTab: 'all',
    handleChange: ()=>{},
    handleFilter: ()=>{},
    handleAdd: ()=>{},
    upDateItem: ()=>{},
    deleteTask: ()=>{},
    clearDeleted: ()=>{}
})
export default ToDoContext