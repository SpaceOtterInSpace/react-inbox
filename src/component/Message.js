import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = { message: props.message };
  }
  render() {
    console.log(this.state.message);
    return (
      <div
        className={
          this.state.message.read ? "row message read" : "row message unread"
        }
      >
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star-o" />
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <a href="#">{this.state.message.subject}</a>
        </div>
      </div>
    );
  }
}

export default Message;
