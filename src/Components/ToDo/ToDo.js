import { useContext } from 'react';
import './ToDo.css'
import ToDoItems from '../ToDoItems/ToDoItems';
import ToDoContext from '../../Context/ToDoContext';
const ToDo = () => {
    const ctx = useContext(ToDoContext)
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return ( 
        <main className='todoApp'>
            <h1>#todo</h1>
            <div className="app">
                <nav className='navBar'>
                    <ul className="nav">
                        <li onClick={()=>ctx.handleFilter('all')} className={ctx.currentTab === 'all' ? 'myTab currentTab' : 'myTab'}>All</li>
                        <li onClick={()=>ctx.handleFilter('active')} className={ctx.currentTab === 'active' ? 'myTab currentTab' : 'myTab'}>Active</li>
                        <li onClick={()=>ctx.handleFilter('completed')} className={ctx.currentTab === 'completed' ? 'myTab currentTab' : 'myTab'}>Completed</li>
                    </ul>
                </nav>
                <div className="myForm">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="formElement">
                            <input type="text" onChange={ctx.handleChange} value={ctx.todoInput} placeholder='add details' />
                        </div>
                        <div className="formAction">
                            <button type='button' onClick={()=>ctx.handleAdd(ctx.todoInput)}>Add</button>
                        </div>
                    </form>    
                </div>    
            </div>
            <section className="todoItems">
                <ToDoItems/>
            </section>
        </main>
    );
}

export default ToDo;