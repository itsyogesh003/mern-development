import { useEffect, useState } from "react"



function App() {

  const [rates, setRates] = useState({})
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('INR')
  const [amount, setAmount] = useState(1)


  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network Responce Not Ok")
        return res.json()
      })
      .then((data) => {
        setRates(data.rates)
      })
      .catch((err) => {
        console.error("fetch error: ", err)
      })
  }, [fromCurrency])

  
    const rate = rates[toCurrency]
    const result = rate && amount?(amount * rate).toFixed(2): null
  

  const handleSwap = ()=>{
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <>
      <div className='bg-gray-100 p-4 flex justify-center items-center min-h-screen'>
        <div className='bg-white shadow-lg rounded-lg p-6 w-full max-w-md'>
          <h1 className="text-2xl font-bold mb-4 text-center">Currency Converter</h1>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number" className="w-full p-3 border rounded mb-2"></input>

          <div className="flex space-x-2 mb-4">
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              name="" id="" className="flex-1 p-3 border rounded">
              {Object.keys(rates).map((cur) => (
                <option key={cur} value={cur}>{cur}</option>
              ))}

            </select>

            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              name="" id="" className="flex-1 p-3 border rounded">
              {Object.keys(rates).map((cur) => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>

            <div 
            onClick={handleSwap}
            className="p-4 bg-blue-200 text-blue-950 border rounded font-bold">Swap</div>
          </div>

          {result !== null && (
            <div className="mt-4 text-center text-xl font-bold">
              {amount} {fromCurrency} = {result} {toCurrency}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
