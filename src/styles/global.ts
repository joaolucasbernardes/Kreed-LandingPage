import { createGlobalStyle } from "styled-components";

import Elipse1 from "../assets/Ellipse1.png"
import Elipse2 from "../assets/Ellipse2.png"


export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
  }

  html, body #root {
    height: 100%;
  }

  body {
    background-color: #F8FDFF;
    background: url(${Elipse1}) no-repeat 1010px, url(${Elipse2}) no-repeat 931px;
    background-size: cover;
    font-family: 'Poppins', sans-serif;
    }

  button {
    background-color: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    outline: none;
  }
`;
