# json-into-html v1.0.0
Convert json to html

## Installation
```
npm i json-into-html
```

## Example
```js
const { Json2Html } = require('json-into-html');
const fs = require("fs");

const html = Json2Html([
    {
        name: "html",
        content: [
            {
                name: 'head',
                content: [
                    {
                        name: 'title',
                        content: "My title"
                    },
                    {
                        name: "style",
                        content: "body,html{ margin: 0; paddin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column; color: #fff; font-familly: Arial, 'sans-serif'; background-color: #663399}"
                    }
                ]
            },
            {
                name: 'body',
                content: [
                    {
                        name: 'div',
                        content: [
                            {
                                name: 'img',
                                attr: {
                                    src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
                                    class: 'test test2'
                                }
                            },
                            {
                                name: 'a',
                                content: 'click here',
                                attr: {
                                    href: '#'
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);

fs.writeFileSync('index.html', html);
```

## Result
```html
<html>
    <head>
        <title>My title</title>
        <style>
            body,html{ margin: 0; paddin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column; color: #fff; font-familly: Arial, 'sans-serif'; background-color: #663399}
        </style>
    </head>
    <body>
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" class="test test2"/>
            <a href="#">click here</a>
        </div>
    </body>
</html>
```