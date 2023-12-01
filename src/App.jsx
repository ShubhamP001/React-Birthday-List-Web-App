import "./App.css"
import list from "./assets/BirthdayList.js"
import { useState } from "react"

const App = () => {
  const [data, setData] = useState(list)
  return (
    <div>
      <div className="main">
        <h1>Today  {data.length} ✨</h1>
        { data.map((e) => {
          return (

            <div className="container" key={e.image}>
              <div className="profile">
                <img src={e.image} alt="" />
              </div>
              <div className="details">
                <h3>{e.name}</h3>
                <p>{e.age}</p>
              </div>

            </div>
          )
        })}


        <button  id="submit" onClick={()=>setData([])}>Clear</button>
      </div>
    </div>
  )
}

export default App
