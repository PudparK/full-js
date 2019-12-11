import React from 'react';
import PropTypes from 'prop-types';

// Components /////////////////
import Header from '../components/Header';
import ContestPreview from '../components/ContestPreview';

class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests'
  }

  componentDidMount() {
    console.log('Mounted bruh!');
  }

  componentWillUnmount() {
    console.log('You changed it bruh!');
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.contests.map(contest => 
            <ContestPreview {...contest} />
          )}
        </div>
      </div>
    );
  }
}

export default App;