import styled from 'styled-components';

const Heading = styled.h1`
  padding: 2.6rem 0  2.9rem; 
  font-weight: 500;
  font-size: 2.6rem;
  line-height: 3rem;
  letter-spacing: -0.0232143rem;
  color: #ffffff;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 3.3rem 0 3.1rem;
    font-size: 3.2rem;
    line-height: 3rem;
    letter-spacing: -0.0285714rem;
  }
`;

export default Heading;
