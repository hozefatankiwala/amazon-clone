import React from 'react'
import "./Product.css"
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';
function Product({ id, title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();
    const addToCart = () => {
        //dispatch some ACTION
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon />
                    ))}
                </div>
            </div>
            <img src={image}></img>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
