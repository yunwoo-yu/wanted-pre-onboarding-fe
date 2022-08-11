import { useEffect } from "react";
import { useState } from "react";
import { userInstance } from "../../axios-api";
import AuthForm from "../../components/Auth/AuthForm";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const userSignUpLogin = async () => {
    if (isLogin) {
      try {
        const response = await userInstance.post("/auth/signin", formData);
        if (response.data.access_token) {
          localStorage.setItem("token", response.data.access_token);
          navigate("/todo");
        }
      } catch (error) {
        console.log(error);
        alert(new Error(error.response.data.message));
      }
    } else {
      try {
        const response = await userInstance.post("/auth/signup", formData);
        console.log(response);
        alert("회원가입 완료");
      } catch (error) {
        console.log(error);
        alert(new Error(error.response.data.message));
      }
    }
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const switchModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    userSignUpLogin();
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/todo");
    }
  }, [navigate]);

  return (
    <AuthForm
      onSwitch={switchModeHandler}
      onSubmit={submitHandler}
      isLogin={isLogin}
      formData={formData}
      onChange={inputChangeHandler}
    />
  );
};
export default AuthPage;
