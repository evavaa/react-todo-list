import { useState } from 'react'
import './App.css'
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from "./TodoList"
import NavBar from "./NavBar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <NavBar />
      
      <TodoList />
    </>
  )
}

export default App
