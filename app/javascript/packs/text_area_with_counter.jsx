import React from 'react';
import ReactDOM from 'react-dom';

class TextAreaWithCounter extends React.Component {
  state = {
    content: this.props.content,
  }

  statusColor = (currentContentLength) =>
    (this.props.limit - currentContentLength) >= 5 ? 'green' : 'red'

  handleContentChange = (e) => {
    const content = e.target.value.slice(0, this.props.limit);

    this.setState({
      content,
      statusColor: this.statusColor(content.length)
    });
  }

  componentDidMount() {
    this.setState({
      statusColor: this.statusColor(this.state.content.length)
    });
  }

  render() {
    return(
      <>
        <div className="field">
          <textarea
            name={`post[${this.props.resource}]`}
            cols="80"
            rows="10"
            className={`color-${this.state.statusColor}`}
            value={this.state.content}
            onChange={this.handleContentChange}
          >
          </textarea>
        </div>

        <small className={`color-${this.state.statusColor}`}>
          Total de caracteres: {this.state.content.length}/{this.props.limit}
        </small>
      </>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.text-area-with-counter');

  ReactDOM.render(
    <TextAreaWithCounter {...element.dataset} />,
    element
  )
});
