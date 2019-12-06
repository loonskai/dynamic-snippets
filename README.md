# Dynamic Snippets

Use simple and fancy shorthands to write your JavaScript code in VSCode faster

## Supported languages
- JavaScript (.js, .jsx)
- TypeScript (.ts, .tsx)

## Abbreviations
Use `Tab` keyboard to extend a shorthand into a JS code line
|Shorthand|Result|
|---|---|
|`i>name`|`import name from 'name';`|ES6 import|
|`i>defaultExport>name`|`import defaultExport from 'name';`|
|`i:a,b>name`|`import { a, b } from 'name';`|
|`i*alias>name`|`import * as alias from 'name';`|
|`e>name`|`export const name = `|
|`ed>name`|`export default name;`|
|`r>name`|`const name = require('name');`|
|`r>defaultExport>name`|`const defaultExport = require('name');`|
|`r:a,b>name`|`const { a, b } = require('name');`|
|`me>name`|`module.exports = name;`|
|`f>name`|`function name() {}`|
|`f>name:a,b`|`function name(a, b) {}`|
|`f>name:a,b:`|`function name({ a, b }) {}`|
|`name=>`|`const name = () => {};`|
|`name:a,b=>`|`const name = (a, b) => {};`|
|`name:a,b:=>`|`const name = ({ a, b }) => {};`|