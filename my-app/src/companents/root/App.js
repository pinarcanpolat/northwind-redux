import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "../root/Dashboard";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Dashboard></Dashboard>
    </Container>
  );
}

export default App;
