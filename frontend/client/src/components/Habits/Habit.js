import React from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const Habit = (props) => {
  const { data } = props;

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{data.title}</div>
        {`${data.cue} => ${data.craving} => ${data.action} => ${data.reward}`}
      </div>
      <Badge bg="primary" pill>
        {data.streaks}
      </Badge>
    </ListGroup.Item>
  );
};

export default Habit;
