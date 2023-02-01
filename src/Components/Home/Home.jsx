import React, { useContext, useState } from 'react';
import Footer from '../Templates/Footer';
import Header from '../Templates/Header';
import { Button } from '@mui/material';
import ColorCards from './ColorCards';
import CombinePallete from './CombinePallete';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { colorContext } from '../../App'
import Color from './Color';

function Home() {
    let { colorList } = useContext(colorContext)
    let [isHistory, updateHistoryContainer] = useState(false)
    let [leftNavigation,updateLeftNavigation]=useState(false)
    return (
        <>
            <div id="homePageContainer">
                <Header />
                <section className="landingPageImage">
                    <h1>Welcome to are Color Pallette</h1>
                    <p>You can Copy the color codes by just clicking on them</p>
                    <p>you can also see your recent used colors by clicking on history Button</p>
                    <Button variant='contained'>
                        <a href="#colorcards">
                            Select Now
                        </a>
                    </Button>
                </section>
                <div className={`leftNavigation ${leftNavigation?"openLeftNavigation":""}`} onClick={()=>updateLeftNavigation(!leftNavigation)}>
                    <a onClick={()=>updateLeftNavigation(false)} href="#colorcards">Color Cards</a>
                    <a onClick={()=>updateLeftNavigation(false)} href="#Pallattes">Color Pallette</a>
                    <a onClick={()=>updateLeftNavigation(false)} href="#blueshades">Blue Shades</a>
                    <a onClick={()=>updateLeftNavigation(false)} href="#redshades">Red Shades</a>
                    <a onClick={()=>updateLeftNavigation(false)} href="#greenshades">Green Shades</a>
                </div>
                <ColorCards />
                <CombinePallete />
                {
                    isHistory ? (
                        <>
                            <div className="historyContainer">
                                {
                                    Array.from(colorList).map((value, index) => {
                                        return (
                                            <Color key={index} color={value} />
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

                <div className='colorShades' id='blueshades'>
                    {
                        [...Array(256).keys()].map((value, index) => {
                            if (index < 16) {
                                return (
                                    <Color key={index} color={`#00000` + index.toString(16)} />
                                )
                            } else {
                                return (
                                    <Color key={index} color={`#0000` + index.toString(16)} />
                                )
                            }
                        })
                    }
                    {
                        [...Array(256).keys()].map((value, index) => {
                            if (index < 16) {
                                return (
                                    <Color key={index} color={`#000` + index.toString(16) + `FF`} />
                                )
                            } else {
                                return (
                                    <Color key={index} color={`#00` + index.toString(16) + `FF`} />
                                )
                            }
                        })
                    }
                    {
                        [...Array(256).keys()].map((value, index) => {
                            if (index < 16) {
                                return (
                                    <Color key={index} color={`#0` + index.toString(16) + `FFFF`} />
                                )
                            } else {
                                return (
                                    <Color key={index} color={`#` + index.toString(16) + `FFFF`} />
                                )
                            }
                        })
                    }
                </div>
                <div className='colorShades' id='redshades'>
                    {
                        [...Array(256).keys()].map((value, index) => {
                            if (index < 16) {
                                return (
                                    <Color key={index} color={`#0` + index.toString(16) + `0000`} />
                                )
                            } else {
                                return (
                                    <Color key={index} color={`#` + index.toString(16) + `0000`} />
                                )
                            }
                        })
                    }
                    {
                        [...Array(256).keys()].map((value, index) => {
                            if (index < 16) {
                                return (
                                    <Color key={index} color={`#FF0` + index.toString(16) + `00`} />
                                )
                            } else {
                                return (
                                    <Color key={index} color={`#FF` + index.toString(16) + `00`} />
                                )
                            }
                        })
                    }
                    {
                        [...Array(256).keys()].map((value, index) => {
                            if (index < 16) {
                                return (
                                    <Color key={index} color={`#FFFF0` + index.toString(16)} />
                                )
                            } else {
                                return (
                                    <Color key={index} color={`#FFFF` + index.toString(16)} />
                                )
                            }
                        })
                    }
                </div>
                <div className='colorShades' id='greenshades'>
                    {
                        [...Array(256).keys()].map((value, index) => {
                            if (index < 16) {
                                return (
                                    <Color key={index} color={`#000` + index.toString(16) + `00`} />
                                )
                            } else {
                                return (
                                    <Color key={index} color={`#00` + index.toString(16) + `00`} />
                                )
                            }
                        })
                    }
                    {
                        [...Array(256).keys()].map((value, index) => {
                            if (index < 16) {
                                return (
                                    <Color key={index} color={`#00FF0` + index.toString(16)} />
                                )
                            } else {
                                return (
                                    <Color key={index} color={`#00FF` + index.toString(16)} />
                                )
                            }
                        })
                    }

                </div>


                <Button variant='contained' className='align_center historyButton' onClick={() => updateHistoryContainer(!isHistory)}>{isHistory ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />} history</Button>
                <Footer />
            </div>
        </>
    )
}

export default Home