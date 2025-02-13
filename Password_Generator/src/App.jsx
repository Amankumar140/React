import { useState, useCallback, useEffect ,useRef} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// using useCallback hook
// useEffect hook 

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAll] = useState(false);
  const [charAllow, setCharAll] = useState(false);
  const [Password, setPassword] = useState("");

  // ref hook for reference

  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "!@#$%&*()=+-~`{}[]\|/><?";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]); // in useCallback the methods gives for optimisation

const copyPassToClipboard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,12);
  window.navigator.clipboard.writeText(Password);

},[Password])




useEffect(()=>{
  passwordGenerator()
},[length,numAllow,charAllow,passwordGenerator]) // in useEffect this is for the anyOne change then change


  return (
    <>
      <div className="w-full max-w-md mx-auto bg-gray-900 shadow-2xl rounded-2xl p-6 my-10 text-orange-400 border border-gray-800">
  <h1 className="text-3xl font-bold text-center text-white mb-4">🔐 Password Generator</h1>

  {/* Password Display Box */}
  <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden shadow-md mb-4 border border-gray-700">
    <input
      type="text"
      value={Password}
      className="w-full p-3 text-lg bg-transparent text-white outline-none placeholder-gray-500"
      placeholder="Generated Password"
      readOnly
      ref={passwordRef}
    />
    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-semibold rounded-r-lg transition duration-300 relative"
     onClick={copyPassToClipboard}>
      Copy
    </button>
  </div>

  {/* Controls Section */}
  <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
    {/* Password Length Slider */}
    <div className="mb-4">
      <label className="text-white font-medium text-lg">Length: {length}</label>
      <input
        type="range"
        min={6}
        max={100}
        value={length}
        className="w-full mt-2 cursor-pointer accent-orange-500"
        onChange={(e) => setLength(e.target.value)}
      />
    </div>

    {/* Number Inclusion Toggle */}
    <div className="flex items-center space-x-3 mb-3">
      <input
        type="checkbox"
        defaultChecked={numAllow}
        id="numberInput"
        className="cursor-pointer w-5 h-5 accent-orange-500"
        onChange={() => setNumAll((prev) => !prev)}
      />
      <label htmlFor="numberInput" className="text-white font-medium text-lg"> Numbers</label>
    </div>

    {/* Special Character Inclusion Toggle */}
    <div className="flex items-center space-x-3">
      <input
        type="checkbox"
        defaultChecked={charAllow}
        id="characterInput"
        className="cursor-pointer w-5 h-5 accent-orange-500"
        onChange={() => setCharAll((prev) => !prev)}
      />
      <label htmlFor="characterInput" className="text-white font-medium text-lg"> Characters</label>
    </div>
  </div>

  {/* Generate Button */}
  <button onClick={passwordGenerator} className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold transition duration-300 shadow-md">
    Generate Password
  </button>
</div>

    </>
  );
}

export default App;
