import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id={123456789}
                        title="Harry Potter and The Sorcerer's Stone"
                        price={9.09}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51SBx6jWilL._SX346_BO1,204,203,200_.jpg" />
                    <Product
                        id={234567890}
                        rating={4}
                        price={29.99}
                        title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
                        image="https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_UL320_SR320,320_.jpg" />
                </div>
                <div className="home__row">
                    <Product
                        id={345678901}
                        price={1099.00}
                        rating={3}
                        title="New Apple iPhone 12 Pro (256GB, Silver)"
                        image="https://m.media-amazon.com/images/I/71gquzn6vIL._AC_UL480_QL65_.jpg" />
                    <Product
                        id={456789012}
                        title="Nintendo Switch with Neon Blue and Neon Red Joy-Con"
                        rating={5}
                        price={355.00}
                        image="https://m.media-amazon.com/images/I/61JnrafZ7zL._AC_UY327_QL65_.jpg" />
                    <Product
                        id={567890123}
                        title="AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffe, 1 Liter, Silver"
                        rating={3}
                        price={24.99}
                        image="https://m.media-amazon.com/images/I/91oiSVwU7OL._AC_UL480_QL65_.jpg" />
                </div>
                <div className="home__row">
                    <Product
                        id={678901234}
                        price={1097.95}
                        rating={4}
                        title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" />
                </div>
            </div>

        </div>
    )
}

export default Home
