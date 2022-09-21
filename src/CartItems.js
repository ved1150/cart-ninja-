import React from "react"
class CartItem extends React.Component{


    render(){
        const {price ,title ,qty,img} =this.props.products
        const {products ,increase ,decrease ,deleteItem } = this.props
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={img} alt=""/>
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
                        alt="in"
                        onClick={() => increase(products)}
                        />
                        <img 
                        src="https://cdn-icons-png.flaticon.com/128/992/992683.png"  
                        width ="25px" 
                        className="action-icons" 
                        alt="de"
                        onClick={() => decrease(products)}
                        />
                        <img 
                        src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
                        width ="25px"
                        alt="delete"
                        className="action-icons" 
                        onClick={() => deleteItem(products.id)}
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