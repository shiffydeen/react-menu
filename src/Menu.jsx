import React, { useState } from 'react'

export default function Menu({menuItems}) {
    return (
        <div className="section-center">
            {menuItems.map((menuItem) => {
                const {id, title, category, price, img, desc} = menuItem;
                return (
                    <article className="menu-item" key={id}>
                        <img src={img} alt={title} className="photo"/>
                        <div className="item-info">
                            <header>
                                <h5>{title}</h5>
                                <span className="item-price">
                                    ${price}
                                </span>
                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                )
            })}
               
        
        </div>
    )

}