const List = (props) => {
  // console.log("first",props)
  return (
    <div>
      {props.display.map((itemObj, i) => {
        return (
          <div
            key={itemObj.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              checked={itemObj.status === "completed"}
              id={itemObj.id}
              onChange={(e) => props.checkedStatus(e, itemObj)}
            />
            <p>{itemObj.todoItem}</p>
          </div>
        );
      })}
    </div>
  );
};
export default List;
