import { Deck, createDeck, setupShuffledDeckMap, setupCutDeckMap } from '../components/Deck'

describe("setupShuffledDeckMap", () => {
    it("shuffles the entire deck and check if all cards are still there", () => {
        let deckMap = createDeck();
        let shuffleDeck = setupShuffledDeckMap(deckMap);
        expect(shuffleDeck).toHaveLength(52);
    });
    it("shuffled deck is not equal original deck", () => {
        let deckMap = createDeck();
        let shuffleDeck = setupShuffledDeckMap(deckMap);
        expect(shuffleDeck).not.toEqual(deckMap);
    });
});

describe("setupCutDeckMap", () => {
    it("shuffles the deck and cut to have only 21 cards", () => {
        let deckMap = createDeck();
        let cutDeck = setupCutDeckMap(deckMap);
        expect(cutDeck).toHaveLength(21);
    });
});
