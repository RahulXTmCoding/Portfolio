import styled from "styled-components";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  max-width: 1150px;
  margin: 20px auto;
  padding: 20px;
  @media (max-width: 768px) {
    max-width: 100%;
    margin: 10px auto;
    padding: 10px 20px;
  }

  @media (min-width: 1600px) {
    max-width: 1450px;
  }
`;
