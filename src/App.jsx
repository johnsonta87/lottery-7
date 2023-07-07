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
        className="font-bold text-white rounded-full bg-purple-500 text-lg flex items-center justify-center text-center font-mono" style={{
          width: `40px`,
          height: `40px`
        }}>
        {number}
      </div>
    )
  })

  return (
    <div className="bg-orange-100 p-4 md:p-16 rounded-xl ease-in duration-300 drop-shadow-md hover:drop-shadow-2xl">
      <h1 className="text-rose-600 text-3xl md:text-6xl font-bold mb-8">Lottery 7</h1>

      <div className="flex flex-wrap justify-center my-4 w-full gap-2 md:gap-6">
        {loading ? <p className="text-blue-600 font-bold">I am thinking ...</p> : numbersList}
      </div>

      {loading ? null :
        <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center">
          <button
              type="button"
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-2 border-gray-500 text-white rounded-full px-8 uppercase font-bold ease-in duration-300 drop-shadow-md hover:drop-shadow-2xl"
              onClick={() => handleClick()}>
              Click to Pick
            </button>
          {numbersList && numbersList.length ?
            <button
              type="button"
              className="bg-amber-300 text-slate-500 border-2 border-gray-500 rounded-full px-8 uppercase font-bold ease-in duration-300 drop-shadow-md hover:drop-shadow-2xl"
              onClick={() => setNumbers([])}>
              Clear
            </button>
          : null}
          </div>
        }
    </div>
  )
}

export default App
