import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import RichEditor from 'src/';

describe('RichEditor', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('should render', () => {
    render(<RichEditor />, node, () => {
      expect(node.innerHTML).toContain('quill');
    });
  });
});
