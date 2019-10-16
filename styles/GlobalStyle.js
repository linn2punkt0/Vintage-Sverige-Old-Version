import { createGlobalStyle } from 'styled-components';
import { modernNormalize } from 'styled-modern-normalize';

const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap");
  :root {
    /* Colors */
  --bg-color: white;
  --font-color: black;
  --main-accent-color: pink;

  /* Fonts */
  --accent-font:  Cursive; /* WHAT FONT SHOULD WE HAVE HERE */
  --main-font: "Open sans";
  --backup-font: "cursive";


  }
  `;

export default GlobalStyle;
