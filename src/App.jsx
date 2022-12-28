import { Stack } from '@mui/material';
import Routes from 'routes';
import React, { createContext, useState } from 'react';

export const MonsterContext = createContext();

function App() {
  const [armedDg3, setArmedDg3] = useState(1200);
  const [armedDg5, setArmedDg5] = useState(2400);
  const [armedDg7, setArmedDg7] = useState(2800);
  const [armedDg10, setArmedDg10] = useState(3000);

  return (

    <MonsterContext.Provider
      value={{
        armedDg3,
        setArmedDg3,
        armedDg5,
        setArmedDg5,
        armedDg7,
        setArmedDg7,
        armedDg10,
        setArmedDg10,
      }}
    >
      <Stack textAlign="center">
        <Routes />
      </Stack>
    </MonsterContext.Provider>
  );
}

export default App;
