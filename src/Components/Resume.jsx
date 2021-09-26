import styled from "styled-components";
import Container from "./common/Container";

const Resume = () => {
  const WorkIconDiv = () => {
    return (
      <WorkIcon>
        <li class="fa fa-briefcase" />
      </WorkIcon>
    );
  };

  return (
    <SKillsContainer id="resume">
      <Container>
        <StyledHeading className="wow slideInLeft animated">
          Work Experience
        </StyledHeading>
        <StyledWorkExperience>
          <Experince>
            <WorkIconDiv />
            <ExperienceContentDiv className="wow slideInLeft animated">
              <ArrowDiv />
              <h3>Redefined Corp</h3>
              <p>
                Majorly involved software/app development using technologies
                like Node.js, Hapi.js, JavaScript, Typescript, Typeorm,
                Postgres,TypeOrm, Redis ,Bull.js, React, Next.js, Antd, CSS3,
                HTML5 etc.
              </p>
              <span>
                1. Integrated different databases using libraries like
                MongooseJS & TypeORM.
              </span>
              <br />
              <span>
                2. Integrated Stripe payment gateway using Stripe’s REST API.
              </span>
              <br />
              <span>
                3. Responsible for managing overall code quality & code
                performance of the project.
              </span>
              <br />
              <span>
                4. Created REST API for multiple applications on Express &
                NestJS (NodeJS frameworks).
              </span>
              <br />
              <span>
                5. Implemented AWS s3 to the existing application to switch
                storage to cloud.
              </span>
              <br />
            </ExperienceContentDiv>
            <JobTitleDiv>
              <h3>Full Stack Developer</h3>
              <span>Nov 2020 - Current</span>
            </JobTitleDiv>
          </Experince>

          <Experince>
            <WorkIconDiv />
            <ExperienceContentDiv
              switch={true}
              className="wow slideInRight animated"
            >
              <ArrowDiv switch={true} />
              <h3>Pataran Technologies</h3>
              <span>
                1. Developed app integration with REST APIs for Google Maps,
                social media logins, payment processors, and other services
              </span>
              <br />
              <span>
                2. Developed full-stack Live Socketio,WebRTC Video + Messaging
                Chat Application (web and Android Application)
              </span>
              <br />
              <span>3. Dockerise Project and deploy Mern app On Aws Ec2.</span>
              <br />
              <span>
                4. Designed push notification system for React Native app using
                pub/sub , Redis ,Amazon sns.
              </span>
            </ExperienceContentDiv>
            <JobTitleDiv switch={true}>
              <h3>Mern Stack Developer</h3>
              <span>July 2020 - Oct 2020</span>
            </JobTitleDiv>
          </Experince>

          <Experince>
            <WorkIconDiv />
            <ExperienceContentDiv className="wow slideInLeft animated">
              <ArrowDiv />
              <h3>Thinking Machines</h3>
              <p>
                Remote control program that can display a screen of another
                computer (via internet or network) on your screen. The program
                allows you to use your mouse and keyboard to control the other
                PC remotely. The whole software is made in java. We used Swing,
                Logging, and Thread APIs in this project.
              </p>
            </ExperienceContentDiv>
            <JobTitleDiv>
              <h3>SDE Intern</h3>
              <span>April 2020 - June 2020</span>
            </JobTitleDiv>
          </Experince>
        </StyledWorkExperience>
      </Container>
    </SKillsContainer>
  );
};

export default Resume;

const SKillsContainer = styled.div`
  padding: 10px 0;
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

const StyledWorkExperience = styled.div`
  margin-top: 40px;
  position: relative;
  &::before {
    position: absolute;
    left: 50%;
    width: 4px;
    height: 100%;
    color: #313131;
    background-color: #313131;
    content: " ";

    @media (max-width: 768px) {
      left: 3%;
    }
  }
`;

const Experince = styled.div`
  animation: cd-bounce-2 0.6s;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
  position: relative;
`;

const WorkIcon = styled.div`
  position: absolute;
  left: 50%;
  width: 60px;
  height: 60px;
  background-color: #313131;
  margin-left: -30px;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    left: 3%;
    margin-left: -20px;
    top: 10px;
    width: 40px;
    height: 40px;
  }

  li {
    &::before {
      font-size: 26px;
      color: white;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;

const ExperienceContentDiv = styled.div`
  width: 45%;
  ${(props) => (props.switch ? "margin-left: 55%;" : "margin-right: 55%;")}
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
  padding: 20px;

  @media (max-width: 768px) {
    margin-left: 50px;
    width: 85%;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    position: relative;
    margin-bottom: 12px;

    &::before {
      content: "";
      display: block;
      height: 3px;
      width: 50px;
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      left: 0;
      bottom: -6px;
    }
  }

  span,
  p {
    color: #6e6e6e;
  }

  span {
    margin-bottom: 2px;
  }
`;

const ArrowDiv = styled.div`
  content: "";
  position: absolute;
  top: 22px;
  ${(props) => (props.switch ? "right: 100%;" : "left: 100%;")}
  height: 0;
  width: 0;
  border: 10px solid transparent;
  border-right-color: #fff;
  ${(props) => (props.switch ? "" : "transform: rotate(180deg);")}

  @media (max-width: 768px) {
    right: 100%;
    left: unset;
    transform: unset;
  }
`;

const JobTitleDiv = styled.div`
  position: absolute;
  top: 5px;
  ${(props) => (props.switch ? "right: 55%;" : "left: 55%;")}
  h3 {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 2px;
  }

  span {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    transform-origin: top left;
    transform: translateY(100%) rotate(-90deg);
    width: max-content;
    top: 220px;
    left: -20px;
    right: unset;
  }
`;
