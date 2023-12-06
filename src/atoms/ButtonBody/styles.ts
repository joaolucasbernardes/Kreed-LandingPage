import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 100px;
  background: #17A4D0;
  flex-shrink: 0;
  
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;

  box-shadow: 0px 0px 17px -8px transparent;
  transition: all 0.5s ease-out;

  margin-top: 50px;

  &:hover {
    color: #17A4D0; 
    background-color: #F8FDFF;
    box-shadow: 0px 0px 17px 0px #17A4D0;
  }
`;