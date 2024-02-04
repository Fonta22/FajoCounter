export type Amounts = number[];

export interface Currency {
  name: string;
  abbreviation: string;
  symbol: string;
}

type Callback = (value: number, index: number) => void

export interface InputProps {
  symbol: string;
  amount: number;
  index: number;
  callback: Callback;
}

export interface InputsProps {
  callback: Callback;
}
