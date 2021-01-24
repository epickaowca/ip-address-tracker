import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Wrapper = styled.div`
    background: white;
    position: absolute;
    top: 60%;
    padding: 10px;
    border-radius: 15px;
    width: 500px;
    max-width: 90%;
    & > div{
        text-align: center;
        padding: 10px 0px;
        & > p{
            margin-bottom: 5px;
            font-size: .7rem;
            text-transform: upperCase;
            color: ${p=>p.theme.color2};
        }
        & > h3{
            font-weight: 500;
            font-size: 1rem;
            color: black;
        }
    }
    ${p=>p.theme.media.desktop1}{
        display: flex;
        width: 90%;
        max-width: 1024px;
        justify-content: space-between;
        top: 70%;
        padding: 60px 10px;
        & > div{
            padding: 0px 25px;
            width: 25%;
            text-align: left;
            border-right: 1px solid ${p=>p.theme.color2};
            & > p{
                font-size: .7rem;
            }
            & > h3{
                font-size: 1.3rem;
            }
            &:last-child{
                border: unset;
            }
        }
    }
`

export default function InfoBlock() {
    const info = useSelector(state=>state.app.currentGeo)
    const { ip, isp, location } = info
    return (
        <Wrapper>
            <div>
                <p>ip address</p>
                <h3>{ip}</h3>
            </div>
            <div>
                <p>location</p>
                <h3>{location && location.city}</h3>
            </div>
            <div>
                <p>timezone</p>
                <h3>{location && location.timezone}</h3>
            </div>
            <div>
                <p>isp</p>
                <h3>{isp}</h3>
            </div>
        </Wrapper>
    )
}
