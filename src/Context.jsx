import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducers/reducer";

const OdontologosStates = createContext();
const misFavoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

const estadoInicial = {
    odontologos: [],
    favoritos: misFavoritos,
    modoDarkLight : false,
};

const Context = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, estadoInicial);
    const urlApi = "https://jsonplaceholder.typicode.com/users";

    useEffect(()=>{
        axios(urlApi).then((res) => {
            dispatch({ type: "GET_ODONTOLOGOS", payload: res.data });
        });
    },[]);

    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(state.favoritos));
    },[state.favoritos]);

    return (
        <OdontologosStates.Provider value={{ state, dispatch}}>
            {children}
        </OdontologosStates.Provider>
    );
}

export default Context;

export const useOdontologosStates = () => {
    return useContext(OdontologosStates);
};