import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    outline: 0;
  }
  body{
    background:#E0E9FF;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;