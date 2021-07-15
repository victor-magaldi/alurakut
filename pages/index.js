import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 8px;
`;
const MainGrid = styled.main`
  display: grid;
  grid-gap: 10px;
  padding: 16px;
  @media (min-width: 860px) {
    grid-template-areas: "profileArea wellcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default function Home() {
  return (
    <MainGrid>
      <div style={{ gridArea: "profileArea" }}>
        <Box>imagem</Box>
      </div>
      <div style={{ gridArea: "wellcomeArea" }}>
        <Box>Bem vindo </Box>
      </div>
      <div style={{ gridArea: "profileRelationsArea" }}>
        <Box>Comunidade</Box>
      </div>
    </MainGrid>
  );
}
