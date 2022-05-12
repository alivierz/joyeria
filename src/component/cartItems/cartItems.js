import './cartItems.css'

const CartItems = ({arr, delet}) =>{
    return(
        <div className='container-item-cart'>
            <div className='title-cart'>
                <h3>{arr.product.name}</h3>
                <img src={arr.product.images[0].url} alt="" /> 
            </div>
            <div className='button-cart'>
               <span>Have: {arr.quantity}</span>
               <button onClick={() => delet(arr.id)}>delete</button> 
            </div>
        </div>
    )
}

export default CartItems