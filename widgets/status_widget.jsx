import React from 'react';
import BaseWidget from './widget.jsx';

const failureStyle = {'background-color': 'red'};
const okStyle = {'background-color': 'green'};

export default class StatusWidget extends BaseWidget {

  constructor(props) {
    super(props);
    this.state = {title: "init", status: "Ok"};
  }

  render() {
    const style = this.state.status === 'Ok' ? okStyle : failureStyle;
    return (
      <div className={"text_widget widget w" + this.props.width + " h" + this.props.height} style={style}>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
