import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap');

*,*::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.purpleText};
    font-family: 'Poppins', sans-serif;
}

@keyframes move {
    0%   { transform: scale(1) }
    38%  { transform: scale(0.8, 1) rotate(160deg); }
    40%  { transform: scale(0.8, 1) rotate(160deg); }
    78%  { transform: scale(1.2) rotate(-20deg); }
    80%  { transform: scale(1.2) rotate(-20deg); }
    100% { transform: scale(1); }
} 
`
export default GlobalStyle