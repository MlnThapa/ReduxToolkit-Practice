import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from '../userSlice/app';
import { Link } from 'react-router-dom';

const FirstPage = () => {
    const count = useSelector((state)=> state.userReducer.value)
    const dispatch = useDispatch()
  return (
    <>
        <h1>This is the next page</h1>
        <h3>{count}</h3>
        <button onClick={()=> dispatch(increment())}>increment</button>
        <button onClick={()=> dispatch(decrement())}>decrement</button>
        <div>
          <Link to="/next">
          <button>SecondPage</button></Link>
        </div>
    </>
  )
}

export default FirstPage