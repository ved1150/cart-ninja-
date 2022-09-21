import React from "react"

import CartItem from "./CartItems"

const Cart = (props) =>{
   
        const {products} =props
        return(
        <div className="cart">
            {products.map((product) => {
               return  <CartItem
                products ={product}
                key = {product.id}
                increaseQuality = {props.increaseQuality}
                decreaseQuality = {props.decreaseQuality}
                deleteProduct = {props.deleteProduct}
                />
             })}
        </div>
        )
    }


export default Cart