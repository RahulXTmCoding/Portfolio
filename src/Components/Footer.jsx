import styled from "styled-components";
import Container from "./common/Container";

const Footer = () => {
  return (
    <SKillsContainer>
      <Container>
        <StyledFooterDiv>
          <h3>Copyright © Rahul Singh</h3>
        </StyledFooterDiv>
      </Container>
    </SKillsContainer>
  );
};

export default Footer;

const SKillsContainer = styled.div`
  background: #151515;
  margin-top: -50px;
`;

const StyledFooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    color: white;
  }
`;
