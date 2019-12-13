import './scss/styles.scss';

import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';

import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';

import(/* webpackChunkName: "highlight.js" */ 'highlight.js/lib/highlight').then(hljs => {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('xml', xml);
    hljs.initHighlightingOnLoad();;
});
