import patternBg from 'assets/pattern-bg.png';
import Heading from 'components/Heading/Heading';
import Search from 'components/Search/Search';
import SearchResults from 'components/SearchResults/SearchResults';
import styled from 'styled-components';
import { sharedWrapper } from 'theme/GlobalStyles';

const Wrapper = styled.header`
  background: url(${patternBg}) no-repeat center / cover;
  height: 30rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    height: 28rem;
  }
`;

const Content = styled.div`
  ${sharedWrapper}
  text-align: center;
`;

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Heading>IP Address Tracker</Heading>
        <Search />
        <SearchResults />
      </Content>
    </Wrapper>
  );
};

export default Header;
