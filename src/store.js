import { createStore } from 'redux';
import reducer from './reducers';
import { getStateStorage, setStateStorage } from './localstorage';

// State inicial
//const initialState = [];

// Obtener datos del localstorage
const storageState = getStateStorage();


const store = createStore(
    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe( () => {
    setStateStorage({
        citas: store.getState().citas
    })
});


export default store;