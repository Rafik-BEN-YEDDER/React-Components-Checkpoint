import logo from './logo.svg';
import './App.css';
import FullName from './Component/Profile/FullName.js';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js';
import Address from './Component/Profile/Address.js';

function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
