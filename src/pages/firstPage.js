import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement,incrementByamount } from '../userSlice/app';
import { Link } from 'react-router-dom';

const FirstPage = () => {
    let [num,setNum] = useState(0)
    const count = useSelector((state)=> state.userReducer.value)
    const dispatch = useDispatch()
  return (

    <>
        <h1>This is the next page</h1>
        <h3>{count}</h3>
        <button onClick={()=> dispatch(increment())}>increment</button>
        <button onClick={()=> dispatch(decrement())}>decrement</button>
        <input value={num} onChange={(e)=> setNum(e.target.value)}></input>
        <button onClick={()=>dispatch(incrementByamount(num))}>Submit input</button>
        <div>
          <Link to="/next">
          <button>SecondPage</button></Link>
        </div>
    </>
  )
}

export default FirstPage