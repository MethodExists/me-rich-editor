import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './styles.less';

class RichEditor extends React.Component {
  imageHandler = () => {
    const editor = this.quillRef.getEditor();
    const fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('accept', 'image/*');
    fileInput.addEventListener('change', () => {
      if (fileInput.files !== null && fileInput.files[0] !== null) {
        const range = editor.getSelection(true);
        const index = range.index + range.length;
        this.props.onImageUpload(fileInput.files[0])
          .then(imageUrl => editor.insertEmbed(index, 'image', imageUrl, 'user'));
      }
    });
    fileInput.click();
  }

  modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image', 'video'],
        ['clean'],
      ],
      handlers: {
        image: this.props.onImageUpload ? this.imageHandler : undefined,
      },
    },
  }

  debouncedHandleChange = _.debounce((value, delta, source) => {
    if (source === 'user') {
      this.props.onChange(value, delta, source);
    }
  }, this.props.debounceDelay)

  render() {
    const { modules, ...restProps } = this.props;
    return (
      <ReactQuill
        ref={(el) => { this.quillRef = el; }}
        modules={modules || this.modules}
        {...restProps}
        onChange={this.debouncedHandleChange}
      />
    );
  }
}

RichEditor.defaultProps = {
  debounceDelay: 700,
  value: '',
};

RichEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onImageUpload: PropTypes.func, // eslint-disable-line react/require-default-props
  modules: ReactQuill.propTypes.modules, // eslint-disable-line react/require-default-props
  debounceDelay: PropTypes.number,
};

export default RichEditor;
