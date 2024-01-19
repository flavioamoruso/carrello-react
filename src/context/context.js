import React, { useContext, useReducer, useEffect } from "react";
//axios
import axios from "axios";
//Import Funzione a cui delego la gestione delle mie funzioni
import reducer from "./reducer";
//importo tutte action.type
import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_FAILED,
  DATA_FETCHING_SUCCESS
} from "./actions";
// Creo il context per essere utilizzato dai miei componenti
const AppContext = React.createContext();

//URL per le chiamate all API
const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";

//Stato iniziale del nostro Reducer
const initialState = {
//   products: [],
  isLoading: true,
  isError: false,
};
//Componente con cui Wrappare la nostra intera app (o il componente che ha bisogno di accedere ad un determinato provider)
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      dispatch({ type: DATA_FETCHING_STARTED });
      try {
        const response = await axios.get(url);
        dispatch({
          type: DATA_FETCHING_SUCCESS,
          payload: response.data.data,
        });
      } catch (err) {
        dispatch({ type: DATA_FETCHING_FAILED });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Custom Hook che utilizza direttamente il nostro context
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };