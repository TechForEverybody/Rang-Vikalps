import React, { useEffect, useState } from 'react'
import Colors from '../../Assets/Colors.json'
import ColorCard from './ColorCard'

function ColorCards() {
    let [colors, updateColors] = useState([])
    useEffect(() => {
        for (let index = 0; index < Colors.length; index++) {
            let randomIndex=parseInt(Math.random()*(Colors.length-1))
            const element = Colors[index];
            Colors[index] = Colors[randomIndex];
            Colors[randomIndex] = element;            
        }
        let temp=[]
        for (let index = 0; index < Colors.length-8; index++) {
            let array = []
            for (let jindex = 0; jindex < 9; jindex++) {
                array.push(Colors[index].name)
                index++
            }
            temp.push(array)
        }
        updateColors(temp)
    }, [])
    return (
        <div className='CardsContainer' id='colors'>
            {
                colors.map((value, index) => {
                    return (
                        <ColorCard key={index} array={value}/>
                    )
                })
            }
        </div>
    )
}

export default ColorCards