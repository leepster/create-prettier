#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

function main() {
  fs.writeFileSync(
    path.join(__dirname, '.prettierrc'),
    `{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "printWidth": 120
}`
  )

  console.log('.prettierrc')
}

if (require.main === module) {
  main()
}
