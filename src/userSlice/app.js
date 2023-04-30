import {createSlice } from '@reduxjs/toolkit';

let initialState = {
    value:1
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
        }
    }
})


export const {increment,decrement} = userSlice.actions;
export default userSlice.reducer;