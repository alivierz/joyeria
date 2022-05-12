import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setProductThunk , setCategoryThunk} from "../../reducer-historial/actions/actions"
import SliderCompo from "../../component/sliders/slider"
import ItemShop from "../../component/itemShop/itemShop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import './shop.css'
import { set } from "react-hook-form"
const Shop = () =>{
    //? Estados para paginacion y demas cosas que se me ocurran
    const [min, setMin] = useState(0)
    const [max , setMax] = useState(4)
    const [ filter, setFilter ] = useState('')

    const dispatch = useDispatch()//*Despacho de la informacion de la api por redux Thunk

    //?efecto que hace la peticion desde la base de datos
    useEffect(() =>{
        dispatch(setProductThunk())
        dispatch(setCategoryThunk())
    }, [dispatch])

    //! consumo de la informacion del estado global
    const productArr = useSelector(state => state.products)
    const productCate = useSelector(state => state.category)

    //*Renderizados para los componentes en la app
    const fil = (value) =>{
        setFilter(value)
        setMin(0)
        setMax(4)
    }

    const navCategory = productCate.map((value) => <button key={value.id} className='btn-category' onClick={() => fil(value.name)}>{value.name}</button>)
    
    
    const filterArr = productArr.filter((value) => {
        if(filter === ''){
            return value
        }else{
            return value.category.name === filter
        }
    })


    const listItems = filterArr.map((value) => <ItemShop key={value.id} props={value}/>)
    //* Renderizado por paginacion
    const listPage = listItems.slice(min, max)

    //?funciones utiles
    const next = () =>{
        if(max >= filterArr.length){ return }
        setMax(max + 4)
        setMin(min + 4)
    }
    const prev = () =>{
        if(min <= 0){ return }
        setMax(max - 4)
        setMin(min - 4)
    }

     return(
        <main className="main">
            <div className="container-title">
                <div className="title">
                    <h2>Shopping the <span>Glamour</span></h2>
                </div>
                <SliderCompo/>
            </div>
            <nav className="category-nav">
                {navCategory}
            </nav>
            <div className="items-counter-shop">
                <div className="buttons-line">
                    <button onClick={prev} className='prev'><FontAwesomeIcon icon={faArrowLeft}/></button>
                    <button onClick={next} className='next'><FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
                <div className="list-items">
                  {listPage}  
                </div>
                <div className="buttons-line">
                    <button onClick={prev} className='prev'><FontAwesomeIcon icon={faArrowLeft}/></button>
                    <button onClick={next} className='next'><FontAwesomeIcon icon={faArrowRight}/></button>
                </div>
            </div>
        </main>
    )
}
export default Shop