// libraries
import { ReactElement, useState } from "react";
import { isMobile } from "react-device-detect";
// types
import { Amounts } from "./typings";
// components
import Inputs from "./components/Inputs";

export const amounts: Amounts =  [ 5, 10, 20, 50, 100, 200, 500 ];

function App(): ReactElement {
  const [total, setTotal] = useState(0);

  let initialValues: Amounts = [
    0, 0, 0, 0, 0, 0, 0
  ];

  const [values] = useState(initialValues);

  const handleInput = (value: number, index: number): void => {
    if (Number.isNaN(value)) value = 0;
    values[index] = value;
  }

  const handleSubmit = (): void => {
    let sum: number = 0;
    values.map((value: number, i: number) => {
      sum += value * amounts[i];
    });
    setTotal(sum);
  }
  
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/img/flag_eu.png" alt="European Union Flag" height="24" />
            &nbsp;
            FajoCounter&#8482;
            {isMobile ?
              <></>
              :
              <span className="navbar-text">
                &nbsp;&nbsp;|&nbsp;
                Count your racks efficiently
              </span>
            }
          </a>
        </div>
      </nav>

      <div className="container">
        {isMobile ?
          <Inputs callback={handleInput} />
          :
          <>
            <h1 className="my-4">FajoCounter&#8482;</h1>
            <table>
            <tbody>
              <tr>
                <td>
                  <Inputs callback={handleInput} />
                </td>
                <td id="td-img">
                  <img className="inputs-img mb-3 shadow non-draggable" src="/img/bills_50.jpg" alt="50 € bills" />
                </td>
              </tr>
            </tbody>
          </table>
         </>
        }

        <button className="btn btn-light mt-2 me-2 shadow" onClick={handleSubmit}>Count Fajo</button>
        <button className="btn btn-danger mt-2 shadow" /*onClick={resetInputs}*/>Reset</button>
        <br />
        <br />

        <pre className="total">
          {total.toLocaleString("de")},00 €
        </pre>
      </div>
    </div>
  );
}

export default App;
