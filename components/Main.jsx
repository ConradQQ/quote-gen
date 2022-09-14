/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useCallback } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';




const Main = () => {

 const [quote, setQuote] = useState('Fortune favours the bold')
 const [author, setAuthor] = useState('Anonymous')

 const fetchQuote = useCallback(() => {
  fetch('https://type.fit/api/quotes')
 .then(response => response.json())
 .then((data) => {
    let randomIndex = Math.floor((Math.random() * data.length));

    setQuote(data[randomIndex].text)
    setAuthor(data[randomIndex].author)
    
  })
 .catch(err => console.error(err));
}, []);

useEffect(() => {
  fetchQuote()
}, [fetchQuote])
  

  return (
    <div id='main' className='grid place-items-center h-screen w-screen text-center p-2'>
     {/* Quote Gen Container */}
     <div className='flex flex-col mx-auto bg-[#1AD7EF] w-fit h-fit text-black shadow-xl shadow-black space-y-3 p-16 rounded-3xl relative mb-20 md:mb-0 md:w-3/4 md:h-2/4 lg:w-2/4'>
     
      <div className='hidden md:block md:text-4xl'>
        <FaQuoteLeft />
      </div>
    <div className='space-y-10'>
       <div className={quote == null 
       ? null
       : quote.length >= 100
       ? 'pt-10 font-[roboto] md:text-xl text-lg'
       :'pt-10 font-[roboto] text-xl'}>
        <h4 className='font-bold' id="text">{`"${quote}"`}</h4>
      </div>
       <div>
        <p className='font-[roboto] font-bold text-lg' id="author">{author !== null 
        ? `- ${author}`
        : `- Anonymous`
        }
        </p>
      </div>
    </div> 
      <div className='self-end hidden md:block md:text-4xl'>
        <FaQuoteRight />
      </div>
      <div id="button" className='pt-5'>
        <button onClick={fetchQuote} className='bg-black text-white rounded-xl p-2 font-bold font-[roboto]'>New Quote</button>
      </div>
     </div>
    </div>
  )
}

export default Main