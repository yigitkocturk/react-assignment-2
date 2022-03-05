import { useState, useEffect } from 'react';

const initialFormValues = { todolist:"", complete:false }

function Section( {addTodos, todos} ) {

    const [form, setForm] = useState(initialFormValues)

    const onChangeInput = (e) => {
          setForm({ ...form, [e.target.name]: e.target.value})
          }

          
const onSubmit = (e) => {
  e.preventDefault()
  
  if(form.todolist === ''){
    alert("please do not leave the list blank! :)")
    return false; 
  }
  addTodos( [...todos, form] )
  setForm(initialFormValues)
};


useEffect(()=>{
  console.log(todos);
},[todos])

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])

  return (

    <header className="header">

      <h1 className="todos">todos</h1>
    
    <form 
      className="shadowinputs" 
      onSubmit={onSubmit}>

      <input 
        className="new-todo bord"  
        name="todolist" 
        value={form.todolist} 
        placeholder="What needs to be done?"
        onChange={onChangeInput} 
        autoFocus
        />
      <input 
        className="sub" 
        type="submit" 
        value="Submit">
      </input>
    </form>

      </header>
      );
}

export default Section;
