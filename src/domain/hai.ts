type Suit = "manzu" | "pinzu" | "souzu" | "kazehai" | "sangenpai";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Kazehai = "ton" | "nan" | "sha" | "pe";
type Sangenpai = "haku" | "hatsu" | "chun";

interface HaiProps {
  suit: Suit;
  rank?: Rank;
  kind?: Kazehai | Sangenpai;
  isRed?: boolean;
}

export class Hai {
  readonly suit: Suit;
  readonly rank?: Rank;
  readonly kind?: Kazehai | Sangenpai;
  readonly isRed?: boolean;

  constructor(props: HaiProps) {
    this.suit = props.suit;
    this.rank = props.rank;
    this.kind = props.kind;
    this.isRed = props.isRed;

    // validate
    if (["manzu", "pinzu", "souzu"].includes(props.suit)) {
      if (!props.rank) {
        throw new Error("rank を持たない数牌")
      }
      if (props.kind) {
        throw new Error("kind を持つ数牌")
      }
      if(props.isRed && props.rank !== 5) {
        throw new Error("5 以外の赤牌")
      }
    }

    if (["kazehai", "sangenpai"].includes(props.suit)) {
      if (!props.kind) {
        throw new Error("kind を持たない字牌")
      }
      if (props.rank) {
        throw new Error("rank を持つ字牌")
      }
      if(props.isRed) {
        throw new Error("字牌かつ赤牌")
      }
    }
  }
}