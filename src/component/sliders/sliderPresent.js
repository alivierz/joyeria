import { motion } from "framer-motion";
import './slide.css'

const SliderPersonal = ({img}) =>{


    //? Estados
    //*const [index, setIndex] = useState(0)

    //! metodos especiales
    
    const list = img.map((value) => <motion.div key={value.id} className='item-m'> <img src={value.url} alt=""  /></motion.div>)
    const limit = ((img.length - 1) * 337) * -1

    return(
        <motion.div  className='slider-container'>
            <motion.div className="slider-m" drag='x' dragConstraints={{right: -16, left: limit}} >
                {list}
            </motion.div>
        </motion.div>
    )
}

export default SliderPersonal