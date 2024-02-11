import { createSlice,nanoid } from "@reduxjs/toolkit";



const initialState={todos:[{id:1,todo:"ddf"}]}
const todoSlice=createSlice(
    {
    name:"todo",
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            const todo={id:nanoid(), todo:action.payload}
            state.todos.push(todo)},
        
        removetodo:(state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updatetodo: (state, action) => {
            const { id, newTodo } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
              todoToUpdate.todo = newTodo;
            }
          },
    }
})
export const {addtodo,removetodo,updatetodo} = todoSlice.actions
export default todoSlice.reducer