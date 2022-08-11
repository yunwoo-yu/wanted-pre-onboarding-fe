import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import TodoPage from "./pages/Todos/TodoPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          basename={process.env.PUBLIC_URL}
          path="/"
          element={<AuthPage />}
        />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
