import { useState } from 'react';
import Inputs from './components/Inputs';

export const amounts: number[] =  [ 5, 10, 20, 50, 100, 200, 500 ];

/*function resetInputs() {
  const inputs = Array.from(document.getElementsByClassName("amount-input"));
  for (const input of inputs) {
    console.log(input);
  }
}*/

function App() {
  const [total, setTotal] = useState(0);

  let initialValues: number[] = [
    0, 0, 0, 0, 0, 0, 0
  ];

  const [values] = useState(initialValues);

  const handleInput = (value: number, index: number): void => {
    if (Number.isNaN(value)) value = 0;
    values[index] = value;
    console.log(values);
  }

  const handleSubmit = () => {
    let sum = 0;
    values.map((value, i) => {
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
            <span className="navbar-text">
              &nbsp;&nbsp;|&nbsp;
              Count your racks efficiently
            </span>
          </a>
        </div>
      </nav>

      <div className="container">
        <h1 className="my-4">FajoCounter&#8482;</h1>

        <table>
          <tbody>
            <tr>
              <td style={{ height: 365 }}>
                <Inputs callback={handleInput} />
              </td>
              <td style={{ height: 365, width: '100%', textAlign: 'center' }}>
                <img className="inputs-img mb-3 shadow" src="/img/bills_50.jpg" alt="50 € bills" />
              </td>
            </tr>
          </tbody>
        </table>

        <button className='btn btn-light mt-2 me-2 shadow' onClick={handleSubmit}>Count Fajo</button>
        <button className='btn btn-danger mt-2 shadow' /*onClick={resetInputs}*/>Reset</button>
        <br />
        <br />

        <pre style={{fontSize: 50}}>
          {total.toLocaleString('de')},00 €
        </pre>
      </div>
    </div>
  );
}

export default App;
