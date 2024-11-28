import React, { useState } from 'react'

export default function Categories({items, filterItems}) {

    const otherCategories = new Set(items.map(item => item.category));


    const buttons = ['all', ...otherCategories]

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