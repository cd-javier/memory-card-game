import './App.css';
import Game from './Game';

const tvShows = [
  'Parks And Recreation',
  'Fleabag',
  '30 Rock',
  'Community',
  'Schitts Creek',
  'Transparent',
  'Broad City',
  'Please Like Me',
  'Master Of None',
];

function App() {
  return <Game originalDeck={tvShows} />;
}

export default App;
