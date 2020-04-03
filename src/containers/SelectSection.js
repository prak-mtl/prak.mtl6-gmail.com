import React, { Component } from "react";
import SelectBox from "../components/Select";
import DisplaySection from "./DisplaySection";
import "./selectSection.css";

export default class SelectSection extends Component {
  state = {
    lang: "",
    curr: ""
  };

  handleValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const langConfig = [
      {
        label: "English",
        value: "eng"
      },
      {
        label: "Spanish",
        value: "spn"
      },
      {
        label: "Deutsch",
        value: "de"
      }
    ];

    const currConfig = [
      {
        label: "Indian Rupees (INR)",
        value: "inr"
      },
      {
        label: "US Dollar (USD)",
        value: "usd"
      },
      {
        label: "Great Britain Pound (GBP)",
        value: "gbp"
      }
    ];
    return (
      <div>
        <div className="select-wrapper">
          <SelectBox
            config={langConfig}
            type="lang"
            id="Language"
            onChange={this.handleValue.bind(this)}
          />
          <SelectBox
            config={currConfig}
            type="curr"
            id="Currency"
            onChange={this.handleValue.bind(this)}
          />
        </div>

        <DisplaySection lang={this.state.lang} curr={this.state.curr} />
      </div>
    );
  }
}
