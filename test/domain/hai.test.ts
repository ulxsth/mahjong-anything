import { test, expect, describe } from "bun:test";
import { Hai } from "../../src/domain/hai";

describe("domain: Hai", () => {
  describe("正常系", () => {
    test("数牌が作成できる", () => {
      const suuhai = new Hai({
        suit: "manzu",
        rank: 6,
      })

      expect(suuhai.suit).toBe("manzu")
      expect(suuhai.rank).toBe(6)
    })

    test("字牌が作成できる", () => {
      const jihai = new Hai({
        suit: "sangenpai",
        kind: "haku",
      })
      expect(jihai.suit).toBe("sangenpai")
      expect(jihai.kind).toBe("haku")
    })

    test("赤牌が生成できる", () => {
      const akahai = new Hai({
        suit: "pinzu",
        rank: 5,
        isRed: true
      })

      expect(akahai.isRed).toBeTrue()
    })
  })

  describe("異常系", () => {
    test("rank を持たない数牌は生成できない", () => {
      expect(() => {
        new Hai({
          suit: "manzu"
        })
      }).toThrowError("rank を持たない数牌")
    })

    test("kind を持つ数牌は生成できない", () => {
      expect(() => {
        new Hai({
          suit: "pinzu",
          rank: 4,
          kind: "haku"
        })
      }).toThrowError("kind を持つ数牌")
    })

    test("5 以外の赤牌は生成できない", () => {
      expect(() => {
        new Hai({
          suit: "souzu",
          rank: 1, 
          isRed: true
        })
      }).toThrowError("5 以外の赤牌")
    })

    test("kind を持たない字牌は生成できない", () => {
      expect(() => {
        new Hai({
          suit: "sangenpai"
        })
      }).toThrowError("kind を持たない字牌")
    })

    test("rank を持つ字牌は生成できない", () => {
      expect(() => {
        new Hai({
          suit: "kazehai",
          rank: 1,
          kind: "ton"
        })
      }).toThrowError("rank を持つ字牌")
    })

    test("字牌かつ赤牌は生成できない", () => {
      expect(() => {
        new Hai({
          suit: "sangenpai",
          kind: "haku",
          isRed: true
        })
      }).toThrowError("字牌かつ赤牌")
    })
  })
})