import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_FAILED,
  DATA_FETCHING_SUCCESS,
} from "./actions";

const reducer = (state, action) => {
  //Inizio fetch dei dati
  if (action.type === DATA_FETCHING_STARTED) {
    return { ...state, isError: false, isLoading: false };
  }
  if (action.type === DATA_FETCHING_SUCCESS) {
    //Modifico Dati Fetchati Array
    return {
      ...state,
      isLoading: false,
      isError: false,
      products: action.payload.map((el) => {
        return { ...el, qty: 1 };
      }),
    };
  }
  //Fetch dei dati fallito
  if (action.type === DATA_FETCHING_FAILED) {
    return { ...state, isError: true, isLoading: false };
  }

  return state;
};

export default reducer;