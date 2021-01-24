import React from 'react'
import styled from 'styled-components'
import arrow from '../asset/icon-arrow.svg'

const ButtonElem = styled.button`
background: black;
border: none;
outline: none;
width: 45px;
height: 45px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
cursor: pointer;
& > div{
    width: 100%;
    height: 100%;
    background-image: url(${p=>p.arrow});
    background-position: center;
    background-repeat: no-repeat;
}
&:hover{
    background: ${p=>p.theme.color1};
}
`

export default function button({clickFunc}) {
    return (
        <ButtonElem onClick={clickFunc} arrow={arrow}>
            <div></div>
        </ButtonElem>
    )
}
