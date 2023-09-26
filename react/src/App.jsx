import Button from "./Button";
import api from "./api";
import React from "react";
function App() {
  const [musicas, setMusicas] = React.useState([]);
  function listar() {
    api
      .get()
      .then((respostaObtida) => {
        console.log(respostaObtida);
        console.log(respostaObtida.status);
        console.log(respostaObtida.data);
        setMusicas(respostaObtida.data);
      })
      .catch((erroOcorrido) => {
        // cairá aqui se houver algum erro durante a
        //requisição
        console.log(erroOcorrido);
      });
  }
  return (
    <>
      <Button/>
      <button onClick={listar}>Listar</button>
      {musicas.map(({ id, nome }) => {
        return <p key={id}>{nome}</p>;
      })}
    </>
  );
}
export default App;
