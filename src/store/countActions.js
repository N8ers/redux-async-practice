import { countActions } from "./countSlice";

export const fetchCount = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(process.env.REACT_APP_FIREBASE);

      if (response.ok) {
        return response.json();
      } else {
        console.log("whoopsie!");
      }
    };

    try {
      const countData = await fetchData();
      dispatch(countActions.replaceCount(countData));
    } catch (error) {
      console.log("whoopsie! 2");
    }
  };
};

// export const sendCount = () => {
//   console.log("SEND COUNT");
// };
