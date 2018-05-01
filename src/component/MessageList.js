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
        {this.state.messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    );
  }
}

export default MessageList;
