import React, { ChangeEvent, Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { Robot, robots } from '../components/robots';
import './App.css';

interface IState {
  robots: Robot[];
  searchfield: string;
}

class App extends Component<Object, IState> {
  constructor(props: Object) {
    super(props);

    this.state = {
      robots: robots,
      searchfield: '',
    };
  }

  onSearchChange = (event: ChangeEvent) => {
    this.setState({ searchfield: (event.target as HTMLInputElement).value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
