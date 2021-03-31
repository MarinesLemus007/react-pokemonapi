import axios from 'axios';

const initialState = {
    open: false,
    data: [],
    loading: false,
    loadingSearch: false,
    page: 20
}

//Types

const GET_RESPONSE_TRY ='GET_RESPONSE_TRY'
const GET_RESPONSE_FINALLY ='GET_RESPONSE_CACH'

const GET_RESPONSE_SEARCH_TRY ='GET_RESPONSE_SEARCH_TRY'
const GET_RESPONSE_SEARCH_CATCH ='GET_RESPONSE_SEARCH_CATCH'
const GET_RESPONSE_SEARCH_FINALLY ='GET_RESPONSE_SEARCH_FINALLY'

//Reducer

export default function pokemonReducer(state = initialState, action){
    switch (action.type) {
        case GET_RESPONSE_TRY:
            return {...state, data: action.payload.data, open: action.payload.open, page: action.payload.page}
        
        case GET_RESPONSE_FINALLY:
            return {...state, loading: action.payload.loading, open: action.payload.open}

        case GET_RESPONSE_SEARCH_TRY:
            return {...state, data: action.payload.data, open: action.payload.open}
        
        case GET_RESPONSE_SEARCH_CATCH:
            return {...state, data: action.payload.data}

        case GET_RESPONSE_SEARCH_FINALLY:
            return {...state, loadingSearch: action.payload.loadingSearch, open: action.payload.open}

        default:
            return state
    }
}

//Actions

export const getResponse = (num) => async (dispatch, getState) => {

    const page = getState().pokemonData.page;
    let viewMore;
    
    if(num !== undefined){
        viewMore = page + num
    }else{
        viewMore = page
    }

    try{
             
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${viewMore}`)

        dispatch({
            type: GET_RESPONSE_TRY,
            payload: {
                open: true,
                data: response.data.results,
                page: viewMore
            }
        })    
    }
    catch(error){
        console.log(error);
    }
    finally{

        dispatch({
            type: GET_RESPONSE_FINALLY,
            payload:{
                loading: true,
                open: false
            }
        })

    }
}

export const getResponseSearch = (inputSearch) => async (dispatch) => {
    
    try{
        
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${inputSearch}`)
        console.log(response.data)
        dispatch({
            type: GET_RESPONSE_SEARCH_TRY,
            payload: {
                open: true,
                data: response.data
            }
        })

    }
    catch(error){

        console.log(error);

        dispatch({
            type: GET_RESPONSE_SEARCH_CATCH,
            payload: {
                data: []
            }
        })
    }
    finally{

        dispatch({
            type: GET_RESPONSE_SEARCH_FINALLY,
            payload:{
                loadingSearch: true,
                open: false
            }
        })
    }
}