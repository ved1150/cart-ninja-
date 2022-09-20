import React from "react"
class CartItem extends React.Component{

    constructor(){
        super()
        this.state = {
            price : 1000,
            title : "phone" ,
             qty : 2,
             img :`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/
             JWAAAAA1BMVEWt2eZvScryAAAASElEQVR4nO3BMQEAAA
             DCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
             AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC`
        }
       
    }
        increaseQuantity =() => {

         this.setState((pre) => {
            return {
                qty: pre.qty + 1
            }  
         })
    }
    decreaseQuantity =() => {
        if (this.state.qty === 0){
            return ""
        }
         this.setState((pre) => {
           return {
               qty: pre.qty - 1
           } 
        })
   }
   delete =() => {
         this.setState((pre) => {
            return {
                qty: "",
                    
            }  
         })
    }

    render(){
        console.log("done")
        const {price ,title ,qty} =this.state
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={this.state.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize : 25}}>{title}</div>
                    <div style={{color : "#777"}}>Rs :{price}</div>
                    <div style={{color : "#777"}}>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        <img 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png"
                        width ="25px" 
                        className="action-icons"
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png"  
                        width ="25px" 
                        className="action-icons" 
                        onClick={this.decreaseQuantity}
                        />
                        <img 
                        src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
                        width ="25px"
                        className="action-icons" 
                        onClick={this.delete}
                         />
                    </div>
                </div>
            </div>
        )
    }
}

const styles ={
    image :{
        height : 50,
        margin : 50,
        borderRadius : 4,
        backgroundColor: "#777"
    }
}

export default CartItem