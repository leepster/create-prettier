#!/usr/bin/env node

import fs, { mkdir, writeFile } from 'fs/promises'
import path, { join } from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'
import { existsSync } from 'fs'

async function main() {
  const source = path.join(path.dirname(fileURLToPath(import.meta.url)), './template')
  await fs.cp(source, process.cwd(), { recursive: true })
  console.info(chalk.greenBright('created:'), chalk.cyanBright('.prettierrc'))

  if (!existsSync(join(process.cwd(), '.idea'))) {
    await mkdir(join(process.cwd(), '.idea'))
  }
  await writeFile(
    join(process.cwd(), '.idea/prettier.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="PrettierConfiguration">
    <option name="myRunOnSave" value="true" />
    <option name="myRunOnReformat" value="true" />
  </component>
</project>`
  )
  console.log(chalk.greenBright('created:'), chalk.cyanBright('.idea/prettier.xml'))
}

main().catch((error) => console.error(error))
