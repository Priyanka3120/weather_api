import React, { Component } from 'react'
import Titles from "./components/Titles";
import Form from "./components/Form";
// import Weather from "./components/Weather";

const API_KEY="b6907d289e10d714a6e88b30761fae22"

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {

  //   };
  // }

  
  // state = {
  //      temperature : undefined,
  //      city : undefined,
  //      humidity : undefined,
  //      description : undefined,
  //      error : undefined
  // }
  
getWeather = async (e) =>
{
  e.preventDefault();
  const city=e.target.elements.city.value;
  const country=e.target.elements.country.value;
  const api_call=fetch('samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}');
  const data=await api_call.json();
  this.setState ({
  
  })
}
  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        {/* <Weather/> */}
      </div>
    )
  }
}

export default App;
