import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [data, setData] = useState(["Goku", "Vegeta", "Gohan", "Trunks"]);
  /*
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading);

  const list: string[] = ["Goku", "Vegeta", "Gohan", "Trunks"];
  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo", elemento);
  };

  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect}></List>
      ) : (
        "No hay contenido"
      )}
      <Button isLoading={isLoading} onClick={handleClick}>
        Hola Mundo
      </Button>
    </Card>
  );
  */

  //A partir de aca es para un ejercicio donde tengo que agregar elementos a una lista
  const addMinion = () => setData([...data, "Minion"]);
  const delMinion = () => setData(data.slice(0, -1));
  return (
    <Card>
      <Button isLoading={true} onClick={addMinion}>
        Agregar
      </Button>
      <Button isLoading={false} onClick={delMinion}>
        Eliminar
      </Button>
      <List data={data} />
    </Card>
  );
}

export default App;
