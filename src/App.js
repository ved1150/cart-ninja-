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
             qty : 0,
             img :"https://cdn-icons-png.flaticon.com/512/3109/3109881.png",
            id : 1},
            {price : 18000,
            title : "phone" ,
            qty : 0,
            img :"https://cdn-icons-png.flaticon.com/512/3415/3415074.png",
            id : 2},
            {price : 150000,
            title : "laptop" ,
            qty : 0,
            img :"https://cdn-icons-png.flaticon.com/512/2888/2888701.png",
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

totalAmount = () => {
  let totalAmountOfProducts =0;
  const {products} =this.state

  products.forEach((product) => totalAmountOfProducts += (product.price * product.qty) )
 
  return totalAmountOfProducts

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
      <div style={{fontSize :20 }}>TOTAL:{this.totalAmount()}</div>
    </div>
  );
}
}

export default App;