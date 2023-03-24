import  { createSlice } from "@reduxjs/toolkit"
// create a slice for the counter state, reducer, and actions
export const counterSlice = createSlice({
    name:'counter',
    initialState: {value: 0},
    reducers: {
        increment:((state) => {
            state.value += 1;
        }),
        decrement: (state) => {
            state.value -= 1
        },
        increaseByAmmount: (state, action) =>{
            state.value += 5
        }
    }
})
// exporting actions
export const {increment, decrement, increaseByAmmount} = counterSlice.actions
// exporting the reducer
export default counterSlice.reducer