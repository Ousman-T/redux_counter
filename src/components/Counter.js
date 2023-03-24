// selector reads data, dispatch sends out actions
import {useSelector, useDispatch} from 'react-redux';
// actions
import { increment, decrement, increaseByAmmount } from '../features/counter/counterSlice';

function Counter(){
    // selector reading data
    const count = useSelector(state => state.counter.value)
    // dispatch actions
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Counter</h1>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <br/>
                <button onClick={() => dispatch(increaseByAmmount())}>increaseByAmmount</button>
            </div>
        </div>
    )
}

export default Counter;