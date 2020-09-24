import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui segment">
          <span>Select a language: </span>
          <i
            className="flag us"
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className="flag se"
            onClick={() => this.onLanguageChange('swedish')}
          />
        </div>
        <div>
          <ColorContext.Provider value="red">
            <LanguageContext.Provider value={this.state.language}>
              <UserCreate />
            </LanguageContext.Provider>
          </ColorContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;
