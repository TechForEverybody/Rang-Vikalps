import React from 'react'
import Color from './Color'
import Colors from '../../Assets/Colors2.json'

function CombinePallete() {
    return (
        <div className='PalleteContainer' id='Pallattes'>
            {
                Object.keys(Colors).map((value,index)=>{
                    return (
                        <Color key={index} color={value}/>
                    )
                })
            }

        </div>
    )
}

export default CombinePallete