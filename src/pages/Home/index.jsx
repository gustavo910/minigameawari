import {
  Button, Stack, Typography,
} from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <Stack mt="70px" gap={4} flexDirection="column" alignItems="center">
      <Typography variant="h1" color="#D46E00">Awari</Typography>
      <Typography variant="h2" color="#504F7F">Monster App</Typography>
      <Button
        variant="contained"
        style={{ width: '507px', height: '170px', backgroundColor: '#D46E00' }}
        onClick={() => navigate('/cards')}
      >
        Iniciar jogo
      </Button>
      <Link to="/config">
        <Typography variant="h4" color="#504F7F">Configurações</Typography>
      </Link>
    </Stack>
  );
}
export default Home;
