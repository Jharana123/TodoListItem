const Button = (props) => {
  return (
    <div>
      <button onClick={() => props.statusState("all")}>All</button>
      <button onClick={() => props.statusState("active")}>Active</button>
      <button onClick={() => props.statusState("completed")}>Completed</button>
    </div>
  );
};
export default Button;
