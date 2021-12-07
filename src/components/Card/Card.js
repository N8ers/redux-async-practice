import { useSelector, useDispatch } from "react-redux";

import { countActions } from "../../store/countSlice";

import Button from "../UI/Button";

function Card() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count.count);

  const addToCounter = () => {
    dispatch(countActions.increment());
  };

  const subtractFromCounter = () => {
    dispatch(countActions.decrement());
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <Button title="+" color="primary" handleClick={addToCounter} />
      <Button title="-" color="secondary" handleClick={subtractFromCounter} />
    </div>
  );
}

export default Card;
