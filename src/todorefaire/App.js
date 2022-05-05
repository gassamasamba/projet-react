import React from 'react'
import { AddTodoButton, InputText, RemoveTodoButton, Todo, TodoInput, TodoLabel } from './styled'

export default function App() {
    return(
    <>
        <TodoInput>
        <InputText />
        <AddTodoButton>
          <i className="fa-solid fa-circle-plus"></i>
        </AddTodoButton>
        </TodoInput>
        <Todo done={true}>
          <TodoLabel></TodoLabel>
          <RemoveTodoButton>
            <i class="fa-solid fa-trash"></i>
          </RemoveTodoButton>
        </Todo>
        
        </>
        )
}