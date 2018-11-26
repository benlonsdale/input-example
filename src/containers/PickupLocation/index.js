import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Results from './components/Results';

export default () => {
    const [ term, setTerm ] = useState('');   
    const [ timer, setTimer ] = useState();
    const [ results, setResults ] = useState([]); 

    useEffect(() => {
        clearTimeout(timer);
        if(term.length > 1){
            const newTimer = setTimeout(() => {
                axios({
                    url: `https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${term}`
                })
                    .then(res => {
                        setResults(res.data.results.docs)
                    })
                    .catch(err => {
                        setResults([]);
                    })                
            }, 500);
            setTimer(newTimer);
        }else{
            setResults([]);
        }
    }, [term]);

    return (
        <Container>
            <Label htmlFor="pickup_location">Pick-up Location</Label>
            <Input                 
                aria-label="Pick Up Location"
                placeholder="city, airport, station, region and district..."
                onChange={(e) => setTerm(e.target.value)} 
                value={term} 
            />            
            <Results results={results} />
        </Container>
    )
}

const Container = styled.div`
    position: relative;

`

const Label = styled.label`
    display: block;
    width: 100%;
    font-size: 0.875em;
    color: #444;
`

const Input = styled.input`
    padding: 12px 8% 12px 2%;
    border-radius: 0;
    background: #FEFEFE;
    border-color: #a9a9a9;
    border-style: solid;
    border-width: 1px;
    font-size: 0.813em;
    margin: 4px 0 0;
    line-height: 15px;
    width: 100%;
    box-sizing: border-box;
`