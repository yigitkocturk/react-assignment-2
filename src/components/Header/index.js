import { useState } from 'react'; 
import './style.css' 
import Section from './Section'; 
import Footer from './Footer'; 

function Todos() {

const [todos, setTodos] = useState([
        {
            todolist: "Learn "
        },{
            todolist: "Earn"
        },{
            todolist: "Do Sport"
        },{
            todolist: "Sleep"
        },
])

const [activeTodos, setActiveTodos] = useState("All");
           
const removeTodos=(todolist)=>{
    const filtered = todos.filter(item=>item.todolist !== todolist)
    setTodos(filtered);
  } 

let filteredTodos = 
activeTodos === "All" ? todos 
: activeTodos === "Active" ? todos.filter(item => item.complete === false)
: todos.filter(item => item.complete === true)

const updateCompleteTodos=(todolist)=>{
    const index = todos.findIndex(item => item.todolist === todolist);
    const todo = todos.find(item => item.todolist === todolist);
    todo.complete = !todo.complete
    const newTodos = [...todos];
    newTodos[index] = todo;
    setTodos(newTodos);
  }

  return (

  <div id="todoapp">

        <Section 
        addTodos={setTodos} 
        todos={todos} 
        />

        <Footer 
        updateCompleteTodos={updateCompleteTodos} 
        activeTodos={activeTodos}  
        setActiveTodos={setActiveTodos} 
        removeTodos={removeTodos}  
        filteredTodos={filteredTodos} 
        addTodos={setTodos} 
        todos={todos} 
        />

  </div>
  )
}

export default Todos;