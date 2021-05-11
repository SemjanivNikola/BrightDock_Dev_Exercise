export default {
    ssr: false,
    target: 'static',
    head: {
        title: 'Club House',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/logo/favicon.ico' }
        ]
    },
    css: [
        '@/assets/css/main.css',
        '@/assets/css/responsive.css'
    ]
}
