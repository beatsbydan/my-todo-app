import './App.css';
import ToDo from './Components/ToDo/ToDo';
import ToDoContextProvider from './Context/ToDoContextProvider';

function App() {
  return (
    <ToDoContextProvider>
      <div className="App">
        <ToDo/>
      </div>
    </ToDoContextProvider>

  );
}

export default App;
