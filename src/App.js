import { useState } from 'react'
import React from 'react'
import "./App.css"
function App() {
  const [scoreA, setscoreA] = useState(0);
  const [scoreB, setscoreB] = useState(0);
  return (
    <div className='container '>
      <h1 className="text-center mb-5 mt-5">Cricket Score</h1>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card ">
            <div className="card-body">
              <h1 className="card-title text-center ">Team A</h1>
              <h3 className='text-center '>{scoreA}</h3>
              <div className="text-center">
                <button type="button" className="btn btn-success mx-5" onClick={() => {
                  setscoreA(scoreA + 1)
                }}>+</button>
                <button type="button" className="btn btn-danger mx-5" onClick={() => {
                  if (scoreA == 0) {
                    alert("Score cant be Negative")
                  }
                  else {

                    setscoreA(scoreA - 1)
                  }
                }}>-</button>
              </div>

            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center ">Team B</h1>
              <h3 className='text-center '>{scoreB}</h3>
              <div className="text-center">
                <button type="button" className="btn btn-success  mx-5" onClick={() => {
                  setscoreB(scoreB + 1)
                }}>+</button>
                <button type="button" className="btn btn-danger  mx-5" onClick={() => {
                  if (scoreB == 0) {
                    alert("Score cant be Negative")
                  }
                  else {

                    setscoreB(scoreB - 1)
                  }
                }}>-</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
