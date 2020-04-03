import React, { Component } from "react";
import CardComp from "../components/Card";
import { english } from "../languages/english";
import { spanish } from "../languages/spanish";
import { deutsch } from "../languages/deutsch";

export default class DisplaySection extends Component {
  state = {
    cardData: [],
    currSymbol: ""
  };
  componentDidMount(){
    this.chooseLang(this.props.lang);
    this.chooseCurr(this.props.curr);  
  }
  componentWillReceiveProps(nextProps) {
    this.chooseLang(nextProps.lang);
    this.chooseCurr(nextProps.curr);
  }
  chooseLang = lang => {
    let choosenLang = [];
    switch (lang) {
      case "eng":
        choosenLang = english;
        break;
      case "spn":
        choosenLang = spanish;
        break;
      case "de":
        choosenLang = deutsch;
        break;
      default:
        choosenLang = english;
        break;
    }
    this.setState({
      cardData: choosenLang
    });
  };
  chooseCurr = curr => {
    let choosenCurr = '';
    switch (curr) {
      case "inr":
        choosenCurr = "₹";
        break;
      case "usd":
        choosenCurr = "$";
        break;
      case "gbp":
        choosenCurr = "£";
        break;
      default:
        choosenCurr = "₹";
        break;
    }
    this.setState({
      currSymbol: choosenCurr
    });
  };
  render() {
    return (
      <div>
        <CardComp data={this.state.cardData} symbol={this.state.currSymbol} />
      </div>
    );
  }
}
