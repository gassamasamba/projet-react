import react ,{ useState }from 'react'
import { AddTodoButton, InputText, RemoveTodoButton, Todo, Todobarre, TodoDelete, TodoFaire, TodoInput, TodoLabel } from './styled'


export default function App() {
    const [newTodo, setNewTodo] = useState('')
    const [todoList, setTodoList] = useState([
      'Faire les courses',
      'Acheter du pain',
      'Ranger la cuisine',
    ])
  
    const changeNewTodo = ev => {
      setNewTodo(ev.target.value)
    }
  
    const addTodo = () => {
      setTodoList([newTodo, ...todoList])
      setNewTodo('')
    }
    const removeTodo = index =>
    setTodoList(todoList.filter((todo, i) => i !== index))
    return(
        <>
        <TodoInput>
        <InputText value={newTodo} onChange={changeNewTodo} />
        <AddTodoButton onClick={addTodo}>
          <i className="fa-solid fa-circle-plus"></i>
        </AddTodoButton>
        </TodoInput>
        {todoList.map((todo, index) => (
        <Todo key={`todo-${index}`}>
          <TodoLabel>{todo}</TodoLabel>
          <RemoveTodoButton onClick={() => removeTodo(index)}>
            <i class="fa-solid fa-trash"></i>
          </RemoveTodoButton>
        </Todo>
         ))}
        
        </>
    )
}