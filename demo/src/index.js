import React, { Component } from 'react';
import { render } from 'react-dom';
import { message, Card, Layout } from 'antd';
import RichEditor from '~';

const imageUrl = 'https://loremflickr.com/320/240';

const handleImageUpload = (file) => {
  const hide = message.loading(`Uploading ${file.name}…`, 0);
  return new Promise(resolve => setTimeout(() => {
    hide();
    resolve(imageUrl);
  }, 500));
};

class Demo extends Component {
  state = {
    value1: undefined,
    value2: undefined,
  }

  render() {
    return (
      <Layout>
        <Layout.Header>
          <h1 style={{ color: '#ccc' }}>me-rich-editor Demo</h1>
        </Layout.Header>
        <Layout.Content style={{ padding: 32 }}>
          <Card style={{ padding: 30, marginBottom: 32 }}>
            <RichEditor
              value={this.state.value1}
              onChange={value1 => this.setState({ value1 })}
            />
            Value:
            <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.value1}</pre>
          </Card>
          <Card
            title="Custom image uploader"
            style={{ padding: 30, marginBottom: 32 }}
          >
            <RichEditor
              value={this.state.value2}
              onChange={value2 => this.setState({ value2 })}
              onImageUpload={handleImageUpload}
            />
            Value:
            <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.value2}</pre>
          </Card>
        </Layout.Content>
      </Layout>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
