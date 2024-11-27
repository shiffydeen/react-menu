import React, { useState } from 'react'

export default function Categories({items, filterItems}) {

    const buttons = ['all', ...new Set(items.map(item => item.category))]

    return (

        
        <div className="btn-container">
          {buttons.map((button, index) => {
            return (
                <button 
                type="button"
                className="filter-btn"
                key={index}
                onClick={() => filterItems(button)}>
                    {button}
                </button>
            )
          })}
        </div>
    )
}