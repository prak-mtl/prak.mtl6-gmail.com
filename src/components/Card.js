import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import "./card.css";

export default function CardComp(props) {
  return (
    <div className="main-wrapper">
      {props.data &&
        props.data.map((item, index) => (
          <Card key={index} className="card-main">
            <CardImg className="card-img" src={item.imgSrc} alt="Card image" />
            <CardBody>
              <CardTitle>{item.heading}</CardTitle>
              <CardText>{item.body}</CardText>
              <p className="card-stars">
                {item.stars} <span className="ml-2">♥</span>
              </p>
              <div className="d-flex justify-content-between">
                <p>{item.reviews}</p>
                <p>
                  {props.symbol}
                  {item.price}
                </p>
              </div>
            </CardBody>
          </Card>
        ))}
    </div>
  );
}
