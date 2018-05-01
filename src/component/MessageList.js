import React, { Component } from "react";
import Message from "./Message.js";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: props.messages };
  }

  render() {
    return (
      <div className="message">
        Message List
        <Message />
        <div>button</div>
      </div>
    );
  }
}

export default MessageList;
