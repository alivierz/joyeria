import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneProduct } from "../../services/postLogin"
import SliderPersonal from "../../component/sliders/sliderPresent"
import './product.css'
import { useSelector } from "react-redux"
import { addToCart } from "../../services/postLogin"
import CartLink from "../../component/linkCart/cartlink"

const Product = () =>{
    const productArr = useSelector(state => state.products)


    //* Parametros de navegacion y el ID
    const {id} = useParams()
    //? Estados adaptables
    const [name , setName] = useState('')
    const [categor , setCateory] = useState('')
    const [img , setImg] = useState([])
    const [ price, setPrice] = useState('')
    const [des , setDes] = useState('')
    const [idp, setIdp] = useState(0)

    //? estados carrito
    const [counter, setCounter] = useState(0)
    const [sure, setSure] = useState(false)
    const [add , setAdd] = useState({})

    useEffect(() =>{
        getOneProduct(id).then((res)=>{
            setName(res.name)
            setCateory(res.category.name)
            setDes(res.description)
            setPrice(res.price)
            setImg(res.images)
            setIdp(res.id)
        })
    }, [id])

    useEffect(()=>{
        if(add.product){
            addToCart(add).then((res)=>{
                console.log(res)
                setSure(false)
                setCounter(0)
            })
        }
    }, [add])


    const categoryFill = productArr.filter((value) => value.category.name === categor)
    const list = categoryFill.map((value) => <img key={value.id} src={value.images[0].url} alt=''/>)


    //? Funcion de enviar al carrito
    const addCart = () =>{
        if(counter > 0){
            if(sure){
                setAdd({product: idp, quantity: counter})
            }
        }
    }

    return(
        <div>
            <CartLink/>
            <section className="section">
                <div className="profile">
                    <h2>{name}</h2>
                    <p>{des}</p>
                    <span>{price}-$</span>
                </div>
                <SliderPersonal img={img}/>
            </section>
            <div className="buy-container">
                <h4>ADD to Card</h4>
                <div className="counter">
                    <div>
                       <button onClick={() => setCounter(counter + 1)}>+</button>
                        <button onClick={() => counter > 0 ? setCounter(counter - 1) : ''}>-</button> 
                    </div>
                    <span>{counter}</span>
                </div>
                <div className="sure">
                   <button onClick={() => setSure(!sure)}>Sure of your build?</button>
                    <div className={sure ? 'green' : 'red'}></div> 
                </div>
                <button className="add" onClick={() => addCart()}>ADD</button>
            </div>
            <h3 style={{textAlign: 'center'}}>Others {categor}</h3>
            <div className="others">
                {list}
            </div>
        </div>
    )
}

export default Product