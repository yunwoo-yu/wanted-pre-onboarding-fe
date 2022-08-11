import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onCheck, onRemove, onChange, todoValue }) => {
  return (
    <>
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onRemove={onRemove}
            onCheck={onCheck}
            onChange={onChange}
            todoValue={todoValue}
          />
        ))}
      </ul>
    </>
  );
};
export default React.memo(TodoList);
