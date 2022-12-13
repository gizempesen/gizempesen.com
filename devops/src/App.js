import React from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
  {user ? ( <h1>Hello {user.name}</h1> ) : (}
    </div>
  );
}

export default App;
