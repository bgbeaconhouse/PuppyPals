import { useState } from 'react'
import './App.css'
import { puppyList } from './data'
import './Style.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  // console.log("puppyList: ", puppyList);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  // console.log(featuredPup)
  // console.log(featuredPup)
  return (
    <>
      <div className="mainDiv">
        
      {featPupId && (
        <div className="moreInfo">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
        {
         
          puppies.map((puppy) => {
            return <p className="eachPup" onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })
        }
         
       
         

      </div>
      
      
       
      
      
      
    </>
  )
}

export default App
