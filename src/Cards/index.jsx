/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-nested-ternary */
import lv3 from 'assets/armedDragonlv3.jpg';
import lv5 from 'assets/armedDragonlv5.jpg';
import lv7 from 'assets/armedDragonlv7.jpg';
import lv10 from 'assets/armedDragonlv10.jpg';
import sword from 'assets/sword.png';
import axel from 'assets/axel.png';
import staff from 'assets/staff.png';
import winner from 'assets/winner.png';
import { Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { MonsterContext } from 'App';
import { Link } from 'react-router-dom';

function Cards() {
  const {
    armedDg3, setArmedDg3, armedDg5, setArmedDg5, armedDg7, setArmedDg7, armedDg10, setArmedDg10,
  } = useContext(MonsterContext);

  const clicksword = () => {
    if (armedDg3 >= 0) {
      setArmedDg3(armedDg3 - 1000);
    } else if (armedDg3 < 0 && armedDg5 > 0) {
      setArmedDg5(armedDg5 - 1000);
    } else if (armedDg5 < 0 && armedDg7 > 0) {
      setArmedDg7(armedDg7 - 1000);
    } else if (armedDg7 < 0 && armedDg10 > 0) {
      setArmedDg10(armedDg10 - 1000);
    }
  };

  const clickaxel = () => {
    if (armedDg3 >= 0) {
      setArmedDg3(armedDg3 - 1100);
    } else if (armedDg3 < 0 && armedDg5 > 0) {
      setArmedDg5(armedDg5 - 1100);
    } else if (armedDg5 < 0 && armedDg7 > 0) {
      setArmedDg7(armedDg7 - 1100);
    } else if (armedDg7 < 0 && armedDg10 > 0) {
      setArmedDg10(armedDg10 - 1100);
    }
  };

  const clickstaff = () => {
    if (armedDg3 >= 0) {
      setArmedDg3(armedDg3 - 1200);
    } else if (armedDg3 < 0 && armedDg5 > 0) {
      setArmedDg5(armedDg5 - 1200);
    } else if (armedDg5 < 0 && armedDg7 > 0) {
      setArmedDg7(armedDg7 - 1200);
    } else if (armedDg7 < 0 && armedDg10 > 0) {
      setArmedDg10(armedDg10 - 1200);
    }
  };
  return (
    <Stack alignItems="center" mt="70px">
      <Link to="/">
        <Typography variant="p" color="#504F7F">Voltar tela inicial</Typography>
      </Link>
      { armedDg3 >= 0
        ? (
          <div>
            <h2>Vida do inimigo</h2>
            <h4>{armedDg3}</h4>
            <img src={lv3} alt="Dragão Armado" style={{ width: '15%', height: '30%' }} />
          </div>
        )
        : (armedDg3 < 0 && armedDg5 > 0)
          ? (
            <div>
              <h2>Vida do inimigo</h2>
              <h4>{armedDg5}</h4>
              <img src={lv5} alt="Dragão Armado" style={{ width: '15%', height: '30%' }} />
            </div>
          )
          : (armedDg5 < 0 && armedDg7 > 0)
            ? (
              <div>
                <h2>Vida do inimigo</h2>
                <h4>{armedDg7}</h4>
                <img src={lv7} alt="Dragão Armado" style={{ width: '15%', height: '30%' }} />
              </div>
            )
            : (armedDg7 < 0 && armedDg10 > 0)
              ? (
                <div>
                  <h2>Vida do inimigo</h2>
                  <h4>{armedDg10}</h4>
                  <img src={lv10} alt="Dragão Armado" style={{ width: '15%', height: '30%' }} />
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
          <h2>1000 de dano</h2>
          <img src={sword} alt="Sword" style={{ width: '100%' }} />
        </button>
        <button type="button" style={{ width: '15%', border: 'none', backgroundColor: 'transparent' }} onClick={clickaxel}>
          <h2>1100 de dano</h2>
          <img src={axel} alt="Axel" style={{ width: '100%' }} />
        </button>
        <button type="button" style={{ width: '15%', border: 'none', backgroundColor: 'transparent' }} onClick={clickstaff}>
          <h2>1200 de dano</h2>
          <img src={staff} alt="Staff" style={{ width: '100%' }} />
        </button>

      </div>
    </Stack>
  );
}

export default Cards;
