import React, { Component } from 'react';
import './app_container.css';
import TextArea from '../textarea';
import MarkdownPreview from '../markdown_preview';
import marked from 'marked';

class AppContainer extends Component {
  constructor() {
    super();

    this.state = {
      markdown: ''
    }
  }

  onTextChange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  rawMarkdown() {
    let rawMarkdown = marked(this.state.markdown, { sanitze: true });
    return { __html: rawMarkdown }
  }

  render() {
    return (
      <div className="app-container">
        <TextArea onTextChange={this.onTextChange.bind(this)} value={this.state.markdown} />
        <MarkdownPreview markdown={this.rawMarkdown.bind(this)} />
      </div>
    );
  }
}

export default AppContainer;
