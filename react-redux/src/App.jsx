import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementby5,
} from './features/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  return (
    <div
      style={{ display: "flex", gap: "20px", alignItems: "center", }}>
      <h1>{count}</h1>

      

        <button  onClick={() => dispatch(increment())}>
          + by 1
        </button>

        <button onClick={() => dispatch(decrement())}>
          - by 1
        </button>

        <button onClick={() => dispatch(incrementby5())}>
          + by 5
        </button>
    </div>
  )
}
export default App