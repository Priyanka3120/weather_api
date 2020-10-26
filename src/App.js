import React, { Component } from 'react'
import Titles from "./components/Titles";
import Form from "./components/Form";
// import Weather from "./components/Weather";

const API_KEY="bdb6f753f4fe470cb3d3048405b550e1"

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
  
// getWeather = async (e) =>
// {
//   e.preventDefault();
//   const city=e.target.elements.city.value;
//   const country=e.target.elements.country.value;
//   const api_call=fetch('samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}');
//   const data=await api_call.json();
//   this.setState ({
  
//   })
// }
fetchPosts() {
  fetch(``)
    .then(response => response.json())
    .then(
      data =>
        {
          console.log("Data: ", data)
          this.setState({
            posts: data,
            isLoading: false,
          })
        }
    )
    .catch(error => this.setState({ error, isLoading: false }));
}
  render() {
    this.fetchPosts()
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
      </div>
    )
  }
}

export default App;
