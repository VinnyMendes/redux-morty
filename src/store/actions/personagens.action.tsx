import { Personagem } from '../../type'

export const FETCH_PERSONAGENS_START = "FETCH_PERSONAGENS_START";
export const FETCH_PERSONAGENS_SUCCESS = 'FETCH_PERSONAGENS_SUCCESS';
export const FETCH_PERSONAGENS_ERROR = 'FETCH_PERSONAGENS_ERROR';
export const FAVORITAR_PERSONAGENS = "FAVORITAR_PERSONAGENS";





export const  fetchPersonagemStarted = () => {
    return { type: FETCH_PERSONAGENS_START };
};

export const fetchPersonagemSuccess = (personagens: Personagem[]) => {
    return {
        type: FETCH_PERSONAGENS_SUCCESS,
        payload: { personagens },
    }
}

export const fetchPersonagemError = (errorMessage: string) => {
    return {
        type: FETCH_PERSONAGENS_ERROR,
        payload: { errorMessage },
    }
}



export const favoritarPersonagens = (id: number) => {

    return { 
        type: FAVORITAR_PERSONAGENS,
        payload: id,
    }   

}

/**
 * 
 * @param page
 * @default 1
 * @void
 * @author Vinicius Mendes
 */

export const fetchPersonagemThunk = (page = 1) => async (dispatch: any) => {
    dispatch(fetchPersonagemStarted());
    await new Promise(resolve => setTimeout(resolve, 1500));
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`); 
        const json = await response.json(); 
        const jsonFilter = json.results.map((result : any) =>  ({...result, favorito: false}))    
        dispatch(fetchPersonagemSuccess(jsonFilter));                  

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    }    
}
/**
 * 
 * @param texto
 * @default undefined
 * @void
 * @author Vinicius Mendes
 */
export const filterPersonagemThunk = (texto: string) => async (dispatch: any) => {
    dispatch(fetchPersonagemStarted());
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${texto}`); 
        const json = await response.json();
        const jsonFilter = json.results.map((result : any) =>  ({...result, favorito: false}))          
        dispatch(fetchPersonagemSuccess(jsonFilter));                  

    } catch (error: any) {
        dispatch(fetchPersonagemError(error.message));
    } 
}  