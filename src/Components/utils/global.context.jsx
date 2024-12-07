import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { reducer } from "../redurcers/redurcer";

const CharStates = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  favs: lsFavs,
  chars: [],
  theme: "light",
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState(state.theme);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_CHARS", payload: res.data });
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    dispatch({ type: "TOGGLE_THEME", payload: newTheme });

    document.body.className = newTheme;
  };

  return (
    <CharStates.Provider value={{ state, dispatch, theme, toggleTheme }}>
      {children}
    </CharStates.Provider>
  );
};

export default Context;
export const useCharStates = () => useContext(CharStates);
