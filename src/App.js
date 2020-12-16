import React, { Component } from 'react';
import Counter from './components/Counter';
import FormInput from "./components/FormInput";

class App extends Component{
  render(){
    return(
      <div>
        <Counter />
        <FormInput />
      </div>
    );
  }
}

export default App;
