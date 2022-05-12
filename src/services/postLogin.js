import axios from "axios"

const URL = 'https://ecommerce-exercise-backend.herokuapp.com'


//? configuracion del post de productos y su autorizacion
const getConfig = () =>({
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})


//*crear y actualizar usuario
export const postUser = async (data) =>{ //? login de usuario
    const req = await axios.post(`${URL}/login/`, data)
    return req.data
}

export const registerUser = async (data) =>{ //* creacion de usuario
    const req = await axios.post(`${URL}/users/`, data)
    return req.data;
}


//*Servicio de los productos
export const getProducts = async () =>{
    const req = await axios.get(`${URL}/products/`, getConfig())
    return req.data
}
export const getCategory = async () =>{
    const req = await axios.get(`${URL}/categories/`, getConfig())
    return req.data
}
//*Peticion producto individual
export const getOneProduct = async (id) =>{
    const req = await axios.get(`${URL}/products/${id}/`, getConfig())
    return req.data
}
//* Agregar al carrito
export const addToCart = async (buy) =>{
    const req = await axios.post(`${URL}/products/add_to_cart/`, buy, getConfig())
    return req
}
export const getCart = async () =>{
    const req = await axios.get(`${URL}/cart/`, getConfig())
    return req.data
}
export const deleteItemCart = async (id) =>{
    const req = await axios.delete(`${URL}/cart/${id}/remove_item/`, getConfig())
    return req
}

//*comprar
export const buyCart = async () =>{
    const req = await axios.post(`${URL}/cart/buy/`,{}, getConfig())
    return req
}
