// space with a specific id
//stories from that space
// fetch space of the specific id and its stories

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router";

import Loading from "../components/Loading/Loading";
import SpaceCard from "../components/SpaceCard";
import { fetchSpaceById } from "../store/space/actions";
import { selectSpaceDetails } from "../store/space/selectors";
import StoryCard from "../components/StoryCard";

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const space = useSelector(selectSpaceDetails);

  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch, id]);

  if (!space || parseInt(space.id) !== parseInt(id)) return <Loading />;

  return (
    <div>
      <SpaceCard
        key={space.id}
        id={space.id}
        title={space.title}
        description={space.description}
        backgroundColor={space.backgroundColor}
        color={space.color}
        showLink={false}
      />
      <Container>
        {space.stories.map((story) => {
          return (
            <StoryCard
              key={story.id}
              id={story.id}
              name={story.name}
              content={story.content}
              imageUrl={story.imageUrl}
              backgroundColor={space.backgroundColor}
              color={space.color}
            />
          );
        })}
      </Container>
    </div>
  );
}

export default DetailsPage;
