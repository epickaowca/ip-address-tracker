import { all } from 'redux-saga/effects'
import userSaga from './geoApi'

export default function* rootSaga(){
    yield all(([
        userSaga()
    ]))
}