import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import './itemShop.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemShop = ({props}) => {
    //?Estado de cambio de imagen
    let [counter , setCounter] = useState(0)
    const item ={
        name: props.name,
        description: props.description,
        img: props.images, //*esto es un arreglo
        cate: props.category.name,
        price: props.price
    }
    //! configuracion de mi slider
   const next = () =>{
        if(counter >= item.img.length - 1){ counter = -1}
        setCounter(counter + 1)        
   }

    //const list = item.img.map((value) =>  <img key={value.id} src={value.url} alt='' className='imagen'/> )

    return(
        <div className='item-container'>
            <h3>{item.name}</h3>
            <div className='counter-img-item'>
            <img src={item.img[counter].url} alt=""  className='imagen'/>
            <div className='arrows'>
                <FontAwesomeIcon icon={faGem} className='arrow' onClick={next}/>
            </div>
            </div>
            <div className='price'>{item.price}$</div>
            <div className='link-personal'>
                <Link to={`/shop/${props.id}`} >VIEW MORE</Link>
            </div>
        </div>
    )
}
export default ItemShop