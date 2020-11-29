import styled from 'styled-components';
import iconArrow from 'assets/icon-arrow.svg';
import { useIpContext } from 'context/IpProvider';

const SearchForm = styled.form`
  position: relative;
  display: flex;
  margin: 0 auto;
  margin-bottom: 2.4rem;
  width: min(100%, 55.5rem);
  box-shadow: 0 5rem 5rem -2.5rem rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-bottom: 4.8rem;
  }
`;

const StyledInput = styled.input`
  padding: 1.8rem 8.2rem 1.8rem 2.4rem;
  flex-grow: 1;
  height: 5.8rem;
  color: ${({ theme }) => theme.colorPrimary};
  border: none;
  outline: none;
  font-size: 1.8rem;
  line-height: 2.1rem;

  ::placeholder {
    color: ${({ theme }) => theme.colorPrimary};
    opacity: 0.5;
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  width: 5.8rem;
  height: 5.8rem;
  border: none;
  outline: none;
  background-color: #000;
  background-image: url(${iconArrow});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  transition: background-color 0.2s;

  :hover {
    background-color: #3f3f3f;
  }
`;

const Input = () => {
  const { value, handleChange, handleSubmit } = useIpContext();

  return (
    <SearchForm onSubmit={handleSubmit}>
      <StyledInput
        placeholder="Search for any IP address or domain"
        value={value}
        onChange={handleChange}
        ariaLabel="Search for any IP address or domain"
      />
      <SubmitButton type="submit" ariaLabel="submit button" />
    </SearchForm>
  );
};

export default Input;
