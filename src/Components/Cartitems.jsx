import React, { useState } from 'react'

const Cartitems = () => {
    let [cart,setCard]=useState([])
    let card=async()=>{
        let bookapi=await fetch(`http://localhost:4000/cartitems`)
        let card=await bookapi.json()
        console.log(card);
        setCard(card)
        

    }
    card()
    // let {title,thumbnailUrl,longDescription}=cart
  return (
    <>
         <table>
            <thead>
            <tr>
                <td>Sl.no</td>
                <td>title</td>
                <td>images</td>
                <td>authors</td>

            </tr>
            </thead>
        <tbody>
            {cart.map((ele)=>{
                let{title,thumbnailUrl,authors}=ele
                return(
                    <tr>
                        <td></td>
                        <td>{title}</td>
                        <td><img src={thumbnailUrl} alt="" /></td>
                        <td>{authors}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
       
    </>
  )
}

export default Cartitems