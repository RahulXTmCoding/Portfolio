import styled from "styled-components";

export const ArrowPagebreak = () => {
  return (
    <PageBreak
      preserveAspectRatio="none"
      viewBox="0 0 100 102"
      height="75"
      width="100%"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class="svgcolor-light"
    >
      <path d="M0 0 L50 100 L100 0 Z" fill="#f5f5f5" stroke="#f5f5f5"></path>
    </PageBreak>
  );
};

const PageBreak = styled.svg`
  background-color: #151515;

  width: 100%;
`;
