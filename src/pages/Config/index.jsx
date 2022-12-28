import {
  Button, Stack, Typography,
} from '@mui/material';
import { MonsterContext } from 'App';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

function Config() {
  const {
    setArmedDg3, setArmedDg5, setArmedDg7, setArmedDg10,
  } = useContext(MonsterContext);

  function configPower(dificult) {
    if (dificult === 'Easy') {
      setArmedDg3(1200);
      setArmedDg5(2400);
      setArmedDg7(2800);
      setArmedDg10(3000);
    } else if (dificult === 'Medium') {
      console.log('passou aqui');
      setArmedDg3(1200 * 2);
      setArmedDg5(2400 * 2);
      setArmedDg7(2800 * 2);
      setArmedDg10(3000 * 2);
    } else if (dificult === 'Hard') {
      setArmedDg3(1200 * 3);
      setArmedDg5(2400 * 3);
      setArmedDg7(2800 * 3);
      setArmedDg10(3000 * 3);
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
