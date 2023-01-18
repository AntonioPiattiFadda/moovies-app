import React from "react";
import axios from 'axios';

const useGetProducts = (API)=> {
    const [products, setProducts] = React.useState([]);

	React.useEffect(async () => {
	  const response = await axios(API);
	  setProducts(response.data)
	}, [])
	// Anteriormente products era conociedo por el resto de los componentes. En este caso lo tengo que retornar.
    return products;

}

export default useGetProducts;