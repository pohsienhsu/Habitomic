import React from "react";

import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

import CardWrap from "../UI/CardWrap";
<<<<<<< HEAD
import Habit from "./Habit";
=======
>>>>>>> main

const HabitsList = (props) => {
  return (
    <CardWrap>
      <ListGroup as="ol" numbered>
<<<<<<< HEAD
        {props.habits.map((habit) => {
          return <Habit data={habit} />;
        })}
=======
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
>>>>>>> main
      </ListGroup>
    </CardWrap>
  );
};

export default HabitsList;
