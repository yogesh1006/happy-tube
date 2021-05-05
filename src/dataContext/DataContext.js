import { createContext, useContext, useReducer } from "react";
import  {reducerFunction} from './reducerFunction'

export const DataContext = createContext();


export function useData() {
    return useContext(DataContext);
  }

const initialState = {
  likedVideos:[],
  history:[],
  playlist:[{
    id: 1,
    name: "Playlist 1",
    videos: ["KUJsaM-hAjs", "Vi4Pr8bUMZs"],
  },],

};


export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}





  