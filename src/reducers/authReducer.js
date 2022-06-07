import { actionsTypes } from "../actionsTypes/types";

const reducer = (state, action) => {
  switch (action.type) {
    case actionsTypes.login:
      return { ...action.payload, logged: true }

    case actionsTypes.logout:
      return { logged: false }

    default:
      return state
  }
}

export default reducer