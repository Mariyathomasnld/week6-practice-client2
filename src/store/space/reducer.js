const initialState = {
  loading: true,
  spaces: [],
  space: null,
};

//case name and type from actions need to be the same

export default function spacessliceReducer(state = initialState, action) {
  switch (action.type) {
    case "startloading": {
      return {
        ...state,
        loading: true,
      };
    }

    case "spacesFetched": {
      return {
        ...state,

        spaces: [...action.payload],
      };
    }
    case "spacedetailsFetched": {
      return {
        ...state,

        space: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
