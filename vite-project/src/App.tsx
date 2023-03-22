import './App.css'
import SimonButton from "./SimonButton";
import {useCallback, useEffect, useState} from "react";
import Title from "./Title";

type Color = 'red' | 'blue' | 'yellow' | 'green'

export const btnValues: Color[] = [
        "red",
        "blue",
        "yellow",
        "green"
    ];

const getRandomColor = () => {
    return btnValues[Math.floor(Math.random() * btnValues.length)]
}

function App(this: any) {
    const [sequence, setSequence] = useState([getRandomColor()])
    const [currentIndex, setCurrentIndex] = useState(0)
    let [isPlayerToPlay, setIsPlayerToPlay] = useState(false)
    let [status, setStatus] = useState(false)
    const fail = sequence.length === 0
    let [count, setCount] = useState(0)
    console.log("bonpne couleur : " + sequence)
    console.log({isPlayerToPlay, sequence, currentIndex})
    //use effect for end of combinaison
    useEffect(() => {
        if(isPlayerToPlay && currentIndex === sequence.length){
            setIsPlayerToPlay(false)
            setCurrentIndex(0)
            // @ts-ignore
            setSequence([...sequence, getRandomColor()])
            setCount(count+1)
        }
    }, [isPlayerToPlay,count, sequence, currentIndex])

    useEffect(() => {
        if(!isPlayerToPlay && currentIndex === sequence.length){
            setIsPlayerToPlay(true)
            setCurrentIndex(0)
            setCount(count+1)
        }
    }, [isPlayerToPlay,count, sequence, currentIndex])

    //use effect if there is an error
    /*useEffect(() => {
        if(fail)
        {
            setIsPlayerToPlay(false)
            setCurrentIndex(0)
            // @ts-ignore
            setSequence([getRandomColor()])
        }
    }, [sequence])*/

    useEffect( ()=> {
        if(status && !isPlayerToPlay)
        {
            setTimeout(()=>{
                if (currentIndex != sequence.length)
                {
                    setCurrentIndex(currentIndex + 1)
                }
            }, 1000)
        }
    },[status, currentIndex])
    const startGame = () => {
        setStatus(true)
        return ( alert("Regard bien la combinaison"))
    }
    const handleColorClick = (color: Color) => {
        if(isPlayerToPlay){
            if(color === sequence[currentIndex]){
                setCurrentIndex(currentIndex + 1)
            }
            else {
                setStatus(false)
                setSequence([])
                setCount(0)
                alert("RATER ! Vous avez perdu ")
            }
        }
    }

    return (
        <div>
            <h1>SIMON GAME</h1>
            <Title isPlayerToPlay={isPlayerToPlay} />
            {btnValues.map(color => <SimonButton
                handleClick={() => isPlayerToPlay && handleColorClick(color)}
                color={color}
                active={status  && !isPlayerToPlay && sequence[currentIndex] === color }
            />)}<br/><br/>
            <button onClick={startGame}>START</button> <br/><br/>
            <span>Nombre de manches gagnées : {count}</span>
        </div>
    )
}

export default App
