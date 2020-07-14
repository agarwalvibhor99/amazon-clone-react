export const initialState = {
  basket: [],
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LoGIC for ADDING TO BASEKT
      break;
    case "REMOVE_FROM_BASKET":
      //logic for removing from basket
      break;
    default:
      return state;
  }
}

export default reducer;
