import { DeckCard } from "./DeckCard"

export const DeckRows = ({ slicedDeck }) => {
  return (
    <div className="deck">
      {
        slicedDeck.map((item) => {
          return <DeckCard key={item.suit + item.value} suit={item.suit} value={item.value} />
        })
      }
    </div>
  )
}
