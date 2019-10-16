import { createGlobalStyle } from 'styled-components';
import { modernNormalize } from 'styled-modern-normalize';

const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap");
  :root {

    /* Colors */
  --bg-color: seashell;
  --font-color: black;
  --main-accent-color: pink;

    /* Fonts */
  --main-font: Arial;
  --accent-font:  Cursive;
  --backup-font: "cursive";


  }

  body {
    background-color: var(--bg-color);
    color: var(--black-font);
    font-family: var(--main-font);
    display: block;
    margin: 0;
    padding: 0;
  }
  `;

export default GlobalStyle;
