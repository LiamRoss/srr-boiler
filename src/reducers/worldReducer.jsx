export const worldReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_WORLD":
      return {
        ...state, 
        name: action.name
      };
    default:
      return state
  }
}