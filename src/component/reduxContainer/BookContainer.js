import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount } from '../counter/counterAction';

export default function BookContainer() {

  const dispatch=useDispatch();

    const num1=useSelector(state => state.increase.count);
    const num2=useSelector(state=>state.sum.num)
  return (
    <>
    <div>BookContainer {num1}</div>
    <div>Sum of : {num2}</div>
    <button className='btn btn-primary' onClick={()=>{dispatch(incrementCount())}}>Increase</button>
    <button className='btn btn-primary' onClick={()=>{dispatch(decrementCount())}}>Decrease</button>
    </>
  )
}
