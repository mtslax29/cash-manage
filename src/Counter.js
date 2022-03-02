import React, {useState} from "react";

function Counter(){
    const [countCD, setCountCD] = useState(0);
    const [countCR, setCountCR] = useState(0);

    return(
        <div className="Counter">
            <div className="Tot-CR">
                <h2>Total Cash Receipts</h2>
                <h2>{countCR}</h2>
                <button onClick={() => setCountCR(Math.floor(Math.random(countCR) * 1000000))}>Recalculate</button>
            </div>
            <div className="Out-CD">
                <h2>Outstanding CD</h2>
                <h2>{countCD}</h2>
                <button onClick={() => setCountCD(Math.floor(Math.random(countCD) * 1000000))}>Recalculate</button>
            </div>
        </div>
    );
}

export default Counter;