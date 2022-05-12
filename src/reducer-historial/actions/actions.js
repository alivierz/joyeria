import { getProducts, getCategory, getCart } from "../../services/postLogin"

export const actions =  {
    productSetAll : "@product/setAll",
    productsCategory: "@category/setAll",
    productCart: "@cart/setAll"
}

export const productSetAll = (data) => ({
    type : actions.productSetAll,
    payload: data
})

export const productsCategory = (data) =>({
    type: actions.productsCategory,
    payload: data
})
export const productsCart = (data) =>({
    type: actions.productCart,
    payload: data
})

//! ACCION ASINCRONA

export const setProductThunk = () => { //*asincronismo de pedidada de productos
    return (dispatch) => {
        getProducts()
            .then((res) => {
                dispatch(productSetAll(res))
            })
    }
}

export const setCategoryThunk = () =>{ 
    return(dispatch) =>{
        getCategory().then((res) =>{
            dispatch(productsCategory(res))
        })
    }
}
export const setCartThunk = () => { //*asincronismo de pedidada de productos
    return (dispatch) => {
        getCart()
            .then((res) => {
                dispatch(productsCart(res))
            })
    }
}