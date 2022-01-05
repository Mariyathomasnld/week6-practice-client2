import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  space: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    
    
    
    
      case "postStories": {
      return {
        ...state,

        space: {
          ...state.space,
          stories: [...state.space.stories,action.payload],
        },
      };
    }

// case "postStories": 


//     const story =action.payload
//     const addstory = state.space.stories.push(
//       story 
//     );
//     return {
//       ...state,
//       space: {
//         ...state.space,
//         stories: addstory
//       }
//     };

   
    
    case "updateMySpace": {
      return {
        ...state,
        
    space: { ...action.payload, stories: [state.space.stories] }
     
      };
    }

    
    case "deleteStories": 
    const storyId = action.payload;
    const newStories = state.space.stories.filter(
      story => story.id !== storyId
    );
    return {
      ...state,
      space: {
        ...state.space,
        stories: newStories
      }
    };

  default:
    return state;
}
};
