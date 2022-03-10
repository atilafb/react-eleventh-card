import { dealCards, rowsOfDeck, shuffle } from '../utils/DeckManager'
import { mockedDeck } from './DeckSeeds'

describe("shuffle", () => {
    it("shuffles the entire deck and check if all cards are still there", () => {
        const deck = mockedDeck.DECK_5_ELEMENTS;
        const shuffleDeck = shuffle(deck);
        expect(shuffleDeck).toHaveLength(5);
    });
    it("shuffled deck is not equal original deck", () => {
        const deck = mockedDeck.DECK_5_ELEMENTS;
        const shuffleDeck = shuffle(deck);
        expect(shuffleDeck).not.toEqual(deck);
    });
    it("shuffled deck contains the same cards", () => {
        const deck = mockedDeck.DECK_5_ELEMENTS;
        const shuffleDeck = shuffle(deck);
        expect(shuffleDeck).toEqual(expect.arrayContaining(deck));
    });
});

describe("dealCards", () => {
    it("shuffles the deck and cut to have only the upper cards", () => {
        const deck = mockedDeck.DECK_5_ELEMENTS;
        const cutDeck = dealCards(deck, 3);
        expect(cutDeck).toEqual([1, 2, 3]);
    });
});

describe("rowsOfDeck", () => {
    it("slices the deck in 3 arrays of  7 elements", () => {
        const deck = mockedDeck.DECK_22_ELEMENTS;
        const deckInRows = rowsOfDeck(deck)
        expect(deckInRows).toEqual([[1, 2, 3, 4, 5, 6 ,7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21]]);
    });
});
