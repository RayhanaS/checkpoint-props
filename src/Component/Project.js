import React from 'react'
import "./Project.css";

import {Col , Card , Row} from "react-bootstrap";

export default function Project(props) {
  console.log(props)
    return (
        <div>
        <Card>
        <Card.Img  src={props.children} />
        <Card.Body>
          <Card.Title>{props.Title}</Card.Title>
          <Card.Text>
                       {props.Texte}
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
    )
}
