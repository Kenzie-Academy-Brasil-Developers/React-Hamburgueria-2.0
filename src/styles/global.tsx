import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

button{
    cursor: pointer;
    border: none;
    background: transparent;
}

a{
    color: unset;
    text-decoration: none;
}

ul, ol, li{
    list-style: none;
}
.App{

  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Inter', sans-serif;
}
    
`;
