module.exports = {
    title : 'Sky Dragon0',
    description: 'just a blog for record something',
    theme: 'vdoing',
    lastUpdated: '上次更新',
    head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
        ['link', { rel: 'icon', href: '/img/me.ico' }], //favicons，资源放在public文件夹
        ['meta', { name: 'theme-color', content: '#11a8cd'}] // 移动浏览器主题颜色
    ],
    markdown: {
        lineNumbers: true // 代码行号
    },
    plugins:[
        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    const moment = require('moment') // https://momentjs.com/
                    return moment(timestamp).format('YYYY/MM/DD, H:MM:SS');
                }
            }
        ],
        [
            'vuepress-plugin-comment',
            {
                choosen: 'gitalk',
                options: {
                    clientID: 'e366516a0b47a60820fd',
                    clientSecret: '96577125335d54765b83632be85ec161351c3bf7',
                    repo: 'https://github.com/Lavaong/manman_blog',
                    owner: 'Lavaong',
                    admin: ['Lavaong'],
                    distractionFreeMode: false,
                    pagerDirection: 'last', // 'first'正序 | 'last'倒序
                    id: "<%- (window.location.origin + (frontmatter.to.path || window.location.pathname)).slice(-50) %>", //  页面的唯一标识,长度不能超过50
                    title: "「评论」<%- document.title %>", // GitHub issue 的标题
                    labels: ["Gitalk", "Comment"], // GitHub issue 的标签
                    body:"<%- document.title %>：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
                }
            }
        ]
    ],
    themeConfig: {
        sidebar: 'structuring',
        categoryText:'零零总总',
        bodyBgImg: [
            'https://cdn.jsdelivr.net/gh/Lavaong/manman_blog/frontend/docs/.vuepress/public/img/marnie1.jpg',
            'https://cdn.jsdelivr.net/gh/Lavaong/manman_blog/frontend/docs/.vuepress/public/img/totoro1.jpg'
        ],
        logo:'/img/me.png',
        sidebarDepth: 2,
        docsDir: 'docs',
        editLinks: true, // 启用编辑链接
        editLinkText: '编辑',
        repo: 'https://github.com/Lavaong/manman_blog/',
        nav: [
            {text:'首页',link:'/'},
            {text:'Java相关',link:'/navator/java/',
             items:[
                 {text:'JDK源码解读',link:'/pages/c2f811/'},
                 {text:'DB',link:'/pages/6a99ec/'},
                 {text:'中间件',link:'/pages/fe8c12/'},
                 {text:'微服务',link:'/pages/f6efea/'},
                 {text:'数据结构和算法',link:'/pages/efe782/'},
                 {text:'其他',link:'/pages/d42e05/'}
             ]},
            {text:'go相关',link:'/navator/go/',
                items:[{text:'基础语法',link:'/pages/886ff6/'}
            ]},
            {text:'前端相关',link:'/navator/frontend/',
                items:[{text:'Vue',link:'/pages/c903dd/'}]
            },
            {text:'关于',link:'/about/me/'},
            {text:'更多',link:'/pages/72f4e9/'}
        ],
/*        titleBadgeIcons:[
            '',
            '',
        ],*/
        updateBar:[
            // showToArticle: true, // 显示到文章页底部，默认true
            // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        ],
        author: { // 文章默认的作者信息，可在.md文件front matter中单独配置此信息 String | {name: String, link: String}
            name: 'Lavong', // 必需
            link: 'https://github.com/Lavaong' // 可选的
        },
        blogger:{ // 博主信息，显示在首页侧边栏
            avatar: 'https://cdn.jsdelivr.net/gh/Lavaong/manman_blog/frontend/docs/.vuepress/public/img/20200608134430.jpg',
            name: 'Sky Dragon0',
            slogan: 'Keep Yourself,Change World'
        },
        social:{ // 社交图标，显示于博主信息栏和页脚栏
            // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
            icons: [
                {
                    iconClass: 'icon-youjian',
                    title: 'mail',
                    link: 'mailto:1154952697@qq.com'
                },
                {
                    iconClass: 'icon-github',
                    title: 'GitHub',
                    link: 'https://github.com/Lavaong'
                },
                {
                    iconClass: 'icon-erji',
                    title: 'music',
                    link: 'http://music.163.com/playlist?id=3140696511&userid=132115662'
                }
            ]
        },
        footer:{ // 页脚信息
            createYear: 2019, // 博客创建年份
            copyrightInfo: 'Sky Dragon0 | MIT License', // 博客版权信息，支持a标签
        }
    }
}