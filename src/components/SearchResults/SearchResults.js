import styled, { css } from 'styled-components';
import { useIpContext } from 'context/IpProvider';
import Loader from 'components/Loader/Loader';

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 2.4rem;
  padding: 2.6rem 2.4rem;
  min-height: 13rem;
  text-align: center;
  background: #ffffff;
  box-shadow: 0 5rem 5rem -2.5rem rgba(0, 0, 0, 0.0983665);
  border-radius: 1.5rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    display: flex;
    gap: 3.2rem;
    padding: 3.7rem 3.2rem;
    text-align: left;
  }
`;

const ValueWrapper = styled.div`
  display: grid;
  gap: 0.7rem;
  align-content: start;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding-right: 3.2rem;
    width: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.15);

    :last-child {
      border: 0;
      padding-right: 0;
    }
  }

  ${({ error }) =>
    error &&
    css`
      justify-items: center;
    `};
`;

const Caption = styled.p`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.2rem;
  letter-spacing: 0.145833rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorPrimary};
  opacity: 0.5;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    font-size: 1.2rem;
    line-height: 1.4rem;
    letter-spacing: 0.175rem;
  }
`;

const Value = styled.p`
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: -0.0178571rem;
  color: ${({ theme }) => theme.colorPrimary};

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    font-size: 2.6rem;
    line-height: 3rem;
    letter-spacing: -0.0232143rem;
  }
`;

const SearchResults = () => {
  const { geolocation, loading, error } = useIpContext();
  let ipValue = {};

  if (!loading) {
    const { ip, location, isp } = geolocation;
    const { city, country, postalCode, timezone } = location;

    ipValue = {
      'ip-adress': ip,
      location: `${city}, ${country}, ${postalCode}`,
      timezone: `UTC ${timezone}`,
      isp: isp,
    };
  }

  const ipValueList = Object.entries(ipValue).map(([key, value], index) => (
    <ValueWrapper key={index}>
      <Caption>{key}</Caption>
      <Value>{value}</Value>
    </ValueWrapper>
  ));

  const showError = (
    <ValueWrapper error>
      <Caption>Error: {error.code}</Caption>
      <Value>{error.messages}</Value>
    </ValueWrapper>
  );

  return (
    <Wrapper>
      {loading ? <Loader /> : error.code ? showError : ipValueList}
    </Wrapper>
  );
};

export default SearchResults;
