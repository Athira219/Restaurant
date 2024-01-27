import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function RestCard({selector}) {
  
  return (
  <>
    
      <Link to={`/restview/${selector.id}`} style={{textDecoration:'none'}}>
    
      <Card style={{ width: '18rem',height:'40rem' }} className='mt-5'>
     <Card.Img className='w-100'  variant="top" src={selector.photograph} />
     <Card.Body>
       <Card.Title style={{overflowY:'hidden'}} className='text-center text-warning'>{selector.name}</Card.Title>
       <hr/>
       <Card.Text className='d-flex justify-content-between'>
        <p>{selector.neighborhood}</p>
        <p>Cusine Type:{selector.cuisine_type}</p>
       </Card.Text>
      
     </Card.Body>
   </Card>
  </Link>

     
  </>
  
   
   
  )
}

export default RestCard
