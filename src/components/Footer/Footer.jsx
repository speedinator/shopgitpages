import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>

                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Cookies</span>
                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam quos quod blanditiis, necessitatibus ex iste accusantium,
                        provident ea unde sed obcaecati vero sit! Vitae, molestias!
                        Odio, molestiae beatae. Dignissimos, ipsam?
                    </span>

                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam quos quod blanditiis, necessitatibus ex iste accusantium,
                        provident ea unde sed obcaecati vero sit! Vitae, molestias!
                        Odio, molestiae beatae. Dignissimos, ipsam?
                    </span>

                </div>

            </div>
            <div className="bottom">
                <div className="left">
                    <span className='logo'>Stacky Store</span>
                    <span className='copyright'>© Copyright 2023. Stacky Store</span>

                </div>
                <div className="right">
                    <img src="/img/payment.png"></img>
                </div>
            </div>



        </div>

    )
}

export default Footer