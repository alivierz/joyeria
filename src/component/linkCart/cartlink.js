
import './kart.css'
import { Link } from 'react-router-dom'

const CartLink = () =>{

    return(
        <div className="fixed"> 
            <Link to='/cart' className='link-cart'>
                Go to Cart
            </Link>
        </div>
    )
}


export default CartLink