import React from 'react';
import productData from '../Data/ProductData';

const MainContent = () => {

    const listItem = productData.map((item) =>
        <div className="card" key = {item.id}>
            <div className="card_img">
                <img src = {item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.productName}</h2>
                <p>{item.descrption}</p>
                <p className="price">{item.price} <span>{item.currency}</span></p>
                <div className="btn">Add to cart</div>
            </div>
        </div>
    );

    return(
        <div className="main_content">
            <h3>HeadPhones</h3>
            {listItem}
        </div>
    );

}
export default MainContent;