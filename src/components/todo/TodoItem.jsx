import { useState } from "react";
import { createPutTodoInstance } from "../../axios-api";
import { CheckBox } from "../UI/CheckBox";

const TodoItem = ({ item, onCheck, onRemove, onChange, todoValue }) => {
  const { isCompleted, todo, id } = item;
  const [modify, setModify] = useState(false);
  const [todoUpdate, setTodoUpdate] = useState(todo);

  const todoItem = {
    id: id,
    todo: todoValue,
    isCompleted: false,
    userId: "",
  };
  const modifyHandler = () => {
    setModify((prev) => !prev);
  };

  const updateHanlder = async (e) => {
    e.preventDefault();
    try {
      const response = await createPutTodoInstance.put(
        `/todos/${id}`,
        todoItem
      );
      console.log(response);
      setTodoUpdate(response.data.todo);

      modifyHandler();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!modify ? (
        <li className={isCompleted ? "active" : ""}>
          <CheckBox
            type="checkbox"
            onClick={() => {
              onCheck(id);
            }}
          />
          {todoUpdate}
          {isCompleted && <span>완료</span>}
          <ul>
            {!isCompleted && <li onClick={modifyHandler}>수정</li>}
            {!isCompleted && (
              <li
                onClick={() => {
                  onRemove(id);
                }}
              >
                삭제
              </li>
            )}
          </ul>
        </li>
      ) : (
        <form onSubmit={updateHanlder}>
          <input type="text" defaultValue={todo} onChange={onChange} />
          <button type="submit">수정</button>
          <button type="button" onClick={modifyHandler}>
            취소
          </button>
        </form>
      )}
    </>
  );
};
export default TodoItem;
