import React, { Component } from "react";
import Message from "./Message.js";

class MessageList extends Component {
  render() {
    return (
      <div className="message">
        {this.props.messages.map(message => (
          <Message
            key={message.id}
            message={message}
            updateMessage={this.props.updateMessage}
          />
        ))}
      </div>
    );
  }
}

export default MessageList;
