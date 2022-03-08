import './Deck.css';
import { useState } from 'react'

export function createDeck(){
    const VALUES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const SUITS = ['♠', '♥', '♦', '♣'];
    const deck = SUITS.flatMap((suit) => VALUES.map(value => ({suit: suit, value: value})));
    return deck.map(({suit, value}) => ( <div key={ suit+value } className='card'> { value }{ suit } </div>))
}

export function setupShuffledDeckMap(deck){
    return [...deck].sort(() => Math.random() - 0.5)
}

export function setupCutDeckMap(deck){
    return [...deck].slice(0,21)
}

function Deck() {
    const deckMap = createDeck()

    const originalDeck = [deckMap]
    const shuffledDeck = setupShuffledDeckMap(deckMap)
    const cutDeck = setupCutDeckMap(shuffledDeck)

    
    const [showDeck, setShowDeck] = useState(false)
    const [showShuffleDeck, setShowShuffleDeck] = useState(false)
    const [showCutDeck, setShowCutDeck] = useState(false)

    return (
        <>
        <div>
            <button onClick={() => {setShowDeck(!showDeck) 
                                    setShowShuffleDeck(false) 
                                    setShowCutDeck(false)}}>Show Deck</button>

            <button onClick={() => {setShowShuffleDeck(!showShuffleDeck)
                                    setShowDeck(false) 
                                    setShowCutDeck(false)}}>Shuffle Deck</button>

            <button onClick={() => {setShowCutDeck(!showCutDeck)
                                    setShowDeck(false) 
                                    setShowShuffleDeck(false)}}>Cut Deck</button>
        </div>
        <div className='deck'>
            {showDeck && originalDeck}
            {showShuffleDeck && shuffledDeck}
            {showCutDeck && cutDeck}
        </div>
        </>
    );
}

export default Deck;
