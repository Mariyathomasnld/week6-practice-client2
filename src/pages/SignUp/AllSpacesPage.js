//Nav bar with coolstorybro,home and login from app.js
//spaces header
//fetch all spaces in action
// call the function allspaces here and map over it
//spacecard component

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import SpaceCard from "../../components/SpaceCard";
import { fetchAllSpaces } from "../../store/space/actions";
import { selectSpaces } from "../../store/space/selectors";

function AllSpacesPage() {
  const dispatch = useDispatch();

  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    dispatch(fetchAllSpaces);
  }, []);
 

  return (
    <div>
      <Jumbotron>
        <h1
          className="mb-4"
          style={{
            padding: "20px",
          }}
        >
          Spaces
        </h1>
      </Jumbotron>
      <Container>
        {spaces.map((space) => {
          return (
            <SpaceCard
              key={space.id}
              id={space.id}
              title={space.title}
              description={space.description}
              backgroundColor={space.backgroundColor}
              color={space.color}
              showLink={true}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default AllSpacesPage;
