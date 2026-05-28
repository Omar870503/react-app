import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List";

function App() {
  const list: string[] = ["Goku", "Vegeta", "Gohan", "Trunks"];
  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo", elemento);
  };

  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect}></List>
  );

  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      {contenido}
      <Button>Hola Mundo</Button>
    </Card>
  );
}

export default App;
