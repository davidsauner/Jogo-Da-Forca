import { useState } from "react";
import word from "./palavras";
import styled from "styled-components";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import letters from "./Jogo/letters";
import Jogo from "./Jogo/Jogo";
import Letras from "./Jogo/Letras";
import Chute from "./Jogo/Chute";

const arrayforca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
export default function App() {
  const [disableinput, SetDisableinput] = useState(true);
  const [countmiss, SetCountMiss] = useState(0);
  const [chosedword, SetChosedWord] = useState([]);
  const [wordgame, SetWordGame] = useState([]);
  const [letterused, SetLetterUsed] = useState(letters);
  const [normalletter, SetNormalLetter] = useState("");
  const [tryword, SetTryWord] = useState("");
  const [wordinicial, Setwordinicial] = useState("");
  const [wordcolor, SetWordColor] = useState("black");

  function StartGame() {
    SetDisableinput(false);
    Sortword();
    SetLetterUsed([]);
    SetCountMiss(0);
    SetTryWord("");
    SetWordColor("black");
  }
  function Endgame() {
    SetLetterUsed(letters);
    SetDisableinput(true);
    SetWordGame(chosedword);
  }

  function Sortword() {
    const i = Math.floor(Math.random() * word.length);
    const words = word[i];
    Setwordinicial(words);
    const wordarrays = words.split("");
    SetChosedWord(wordarrays);
    // console.log(words);
    let dash = [];
    wordarrays.forEach((l) => dash.push(" _"));
    SetWordGame(dash);

    const normall = words.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    SetNormalLetter(normall);
  }

  function Letterclicked(l) {
    SetLetterUsed([...letterused, l]);
    if (normalletter.includes(l)) {
      Letterigth(l);
    } else {
      Letterwrong(l);
    }
  }
  function Letterigth(l) {
    const newwordgame = [...wordgame];
    chosedword.forEach((letra, i) => {
      if (normalletter[i] === l) {
        newwordgame[i] = letra;
      }
    });
    SetWordGame(newwordgame);

    if (!newwordgame.includes(" _")) {
      SetWordColor("green");
      Endgame();
    }
  }
  function Letterwrong() {
    const newmiss = countmiss + 1;
    SetCountMiss(newmiss);
    if (newmiss === 6) {
      SetWordColor("red");
      Endgame();
    }
  }

  function Wordtryed() {
    if (tryword === normalletter) {
      SetWordColor("green");
      console.log("ganhou");
    } else if (tryword === wordinicial) {
      console.log("ganhou");
    } else {
      SetWordColor("red");
      SetCountMiss(6);
    }
    Endgame();
  }

  return (
    <>
      <Container>
        <Jogo
          arrayforca={arrayforca}
          countmiss={countmiss}
          StartGame={StartGame}
          wordcolor={wordcolor}
          wordgame={wordgame}
        />

        <Footer>
          <Letras Letterclicked={Letterclicked} letterused={letterused} />
          <Chute
            disableinput={disableinput}
            tryword={tryword}
            SetTryWord={SetTryWord}
            Wordtryed={Wordtryed}
          />
        </Footer>
      </Container>
    </>
  );
}

const Container = styled.div`
  box-sizing: border-box;

  width: 100vw;
  height: 100vh;
  div {
    display: flex;
  }
`;

const Footer = styled.div`
  font-weight: 700;
  width: 100vw;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid brown;
  flex-direction: column;
  button {
    width: 50px;
    height: 50px;
    border-radius: 15px;
    text-transform: uppercase;
    &:hover {
      cursor: pointer;
      border: thick double #79818a;
    }
    &:disabled {
      background-color: #9faab5;
      border: 1px solid #9faab5;
      color: #79818a;
      cursor: default;
    }
  }
`;
