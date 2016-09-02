import React, { Component } from 'react';
import './app_container.css';

import marked from 'marked';

class AppContainer extends Component {
  constructor() {
    super();
  }

  _rawMarkup(value) {
    let rawMarkup = marked(value, { sanitze: true });
    return { __html: rawMarkup }
  }

  render() {
    return (
      <div className="App">
        <span dangerouslySetInnerHTML={this._rawMarkup('# Test')} />
      </div>
    );
  }
}

// render()
// <TextArea />
// <MarkdownPreview />

export default AppContainer;
