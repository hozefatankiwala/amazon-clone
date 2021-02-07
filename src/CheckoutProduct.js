import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';
import StarIcon from '@material-ui/icons/Star';
function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}></img>
            <div className="checkoutProduct__info">
                <div className="checkoutProduct__infoHead">
                    <p className="checkoutProduct__title">{title}</p>
                    <p className="checkoutProduct__price"><strong>${price}</strong></p>
                </div>
                <p className="checkoutProduct__availability">In Stock</p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon className="star" />
                    ))}
                </div>
                <button onClick={removeFromCart} >Delete</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
