import React from 'react'
import Color from './Color'

function ColorCard(object) {
    return (
        <div className="colorsCard">
            {
                object.array.map((value,index)=>{
                    return(
                        <Color key={index} color={value} />
                    )
                })
            }
        </div>
    )
}

export default ColorCard