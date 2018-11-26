import 'babel-polyfill'; 
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import React, { Component } from "react";
import styled from "styled-components";
import PickupLocation from "./containers/PickupLocation";

export default class App extends Component {
    render() {
        return (
            <SearchWidget>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2>Let’s find your ideal car</h2>
                    <PickupLocation />
                </form>
            </SearchWidget>
        );
    }
}

const SearchWidget = styled.div`
    background-color: #f5d361;    
    max-width: 500px;
    width: 100%;
    border-bottom: 2px solid #DAB129;
    form {
        padding: 5%;
        h2 {
            font-size: 2em;
            font-weight: 700;
            line-height: 1.3em;
            text-shadow: none;
            padding-bottom: 10px;
            margin-bottom:4px;
        }
    }
`;
