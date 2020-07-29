// gulp 的入口文件

exports.foo = done => {
    console.log('foo task working~')

    done() // 标识任务完成
}
