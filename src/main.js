import './scss/styles.scss';

import(/* webpackChunkName: "bootstrap" */ 'bootstrap');

window.addEventListener('DOMContentLoaded', async (event) => {
    const { default: App } = await import(/* webpackChunkName: "app" */ './js/App');

    App.loadFontAwesome();
    App.bootstrapify();
    App.lazyload();
    App.navbarFade();
    App.lightbox();
    App.syntaxHighlight();
});
