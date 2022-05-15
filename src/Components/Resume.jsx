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
                Majorly involved in software/app development using
                technologies/skills like Node.js, Next.js, Hapi.js, JavaScript,
                Typescript, Postgres, Mongodb, TypeOrm, Redis ,Bull.js, React,
                Redux, React Query, Next.js, React Native, Antd, CSS3, HTML5,
                Styled Components etc.
              </p>
              <span>
                1. Leading a team of 4 to develop and deploy recorem.com and
                app.recorem.com.
              </span>

              <span>
                2. Optimized the job listing API and reduced the response time
                by 80% .
              </span>

              <span>
                3. Implemented the cross origin single signin for all domains
                and sub-domains of Recorem.
              </span>

              <span>
                4. Redesigned and Developed the Signup/Login flow to reduce the
                time taken by users to go inside the app from the Signup page by
                4X.
              </span>

              <span>
                5. Analyzed existing code and made changes to enhance the
                quality of the existing application.
              </span>

              <span>
                6. Automated the deployment process that resulted in increasing
                the productivity by 2X.
              </span>
            </ExperienceContentDiv>
            <JobTitleDiv>
              <h3>Senior Full Stack Developer</h3>
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
                1. Developed the basic boiler plate converting XD designs to
                React Native app for the client Reyo.
              </span>
              <span>
                2. Developed app integration with REST APIs for Google Maps,
                social media logins, payment processors, and other services
              </span>

              <span>
                3. Developed full-stack Live Socketio,WebRTC Video + Messaging
                Chat Application (web and Android Application)
              </span>
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
              <span>
                1. Worked on a remote control application that not only displays
                the screen of the connected client but lets you control their
                system using your keyboard and mouse.
              </span>
              <span>
                2. Worked on some additional features like file transfer and one
                to one chat which were also a part of the project.
              </span>
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
    display: block;
    margin-bottom: 8px;
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
