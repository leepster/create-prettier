#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import chalk from 'chalk'

const source = path.join(path.dirname(fileURLToPath(import.meta.url)), './template')
fs.cpSync(source, process.cwd(), { recursive: true })
console.info(chalk.greenBright('created:'), chalk.cyanBright('.prettierrc'))
console.info(chalk.greenBright('created:'), chalk.cyanBright('.idea/pretter.xml'))
