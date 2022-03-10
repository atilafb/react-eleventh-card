export const DeckCard = ({suit, value}) => {
    return (<span key={ suit+value } className='card'> { value }{ suit } </span>)
  }
