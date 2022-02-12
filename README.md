# create-prettier

A simple script for setting up Prettier on a project.

Creates:
```shell
.prettierrc
```
with the following settings:
```javascript
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "printWidth": 120
}
```

Configuration for auto-running prettier on save within **WebStorm** is added to:

```shell
./idea/prettier.xml
```
As:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="PrettierConfiguration">
    <option name="myRunOnSave" value="true" />
    <option name="myRunOnReformat" value="true" />
  </component>
</project>
```
