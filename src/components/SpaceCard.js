import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function SpaceCard(props) {
  return (
    <div>
      <Jumbotron
        className="mb-4"
        style={{
          backgroundColor: props.backgroundColor,
          color: props.color,
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        

        {props.showLink && (
          <Link to={`/spaces/${props.id}`}>
            <Button>Visit space</Button>
          </Link>
        )}
      </Jumbotron>
    </div>
  );
}

export default SpaceCard;

// return (
//   <Card
//     className="mb-4"
//     style={{
//       backgroundColor: props.backgroundColor,
//       color: props.color,
//       padding: "40px",
//       textAlign: "center",
//     }}
//   >
//     <h1>{props.title}</h1>
//     <p> {props.description}</p>

//     {props.showLink && (
//       <Link to={`/spaces/${props.id}`}>
//         <Button
//           style={{
//             backgroundColor: "#ffffff",
//             border: "0px",
//             color: "#000000",
//           }}
//         >
//           Visit space
//         </Button>
//       </Link>
//     )}
//   </Card>
// );
// }
