import Main from "./Main";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Route component={Main} />
    </Router>
  );
}

export default App;
