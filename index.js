#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

function main() {
  const filepath = path.join(process.cwd(), '.prettierrc')

  fs.writeFile(
    path.join(filepath),
    `{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "printWidth": 120
}`,
    (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log(filepath)
      }
    }
  )
}

if (require.main === module) {
  main()
}
