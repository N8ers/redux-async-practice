// imports
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// store
import {
  fetchCount,
  // sendCount
} from "./store/countActions";

// components
import Card from "./components/Card/Card";

// styles
import "./App.scss";

let isInitialLoad = true;

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.count.count);

  useEffect(() => {
    dispatch(fetchCount());
  }, [dispatch]);

  // useEffect(() => {
  //   if (isInitialLoad) {
  //     isInitialLoad = false;
  //     return;
  //   }

  //   dispatch(sendCount(count));
  // }, [dispatch, count]);

  // useEffect(() => {
  //   if (isInitialLoad) {
  //     isInitialLoad = false;
  //     return;
  //   }

  //   dispatch(sendCartData(cart));
  // }, [cart, dispatch]);

  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
