import styled from "styled-components";
import letters from "./letters";
export default function Letras({ Letterclicked, letterused }) {
  return (
    <Letterbox>
      {letters.map((l) => (
        <button
          data-test="letter"
          onClick={() => Letterclicked(l)}
          key={l}
          disabled={letterused.includes(l)}
        >
          {l}
        </button>
      ))}
    </Letterbox>
  );
}
const Letterbox = styled.div`
  max-width: 50%;
  min-width: 500px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
