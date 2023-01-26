import React, { useContext, useState } from 'react';
import Footer from '../Templates/Footer';
import Header from '../Templates/Header';
import { Button } from '@mui/material';
import ColorCards from './ColorCards';
import CombinePallete from './CombinePallete';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {colorContext} from '../../App'
import Color from './Color';

function Home() {
    let {colorList}=useContext(colorContext)
    let [isHistory, updateHistoryContainer] = useState(false)
    return (
        <>
            <div id="homePageContainer">
                <Header />
                <section className="landingPageImage">
                    <h1>Welcome to are Color Pallette</h1>
                    <p>You can Copy the color codes by just clicking on them</p>
                    <p>you can also see your recent used colors by clicking on history Button</p>
                    <Button variant='contained'>
                        <a href="#colors">
                            Select Now
                        </a>
                    </Button>
                </section>
                <ColorCards />
                <CombinePallete />
                {
                    isHistory ? (
                        <>
                        <div className="historyContainer">
                            {
                                Array.from(colorList).map((value,index)=>{
                                    return (
                                        <Color key={index} color={value}/>
                                    )
                                })
                            }
                        </div>
                        </>
                    ) : (
                        <>
                        </>
                    )
                }
                <Button variant='contained' className='align_center historyButton' onClick={() => updateHistoryContainer(!isHistory)}>{isHistory ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />} history</Button>
                <Footer />
            </div>
        </>
    )
}

export default Home