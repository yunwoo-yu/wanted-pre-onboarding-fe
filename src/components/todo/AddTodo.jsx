import { Button } from "../UI/Button";
import { Input } from "../UI/Input";

const AddTodo = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1>Todo List</h1>
      <Input type="text" id="todo" onChange={onChange} />
      <Button todobutton>추가</Button>
    </form>
  );
};
export default AddTodo;
