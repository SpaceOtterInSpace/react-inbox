import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starred: props.message.starred,
      read: props.message.read,
      labels: props.message.labels,
      selected: props.message.selected,
      subject: props.message.subject
    };
  }

  handleStarClick = () => {
    this.setState(prevState => ({
      starred: !prevState.starred
    }));
  };

  handleCheckboxClick = () => {
    this.setState(prevState => ({
      selected: !prevState.selected
    }));
  };

  getClass = () => {
    var class_name = "row message";
    class_name += this.state.read ? " read" : " unread";
    class_name += this.state.selected ? " selected" : "";
    return class_name;
  };

  render() {
    return (
      <div className={this.getClass()}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                onClick={this.handleCheckboxClick}
                type="checkbox"
                checked={this.state.selected}
              />
            </div>
            <div className="col-xs-2">
              <i
                className={
                  this.state.starred ? "star fa fa-star" : "star fa fa-star-o"
                }
                onClick={this.handleStarClick}
              />
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {this.state.labels.map(label => (
            <span class="label label-warning">{label}</span>
          ))}
          <a href="#">{this.state.subject}</a>
        </div>
      </div>
    );
  }
}

export default Message;
