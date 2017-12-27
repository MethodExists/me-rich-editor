# me-rich-editor

React rich text editor with image upload support

## Usage

### Minimal setup

```
import RichEditor from '@methodexists/me-rich-editor';

<RichEditor
  value={this.state.value}
  onChange={value => this.setState({ value })}
/>
```
This will render textarea with default toolbar and allows to produce HTML `value` in a visual way.

### Custom Image Uploader

```
import RichEditor from '@methodexists/me-rich-editor';

const handleImageUpload = (file) => {
  // notify user that the image is uploading
  const hide = message.loading(`Uploading ${file.name}…`, 0);
  return upload(file) // call API to upload the file
    // then hide the spinner and return the URL of the uploaded file
    .then((res) => { hide(); return res.url; });
};


<RichEditor
  value={this.state.value2}
  onChange={value2 => this.setState({ value2 })}
  onImageUpload={handleImageUpload}
/>
```

If `onImageUpload` prop is specified it will be called when user selects an image to upload.  
The handler should return a promise which resolves with the URL of the uploaded image.   
Also the handler is repsonsible for showing a spinner during the upload and hiding it when upload is finished.  

## API

| Prop          | Type                           | Default   | Description
| ------------- | ------------------------------ | --------- | -----------
| `*` value     | HTML string                    |           | The text to render in the editor
| `*` onChange  | func(value:string)             |           | Called on any change with new HTML value
| onImageUpload | func(file:fileObject): Promise | undefined | Custom image uploader handler. Should return a promise which resolves to the uploaded image URL
| modules       | object                         | undefined | If specified will replace default modules prop for [react-quill](https://github.com/zenoamaro/react-quill#props)

> Default modules are defined in [src/index.js](src/index.js#L24-L37)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for how to develop a component.
