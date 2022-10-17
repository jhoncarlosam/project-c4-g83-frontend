import { Evento } from "./Evento";
export function ListaEventos() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("error:" + error));
  return (
    <div className="col-sm-8 offset-3">
      <Evento />
    </div>
  );
}
