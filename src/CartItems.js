import React from "react"
class CartItem extends React.Component{

    constructor(){
        super()
        this.state = {
            price : 1000,
            title : "phone" ,
             qty : 2,
            //  img =""
        }
    }
        increaseQuantity =() => {
         console.log(this.state)
    }

    render(){
        const {price ,Phone ,qty} =this.state
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={this.state.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize : 25}}>{Phone}</div>
                    <div style={{color : "#777"}}>Rs :{price}</div>
                    <div style={{color : "#777"}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        <img 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png"
                        width ="25px" 
                        className="action-icons"
                        onClick={this.increaseQuantity}
                        />
                        <img src="https://cdn-icons-png.flaticon.com/128/992/992683.png"  width ="25px" className="action-icons" />
                        <img src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png" width ="25px" className="action-icons" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles ={
    image :{
        height : 110,
        margin : 110,
        borderRadius : 4,
        backgroundColor: "#777"
    }
}

export default CartItem