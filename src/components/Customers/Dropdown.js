import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

      render(){
        const{listOpen, headerTitle} = this.state
        return(
          <div className="dropdown">
            <button onClick={() => this.toggleList()}>{headerTitle}</button>
            {listOpen && 
            <ul>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
            }
          </div>
        )
      }
}

export default Dropdown;