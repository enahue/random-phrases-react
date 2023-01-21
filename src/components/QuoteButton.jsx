import React from 'react'

const QuoteButton = ({newQuote, color}) => {
  return (
    <div>
      <button onClick={newQuote} style={{backgroundColor: color}} className="quoteBox__button">
        <i className='bx bx-chevron-right'></i>
      </button>
    </div>
  )
}
export default QuoteButton