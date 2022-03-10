import { dealCards, shuffle } from '../utils/DeckManager'

describe("shuffle", () => {
    it("shuffles the entire deck and check if all cards are still there", () => {
        const deck = [1, 2, 3, 4, 5]
        const shuffleDeck = shuffle(deck);
        expect(shuffleDeck).toHaveLength(5);
    });
    it("shuffled deck is not equal original deck", () => {
        let deck = [1, 2, 3, 4, 5]
        let shuffleDeck = shuffle(deck);
        expect(shuffleDeck).not.toEqual(deck);
    });
    it("shuffled deck contains the same cards", () => {
        let deck = [1, 2, 3, 4, 5];
        let shuffleDeck = shuffle(deck);
        expect(shuffleDeck).toEqual(expect.arrayContaining(deck));
    });
});

describe("setupCutDeckMap", () => {
    it("shuffles the deck and cut to have only the upper cards", () => {
        let deck = [1, 2, 3, 4, 5];
        let cutDeck = dealCards(deck, 3);
        expect(cutDeck).toEqual([1, 2, 3]);
    });
});
