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

export const sendCount = (count) => {
  return async (dispatch) => {
    const sendData = async () => {
      const response = await fetch(process.env.REACT_APP_FIREBASE, {
        method: "PUT",
        body: JSON.stringify(count),
      });

      if (!response.ok) {
        throw new Error("Sending Data Failed");
      }
    };

    try {
      await sendData();
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};
