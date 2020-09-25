import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        <span>Select a language: </span>
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange('english')}
        />
        <i
          className="flag se"
          onClick={() => this.context.onLanguageChange('swedish')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
