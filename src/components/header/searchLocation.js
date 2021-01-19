import React from 'react'
import styled from 'styled-components'
import Button from '../../elements/button'
const Wrapper = styled.div`
    display: flex;
    max-width: 300px;
    display: flex;
    width: 90%;
    & > input{
        padding: 0px 10px;
        width: 100%;
        border: none;
        height: 45px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
`

export default function searchLocation() {
    return (
        <Wrapper>
            <input placeholder="Search for any IP address or domain" type="text" />
            <Button></Button>
        </Wrapper>
    )
}
