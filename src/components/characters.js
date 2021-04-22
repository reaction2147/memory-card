import KN from "../images/King-Neptune.png";
import LL from "../images/Larry-the-Lobster.png";
import KK from "../images/Krusty-Krab-Hat.png";
import MK from "../images/MrKrabs.png";
import MP from "../images/MrsPuff.png";
import P from "../images/Patrick.png";
import PL from "../images/Plankton.png";
import PW from "../images/Pearl-the-Whale.png";
import K from "../images/Karen.png";
import S from "../images/Sandy.png";
import SS from "../images/SpongeBob-SquarePants.png";
import SW from "../images/Squidward.png";
import G from "../images/Gary.png";
import B from "../images/Beatrice.png";
import MT from "../images/MrsTentacles.png";
import PP from "../images/Polene-Puff.png";
import CardShuffle from "../helpers/CardShuffle";

const Characters = [
  { name: "King Neptune", src: KN , id: 1},
  { name: "Larry the Lobster", src: LL , id: 2},
  { name: "Mr. Krabs", src: MK , id: 3},
  { name: "Mrs. Puff", src: MP , id: 4},
  { name: "Patrick", src: P , id: 5},
  { name: "Pearl the Whale", src: PW , id: 6},
  { name: "Karen", src: K , id: 7},
  { name: "Sandy", src: S , id: 8},
  { name: "SpongeBob", src: SS , id: 9},
  { name: "Squidward", src: SW , id: 10},
  { name: "Gary", src: G , id: 11},
  { name: "Plankton", src: PL , id: 12},
  { name: "Krusty Krab Hat", src: KK , id: 13},
  { name: "Beatrice", src: B , id: 14},
  { name: "Mrs. Tentacles", src: MT , id: 15},
  { name: "Polene Puff", src: PP , id: 16},
]

CardShuffle(Characters)

export default Characters