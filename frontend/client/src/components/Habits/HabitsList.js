import React from "react";

import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

import CardWrap from "../UI/CardWrap";
import Habit from "./Habit";

const HabitsList = (props) => {
  return (
    <CardWrap>
      <ListGroup as="ol" numbered>
        {props.habits.map((habit) => {
          return <Habit data={habit} />;
        })}
      </ListGroup>
    </CardWrap>
  );
};

export default HabitsList;
