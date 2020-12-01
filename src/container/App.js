import './App.sass';
import { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Customers from '../components/Customers/Customers';
import customers from './customers.json';

class App extends Component {
  constructor() {
    super()
    this.state = {
      customers: customers,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const { customers, searchfield } = this.state;
    const filteredCustomers = customers.filter(client => {
      return client.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div className="App">
        <Navbar />
        <Sidebar />
        <Customers customers={filteredCustomers} searchChange={this.onSearchChange}/>
      </div>
    );
  }
}

export default App;
