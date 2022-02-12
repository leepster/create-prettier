#!/usr/bin/env node

import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'

async function main() {
  const source = path.join(path.dirname(fileURLToPath(import.meta.url)), './template')
  await fs.cp(source, process.cwd(), { recursive: true })
  console.info(chalk.greenBright('created:'), chalk.cyanBright('.prettierrc'))
  console.info(chalk.greenBright('created:'), chalk.cyanBright('.idea/pretter.xml'))
}

main().catch((error) => console.error(error))
