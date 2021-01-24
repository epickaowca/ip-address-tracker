import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

function getApi(ip){
    const apiKey = 'at_hyC27emHWuCBPOhafXGVBsy27kb4b'
    const apiUrl = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`
    return axios.get(apiUrl)
        .then(res=>res.data)
        .catch(error=>{throw error})
}

function* fetchUsers({payload}){
    try{
        const geoInfo = yield call(()=>getApi(payload))
        yield put({ type: 'app/GET_GEOINFO_SUCCESS', payload: geoInfo })
    } catch(e){
        yield put({ type: 'app/GET_GEOINFO_FAILED', payload: e.message })
    }
}

function* userSaga(){
    yield takeEvery('app/GET_GEOINFO_REQUESTED', fetchUsers)
}

export default userSaga