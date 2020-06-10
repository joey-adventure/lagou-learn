// plop 入口文件，需要导出一个函数
// 此函数接受一个plop对象，用于创建生成器任务

module.exports = plop => {
    plop.setGenerator('component', {
        description: 'create a component',
        prompts: [
            {
                type: 'input',
                name: 'name', // 返回值的key
                message: 'component name：',
                default: 'MyComponent'
            }
        ],
        actions: [
            {
                type: 'add', // 代表添加文件
                path: 'components/{{name}}.vue', // 添加路径
                templateFile: 'plop-templates/component.hbs', // 模板
            }
        ]
    })

    plop.setGenerator('page', {
        description: 'create a page',
        prompts: [
            {
                type: 'input',
                name: 'name', // 返回值的key
                message: 'page name：',
                default: 'New Page'
            }
        ],
        actions: [
            {
                type: 'add', // 代表添加文件
                path: 'view/{{name}}.vue', // 添加路径
                templateFile: 'plop-templates/page.hbs', // 模板
            }
        ]
    })
}