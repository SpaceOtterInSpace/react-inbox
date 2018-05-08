import React, { Component } from "react";
import "./App.css";
import Toolbar from "./component/Toolbar.js";
import MessageList from "./component/MessageList.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allSelected: false,
      messages: [
        {
          id: 1,
          subject:
            "You can't input the protocol without calculating the mobile RSS protocol!",
          read: false,
          starred: true,
          labels: ["dev", "personal"]
        },
        {
          id: 2,
          subject:
            "connecting the system won't do anything, we need to input the mobile AI panel!",
          read: false,
          starred: false,
          selected: true,
          labels: []
        },
        {
          id: 3,
          subject:
            "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
          read: false,
          starred: true,
          labels: ["dev"]
        },
        {
          id: 4,
          subject: "We need to program the primary TCP hard drive!",
          read: true,
          starred: false,
          selected: true,
          labels: []
        },
        {
          id: 5,
          subject:
            "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
          read: false,
          starred: false,
          labels: ["personal"]
        },
        {
          id: 6,
          subject: "We need to back up the wireless GB driver!",
          read: true,
          starred: true,
          labels: []
        },
        {
          id: 7,
          subject: "We need to index the mobile PCI bus!",
          read: true,
          starred: false,
          labels: ["dev", "personal"]
        },
        {
          id: 8,
          subject:
            "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
          read: true,
          starred: true,
          labels: []
        }
      ]
    };
  }

  updateMessage = newMessage => {
    let messages = this.state.messages;
    messages.map(message => {
      return message.id === newMessage.id ? newMessage : message;
    });
    this.setState({ messages });
  };

  addLabel = label => {
    let messages = this.state.messages.map(message => {
      if (message.selected && message.labels.indexOf(label) === -1) {
        message.labels.push(label);
      }
      return message;
    });
    this.setState({ messages });
  };

  removeLabel = labelRemoved => {
    let messages = this.state.messages.map(message => {
      if (message.selected && message.labels.indexOf(labelRemoved) !== -1) {
        message.labels = message.labels.filter(function(label) {
          return label !== labelRemoved;
        });
      }
      return message;
    });
    this.setState({ messages });
  };

  deleteMessage = () => {
    let messages = this.state.messages;
    messages = messages.filter(message => !message.selected);
    this.setState({ messages, allSelected: false });
  };

  selectAll = allSelected => {
    var messages = this.state.messages.map(message => {
      return {
        ...message,
        selected: allSelected
      };
    });
    this.setState({ messages, allSelected });
  };

  markAsRead = () => {
    var messages = this.state.messages.map(message => {
      if (message.selected) {
        message.read = true;
      }
      return message;
    });
    this.setState({ messages });
  };

  markAsUnread = () => {
    var messages = this.state.messages.map(message => {
      if (message.selected) {
        message.read = false;
      }
      return message;
    });
    this.setState({ messages });
  };

  render() {
    return (
      <div className="App">
        <Toolbar
          selectAll={this.selectAll}
          allSelected={this.state.allSelected}
          markAsRead={this.markAsRead}
          markAsUnread={this.markAsUnread}
          deleteMessage={this.deleteMessage}
          addLabel={this.addLabel}
          removeLabel={this.removeLabel}
        />
        <MessageList
          messages={this.state.messages}
          updateMessage={this.updateMessage}
        />
      </div>
    );
  }
}

export default App;
