import React from 'react'
import { Row,Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Review from '../components/Review';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



function Restview({selector}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {id} = useParams()
  console.log(id);
  const allrest = useSelector((state)=>state.restSilce.restaurantArray.restaurants)

  console.log('allrest=',allrest);

  const selectRestaurant = allrest.find(item=>item.id==id)
  console.log('selectRestaurant=',selectRestaurant);

  //-----------loop-----------//

//   let selectRestaurant;

//   for(var i=0; i < allrest.length;i++){
//     if(allrest[i].id == id){
//  selectRestaurant = allrest[i]



//     }

//   }
//   console.log('selectRestaurant=',selectRestaurant);
  

  return (
    <div >
      <Row className='mt-5'>
        <Col md={1}></Col>
        <Col md={3}>
          <img height={'400 rem'} className='w-100 rounded ' src={selectRestaurant.photograph} alt="" />

        </Col>
        <Col md={7}>
          <hr />
          <h4 style={{overflowY:'hidden'}} className='text-center'> <span className='text-warning'>RESTRURANT   </span> DETAILS </h4>
          <hr />
          <ListGroup>
      <ListGroup.Item className='text-center py-4'>{selectRestaurant.name}</ListGroup.Item>
      <ListGroup.Item>Neighborhood : {selectRestaurant.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine type : {selectRestaurant.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address{selectRestaurant.address}</ListGroup.Item>
      <ListGroup.Item className='text-center'>
        <button onClick={handleShow} className='btn btn-warning me-2'>Operation Hours</button>
       

       
       
      <Review restReview={selectRestaurant.reviews} />
      </ListGroup.Item>
      
      
      
    </ListGroup>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
        </Modal.Header>
        <ListGroup>
      <ListGroup.Item>Monday : {selectRestaurant.operating_hours.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday :{selectRestaurant.operating_hours.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday :{selectRestaurant.operating_hours.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday :{selectRestaurant.operating_hours.Thursday}</ListGroup.Item>
      <ListGroup.Item>Fridday : {selectRestaurant.operating_hours.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday : {selectRestaurant.operating_hours.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday : {selectRestaurant.operating_hours.Sunday}</ListGroup.Item>
    </ListGroup>
        
      </Modal>

        </Col>
        <Col md={1}></Col>
      </Row>

     
    </div>
  )
}

export default Restview
