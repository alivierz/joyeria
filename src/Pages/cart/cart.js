import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCartThunk } from "../../reducer-historial/actions/actions"
import CartItems from "../../component/cartItems/cartItems"
import './cart.css'
import { deleteItemCart, buyCart } from "../../services/postLogin"

const Cart = () =>{

    const dispatch = useDispatch()//* mandar info de mi carrito
    const [id, setId] = useState(0)
    const [buy, setBuy] = useState(false)
    useEffect(()=>{
        dispatch(setCartThunk())
        if(id !== 0){
            deleteItemCart(id).then((res)=>{
                setId(0)
            })
        }
        if(buy){
            buyCart().then(() =>{
                setBuy(false)
            })
        }

    }, [dispatch, id, buy])
    

    const cart = useSelector(state => state.cartList)
    const list = cart.map((value) => <CartItems key={value.id} arr={value} delet={setId} />)
    const total = cart.map((value) => value.product.price * value.quantity)
    let val = 0;
    total.forEach(element => {
        val += element
    });
    const Buying = () =>{
        setBuy(true)
    }
    return(
        <div>
            <div className="container-cart">
                <h2>Your Cart</h2>
                <button onClick={Buying}>Buy a total of {val}$</button>
            </div>
            <div className="items-cart">
                {cart.length ? list : <h3>CART ALONE</h3>}
            </div>
        </div>
        
    )
}
export default Cart