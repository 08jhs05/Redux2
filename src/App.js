import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';
import { useSelector } from 'react-redux'; 

function App() {

  const theme = useSelector((state) => state.theme.value)

  return (
    <div className="App" style={{color: theme.color}}>
      <Profile />
      <ChangeColor />
      <Login />
    </div>
  );
}

export default App;
