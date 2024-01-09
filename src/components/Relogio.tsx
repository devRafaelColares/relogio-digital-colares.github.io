import React, { useEffect, useState } from 'react';

function Relogio() {
  const [horas, setHoras] = useState('00');
  const [minutos, setMinutos] = useState('00');
  const [segundos, setSegundos] = useState('00');

  useEffect(() => {
    const relogio = setInterval(() => {
      const dateToday = new Date();
      let hr = dateToday.getHours();
      let min = dateToday.getMinutes();
      let s = dateToday.getSeconds();

      hr = hr < 10 ? `0${hr}` : hr;
      min = min < 10 ? `0${min}` : min;
      s = s < 10 ? `0${s}` : s;

      setHoras(hr);
      setMinutos(min);
      setSegundos(s);
    }, 1000);

    return () => clearInterval(relogio); // Limpa o intervalo quando o componente é desmontado
  }, []); // O segundo argumento [] garante que o useEffect só é executado uma vez (equivalente a componentDidMount)

  return (
    <div className="relogio">
      <div>
        <span id="horas">{horas}</span>
        <span className="tempo">Horas</span>
      </div>
      <div>
        <span id="minutos">{minutos}</span>
        <span className="tempo">Minutos</span>
      </div>
      <div>
        <span id="segundos">{segundos}</span>
        <span className="tempo">Segundos</span>
      </div>
    </div>
  );
}

export default Relogio;
