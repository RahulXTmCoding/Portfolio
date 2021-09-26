import { Col, Row } from "antd";
import styled from "styled-components";
import Container from "./common/Container";
import { COLOR_THEME } from "./constants";

const WhatIDO = () => {
  return (
    <WhatIDOContainer id="whatido">
      <Container>
        <StyledHeading className="wow slideInLeft animated">
          WHAT I DO
        </StyledHeading>
        <StyledH3
          className="wow fadeInUp animated"
          data-wow-delay="500ms"
          data-wow-duration="1s"
        >
          Things I'm skilled at and passionate about.
        </StyledH3>
        <ProfileRow
          className="wow fadeInUp animated"
          data-wow-delay="500ms"
          data-wow-duration="1s"
        >
          <StyledWIDCol md={8}>
            <span class="fa-stack fa-4x">
              <i class="fa fa-code fa-stack-1x fa-inverse"></i>
            </span>
            <h4>Web Application Development</h4>
            <p class="text-muted">
              Fast, responsive and engaging apps that bring your ideas to life.
            </p>
          </StyledWIDCol>
          <StyledWIDCol md={8}>
            <span class="fa-stack fa-4x">
              <i class="fa fa-mobile fa-stack-1x fa-inverse"></i>
            </span>
            <h4>Mobile Application Development</h4>
            <p class="text-muted">
              Cross-platform apps built with efficiency and speed for Android
              and iOS.
            </p>
          </StyledWIDCol>
          <StyledWIDCol md={8}>
            <span class="fa-stack fa-4x">
              <i class="fa fa-cogs fa-stack-1x fa-inverse"></i>
            </span>
            <h4>API Development</h4>
            <p class="text-muted">
              REST APIs that are tailored to your needs and follow the best
              practices in performance and security.
            </p>
          </StyledWIDCol>
          <StyledWIDCol md={8}>
            <span class="fa-stack fa-4x">
              <i class="fa fa-link fa-stack-1x fa-inverse"></i>
            </span>
            <h4>Third-party API Integration</h4>
            <p class="text-muted">
              Integration with any third-party API of your choice. Extend the
              functionality of your apps with the least amount of effort.
            </p>
          </StyledWIDCol>
          <StyledWIDCol md={8}>
            <span class="fa-stack fa-4x">
              <i class="fa fa-database fa-stack-1x fa-inverse"></i>
            </span>
            <h4>Database Design</h4>
            <p class="text-muted">
              Proper Database design for effective Web &amp; Mobile development,
              always aiming for performance, scale and stability.
            </p>
          </StyledWIDCol>
        </ProfileRow>
      </Container>
    </WhatIDOContainer>
  );
};

export default WhatIDO;

const WhatIDOContainer = styled.div`
  padding: 10px 0 0 0;
`;

const StyledHeading = styled.h1`
  text-align: center;
  color: #333;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 40px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const StyledH3 = styled.h3`
  text-align: center;
  color: #777777;
  font-weight: 500;
`;

const ProfileRow = styled(Row)`
  margin: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .fa-stack {
    background-color: ${COLOR_THEME};
    border-radius: 50%;
    margin-bottom: 15px;
  }
  .fa {
    font-size: 50px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    color: white;
  }

  .fa-mobile {
    font-size: 80px;
  }
`;

const StyledWIDCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px 30px;

  h4 {
    font-weight: bold;
  }

  p {
    color: #777777;
  }
`;
