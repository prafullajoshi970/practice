
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("mumbai");

  useEffect(() => {
    const fetchApi = async () => {
        
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=700cd2716d1ea414ff0fe1483e04908c`
        const response = await fetch(url);

        const resJson = await response.json();
        console.log(resJson)
        setData(resJson.main);
    };
    fetchApi();

}, [search])


  return (
    <>
            <div>
                <form>
                <div className="inputdiv">
                    <h1 className="title"> React Wheather App</h1>
                    <input type="search" placeholder="Search city name here" className="inputsearch" onChange={(event) => { setSearch(event.target.value) }}></input>
                </div>
                </form>
               

                {data ? (
                 <div>
                 <div className="display">
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdUijW8Pl6X57WSf5jgv0q00gtqFw0w0saJw&usqp=CAU" alt="" className="image1"></img>
                     <h1>City-{search}</h1>
                     <h1>{data.temp}°C</h1>
                     <div className="minmax">
                         <h2>Min-Temp</h2> <h4 > {data.temp_min}°C </h4>
             
                    
                     <h2>Max-Temp</h2><h4> {data.temp_max}°C </h4>  
                     
                     <h2>Humidity</h2><h4> {data.humidity}</h4>
                      
                     </div>
                    

                 </div>
                 </div>
                ) : (
                   <p>no data found</p>
                )}
            </div>

        </>

    )
}
export default App;
