import React from "react";
import { useState } from "react";
import Button from "./button";

export default function Compteur(){
    const [result, setResult] = useState(0);
    const [playerName, setPlayerName] = useState('')

    const increment = () =>setResult(result+1);

    const decrement = () =>setResult(result-1);

    const reset = () => setResult(0);

        if (result == 10) {alert('BOOM!')}

    return(
        <>
        <div>
        <p>Résultat: {result}</p>
        <Button label="-" action={decrement}/>
        <Button label="+" action={increment}/>
        <Button label="reset" action={reset}/>
        </div>
        <div>
            <input type="text" value={playerName} onChange={(e)=>setPlayerName(e.target.value)}/>
            <p>Player Name: {playerName}</p>
        </div>
        </>
    )
}