import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function StoryCard(props) {
  return (
    <div>
      <Card
        className="mt-5"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
          
          padding: "40px",
          textAlign: "center",
         
        }}
      >
        <Card.Text key={props.id}>
          <Card.Title
            style={{
              backgroundColor: `${props.backgroundColor}99`,
              //99 is the transparency number
              color: props.color,
              //   color:"#000000" to change to black
            }}
            className="p-5"
          >
            <h3>{props.name}</h3>
            <p>{props.content}</p>
            {/* {props.owner && (
                  <Button variant='danger' onClick={() => onDelete(story.id)}>
                    Delete story
                  </Button>
                )} */}
          </Card.Title>
        </Card.Text>
      </Card>
    </div>
  );
}

// function StoryCard(props) {
//     return (
//       <div>
//         <Carousel className="mt-5">
//           <Carousel.Item key={props.id}>
//             {props.imageUrl && (
//               <img
//                 className="d-block w-100"
//                 src={props.imageUrl}
//                 alt={props.name}
//               />
//             )}

//             <Carousel.Caption
//               style={{
//                 backgroundColor: `${props.backgroundColor}`,
//                 color: props.color,
//               }}
//               className="p-5"
//             >
//               <h3>{props.name}</h3>
//               <p>{props.content}</p>
//               {/* {props.owner && (
//                     <Button variant='danger' onClick={() => onDelete(story.id)}>
//                       Delete story
//                     </Button>
//                   )} */}
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     );
//   }

export default StoryCard;
