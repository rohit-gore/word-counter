import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const countWords = (e) => {
    const statement = e.target.value
    const ar = statement.split(" ")
    let count = 0;
    ar.filter(word => {
      if (word !== '') count += 1;
    })
    setCount(count)
  }

  return (
    <div className='app_container'>
      <div className='app_wrapper'>
        <h1>Responsive Paragraph Word Counter</h1>
        <div>
          <textarea onChange={countWords} cols="40" rows="8"></textarea>
          <p>Word Count: {count}</p>
        </div>
      </div>
    </div>
  )
}

export default App
