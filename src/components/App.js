import React from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      enrollmentNo: "12345678",
      age: 34,
    };
    this.incrementAge = this.incrementAge.bind(this);
  }

  incrementAge() {
    this.setState((prevState) => ({ age: prevState.age + 1 }));
  }

  render() {
    const { name, enrollmentNo, age } = this.state;
    return (
      <div>
        <h1>Hello, my name is {name}</h1>
        <p>
          I am {age} years old and my enrollment no is {enrollmentNo}
        </p>
        <button onClick={this.incrementAge}>Increment Age</button>
      </div>
    );
  }
}

export default App;
