import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CssBaseLine from "@mui/material/CssBaseLine"
import TodoList from "./TodoList"
import TodoForm from './TodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseLine />
      <h1>Todos</h1>
      <TodoList />
    </>
  )
}

export default App
