#!/usr/bin/env node
require('@leepster/node-console')
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
        console.error(err)
      } else {
        console.info(filepath)
      }
    }
  )
}

if (require.main === module) {
  main()
}
