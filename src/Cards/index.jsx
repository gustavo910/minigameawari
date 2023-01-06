/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-nested-ternary */
import sword from 'assets/sword.png';
import axel from 'assets/axel.png';
import staff from 'assets/staff.png';
import winner from 'assets/winner.png';
import { Stack, Typography } from '@mui/material';
import { useContext  } from 'react';
import { MonsterContext } from 'App';
import { Link } from 'react-router-dom';

function Cards() {

  const {
    armedDg3, armedDg5, armedDg7, armedDg10, 
    xp1, setXp1,
    xp5, setXp5,
    xp7, setXp7,
    xp10, setXp10
  } = useContext(MonsterContext);


  const clicksword = () => {
    if (xp1 >= 0) {
      setXp1(xp1 - 100);
    } else if (xp1 < 0 && xp5 > 0) {
      setXp5(xp5 - 100);
    } else if (xp5 < 0 && xp7 > 0) {
      setXp7(xp7 - 100);
    } else if (xp7 < 0 && xp10 > 0) {
      setXp10(xp10 - 100);
    }
  };

  const clickaxel = () => {
    if (xp1 >= 0) {
      setXp1(xp1 - 200);
    } else if (xp1 < 0 && xp5 > 0) {
      setXp5(xp5 - 200);
    } else if (xp5 < 0 && xp7 > 0) {
      setXp7(xp7 - 200);
    } else if (xp7 < 0 && xp10 > 0) {
      setXp10(xp10 - 200);
    }
  };

  const clickstaff = () => {
    if (xp1 >= 0) {
      setXp1(xp1 - 300);
    } else if (xp1 < 0 && xp5 > 0) {
      setXp5(xp5 - 300);
    } else if (xp5 < 0 && xp7 > 0) {
      setXp7(xp7 - 300);
    } else if (xp7 < 0 && xp10 > 0) {
      setXp10(xp10 - 300);
    }
  };
  return (
    <Stack alignItems="center" mt="70px">
      <Link to="/">
        <Typography variant="p" color="#504F7F">Voltar tela inicial</Typography>
      </Link>
      {xp1 >= 0
        ? (
          <div>
            <h2>{armedDg3.name}</h2>
            <h2>Vida do inimigo</h2>
            <h4>{xp1}</h4>
            <img src={`https://www.dnd5eapi.co${armedDg3.image}`} alt="Dragão Armado" style={{ width: '15%', height: '30%' }} />
          </div>
        )
        : (xp1 < 0 && xp5 > 0)
          ? (
            <div>
              <h2>{armedDg5.name}</h2>
              <h2>Vida do inimigo</h2>
              <h4>{xp5}</h4>
              <img src={`https://www.dnd5eapi.co${armedDg5.image}`} alt="Dragão Armado" style={{ width: '15%', height: '30%' }} />
            </div>
          )
          : (xp5 < 0 && xp7 > 0)
            ? (
              <div>
                <h2>{armedDg7.name}</h2>
                <h2>Vida do inimigo</h2>
                <h4>{xp7}</h4>
                <img src={`https://www.dnd5eapi.co${armedDg7.images}`} alt="Dragão Armado" style={{ width: '15%', height: '30%' }} />
              </div>
            )
            : (xp7 < 0 && xp10 > 0)
              ? (
                <div>
                  <h2>{armedDg10.name}</h2>
                  <h2>Vida do inimigo</h2>
                  <h4>{xp10}</h4>
                  <img src={`https://www.dnd5eapi.co${armedDg10.image}`} alt="Dragão Armado" style={{ width: '15%', height: '30%' }} />
                </div>

              )
              : (
                <div>
                  <h1>Parabéns você matou todos dragões</h1>
                  <img src={winner} alt="Vencedor" style={{ width: '15%', height: '30%' }} />
                </div>
              )}
      <div>
        <h2>Você deve causar mais dano que o ataque do dragão</h2>
        <button type="button" style={{ width: '15%', border: 'none', backgroundColor: 'transparent' }} onClick={clicksword}>
          <h2>100 de dano</h2>
          <img src={sword} alt="Sword" style={{ width: '100%' }} />
        </button>
        <button type="button" style={{ width: '15%', border: 'none', backgroundColor: 'transparent' }} onClick={clickaxel}>
          <h2>200 de dano</h2>
          <img src={axel} alt="Axel" style={{ width: '100%' }} />
        </button>
        <button type="button" style={{ width: '15%', border: 'none', backgroundColor: 'transparent' }} onClick={clickstaff}>
          <h2>300 de dano</h2>
          <img src={staff} alt="Staff" style={{ width: '100%' }} />
        </button>

      </div>
    </Stack>
  );
}

export default Cards;
