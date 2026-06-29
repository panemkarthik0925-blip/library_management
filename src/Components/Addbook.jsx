import React, { useRef, useState } from 'react';
import '../assets/Styles/addbook.css';

const AddBooks = () => {
   let formData=useRef()
   let handleSubmit=(e)=>{
      e.preventDefault()

    let addnewbook={
        title : formData.current[0].value,
        thumbnailUrl : formData.current[1].value,
        authors: [formData.current[2].value],
        categories:[formData.current[3].value]    
   }
    //  console.log(addnewbook)

    fetch('http://localhost:4000/books',   
        {
         method:'POST',
        'content-type':'application/json',
         body : JSON.stringify(addnewbook)
    }) 
    
   }

  return (
    <div className="book-container">
      <h2 className="book-heading">📚 Add New Books</h2>
      <form  className="book-form"  ref={formData}>
        <input
          type="text"
          placeholder="Book Title"
          className="book-input"
          required
        />
        <input
          type="text"
          placeholder="ImageUrl"
          className="book-input"
          required
        />  
        <input
          type="text"   
          placeholder="Author"
          className="book-input"
          required
        />
        <input
          type="text"
          placeholder="Category"
          className="book-input"
          required
        />
        
        <button  className="book-button"  onClick={handleSubmit}>Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;