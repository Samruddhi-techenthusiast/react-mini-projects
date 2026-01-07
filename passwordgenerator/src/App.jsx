import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}<>";

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Password copied!");
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md shadow-lg">
  <h1 className="text-white text-xl font-semibold mb-4 text-center">
    Password Generator
  </h1>


  <div className="relative mb-4">
    <input
      type="text"
      value={password}
      readOnly
      placeholder="Your password will appear here"
      className="w-full py-2 px-4 pr-20 rounded text-black outline-none"
    />
    <button
      onClick={copyToClipboard}
      className="absolute right-1 top-1 bottom-1 bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition"
    >
      Copy
    </button>
  </div>

  <div className="mb-4 flex items-center gap-4">
    <label className="text-orange-400 font-medium">
      Length: {length}
    </label>
    <input
      type="range"
      min="4"
      max="32"
      value={length}
      onChange={(e) => setLength(Number(e.target.value))}
      className="flex-1"
    />
  </div>

  
  <div className="mb-4 flex gap-6 text-orange-400">
  <label className="flex items-center gap-1">
    <input
      type="checkbox"
      name="numbers"            // added name
      checked={numberAllowed}
      onChange={() => setNumberAllowed(!numberAllowed)}
      className="accent-orange-400"
    />
    Numbers
  </label>

  <label className="flex items-center gap-1">
    <input
      type="checkbox"
      name="characters"        
      checked={charAllowed}
      onChange={() => setCharAllowed(!charAllowed)}
      className="accent-orange-400"
    />
  Characters
  </label>
</div>


  <button
    onClick={passwordGenerator}
    className="w-full bg-orange-400 text-gray-100 py-2 rounded font-semibold hover:bg-orange-100 transition"
  >
    Generate
  </button>
</div>

  );
}

export default App;
