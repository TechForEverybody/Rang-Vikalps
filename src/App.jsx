import './App.css';
import './Styles/index.scss';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import ErrorPage from './Components/Templates/ErrorPage';
import { createContext, useEffect, useState } from 'react';
import { AnimatePresence } from "framer-motion"

let colorContext = createContext()
function App() {
    let [colorList, updateColorList] = useState(new Set([]))
    useEffect(() => {
        try {
            let colorlist = localStorage.getItem('colorlist')
            if (colorlist !== null) {
                let data = JSON.parse(colorlist)
                updateColorList(new Set(data.data))
            }
        } catch (error) {
            console.log(error);
        }
    }, [])
    function updateColorsList(color) {
        if (colorList.size>9) {
            localStorage.setItem("colorlist", JSON.stringify({ data: [...Array.from(colorList).splice(colorList.size-10,colorList.size), color] }))
            updateColorList(new Set([...Array.from(colorList).splice(colorList.size-10,colorList.size), color]))
            
        } else {
            localStorage.setItem("colorlist", JSON.stringify({ data: [...colorList, color] }))
            updateColorList(new Set([...colorList, color]))
        }
    }
    return (
        <AnimatePresence>
            <colorContext.Provider value={{ colorList, updateColorsList }}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="*" element={<ErrorPage />}>
                    </Route>
                </Routes>
            </colorContext.Provider>
        </AnimatePresence>
    );
}

export default App;
export { colorContext }
