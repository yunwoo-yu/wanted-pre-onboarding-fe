import styled from "styled-components";

export const AuthFormWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #eee;

  form {
    width: 400px;
    min-height: 350px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    text-align: center;
    h1 {
      width: 100%;
      height: 100%;
      margin: 8% 0;
    }
    div {
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      label {
        width: 62%;
        text-align: left;
        font-size: 1.2rem;
        margin-bottom: 8px;
      }
      button {
        width: 60%;
        margin-bottom: 20px;
      }
    }
  }
`;
