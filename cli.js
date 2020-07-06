#!/usr/bin/env node

const { program } = require('commander')
const api = require('./index')
const db = require('./db')

const __main = () => {
    if (process.argv.length === 2) {
        // 说明用户直接运行 node cli
        api.showAll()
        return
    }

    program.option('-x, --xxx', 'output extra xxxx')
    program
        .command('add')
        .description('add a task')
        .action((...args) => {
            const words = args.slice(1).join(' ')
            api.add(words)
        })
    program
        .command('clear')
        .description('clear all task')
        .action(() => {
            api.clear()
        })

    program.parse(process.argv)
}
if (require.main == module) {
    __main()
}
