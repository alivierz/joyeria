import { actions } from "../actions/actions";

const INITIAL_STATE = {
    products: [],
    category: [],
    cartList: []
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actions.productSetAll:
            return {
                ...state,
                products: action.payload
            }
        case actions.productsCategory:
            return{
                ...state,
                category: action.payload
            }
        case actions.productCart:
            return{
                ...state,
                cartList: action.payload
            }
        default: return state}
}


export default rootReducer;