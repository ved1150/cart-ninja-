import React from "react"

import CartItem from "./CartItems"

class Cart extends React.Component{
    constructor(){
        super()
        this.state = {
            products : [
                {price : 1000,
                title : "watch" ,
                 qty : 2,
                 img :`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/
                 JWAAAAA1BMVEWt2eZvScryAAAASElEQVR4nO3BMQEAAA
                 DCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC`,
                id : 1},
                {price : 18000,
                title : "phone" ,
                qty : 2,
                img :`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/
                JWAAAAA1BMVEWt2eZvScryAAAASElEQVR4nO3BMQEAAA
                DCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC`,
                id : 2},
                {price : 150000,
                title : "laptop" ,
                qty : 2,
                img :`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/
                JWAAAAA1BMVEWt2eZvScryAAAASElEQVR4nO3BMQEAAA
                DCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC`,
                id : 3}]
        }
       
    }
    render(){
        const {products} =this.state
        return(
        <div className="cart">
            {products.map((product) => {
               return  <CartItem products ={product} key = {product.id}/>
             })}
        </div>
        )
    }
}

export default Cart