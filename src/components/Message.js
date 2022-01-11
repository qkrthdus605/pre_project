// import React, {useState} from 'react';

// const Message = () => {
//   const [message, setMessage] = useState("Hello");

//   const handleClick = () => {
//     const newMessage = message === "Hello" ? "안녕" : "Hello";
//     setMessage(newMessage);
//   };
//   return (
//     <div>
//       <h1>{message}</h1>
//       <button onClick={handleClick}>언어 바꾸기</button>
//     </div>
//   );
// };

// export default Message;

import React, { Component } from "react";

class Message extends Component {
  state = {
    message: "Hello",
  }
  handleClick = () => {
    const newMessage = this.state.message === "Hello" ? "안녕" : "Hello";
    this.setState({message: newMessage});
  };
  render(){
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick}>언어 바꾸기</button>
      </div>
    );
  };
}

export default Message;