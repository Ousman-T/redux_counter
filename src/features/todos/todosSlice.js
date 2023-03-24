import { createSlice } from "@reduxjs/toolkit"

export const todosSlice = createSlice({
    name:'todos',
    initialState:{
        todosData: [{id:1, text: "Learn Redux"}],
    },
    reducers: {
        addTodo: (state, action) => {
            console.log(action);
            state.todosData.push(action.payload)
        }
    }
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;