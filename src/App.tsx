import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Tanjiro", "Eren"];
  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo", elemento);
  };
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      <List data={list} onSelect={handleSelect}></List>
    </Card>
  );
}

export default App;
