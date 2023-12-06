import styled from "styled-components";

export const ButtonHeader = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #17A4D0;  
  background: none;
  flex-shrink: 0;
  
  color: #17A4D0;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 0px 17px -8px transparent;
  transition: all 0.5s ease-out;

  &:hover {
    color: #fff; 
    background-color: #17A4D0;
    box-shadow: 0px 0px 17px -2px #17A4D0;
  }
`;