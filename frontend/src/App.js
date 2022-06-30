// import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
        <p>
          Forms:
          <ul>
            <li>
              <Link to='players/create'>Create New Player</Link>
            </li>
            <li>
              <Link to='players/update'>Update Player</Link>
            </li>
            <li>
              <Link to='players/search'>Search Player</Link>
            </li>
          </ul>
        </p>
    </div>
  );
}

export default App;
