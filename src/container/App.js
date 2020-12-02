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
      searchfield: '',
      sorted: false
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  sort = () => {
    const { customers, sorted} = this.state;
    if(sorted) {
      const sorted = customers.sort((a,b) => (a.size > b.size) ? 1 : -1);
      this.setState({
        customers: sorted,
        sorted: false
      });
    } else {
      const sorted = customers.sort((a,b) => (a.size < b.size) ? 1 : -1);
      this.setState({
        customers: sorted,
        sorted: true
      });
    }
  }

  render() {
    const { customers, searchfield } = this.state;
    const filteredCustomers = customers.filter(client => {
      return client.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
      <div className="App">
        <Navbar />
        <div className="flex-components">
        <Sidebar />
        <Customers customers={filteredCustomers} sort={this.sort} sorted={this.state.sorted} searchChange={this.onSearchChange}/>
        </div>
      </div>
    );
  }
}

export default App;
