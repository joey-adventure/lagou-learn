#!/usr/bin/env node
// cli 文件头，指定使用node编译该文件

const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer')
const ejs = require('ejs')
const chalk = require('chalk')

// 模板目录
const tempDir = path.join(__dirname, 'template')
// 目标目录
const destDir = process.cwd()

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Project Name?',
        default: 'my-project'
    }
]).then(answer => {
    fs.readdir(tempDir, (err, files) => {
        if (err) throw err
        for (const file of files) {
            ejs.renderFile(path.join(tempDir, file), answer, (ejsError, result) => {
                if (ejsError) throw ejsError
                fs.writeFileSync(path.join(destDir, file), result)
            })
        }
        console.log(chalk.green('completed'))
    })
})