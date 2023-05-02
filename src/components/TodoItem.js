import { useState } from "react";

const Todo = (props) => {
  const [data, setData] = useState("");
  const handleSubmit = () => {
    const tempObject = {
      id: Date.now(),
      todoItem: data,
      status: "active",
    };
    props.inputDataItem(tempObject);
    setData("");
  };

  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
export default Todo;
