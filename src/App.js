import './index.css';
import hospitals from "./hospitals.json";

import Card from './components/Cards';


const App = () => {
  console.log(hospitals);
  return (
    <div className="App">
      <header>hjálp</header>
      <Card/>
    </div>
  );
}

export default App;
