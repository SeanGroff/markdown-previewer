import React, { Component } from 'react';
import './app_container.scss';
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
      <div className='app-container'>
        <div className="heading">
          <h2
            className='text-center'>Markdown Previewer</h2>
        </div>
        <div className='row'>
          <TextArea onTextChange={this.onTextChange.bind(this)} value={this.state.markdown} />
          <MarkdownPreview markdown={this.rawMarkdown.bind(this) } />
        </div>  
      </div>  
    );
  }
}

export default AppContainer;