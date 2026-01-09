import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
 const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
  if (!currencyInfo || !currencyInfo[to]) return;
  setConvertedAmount(amount * currencyInfo[to]);
};


  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#020024] via-[#090979] to-[#00d4ff]"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/35381221/pexels-photo-35381221.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[420px] bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            selectCurrency={from}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
          />

          <div className="flex justify-center my-4">
            <button
              type="button"
              onClick={swap}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg transition"
            >
              Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            selectCurrency={to}
            amountDisable
            onCurrencyChange={(currency) => setTo(currency)}
          />

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
