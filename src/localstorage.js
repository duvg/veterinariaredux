// Obtener del localStorage
export const getStateStorage = () => {
    const citasStorge = localStorage.getItem('citas');
    if(citasStorge === null) {
        return undefined;
    }

    return JSON.parse(citasStorge);
}


// Guardar en el localStorage
export const setStateStorage = state => {
    const citasState = JSON.stringify(state);
    localStorage.setItem('citas', citasState);
}