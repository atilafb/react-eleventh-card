import './Deck.css';
import DeckCard from './DeckCard';
import { createDeck, dealCards, shuffle } from '../utils/DeckManager'
import { useState } from 'react'

function Deck() {
    const SLICE_LIMIT = 21

    const deck = createDeck()
    const shuffledDeck = shuffle(deck)
    const cutDeck = dealCards(shuffledDeck, SLICE_LIMIT)

    const [showDeck, setShowDeck] = useState(false)
    const [showShuffleDeck, setShowShuffleDeck] = useState(false)
    const [showCutDeck, setShowCutDeck] = useState(false)

    const handleShowDeckClick = () => {
        setShowDeck(!showDeck)
        setShowShuffleDeck(false)
        setShowCutDeck(false)
    }

    const handleShowShuffledDeckClick = () => {
        setShowShuffleDeck(!showShuffleDeck)
        setShowDeck(false)
        setShowCutDeck(false)
    }
  
      const handleShowCutDeckClick = () => {
        setShowCutDeck(!showCutDeck)
        setShowDeck(false)
        setShowShuffleDeck(false)
    }

    return (
        <>
            <div>
                <button onClick={() => handleShowDeckClick()}>Show Deck</button>
                <button onClick={() => handleShowShuffledDeckClick()}>Shuffle Deck</button>
                <button onClick={() => handleShowCutDeckClick()}>Cut Deck</button>
            </div>
            <div className='deck'>
                {showDeck && deck.map(({ suit, value }) => (
                <DeckCard key={ suit+value } suit={suit} value={value} />
                ))}
                {showShuffleDeck && shuffledDeck.map(({ suit, value }) => (
                <DeckCard key={ suit+value } suit={suit} value={value} />
                ))}
                {showCutDeck && cutDeck.map(({ suit, value }) => (
                <DeckCard key={ suit+value } suit={suit} value={value} />
                ))}
            </div>
        </>
    );
}

export default Deck;
