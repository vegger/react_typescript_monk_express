import React, {useState} from 'react';


const Counter: React.FC = () => {
    const [zaehler, setZaehler] = useState(0);

    return <div>
        <button onClick={() => setZaehler(zaehler - 1)}> - </button>
        <button onClick={() => setZaehler(zaehler + 1)}> + </button>
        <br />
        { zaehler }
    </div>
}

export default Counter;