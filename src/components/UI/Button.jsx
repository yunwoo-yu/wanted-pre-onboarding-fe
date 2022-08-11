import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid #0066cc;
  background-color: #0099cc;
  color: #ffffff;
  padding: ${(props) => (props.todobutton ? "8px 10px" : "5px 10px")};
  border-radius: 8px;

  &:hover {
    border: 1px solid #0099cc;
    background-color: #00aacc;
    color: #ffffff;
    padding: ${(props) => (props.todobutton ? "8px 10px" : "5px 10px")};
  }

  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;
