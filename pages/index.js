import styled from "styled-components";
import Box from "../src/components/Box";
import MainGrid from "../src/components/MainGrid";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

function ProfileSideBar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />
    </Box>
  );
}

export default function Home() {
  const githubUser = "victor-magaldi";
  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: "profileArea" }}>
        <ProfileSideBar githubUser={githubUser} />
      </div>
      <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
        <Box>Bem vindo </Box>
      </div>
      <div
        className="profileRelationsArea"
        style={{ gridArea: "profileRelationsArea" }}
      >
        <Box>Comunidade</Box>
      </div>
    </MainGrid>
  );
}
