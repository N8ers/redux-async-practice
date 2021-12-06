import Button from "../UI/Button";

function Card() {
  const addToCounter = () => {
    console.log("addToCounter");
  };

  const subtractFromCounter = () => {
    console.log("subtractFromCounter");
  };

  return (
    <div>
      <h2>Count: </h2>

      <Button title="+" color="primary" handleClick={addToCounter} />
      <Button title="-" color="secondary" handleClick={subtractFromCounter} />
    </div>
  );
}

export default Card;
