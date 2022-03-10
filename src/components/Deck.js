import './Deck.css';
import { DeckRows } from './DeckRows';
import { createDeck, dealCards, rowsOfDeck, shuffle } from '../utils/DeckManager'
import { useState } from 'react'

function Deck() {
    const SLICE_LIMIT = 21

    const deck = createDeck()
    const shuffledDeck = shuffle(deck)
    const cutDeck = dealCards(shuffledDeck, SLICE_LIMIT)
    const deckInRows = rowsOfDeck(cutDeck)

    const [showCutDeck, setShowCutDeck] = useState(true)

    const handleShowCutDeckClick = () => {
        setShowCutDeck(!showCutDeck)
    }

    return (
        <>
            <div>
                <button onClick={() => handleShowCutDeckClick()}>Cut Deck</button>
            </div>
            <div>
                {deckInRows.map((array) => 
                    <DeckRows key={array[0].value + array[0].suit} slicedDeck={array} />
    )}
            </div>
        </>
    );
}

export default Deck;
