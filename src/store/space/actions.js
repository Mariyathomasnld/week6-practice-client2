import { DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import { apiUrl } from "../../config/constants";
import axios from "axios";

export const start_Loading = () => ({
  type: "startloading",
});
export const spaces_Fetched = (data) => ({
  //the name given here is to be used in the case in the reducer"
  type: "spacesFetched",
  payload: data,
});

export const space_Details_Fetched = (spaceById) => ({
  type: "spacedetailsFetched",
  payload:spaceById,
});
 
//fetchAllSpaces gets allspaces including stories
export const fetchAllSpaces = async function thunk(dispatch, getState) {
  try {
    const offset = getState().allspaces.spaces.length;
    const response = await axios.get(
      `${apiUrl}/spaces?offset=${offset}&limit=${DEFAULT_PAGINATION_LIMIT}`
    );

    console.log(response);
    dispatch(spaces_Fetched(response.data));
  } catch (e) {
    console.log(e);
  }
};


export const fetchSpaceById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/spaces/${id}`);
      console.log("story:", response.data);
      dispatch(space_Details_Fetched(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};
