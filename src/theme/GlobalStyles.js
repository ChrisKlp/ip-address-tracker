import { createGlobalStyle } from 'styled-components';
import { css } from 'styled-components';
import reset from 'styled-reset-advanced';
import 'theme/fonts.css';

export const sharedWrapper = css`
  padding: 0 2.4rem;
  max-width: 111rem;


  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    padding: 0;
    margin: 0 auto;
    width: 90%;
  }
`;

const GlobalStyles = createGlobalStyle`
${reset};

html {
  font-size: 62.5%;
}

body {
  min-width: 32rem;
  font-family: 'Rubik', sans-serif;
  font-size: 1.8rem;
}
`;

export default GlobalStyles;
