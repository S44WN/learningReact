import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <labe htmlFor={props.input.id}>{props.label}</labe>
      <input {...props.input} />
    </div>
  );
};

export default Input;
