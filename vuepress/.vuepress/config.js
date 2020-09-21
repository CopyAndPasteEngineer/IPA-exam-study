module.exports = {
    base: '/IPA-exam-study/',
    dest: './docs',

    title: 'IPAテスト勉強',
    description: 'IPAテスト勉強用サイト',
    locales: {
        '/': { lang: 'ja' },
    },
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: 'Home', link: '/' },
            { text: '応用情報技術者試験', link: '/ap/' },
            { text: 'About', link: '/about/' },
        ]
    },
}