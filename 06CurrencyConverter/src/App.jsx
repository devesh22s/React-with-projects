import { useState, useEffect } from 'react';
import Input_box1 from './components/Input_box1';
import useCurrencyinfo from './hooks/useCurrencyinfo';
import {ExchangeRate} from 'react-currency-conversion';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0); // State for holding exchange rate

  const currencyInfo = useCurrencyinfo(from);

  const options = Object.keys(currencyInfo);

  useEffect(() => {
    // Fetch exchange rate when 'to' currency changes
    const fetchExchangeRate = async () => {
      const response = await fetch(`YOUR_EXCHANGE_RATE_API_URL_HERE?from=${from}&to=${to}`);
      const data = await response.json();
      setExchangeRate(data.rate);
    };

    fetchExchangeRate();
  }, [from, to]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('https://img.freepik.com/free-vector/buy-sell-trend-forex-trading-background_1017-31712.jpg')` }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
            <div className="w-full mb-1">
              <Input_box1
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>swap</button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input_box1
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
          {/* Render exchange rate value */}
          <h1 className="text-white">{`Exchange Rate: ${exchangeRate}`}</h1>
        </div>
      </div>
      <ExchangeRate from='USD' to='INR' val='100.20' />
    </div>
  );
}

export default App;
