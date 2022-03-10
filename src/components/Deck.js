import './Deck.css';
import DeckRows from './DeckRows';
import { createDeck, dealCards, rowsOfDeck, shuffle } from '../utils/DeckManager'

function Deck() {
    const SLICE_LIMIT = 21

    const deck = createDeck()
    const shuffledDeck = shuffle(deck)
    const cutDeck = dealCards(shuffledDeck, SLICE_LIMIT)
    const deckInRows = rowsOfDeck(cutDeck)

    return (
        <div className='deck'>
            {deckInRows.map((array) =>
                <DeckRows key={array[0].value + array[0].suit} cards={array} />
            )}
        </div>
    );
}

export default Deck;
