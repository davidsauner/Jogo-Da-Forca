import styled from "styled-components";

export default function Chute({
  disableinput,
  tryword,
  SetTryWord,
  Wordtryed,
}) {
  return (
    <Input>
      <span>Já sei a palavra</span>
      <input
        data-test="guess-input"
        disabled={disableinput}
        value={tryword}
        onChange={(e) => SetTryWord(e.target.value)}
      ></input>
      <button
        data-test="guess-button"
        disabled={disableinput}
        onClick={Wordtryed}
      >
        Chute
      </button>
    </Input>
  );
}
const Input = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 80%;
    height: 50px;
    border-color: black;
  }
  button {
    width: 100px;
    height: 50px;
  }
`;
