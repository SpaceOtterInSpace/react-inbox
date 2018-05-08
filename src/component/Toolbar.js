import React, { Component } from "react";

class Toolbar extends Component {
  handleAllSelected = e => {
    this.props.selectAll(!this.props.allSelected);
  };

  handleApplyLabel = e => {
    let label = e.target.value;
    this.props.addLabel(label);
  };

  handleRemoveLabel = e => {
    let label = e.target.value;
    this.props.removeLabel(label);
  };

  getAllSelectedClass = () => {
    if (this.props.selectedStatus() === "all") {
      return "fa fa-check-square";
    } else if (this.props.selectedStatus() === "none") {
      return "fa fa-check-square-o";
    } else {
      return "fa fa-minus-square-o";
    }
  };

  render() {
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{this.props.getNumberRead()}</span>
            unread messages
          </p>

          <button
            onClick={this.handleAllSelected.bind(this)}
            className="btn btn-default"
          >
            <i className={this.getAllSelectedClass()} />
          </button>

          <button onClick={this.props.markAsRead} className="btn btn-default">
            Mark As Read
          </button>

          <button onClick={this.props.markAsUnread} className="btn btn-default">
            Mark As Unread
          </button>

          <select
            onChange={this.handleApplyLabel.bind(this)}
            className="form-control label-select"
          >
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select
            onChange={this.handleRemoveLabel.bind(this)}
            className="form-control label-select"
          >
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button
            onClick={this.props.deleteMessage}
            className="btn btn-default"
          >
            <i className="fa fa-trash-o" />
          </button>
        </div>
      </div>
    );
  }
}

export default Toolbar;
