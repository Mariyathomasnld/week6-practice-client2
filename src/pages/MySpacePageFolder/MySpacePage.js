import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useState } from "react";

import EditSpaceForm from "./EditSpaceForm";
import PostStoryForm from "./PostStoryForm";
import SpaceCard from "../../components/SpaceCard";
import StoryCard from "../../components/StoryCard";
import { selectUser } from "../../store/user/selectors";
import Loading from "../../components/Loading/Loading";
import { deleteStory } from "../../store/user/actions";

function MySpacePage() {
  const { token, space, id } = useSelector(selectUser);
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [postStoryMode, setpostStoryMode] = useState(false);
  const dispatch = useDispatch();
  const onDelete = (id) => {
    console.log("deleting story!", id);
    dispatch(deleteStory(id));
  };

  if (token === null) {
    navigate("/");
  }

  if (space === null) {
    return <Loading />;
  }

  const displayButtons = id === space.userId;

  return (
    <>
      <h1
        className="mb-4"
        style={{
          padding: "20px",
        }}
      >
        My Space
      </h1>

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
        {displayButtons ? (
          <Card>
            <Button onClick={() => setEditMode(!editMode)}>
              {editMode ? "Close" : "Edit my space"}
            </Button>
            <Button
              onClick={() => setpostStoryMode(!postStoryMode)}
              className="mt-2"
            >
              {postStoryMode ? "Close" : "Post a cool story bro"}
            </Button>
          </Card>
        ) : null}

        {editMode && (
          <Card>
            <EditSpaceForm />
          </Card>
        )}

        {postStoryMode && (
          <Card>
            <PostStoryForm />
          </Card>
        )}
        <Container>
          {space.stories.map((story) => {
            return (
              <>
                <StoryCard
                  key={story.id}
                  name={story.name}
                  content={story.content}
                  imageUrl={story.imageUrl}
                  backgroundColor={space.backgroundColor}
                  color={space.color}
                />
                <Button variant="danger" onClick={() => onDelete(story.id)}>
                  Delete story
                </Button>
              </>
            );
          })}
        </Container>
      </Container>
    </>
  );
}

export default MySpacePage;
