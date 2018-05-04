import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { message: props.message };
  }
  render() {
    return (
      <div
        className={
          this.state.message.read ? "row message read" : "row message unread"
        }
      >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={this.state.message.selected}/>
            </div>
            <div className="col-xs-2">
              <i className={this.state.message.starred ? "star fa fa-star" : "star fa fa-star-o"} />
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {this.state.message.labels.map(label => (
            <span class="label label-warning">{label}</span>
          ))}
          <a href="#">{this.state.message.subject}</a>
        </div>
      </div>
    );
  }
}

export default Message;
