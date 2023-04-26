import React, { ChangeEvent, Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Robot, robots } from './robots';

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
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
