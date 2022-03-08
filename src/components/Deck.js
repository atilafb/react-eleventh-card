import './Deck.css';
import { useState } from 'react'

function Deck() {
    const VALUES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const SUITS = ['♠', '♥', '♦', '♣'];
    const deck = SUITS.flatMap((suit) => VALUES.map(value => ({suit: suit, value: value})));
    const deckMap = deck.map(({suit, value}) => ( <div key={ suit+value } className='card'> { value }{ suit } </div>))

    const originalDeck = [...deckMap]
    const shuffledDeck = [...deckMap].sort(() => Math.random() - 0.5)
    const cutDeck = [...shuffledDeck].slice(0,21)

    
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
