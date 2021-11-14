import { Col, Row } from "antd";
import styled from "styled-components";
import Container from "./common/Container";
import DevImage from "../assest/dev.png";
import Photo from "../assest/photo.jfif";

const About = () => {
  return (
    <AboutContainer id="about">
      <Container>
        <StyledHeading className="wow slideInLeft animated">
          ABOUT ME
        </StyledHeading>
        <StyledH3
          className="wow fadeInUp animated"
          data-wow-delay="500ms"
          data-wow-duration="1s"
        >
          Let's break the ice a little.
        </StyledH3>
        <ProfileRow
          className="wow fadeInUp animated"
          data-wow-delay="500ms"
          data-wow-duration="1s"
        >
          <ProfilePicContainer md={7} xs={24}>
            <ProfileImage src={Photo} alt="profile_pic" />
            <p>Node.JS | React | React Native | Next.js</p>
          </ProfilePicContainer>
          <ProfileContent md={17} xs={24}>
            <p>
              My passion is making ideas come to life, be it working solo, as
              part of a team or leading a team of fellow developers.I am a
              problem solver and an effective leader.
            </p>
            <p>
              I consider myself creative and hardworking. If you liked my
              profile so far, drop me a message and we'll discuss how I can be
              useful to your project.
            </p>
            <p>
              As a developer, I enjoy using my obsessive attention to detail, my
              unequivocal love for making things, and my mission-driven work
              ethic to literally change the world. That's why I’m excited to
              make a big impact at a high growth company.
            </p>
          </ProfileContent>
        </ProfileRow>
        <ProfileRow>
          <ProfileContent
            md={12}
            xs={24}
            className="wow fadeInLeft animated"
            data-wow-delay="500ms"
            data-wow-duration="1s"
          >
            <StyledTextTitle>PERSONAL DETAILS</StyledTextTitle>
            <p>
              Well-organised person, problem solver,high attention to detail.
              Fan of Games, outdoor activities, TV series and Anime.
            </p>
            <StyledTextTitle>FULL NAME</StyledTextTitle>
            <p>Rahul Singh</p>
            <StyledTextTitle>Job</StyledTextTitle>
            <p>Full Stack Developer</p>
            <StyledTextTitle>Email</StyledTextTitle>
            <p>srahulsingh1999@gmail.com</p>
            <StyledTextTitle>BIRTH DATE</StyledTextTitle>
            <p>8th Jan, 1998</p>
            <StyledTextTitle>ADDRESS</StyledTextTitle>
            <p>H.no: 36, siddheshwar nagar, Jhansi, UP. </p>
          </ProfileContent>
          <ProfileContent
            md={12}
            xs={24}
            className="wow fadeInRight animated"
            data-wow-delay="500ms"
            data-wow-duration="1s"
          >
            <StyledDevImage src={DevImage} alt="dev" />
          </ProfileContent>
        </ProfileRow>
      </Container>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  padding: 10px 0 0 0;
  background: #f5f5f5;
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
  color: #7d7d7d;
  font-weight: 500;
`;

const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
`;

const ProfileRow = styled(Row)`
  margin: 40px 0;
`;

const ProfilePicContainer = styled(Col)`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  color: #7d7d7d;
  p {
    margin: 10px;
    font-size: 14px;
  }
`;

const ProfileContent = styled(Col)`
  p {
    color: #7d7d7d;
  }
`;

const StyledTextTitle = styled.h2`
  text-align: left;
  font-weight: bold;
`;

const StyledDevImage = styled.img`
  width: 100%;
`;
