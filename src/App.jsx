import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddTodos'
import Todos from './Components/Todos'
import { useSelector } from 'react-redux'


function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      {/* <div className="flex flex-wrap gap-y-3"> */}
       
                    {/* {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          > */}
                            <Todos  />
                          {/* </div>
                        ))} */}
{/*                       
                    </div> */}
    </>
  )
}

export default App
