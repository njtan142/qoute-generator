import logo from './logo.svg';
import './App.css';
import FortuneCookie from './components/FortuneCookie';
import styled from 'styled-components';
import React, { useState, useEffect } from "react";


const url = 'https://fortune-cookie4.p.rapidapi.com/slack';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9965766e54msh93d25faa24ab878p182993jsn7be491c739b5',
        'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com'
    }
};
function App() {
  const [fortune, setFortune] = useState(); 
    const fetchFortune = async () => {
        try {
            setFortune();
            const response = await fetch(url, options);
            const result = await response.text();
            const result_json = JSON.parse(result);
            console.log(result_json);
            setFortune(result_json.text.split(":")[1]);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchFortune();
    }, [])

  return (
    <Container onClick={fetchFortune}>
      <FortuneCookie fortune={fortune}/>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
