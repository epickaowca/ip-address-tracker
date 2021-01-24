import React, { useRef } from 'react'
import styled from 'styled-components'
import Button from '../../elements/button'
import { useDispatch } from 'react-redux'
import { getGeoInfo } from '../../redux/ducks/app'

const Wrapper = styled.div`
    display: flex;
    max-width: 300px;
    display: flex;
    width: 90%;
    & > input{
        outline:none;
        padding: 0px 10px;
        width: 100%;
        border: none;
        height: 45px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
`

export default function SearchLocation() {
    const ipValue = useRef(null)
    const dispatch = useDispatch()
    const fetchGeoHandler = ()=>{
        dispatch(getGeoInfo(ipValue.current.value))
    }
    return (
        <Wrapper>
            <input ref={ipValue} placeholder="Search for any IP address or domain" type="text" />
            <Button clickFunc={fetchGeoHandler}></Button>
        </Wrapper>
    )
}
