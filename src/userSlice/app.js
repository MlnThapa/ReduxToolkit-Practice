import {createSlice } from '@reduxjs/toolkit';

let initialState = {
    value:0
}

export const userSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        
        decrement: (state)=>{
            state.value -=1;
        },
        incrementByamount:(state,action)=>{
            state.value += Number(action.payload)
        }
    }
})


export const {increment,decrement,incrementByamount} = userSlice.actions;
export default userSlice.reducer;