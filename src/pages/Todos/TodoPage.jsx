import { useState } from "react";
import { useEffect } from "react";
import { createPutTodoInstance, todoInstance } from "../../axios-api";
import TodoList from "../../components/todo/TodoList";
import AddTodo from "../../components/todo/AddTodo";
import { TodosWrap } from "./style";
import { useNavigate } from "react-router-dom";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const navigate = useNavigate();
  const todoItem = {
    id: "",
    todo: todoValue,
    isCompleted: false,
    userId: "",
  };

  const inputChangeHandler = (e) => {
    setTodoValue(e.target.value);
  };

  const addTodoHandler = async (e) => {
    e.preventDefault();
    try {
      if (todoItem.todo.length > 0) {
        const response = await createPutTodoInstance.post("/todos", todoItem);
        setTodos([...todos, response.data]);
      } else {
        alert("내용을 적어주세요");
      }
    } catch (err) {
      alert("추가 실패입니다.");
    }
  };

  const removeHandler = async (id) => {
    try {
      const response = await todoInstance.delete(`/todos/${id}`);
      setTodos([...todos.filter((item) => item.id !== id)]);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const checkBoxHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  useEffect(() => {
    const getTodo = async () => {
      try {
        const response = await todoInstance.get("/todos");
        setTodos(response.data);
      } catch (err) {
        alert("리스트 불러오기 에러");
      }
    };
    getTodo();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  return (
    <>
      <TodosWrap>
        <AddTodo onChange={inputChangeHandler} onSubmit={addTodoHandler} />
        <TodoList
          todos={todos}
          onCheck={checkBoxHandler}
          onRemove={removeHandler}
          onChange={inputChangeHandler}
          todoValue={todoValue}
        />
      </TodosWrap>
    </>
  );
};
export default TodoPage;
