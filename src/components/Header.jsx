import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import rest from '../aaset/rest-removebg-preview.png'
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restSilce';



function Header() {
 const dispatch = useDispatch()
  return (
    <div >
      <Navbar className="container-fluid bg-dark px-5 d-flex  justify-content-between">


        <div className='d-flex'>
          <img
            alt=""
            src={rest}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{' '}


          <h4 style={{ overflowY: 'hidden' }}> <span className='text-warning '> Food </span>Circle</h4>

        </div>
        <input onChange={(e)=>dispatch(search(e.target.value))} type="text" className='form-control w-25 ms-2 ' placeholder='Search...' />




      </Navbar>

    </div>
  )
}

export default Header
