import { useState } from 'react'
import './App.css'

function App() {
  const [numbers, setNumbers] = useState([]);
  const [loading, setLoading] = useState();

  const randomNumberInRange = () => {
    let list = [];

    while (list.length < 7) {
      var r = Math.floor(Math.random() * 50) + 1;
      if (list.indexOf(r) === -1) list.push(r);
    }

    return list;
  };

  const handleClick = () => {
    const random7 = randomNumberInRange();

    setLoading(true);
    setTimeout(() => {
      setLoading(false)

      setNumbers(random7)
    }, 2000);
  }

  const numbersList = numbers && numbers.sort((a, b) => a - b).map((number, index) => {
    if(!number) { return; }

    return (
      <div
        key={index}
        className="font-bold text-white rounded-full bg-purple-500 text-lg flex items-center justify-center mx-4 text-center" style={{
          width: `40px`,
          height: `40px`
        }}>
        {number}
      </div>
    )
  })

  return (
    <div className="bg-orange-100 p-24 rounded-xl">
      <h1 className="text-pink-600 text-6xl font-bold mb-8">Lottery 7</h1>

      <div className="flex justify-between my-4" style={{width: `500px`}}>
        {loading ? <p>Thinking ...</p> : numbersList}
      </div>

      <div className="flex flex-col">
        <button
          type="button"
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full mt-4 px-8 uppercase font-bold"
          onClick={() => handleClick()}>
            Click to Pick
          </button>
          <button
            type="button"
            className="bg-sky-600 text-white rounded-full mt-4 px-8 uppercase font-bold"
          onClick={() => setNumbers([])}>
            Clear
          </button>
        </div>
    </div>
  )
}

export default App
