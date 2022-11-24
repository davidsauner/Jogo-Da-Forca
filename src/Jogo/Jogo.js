import { useState } from "react";
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

export default function Jogo() {
  const [countmiss, setCountMiss] = useState(1);
  const arraydaforca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  return (
    <>
      <img src={arraydaforca[countmiss]} alt={forca0} />
    </>
  );
}