import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { AuthFormWrapper } from "./style";

const AuthForm = ({ onSwitch, onSubmit, onChange, isLogin, formData }) => {
  const { email, password } = formData;

  const emailCheck =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const passwordCheck = /^[0-9a-zA-Z]{8,}$/;

  const emailIsValid = emailCheck.test(email);
  const passwordIsValid = passwordCheck.test(password);

  return (
    <>
      <AuthFormWrapper>
        <form onSubmit={onSubmit}>
          <h1>{isLogin ? "로그인" : "회원가입"}</h1>
          <div>
            <label htmlFor="email">이메일</label>
            <Input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div>
            <Button type="submit" disabled={!emailIsValid || !passwordIsValid}>
              {isLogin ? "로그인" : "회원가입"}
            </Button>
            <Button type="button" onClick={onSwitch}>
              {isLogin ? "회원가입 하러가기" : "로그인 하러가기"}
            </Button>
          </div>
        </form>
      </AuthFormWrapper>
    </>
  );
};

export default AuthForm;
