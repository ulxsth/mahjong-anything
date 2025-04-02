type Suit = "manzu" | "pinzu" | "souzu" | "kazehai" | "sangenpai";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Kazehai = "ton" | "nan" | "sha" | "pe";
type Sangenpai = "haku" | "hatsu" | "chun";

export class Hai {
  readonly suit: Suit;
  readonly rank?: Rank;
  readonly kind?: Kazehai | Sangenpai;
  readonly isRed: boolean;

  constructor(suit: Suit, rank?: Rank, kind?: Kazehai | Sangenpai, isRed = false) {
    this.suit = suit;
    this.rank = rank;
    this.kind = kind;
    this.isRed = isRed;
  }
}
