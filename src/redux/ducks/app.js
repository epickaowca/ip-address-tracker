export const GET_GEOINFO_REQUESTED = 'app/GET_GEOINFO_REQUESTED'
export const GET_GEOINFO_SUCCESS = 'app/GET_GEOINFO_SUCCESS'
export const GET_GEOINFO_FAILED = 'app/GET_GEOINFO_FAILED'


const initState = {
    currentGeo: [],
    loading: false,
    error: null,
}

const reducer = (state = initState, {type, payload})=>{
    switch(type){
        case GET_GEOINFO_REQUESTED:
        return{
            ...state,
            loading: true,
        }
        case GET_GEOINFO_SUCCESS:return{
            ...state,
            loading: false,
            currentGeo: payload,
            error: null,
        }
        case GET_GEOINFO_FAILED:return{
            ...state,
            loading: false,
            error: payload,
        }
        default: return state
    }
}

export const getGeoInfo = payload=>({type: GET_GEOINFO_REQUESTED, payload}) 


export default reducer