import React from 'react';
import styled from 'styled-components';

export default ({ results }) => {
    if(results.length === 0){
        return null;
    }
    return (
        <ResultList>
            {
                results.map(result => (
                    <li>{result.name}</li>
                ))
            }
        </ResultList>
    )
}

const ResultList = styled.ul`
    box-sizing: border-box;
    position: absolute;
    list-style: none;
    z-index: 9999;
    font-size: .875em;
    max-height: 380px;
    overflow-y: auto;
    border: 1px solid #e6e6e6!important;
    width: 100%;
    top: 48px;
    padding: 0px;
    background-color: #fff;
    li {
        color: #989898;
        padding: 10px 9px;
        border-radius: 2px;
        border-bottom: 1px solid #eaeaea;
    }
`;