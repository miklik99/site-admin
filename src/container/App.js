import './App.sass';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Customers from '../components/Customers/Customers';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Customers />
    </div>
  );
}

export default App;
