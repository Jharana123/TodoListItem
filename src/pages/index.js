import Todo from "../components/TodoItem";
import { useEffect, useState } from "react";
import List from "../components/List";
import Button from "../components/Buttons";

const TodoItemList = () => {
  const [todoData, setTodoData] = useState([]);
  const [status, setStatus] = useState("all");
  const [displayItem, setDisplayItem] = useState([]);

  useEffect(() => {
    let tempTask = [...todoData];
    if (status !== "all") {
      tempTask = todoData.filter((item) => item.status === status);
    }
    setDisplayItem(tempTask);
  }, [status, todoData]);

  //Get dataItem 
  const getDataItem = (data) => {
    console.log("Coming from Appjs", data);
    const tempInputData = [...todoData];
    tempInputData.push(data);
    setTodoData((prev) => [...prev, data]);
    console.log("first", tempInputData);
    console.log("setTodoData", todoData);
  };
  const changeStatus = (status) => {
    console.log("Status", status);
    setStatus(status);
  };

//find index of item  
  const findIndex = (tempData, item) => {
    console.log(tempData[0].id);
    let index = -1;
    for (let i = 0; i < tempData.length; i++) {
      if (tempData[i].id === item.id) {
        index = i;
        break;
      }
    }
    return index;
  };
//check the status
  const checkedStatus = (e, item) => {
    if (e.target.checked) {
      item.status = "completed";
    } else {
      item.status = "active";
      console.log("item", item);
    }

    const tempData = [...todoData];
    tempData[findIndex(tempData, item)] = item;
    setTodoData(tempData);
  };
  return (
    <div>
      <Todo inputDataItem={getDataItem} />

      <List
        todoData={todoData}
        checkedStatus={checkedStatus}
        display={displayItem}
      />
      <Button statusState={changeStatus} />
    </div>
  );
};
export default TodoItemList;
