import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue} from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img src="http://trashomfg.com/wp-content/uploads/2021/02/amazon.gif" alt="" className="checkout__ad" />
            {basket?.length===0 ? (
                <div>
                    <h2>Your Shoping cart is Empty</h2>
                    <p>You have not a item in ur cart. Please add a item</p>
                </div>
            ):(
                <div>
                <h2 className="checkout__title">Your Shoping Cart</h2>
                {
                    basket.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        />
                    ))
                }
                </div>
            )}
            </div>
            {basket.length>0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
