import Card from "react-bootstrap/Card";

const CardWrap = (props) => {
  return (
    <Card>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
};

export default CardWrap;
