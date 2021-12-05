import styles from "./Button.module.css";

function Button(props) {
  const { color, title, handleClick } = props;

  const clickHandler = () => {
    handleClick();
  };

  return (
    <button className={styles[color]} onClick={clickHandler}>
      {title}
    </button>
  );
}

export default Button;
