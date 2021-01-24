import React, { useEffect } from 'react'
import Header from '../components/header'
import GeoMap from '../components/geoMap'
import { useDispatch } from 'react-redux'
import { getGeoInfo } from '../redux/ducks/app'
import 'leaflet/dist/leaflet.css'

export default function View() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getGeoInfo(''))
    }, [dispatch])
    return (
        <div>
            <Header />
            <GeoMap />
        </div>
    )
}
