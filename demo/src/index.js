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
  render() {
    return (
      <Layout>
        <Layout.Header>
          <h1 style={{ color: '#ccc' }}>me-rich-editor Demo</h1>
        </Layout.Header>
        <Layout.Content style={{ padding: 32 }}>
          <Card style={{ padding: 30, marginBottom: 32 }}>
            <RichEditor />
          </Card>
          <Card
            title="Custom image uploader"
            style={{ padding: 30, marginBottom: 32 }}
          >
            <RichEditor onImageUpload={handleImageUpload} />
          </Card>
        </Layout.Content>
      </Layout>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
