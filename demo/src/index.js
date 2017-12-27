import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, Layout } from 'antd';
import RichEditor from '~';

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
        </Layout.Content>
      </Layout>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
