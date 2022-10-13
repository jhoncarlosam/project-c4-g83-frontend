export function Mensaje() {
  const evento = {
    nombre: "partido",
    marcador1: 2,
    marcador2: 3,
  };

  function msg() {
    return <h4>Hoy hay partido</h4>;
  }

  function ganador(r1, r2) {
    if (r1 === r2) return <h3>Es empate</h3>;
    else if (r1 > r2) return <h2>Rival 1 Es Ganador</h2>;
    else return <h2>Rival es Ganador</h2>;
  }

  return (
    <div>
      <h1>Evento</h1>
      <h3> {evento.nombre} </h3>
      <p>
        {evento.marcador1} - {evento.marcador2}
      </p>
      {msg()}
      {ganador(evento.marcador1, evento.marcador2)}
    </div>
  );
}

export function Registrados() {
  return <>
    <ul>
      <li>Equipo 1</li>
      <li>Equipo 2</li>
      <li>Equipo 3</li>
    </ul>
  </>
}