// libraries
import { isMobile } from "react-device-detect";
// types
import { ReactElement } from "react";
import { Currency, InputProps, InputsProps } from "../typings";
// variables
import { amounts } from "../App";

const currency: Currency = {
  name: "Euro",
  abbreviation: "EUR",
  symbol: "€",
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
        className="form-control amount-input"
        aria-label="Money amount"
      />
    </div>
  );
}

function Inputs({ callback }: InputsProps): ReactElement {
  return (
    <div className={isMobile ? "mt-4" : "inputs-container"}>
      {amounts.map((amn: number, i: number) => {
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
