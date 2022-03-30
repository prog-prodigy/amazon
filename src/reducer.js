export const initialState = {
  basket: [],
  user: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      const newbasket = [...state.basket];
      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn(`Can't find the item with id: ${action.payload.id}`);
      }
      return {
        ...state,
        basket: [...newbasket],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      }
    default:
      return state;
  }
};
