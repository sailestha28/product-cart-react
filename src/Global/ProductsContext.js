import React,{createContext,useState} from "react";

export const ProducstContext = createContext();

const ProductsContextProvider = () => {
    const [products] = useState([
       {id:1,name:'hero product zero',price: 99, info:"text"}, 
       {id:2,name:'hero product one ',price: 199, info:"text one "}, 
       {id:3,name:'hero product two',price: 299, info:"text two"}, 
       {id:4,name:'hero product three',price: 399, info:"text three"}, 
       {id:5,name:'hero product four',price: 499, info:"text four"}, 
    ]);
    return(

    )
}
export default ProductsContextProvider;