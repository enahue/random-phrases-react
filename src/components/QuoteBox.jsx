import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote,newQuote, color}) => {
  return (
    <div style={{color: color}} className="quoteBox">
      <i className='bx bxs-quote-left quoteBox__icon'></i>
      <p className="quotebox__quote">{quote.quote}</p>
      <h3 className="quoteBox__author">{quote.author}</h3>
      <QuoteButton newQuote = {newQuote} color = {color}/>
    </div>
  )
}

export default QuoteBox
