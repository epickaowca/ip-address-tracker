import React from 'react'
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { useSelector } from 'react-redux'
import L from 'leaflet';
import marker from '../../asset/icon-location.svg'

const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [32,45],     
});

const Wrapper = styled.div`
z-index: 1;
position: relative;
width: 100vw;
& > div{
    height: calc(100vh - 300px);
    min-height: 400px;
    &:nth-child(1){
        z-index: 1;
    }
    &:nth-child(2){
        z-index: 2;
        top: 0px;
        left: 0px;
        position: absolute;
        background: rgba(0,0,0,.76);
        width: 100vw;
    }
}
`

function ChangeMap({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}


export default function GeoMap() {
    const info = useSelector(state=>state.app.currentGeo)
    const loading = useSelector(state=>state.app.loading)
    const lat = info.location ? info.location.lat : 51
    const lng = info.location ? info.location.lng : 19
    const position = [lat, lng]
    

    return (
        <Wrapper>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <ChangeMap center={position} zoom={13} />
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={ myIcon }>
                        <Popup>
                            destination
                        </Popup>
                    </Marker>
                </MapContainer>
                {loading && <div></div>}
        </Wrapper>
    )
}
