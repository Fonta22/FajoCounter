import { ReactElement, useState } from "react";
import { amounts } from "../App";

interface Currency {
    name: string;
    abbreviation: string;
    symbol: string;
}

const currency: Currency = {
    name: 'Euro',
    abbreviation: 'EUR',
    symbol: '€',
}

//const amounts: number[] = [ 5, 10, 20, 50, 100, 200, 500 ];
/*const amounts = {
    b5:   { value: 5,   n: 0 },
    b10:  { value: 10,  n: 0 },
    b20:  { value: 20,  n: 0 },
    b50:  { value: 50,  n: 0 },
    b100: { value: 100, n: 0 },
    b200: { value: 200, n: 0 },
    b500: { value: 500, n: 0 },
}*/



interface InputProps {
    symbol: string;
    amount: number;
    index: number;
    callback: (value: number, index: number) => void;
}

function Input({ symbol, amount, index, callback }: InputProps): ReactElement {
    return (
        <div className="input-group mb-3 shadow">
            <span className="input-group-text" style={{ width: '4rem' }}>{amount}</span>
            <span className="input-group-text"><code>{symbol}</code></span>
            
            <input
                type="number"
                onChange={e => callback(parseInt(e.target.value), index)}
                min={0}
                step={1}
                placeholder={`${amount} ${symbol} bills amount`}
                className="form-control amount-input"
                aria-label="Money amount"
            />
        </div>
    );
}

function Inputs({ callback }: { callback: (value: number, index: number) => void }): ReactElement {
    return (
        <div className="inputs-container">
            {amounts.map((amn, i) => {
                return <Input
                    symbol={currency.symbol}
                    amount={amn}
                    index={i}
                    callback={callback}
                    key={i}
                />
            })}
        </div>
    );
}

export default Inputs;
