export const initialState = {
  basket: [],
  //   user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LoGIC for ADDING TO BASEKT
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      //logic for removing from basket
      return { state };
      break;
    default:
      return state;
  }
};

export default reducer;
