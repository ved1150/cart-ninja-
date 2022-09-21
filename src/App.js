import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
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
increaseQuality = (product) =>{
   
   const {products} = this.state
   const index = products.indexOf(product)
   products[index].qty += 1
   this.setState({
   products
})
}
decreaseQuality = (product) =>{
    
    const {products} = this.state
    const index = products.indexOf(product)

    if ( products[index].qty === 0){
        return 
    }
    products[index].qty -= 1
    this.setState({
    products
})
}
deleteProduct = (id) => {
    console.log("id" ,id)
    const {products} =this.state

    const items = products.filter((item) => id !== item.id)
    this.setState({
        products : items
    })
    
}

countItems = () => {
  let count = 0
  const {products} =this.state

  products.forEach((product) => count += product.qty )

  return count
}
  render(){
    const { products } = this.state;
  return (
    <div className="App"> 
    <Navbar count={this.countItems()} />
    < Cart 
    products={products}
    increaseQuality = {this.increaseQuality}
    decreaseQuality = {this.decreaseQuality}
    deleteProduct = {this.deleteProduct}
    />
    </div>
  );
}
}

export default App;