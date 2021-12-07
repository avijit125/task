// import axios from 'axios'
import React from 'react'
import List from './List'

const Home = () => {
    // const [countriesWithTheirCapital,setCountriesWithTheirCapital] = useState(null)
    // const [capitalWithTheirPopulation,setCapitalWithTheirPopulation] = useState(null)
    // useEffect(()=>{
    //    axios.get("https://restcountries.com/v3.1/all?fields=capital,name").then(res =>{setCountriesWithTheirCapital(res.data)}) 
    // },[])
    // useEffect(()=>{
    //     axios.get("https://restcountries.com/v3.1/all?fields=capital,population").then(res=>{
    //             setCapitalWithTheirPopulation(res.data)
           
    // })
    // },[])
    return (
        <div>
            <List/>
          {/* {capitalWithTheirPopulation && countriesWithTheirCapital && countriesWithTheirCapital.map(item=>{
              return capitalWithTheirPopulation.map(data=>{
                  console.log(item)
                  if(data.capital === item.capital){
                   return countriesWithTheirCapital.push(data.population)
                  }
                  
              })
        
          })}  */}
        </div>
    )
}

export default Home
