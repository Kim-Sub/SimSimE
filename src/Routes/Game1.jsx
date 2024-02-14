import React, { useState } from 'react';
import fortunes from '../json/Game1-Data.json';

const getRandomFortune = (fortuneType) => {
  const fortunesOfType = fortunes[fortuneType];
  const randomIndex = Math.floor(Math.random() * fortunesOfType.length);
  return fortunesOfType[randomIndex].fortune;
};

const Game1 = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');

  /* 일반 운세 */const [generalFortune, setGeneralFortune] = useState('');
  /* 재물 운세 */const [moneyFortune, setMoneyFortune] = useState('');
  /* 연애 운세 */const [loveFortune, setLoveFortune] = useState('');
  /* 변강쇠 운세 */const [strongpower, setStrongpower] = useState('');

  const [usedNames, setUsedNames] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usedNames.includes(name)) {
      alert('이미 사용된 이름입니다. 하루에 운세를 한 번만 뽑을 수 있습니다.');
      return;
    }
    const generalFortune = getRandomFortune('general');
    const moneyFortune = getRandomFortune('money');
    const loveFortune = getRandomFortune('love');
    const strongpower = getRandomFortune('strongpower');
    setGeneralFortune(generalFortune);
    setMoneyFortune(moneyFortune);
    setLoveFortune(loveFortune);
    setStrongpower(strongpower);
    setUsedNames([...usedNames, name]);
  };

  return (
    <div id='Game1' className='flexC'>

      <form onSubmit={handleSubmit} className='flexC'>
        <label>
          이름:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          생년월일:
          <input type="text" value={birthdate} onChange={handleBirthdateChange} />
        </label>
        <button type="submit">운세 뽑기</button>
      </form>

      <h2>일반 운세</h2>
      {generalFortune && <p>{generalFortune}</p>}
      <h2>금전 운세</h2>
      {moneyFortune && <p>{moneyFortune}</p>}
      <h2>연애 운세</h2>
      {loveFortune && <p>{loveFortune}</p>}
      <h2>변강쇠 운세</h2>
      {strongpower && <p>{strongpower}</p>}
    </div>
  );
};

export default Game1;
