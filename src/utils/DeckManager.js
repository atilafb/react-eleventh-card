const DECK_VALUES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const DECK_SUITS = ['♠', '♥', '♦', '♣'];

export function createDeck(values = DECK_VALUES, suits = DECK_SUITS){
    return suits.flatMap((suit) => values.map(value => ({suit: suit, value: value})));
}

export function shuffle(deck){
    return [...deck].sort(() => Math.random() - 0.5)
}

export function dealCards(deck, upper){
    return [...deck].slice(0, upper)
}

export function rowsOfDeck(deck){
    const rowOne = deck.slice(0, 7)
    const rowTwo = deck.slice(7, 14)
    const rowThree = deck.slice(14, 21)

    return [rowOne, rowTwo, rowThree]
}
