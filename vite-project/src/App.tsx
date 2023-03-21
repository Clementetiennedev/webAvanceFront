import React, { useState } from "react";

function Calculator() {
    const [result, setResult] = useState("");

    function handleClick(e: any) {
        setResult(result.concat(e.target.name));
    }

    function calculate() {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Error");
        }
    }

    function clear() {
        setResult("");
    }

    return (
        <div className="calculator">
            <button>CALCULATRICE</button><br/><br/>
            <form>
                <input className="input" type="text" value={result}/>
            </form>
            <div className="buttons"><br/>
                <button onClick={clear} className="clear">c</button>
                <button name="/" onClick={handleClick} className="operator">&divide;</button>
                <button name="*" onClick={handleClick} className="operator">&times;</button><br/>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button name="-" onClick={handleClick} className="operator">&ndash;</button><br/>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button name="+" onClick={handleClick} className="operator">+</button><br/>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button onClick={calculate} className="equal">=</button><br/>
                <button name="0" onClick={handleClick}>0</button>
                <button name="." onClick={handleClick}>.</button>
            </div>
        </div>
    );
}

export default Calculator;