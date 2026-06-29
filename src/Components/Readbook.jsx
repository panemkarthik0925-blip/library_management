import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/Styles/readbook.css'
const ReadBook = () => {
    let params=useParams()
    let bookId=params.id
    // console.log(params)
    let[book,setBook]=useState({})

    let fetchSinglebook= async () => {
      let bookApi= await fetch(`http://localhost:4000/books/${bookId}`)
      let singleBook = await bookApi.json()
      setBook(singleBook);
    }
    fetchSinglebook()
    // console.log(book)
    let {title,thumbnailUrl,longDescription}=book

  return (
    <>
    <div className="readbooks">
      <div className="image"><img src={thumbnailUrl} alt="" /></div>
      <div className="title"><h4>TITLE : </h4>{title}</div>
      <div className="long"> <h4>LONG DESCRIPTION : </h4>{longDescription}</div>
    </div>
    </>
  )
}

export default ReadBook