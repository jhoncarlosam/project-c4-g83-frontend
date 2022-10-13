// import './css/bootstrap.min.css'
export function Equipo(props) {
  const etiqueta = {
    display: "block",
    border: "1px solid salmon",
    height: "240px",
    padding: "10px",
    width: "250px",
  };
  return (
    <>
      <div style = {etiqueta}>
        <ul>
          <li>nombre: {props.nombre}</li>
          <li>partidos jugados: {props.jugados}</li>
          <li>promedio: {props.promedio}</li>
          <li>ultimo partido: {props.ultimo}</li>
          <li>
            record: ganador {props.record[0]} / perdedor {props.record[1]}
          </li>
          <li>juega internacional: {props.internacional ? "Si" : "No"}</li>
          <li>
            ubicado en: ({props.ubicado.pais} / {props.ubicado.ciudad})
          </li>
        </ul>
      </div>
    </>
  );
}