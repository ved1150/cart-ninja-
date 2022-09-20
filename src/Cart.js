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
                 img :"",
                id : 1},
                {price : 18000,
                title : "phone" ,
                qty : 2,
                img :"",
                id : 2},
                {price : 150000,
                title : "laptop" ,
                qty : 2,
                img :"",
                id : 3}]
        }
       
    }
    incQnty= (product) =>{
       
       const {products} = this.state
       const index = products.indexOf(product)
       console.log(index)
       products[index].qty += 1
       this.setState({
       products
    })
}
    render(){
        const {products} =this.state
        return(
        <div className="cart">
            {products.map((product) => {
               return  <CartItem
                products ={product}
                key = {product.id}
                inc = {this.incQnty}
                />
             })}
        </div>
        )
    }
}

export default Cart