import Button from './Button'
import { useDispatch } from "react-redux";
import {
  incrementGood,
  incrementNeutral,
  incrementBad,
  reset,
} from "../features/feedbackSlice";

const Feedback = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button content={"Good"} onClick={() => dispatch(incrementGood())} />
      <Button content={"Neutral"} onClick={() => dispatch(incrementNeutral())} />
      <Button content={"Bad"} onClick={() => dispatch(incrementBad())} />
      <Button content={"Reset"} onClick={() => dispatch(reset())} />
    </div>
  )
}

export default Feedback