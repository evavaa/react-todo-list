import { useState } from 'react'
import './App.css'
import CssBaseLine from "@mui/material/CssBaseLine"
import TodoList from "./TodoList"
import NavBar from "./NavBar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseLine />
      <NavBar />
      
      <TodoList />
    </>
  )
}

export default App
