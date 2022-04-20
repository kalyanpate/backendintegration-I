

import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToDisplay: "loading...!",
    };
  }


  getData() {
    let url = "http://localhost:3000";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (this.state.dataToDisplay === " loading...!") {
          this.Setstate({ dataToDisplay: data.message });
        }
      })
  };

  render() {

    this.getData();

    return (
      <div >
        <h1>Welcome to react session ! {this.state.dataToDisplay}</h1>

      </div>
    );

  };
}


export default App;
