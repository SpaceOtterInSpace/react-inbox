import React, { Component } from "react";

class Message extends Component {
  getClass = () => {
    var class_name = "row message";
    class_name += this.props.message.read ? " read" : " unread";
    class_name += this.props.message.selected ? " selected" : "";
    return class_name;
  };

  handleCheckboxClick = e => {
    let message = this.props.message;
    message.selected = e.target.checked;
    this.props.updateMessage(message);
  };

  handleStarClick = e => {
    let message = this.props.message;
    message.starred = !message.starred;
    this.props.updateMessage(message);
  };

  render() {
    return (
      <div className={this.getClass()}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input
                onChange={this.handleCheckboxClick.bind(this)}
                type="checkbox"
                checked={this.props.message.selected}
              />
            </div>
            <div className="col-xs-2">
              <i
                className={
                  this.props.message.starred
                    ? "star fa fa-star"
                    : "star fa fa-star-o"
                }
                onClick={this.handleStarClick.bind(this)}
              />
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {this.props.message.labels.map(label => (
            <span key={label} className="label label-warning">
              {label}
            </span>
          ))}
          {this.props.message.subject}
        </div>
      </div>
    );
  }
}

export default Message;
