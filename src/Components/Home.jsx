/* eslint-disable jsx-a11y/anchor-has-content */
import { Row } from "antd";
import styled from "styled-components";
import { COLOR_THEME } from "./constants";

const Home = () => {
  return (
    <StyledHeader id="home">
      <StyledContent>
        <Hello>Hello,</Hello>
        <Name>I'm Rahul Singh.</Name>
        <JobTitle>
          |&nbsp;&nbsp; Full-stack Web & Mobile developer
          &nbsp;&nbsp;|&nbsp;&nbsp; Freelancer &nbsp;&nbsp;|
        </JobTitle>
        <BottonRow>
          <StyledAboutButton href="#whatido">TELL ME MORE</StyledAboutButton>
          <StyledAboutButton
            href="https://drive.google.com/file/d/1gwUTbdEMAw6deemF5SDqYsxmUIIPFJOw/view?usp=sharing"
            target="_blank"
          >
            Download Resume
          </StyledAboutButton>
        </BottonRow>
        <BottonRow>
          <a
            href="https://www.buymeacoffee.com/rahulxcode"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
              alt="Buy Me A Coffee"
              style={{ height: "50px", width: "200px" }}
            />
          </a>
        </BottonRow>
      </StyledContent>
      <SocialShare>
        <a
          href="https://www.linkedin.com/in/rahul-singh-505a09131/"
          class="fa fa-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://github.com/RahulXTmCoding"
          class="fa fa-github"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://rahulthinking9.medium.com/"
          class="fa fa-medium"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="mailto:srahulsingh1999@gmail.com"
          class="fa fa-google"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://www.instagram.com/three_eyed_raven_1/"
          class="fa fa-instagram"
          target="_blank"
          rel="noopener noreferrer"
        />
        <a
          href="https://www.facebook.com/RahulXSingh8198"
          class="fa fa-facebook"
          target="_blank"
          rel="noopener noreferrer"
        />
      </SocialShare>
    </StyledHeader>
  );
};

export default Home;

const StyledHeader = styled.header`
  background: black;
  min-height: 100vh;
  text-align: center;
  &:before {
    background-position: 50%;
    background-size: 100vh;
    background-image: url("../background.jpg");
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: block;
    z-index: 0;
    content: "";
    opacity: 0.2;
    pointer-events: none;
  }
`;

const StyledContent = styled.div`
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Hello = styled(Row)`
  color: ${COLOR_THEME};
  font-size: 36px;
  line-height: 1.565;
  margin-bottom: 0;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  text-shadow: 0 0 6px rgb(0 0 0 / 20%);
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Name = styled(Row)`
  font-size: 90px;
  font-weight: 600;
  margin: 0px 0 10px 0;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const JobTitle = styled(Row)`
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SocialShare = styled.div`
  position: absolute;
  bottom: 50px;
  left: 100px;
  right: 100px;

  @media (max-width: 768px) {
    width: 100%;
    bottom: 20px;
    left: unset;
    right: unset;
  }

  .fa {
    padding: 10px;
    font-size: 22px;
    width: 44px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    margin: 10px;
    background-color: white;
    color: black;

    @media (max-width: 768px) {
      margin: 4px;
    }
  }

  .fa:hover {
    opacity: 0.7;
    background-color: ${COLOR_THEME};
  }
`;

const StyledAboutButton = styled.a`
  padding: 20px 40px;
  background-color: ${COLOR_THEME};
  color: white;
  text-decoration: unset;
  margin: 40px 0;
  font-weight: 600;
  border-radius: 15px;
  font-size: 18px;

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 16px;
    margin: 10px 0;
  }
`;

const BottonRow = styled(Row)`
  gap: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    margin: 8px 0 0 0;
  }
`;
