import React, { useState } from 'react'
import '../assets/Styles/books.css'
import {  useNavigate } from 'react-router-dom'
const Books = () => {
   let [books,setbooks]= useState([])
   let navigate=useNavigate()



    let fetchbookapi=async()=>{
      let apiData=await fetch('http://localhost:4000/books')
      let jsondata=await apiData.json()
    //   console.log(jsondata);
      setbooks(jsondata);
      
    }
    fetchbookapi()

    let deletebook=(id)=>{
        let bool=window.confirm('Do You Want to delet the book')
        bool? fetch(`http://localhost:4000/books/${id}`,{method : "DELETE"})
        :alert('no books deleted')
    }
    let readbook=(id)=>{
      navigate(`/portal/readbook/${id}`)
    }
    let addcart=(book)=>{
      let cartbool=window.confirm('Do you want add this book to cart')
      if (cartbool){
      fetch(`http://localhost:4000/cartitems`,
         {method:'POST',
          'Content-type':'application/json',
          body : JSON .stringify(book)
        }
        )

    }
    else{
      alert('Book is not added to cart')
    }
    }
  return (
    <>
    <div className="book">
        <h2>BOOKS DATA</h2>
        <div className="container">
            {
            books.map((elem)=>{
                let {id,title,thumbnailUrl,authors,categories}=elem
                return(

                    <>
                       <div className="card">
                        <div className="image">
                            <img src={thumbnailUrl} alt="" />
                        </div>
                        <div className='title'>{title}</div>
                        <div className='authors'>Author:{authors}</div>
                        <div className='categories'>{categories}</div>
                        <div className="btn">
                          <button onClick={()=>addcart(elem)}>ADD TO CART</button>
                            <button onClick={()=>deletebook(id)}> Delete</button>
                           <button onClick={()=>{
                            readbook(id)
                          }}>READ</button>
                        </div>
                       </div>
                    </>
                )
            })
            }
        </div>
    </div>
    
    </>
  )
}

export default Books