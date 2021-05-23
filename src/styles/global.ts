import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/background.svg';

export default createGlobalStyle`
*{
  margin:0;
  padding: 0;
  outline:none;
  box-sizing: border-box;
}

body{
  background: url(${background})  #F0F0F5 no-repeat 70% top;

  -webkit-font-smoothing:antialiased;
}

body,input,button{
  font:16px Roboto, sans-serif;
}

button{
  cursor: pointer;
}

#root{
  max-width: 960px;
  margin:0 auto;
  padding: 40px 20px;
}

`;
