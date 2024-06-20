import React, { useState, useEffect } from "react";
import styled from 'styled-components';




function FortuneCookie(props) {
    


    return <div>
        <Fortune >
            {
                (props.fortune ? props.fortune : 'Please wait...')
            }
        </Fortune>
    </div>;
}

const Fortune = styled.div`
    font-size: 2em;
    font-style: italic;
    font-weight: 500;
    letter-spacing: 2px;

    max-width: 360px;
    text-align: center;
    line-height: 1.6em;

    border-radius: 43px;
    background: #e3e3e3;
    box-shadow:  9px 9px 14px #c5c5c5,
                -9px -9px 14px #ffffff;

    padding: 1em 3em;


    @media only screen and (max-width: 800px) {
        font-size: 1.5em;
        padding: 2em 2.5em;
        margin: 1.5em;
    }

    @media only screen and (max-width: 300px) {
        font-size: 0.75em;
        padding: 3em 2em;
        margin: 2em;
    }

    @media only screen and (max-width: 600px) {
        font-size: 1em;
        padding: 3em 2em;
        margin: 2em;
    }
    
`;

export default FortuneCookie;
