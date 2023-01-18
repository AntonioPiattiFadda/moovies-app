import React from "react";

//Al principio el carrito esta vacio.
const initialState = {
    cart: []
}

const useInitialState = ()=>{
    const [state, setState] = React.useState(initialState);

    // Se le llama payload por convencion al producto que se agrega al carrito
    const addToCart = (payload) =>{
        setState({
            // Le digo que mantenga lo que esta en el estado y ademas le sume lo de  que le indico en cart.
            ...state,
            cart : [...state.cart, payload] // ACa le digo que mantenga la info de cart  y que le agregue el producto que seleccionaron.
        })
    }
    const removeFromCart = (payload) =>{
        setState({
            ...state,
            // El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
            cart : [...state.cart.filter(item => item.id !== payload.id)] 
        })
        console.log(payload);
    }
   
    return{
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;



