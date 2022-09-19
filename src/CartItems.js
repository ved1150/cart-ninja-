import React from "react"

class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize : 25}}>Phone</div>
                    <div style={{color : "#777"}}>Rs 900</div>
                    <div style={{color : "#777"}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* button 3 */}
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
    }
}

export default CartItem