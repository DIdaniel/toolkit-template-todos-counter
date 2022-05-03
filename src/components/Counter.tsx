import React, {memo} from 'react';
import {selectCounter, useAppDispatch, useAppSelector} from "../redux";
import {decrement, increment} from "../redux/store";

const Counter= () => {

  const dispatch = useAppDispatch();
  const number = useAppSelector( selectCounter);

  const incrementHandler = () => {
    dispatch(increment())
  }

  const decrementHandler = () => {
    dispatch(decrement())
  }

  return (
        <div>
            <h1>{number}</h1>
            <div>
               <button onClick={incrementHandler}>+</button>
               <button onClick={decrementHandler}>-</button>
            </div>
        </div>
    )
}

export default memo(Counter);
