import styled from "styled-components";

export const TodosWrap = styled.div`
  width: 50%;
  display: flex;
  padding: 30px;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  > form {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    h1 {
      width: 100%;
      text-align: center;
      margin-bottom: 30px;
    }
    width: 80%;

    button {
      float: right;
      height: 36px;
    }
  }

  > ul {
    width: 80%;
    border: 2px solid #0099cc;
    padding: 2%;

    > li {
      position: relative;
      width: 100%;
      font-size: 1.4rem;
      border-bottom: 1px solid black;
      float: left;

      span {
        display: block;
        text-align: right;
        float: right;
        font-size: 1rem;
        line-height: 30px;
      }

      &.active {
        text-decoration: line-through;
        color: red;
        opacity: 0.7;
      }
      > input {
        width: 16px;
        height: 16px;
        margin-right: 14px;
      }

      > ul {
        float: right;
        display: flex;

        li {
          font-size: 1rem;
          line-height: 30px;
          cursor: pointer;
          margin-left: 14px;
        }
      }
    }

    > form {
      height: 30px;

      input {
        padding: 4px;
      }

      button {
        float: right;
        margin-left: 12px;
        color: white;
        background-color: #0099cc;
        border: 2px solid #0066cc;
      }
    }
  }
`;
