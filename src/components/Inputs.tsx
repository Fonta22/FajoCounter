import { ReactElement } from "react";
import { isMobile } from 'react-device-detect';
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

interface InputProps {
    symbol: string;
    amount: number;
    index: number;
    callback: (value: number, index: number) => void;
}

function Input({ symbol, amount, index, callback }: InputProps): ReactElement {
    return (
        <div className="input-group mb-3 shadow">
            <span className="input-group-text bill-value">{amount}</span>
            <span className="input-group-text"><code>{symbol}</code></span>
            
            <input
                type="number"
                onChange={e => callback(parseInt(e.target.value), index)}
                min={0}
                step={1}
                placeholder="Amount"
                //placeholder={`${amount} ${symbol} bills amount`}
                className="form-control amount-input"
                aria-label="Money amount"
            />
        </div>
    );
}

function Inputs({ callback }: { callback: (value: number, index: number) => void }): ReactElement {
    return (
        <div className={isMobile ? "mt-4" : "inputs-container"}>
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
