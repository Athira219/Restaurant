import React, { useEffect } from 'react'
import { Row ,Col} from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch ,useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restSilce'

function Home() {
   const selector = useSelector((state)=>state.restSilce.restaurantArray)
   console.log('selector=',selector);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchRestaurant())

  },[])
  return (
    <>
     <Row>
   {selector.restaurants?.length>0?selector.restaurants.map(item=>(
     <Col  xs={12} sm={6} md={6} lg={4} xl={3}>
     <RestCard selector={item} />
     </Col>

)):
<p>Nothing to display</p>
   }
      
   </Row>
    </>
  )
}

export default Home
