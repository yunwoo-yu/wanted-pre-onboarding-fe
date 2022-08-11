import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import TodoPage from "./pages/Todos/TodoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
