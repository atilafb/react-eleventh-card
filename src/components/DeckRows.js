import DeckCard from "./DeckCard"

const DeckRows = ({ cards }) => {
  const handleClick = () => {
    console.log("fui clicado")
  }

  return (
    <div className="deck-row">
      <button onClick={() => handleClick()}>Row of my card</button>
      {
        cards.map((item) => {
          return <DeckCard key={item.suit + item.value} {...item} />
        })
      }
    </div>
  )
}

export default DeckRows;
