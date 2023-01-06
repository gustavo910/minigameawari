import {
  Button, Stack, Typography,
} from '@mui/material';
import { MonsterContext } from 'App';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

function Config() {
  const {
    armedDg3, armedDg5, armedDg7, armedDg10,
    setXp1,
    setXp5,
    setXp7,
    setXp10
  } = useContext(MonsterContext);

  function configPower(dificult) {
    if (dificult === 'Easy') {
      setXp1(armedDg3.xp);
      setXp5(armedDg5.xp);
      setXp7(armedDg7.xp);
      setXp10(armedDg10.xp);
    } else if (dificult === 'Medium') {
      setXp1(armedDg3.xp * 2);
      setXp5(armedDg5.xp * 2);
      setXp7(armedDg7.xp * 2);
      setXp10(armedDg10.xp * 2);
    } else if (dificult === 'Hard') {
      setXp1(armedDg3.xp * 3);
      setXp5(armedDg5.xp * 3);
      setXp7(armedDg7.xp * 3);
      setXp10(armedDg10.xp * 3);
    }
  }

  return (
    <Stack mt="70px" gap={4} flexDirection="column" alignItems="center">
      <Typography variant="h1" color="#D46E00">Configurações</Typography>
      <Typography variant="h2" color="#504F7F">Monster App</Typography>
      <Link to="/">
        {' '}
        <Typography variant="h4" color="#504F7F">Voltar</Typography>
      </Link>
      <Typography variant="h4" color="#D46E00">Clique na dificuldade que deseja jogar!</Typography>
      <Stack direction="row" gap={3}>
        <Button
          variant="contained"
          style={{ width: '307px', height: '170px', backgroundColor: '#D46E00' }}
          onClick={() => configPower('Easy')}
        >
          Easy
        </Button>
        <Button
          variant="contained"
          style={{ width: '307px', height: '170px', backgroundColor: '#D46E00' }}
          onClick={() => configPower('Medium')}
        >
          Medium
        </Button>
        <Button
          variant="contained"
          style={{ width: '307px', height: '170px', backgroundColor: '#D46E00' }}
          onClick={() => configPower('Hard')}
        >
          Hard
        </Button>
      </Stack>

    </Stack>
  );
}
export default Config;
