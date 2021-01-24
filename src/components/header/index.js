import React from 'react'
import styled from 'styled-components'
import bgPattern from '../../asset/pattern-bg.png'
import SearchLocation from './searchLocation'
import InfoBlock from './infoBlock'
import { useSelector } from 'react-redux'

const HeaderElem = styled.header`
    z-index: 2;
    position: relative;
    height: 300px;
    background-image: url(${bgPattern});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 30px;
    align-items: center;
    
    & > h1{
        white-space: nowrap;
        margin-bottom: 20px;
        color: white;
        font-weight: 400;
        text-align: center;
    }
    & > div{
        &:nth-child(4){
            padding: 5px;
            margin-top: 5px;
            background: black;
            color: white;
        }
    }
`

export default function Header() {
    const error = useSelector(state=>state.app.error)
    return (
        <HeaderElem bgPattern={bgPattern}>
            <h1>IP Address Tracker</h1>
            <SearchLocation />
            <InfoBlock />
            {error && <div>ip address is invalid</div>}
        </HeaderElem>
    )
}
