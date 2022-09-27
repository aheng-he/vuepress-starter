module.exports = {
    title: "Hyh's Blogs",
    description: '记录技术，记录生活。',
    theme: 'vuepress-theme-hope',
    avatar: "/logo.jpeg",
    themeConfig: {
        blog: {
            avatar: "/logo.jpeg",
            name: "是阿恒呀"
        },
        sidebar: 'auto',
        lastUpdated: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blogs/' },
            { text: '掘金', link: 'https://juejin.cn/user/2823201591145800/posts'},
            { text: 'CSDN', link: 'https://blog.csdn.net/weixin_41489378?spm=1000.2115.3001.5113' },
            { text: '博客园', link: 'https://www.cnblogs.com/recode-hyh/' },
        ],
    }
}