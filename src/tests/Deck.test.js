import { dealCards, rowsOfDeck, shuffle } from '../utils/DeckManager'

describe("shuffle", () => {
    it("shuffles the entire deck and check if all cards are still there", () => {
        const deck = [1, 2, 3, 4, 5];
        const shuffleDeck = shuffle(deck);
        expect(shuffleDeck).toHaveLength(5);
    });
    it("shuffled deck is not equal original deck", () => {
        const deck = [1, 2, 3, 4, 5];
        const shuffleDeck = shuffle(deck);
        expect(shuffleDeck).not.toEqual(deck);
    });
    it("shuffled deck contains the same cards", () => {
        const deck = [1, 2, 3, 4, 5];
        const shuffleDeck = shuffle(deck);
        expect(shuffleDeck).toEqual(expect.arrayContaining(deck));
    });
});

describe("dealCards", () => {
    it("shuffles the deck and cut to have only the upper cards", () => {
        const deck = [1, 2, 3, 4, 5];
        const cutDeck = dealCards(deck, 3);
        expect(cutDeck).toEqual([1, 2, 3]);
    });
});

describe("rowsOfDeck", () => {
    it("slices the deck in 3 arrays using a splitNumber as parameter", () => {
        const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const deckInRows = rowsOfDeck(deck, 3)
        expect(deckInRows).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    });
});
