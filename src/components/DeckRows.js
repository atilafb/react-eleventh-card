import DeckCard from "./DeckCard"

const DeckRows = ({ cards }) => {
  return (
    <div className="deck-row">
      {
        cards.map((item) => {
          return <DeckCard key={item.suit + item.value} {...item} />
        })
      }
    </div>
  )
}

export default DeckRows;
