import { Stack } from '@mui/material';
import Routes from 'routes';
import React, { createContext, useEffect, useState } from 'react';
import api from 'api';

export const MonsterContext = createContext();

function App() {
  const [armedDg3, setArmedDg3] = useState({});
  const [armedDg5, setArmedDg5] = useState({});
  const [armedDg7, setArmedDg7] = useState({});
  const [armedDg10, setArmedDg10] = useState({});

  const [xp1, setXp1] = useState(armedDg3.xp)
  const [xp5, setXp5] = useState(armedDg5.xp)
  const [xp7, setXp7] = useState(armedDg7.xp)
  const [xp10, setXp10] = useState(armedDg10.xp)


  useEffect(() => {
    api.get('ankheg')
      .then((response) => {
        setArmedDg3(response.data)
        //console.log(monster)
      });
    api.get('ape')
      .then((response) => {
        setArmedDg5(response.data)
        //console.log(monster)
      });
    api.get('black-dragon-wyrmling')
      .then((response) => {
        setArmedDg7(response.data)
        //console.log(monster)
      });
    api.get('aboleth')
      .then((response) => {
        setArmedDg10(response.data)
        //console.log(monster)
      });

  }, []);//fim useEffect

  return (

    <MonsterContext.Provider
      value={{
        armedDg3,
        armedDg5,
        armedDg7,
        armedDg10,
        xp1, setXp1,
        xp5, setXp5,
        xp7, setXp7,
        xp10, setXp10
      }}
    >
      <Stack textAlign="center">
        <Routes />
      </Stack>
    </MonsterContext.Provider>
  );
}

export default App;
