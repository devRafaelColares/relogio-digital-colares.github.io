import React, { useState } from 'react';

function Alarme() {
  const [alarm, setAlarm] = useState(false);

  function setAlarmTime() {
    setAlarm(true);
  }

  return (
    <div style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }>
      {alarm ? (
        <p>Alarme ativado</p>
      ) : (
        <button onClick={ setAlarmTime }>Ativar alarme</button>
      )}
    </div>
  );
}

export default Alarme;
