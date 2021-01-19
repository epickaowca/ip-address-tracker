import React from 'react'
import styled from 'styled-components'
import bgPattern from '../../asset/pattern-bg.png'
import SearchLocation from './searchLocation'

const HeaderElem = styled.header`
    height: 300px;
    background-image: url(${bgPattern});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > h1{
        margin-bottom: 20px;
        color: white;
        font-weight: 400;
        text-align: center;
    }
`

export default function Header() {
    return (
        <HeaderElem bgPattern={bgPattern}>
            <h1>IP Address Tracker</h1>
            <SearchLocation />
        </HeaderElem>
    )
}
