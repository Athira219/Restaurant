import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';



function Review({restReview}) {
    const [open, setOpen] = useState(false);
   
   


  return (
    <>
       
      <button onClick={() => setOpen(!open)} className='btn btn-warning' >click Here to see the Reviews</button>
     
      <Collapse in={open}>
        <div >{restReview?.length>0?restReview?.map(item=>(
          <>
           <hr />
           <p>Name {item.name}</p>
           <p>Date {item.date}</p>
           <p>Rating {item.rating}</p>
           <p>Comments{item.comments}</p>
           
           </>
         )) :
         <p>nothing to display</p>  
         }
        
        </div>
      </Collapse>
      
    </>
  )
}

export default Review
