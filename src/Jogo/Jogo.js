import styled from "styled-components";

export default function Jogo({
  arrayforca,
  countmiss,
  StartGame,
  wordcolor,
  wordgame,
}) {
  return (
    <div>
      <Main>
        <img src={arrayforca[countmiss]} alt={arrayforca} />
      </Main>

      <Aside>
        <button onClick={StartGame}>Escolher palavra</button>
        <Words>
          <LineWord color={wordcolor} className={wordcolor}>
            {wordgame}
          </LineWord>
        </Words>
      </Aside>
    </div>
  );
}
const Main = styled.div`
  width: 60vw;
  display: flex;
  justify-content: center;
  img {
    height: 60vh;
  }
`;
const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 40vw;
  height: 60vh;
  button {
    margin-top: 10px;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    color: white;
    background-color: green;
    font-weight: 700;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Words = styled.div`
  display: flex;
`;
const LineWord = styled.h1`
  margin: 5px;
  font-size: 50px;
  color: ${(p) => p.color};
`;
