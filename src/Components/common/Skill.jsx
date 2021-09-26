import styled from "styled-components";

const SKill = ({ image, skillName }) => {
  return (
    <SKillsContainer>
      <img src={image} alt={skillName} />
      <p>{skillName}</p>
    </SKillsContainer>
  );
};

export default SKill;

const SKillsContainer = styled.div`
  padding: 10px 0;
  text-align: center;

  img {
    width: 100px;
    height: 100px;
  }

  p {
    margin-top: 6px;
    font-size: 16px;
  }
`;
