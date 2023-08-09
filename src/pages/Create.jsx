import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
import MainContainer from "../components/MainContainer";
import useReducerApp from "../store/store";
import { ItemsContainer} from '../components/ItemsContainer.jsx'
import Item from "../components/Item";

export default function Create() {
  
  const[state, dispatch] = useReducerApp();

    useEffect(()=>{
        dispatch({type: 'LOAD'})
    },[])

    return (
    <MainContainer >        
        <CreateForm dispatch={dispatch} />
        <ItemsContainer>
            {state.items.map(item => (
                <Item item={item} key={crypto.randomUUID()}/>
            ) )}
        </ItemsContainer>
    </MainContainer>
  )
}
