import axios from "axios";
import token from "../auth/token";
import { getUserError, getUserSuccess } from "./userActions";

export const getUserOperation = () => async (dispatch, getState) => {
  token.set(getState().auth.tokens.accessToken);
  try {
    const { data } = await axios.get("https://slimmom-backend.herokuapp.com/user");
    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(getUserError(error));
  }
};
