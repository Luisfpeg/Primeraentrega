import React from "react";
import IMG from "../../images/img02.jpeg";
export const productoItem = ({
                id,
                title,
                price,
                image,
                category,
                cantidad
            }) =>{

                 {
                    console.log(image.default)
                }
    return(
        <div>
           <div className="producto">
        < a href="#"> 
        <div className="producto__img">
        <img src={image.default} alt={title} />
        </div>
        </a>
        <div className="producto__footer">
            <h1>{title}</h1>
            <p>{category}</p>
            <p className="price">$price</p>
        </div>
        <div className="buttom">
           <button className="btn">
            Aañadir al carrito        
            </button> 
            <div>
                <a href="#" className="btn">Vista</a>
            </div>
        </div>
        </div> 
        </div>
    )
}