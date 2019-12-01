### Recursive directory creation

Attempts to recursively create a directory even if it exists or not. 

#### Install
```
npm i @awps/mkdirp -D
``` 

#### Usage
```
const mkdirp = require('@awps/mkdirp')

mkdirp('very/long/dir/path/existent/or/nonexistent');
```
