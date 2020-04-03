import React, { Component } from "react";
import { Input, Label } from "reactstrap";
import './select.css';

export default class SelectBox extends Component {
  render() {
    const { config, type, id } = this.props;
    return (
      <div className="main-wraper">
        <Label for="exampleSelect" className="mr-3">{id}</Label>
        <Input
          type="select"
          name={type}
          id={id}
          onChange={e => this.props.onChange(e)}
        >
          {config.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </Input>
      </div>
    );
  }
}
