import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_FAILED,
  DATA_FETCHING_SUCCESS,
  DELETE_ITEM,
  SVUOTA_CARRELLO,
  AUMENTA_QTY,
  DIMINUISCI_QTY,
  
} from "./actions";

const reducer = (state, action) => {
  //Inizio fetch dei dati
  if (action.type === DATA_FETCHING_STARTED) {
    return { ...state, isError: false, isLoading: true };
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
  //Rimuovo un item
  if (action.type === DELETE_ITEM) {
    return {
      ...state,
      products: state.products.filter((el) => el._id !== action.payload),
    };
  }
  //Aumento quantità
  if(action.type===AUMENTA_QTY){
    return {
      ...state,
      products : state.products.map(el => {
        if(action.payload===el._id){
          return {...el, qty : el.qty + 1}
        }
        return {...el}
      })
    }}
    //Diminuisco quantità
    if(action.type===DIMINUISCI_QTY){
      return {
        ...state,
        products : state.products.map(el => {
          if(action.payload===el._id){
            return {...el, qty : el.qty - 1}
          }
          return {...el}
        })
      }}
      //Calcolo somma degli acquisti
      
      //Calcolo numero di items nel carrello
      
      //Cancello tutti gli elementi
      if (action.type === SVUOTA_CARRELLO) {
        return {
          ...state,
          products: [],
        };
      }
      return state;
    };
    
    export default reducer;