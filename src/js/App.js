'use strict';

import $ from 'jquery';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
    faBookOpen,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faClock,
    faEnvelope,
    faRss,
    faTag,
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faFacebookF,
    faGithub,
    faGitlab,
    faInstagram,
    faKeybase,
    faLinkedin,
    faLinkedinIn,
    faMastodon,
    faMedium,
    faPinterest,
    faReddit,
    faRedditAlien,
    faStackOverflow,
    faTwitter,
    faWeibo,
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faBookOpen,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faClock,
    faEnvelope,
    faFacebook,
    faFacebookF,
    faGithub,
    faGitlab,
    faInstagram,
    faKeybase,
    faLinkedin,
    faLinkedinIn,
    faMastodon,
    faMedium,
    faPinterest,
    faReddit,
    faRedditAlien,
    faRss,
    faStackOverflow,
    faTag,
    faTwitter,
    faWeibo,
);

export default {
    loadFontAwesome: () => {
        dom.watch();
    },
    bootstrapify: () => {
        $('.content blockquote').addClass('blockquote');
        $('.content table').addClass('table');
        $('.content table').wrap('<div class="table-responsive" />');
        $('.content table thead').addClass('thead-dark');
        $('.content pre').wrap('<figure class="highlight" />');
        $('.content figure > img').addClass('img-fluid');
    },
    lazyload: async () => {
        const { default: LazyLoad } = await import(/* webpackChunkName: "lazyload" */ 'vanilla-lazyload');
        new LazyLoad({
            thresholds: "40px 10%",
            load_delay: 100,
        });
    },
    navbarFade: () => {
        let $position = $(window).scrollTop();

        $(window).scroll(() => {
            const $scroll = $(window).scrollTop();

            $scroll > $position ? $('#navbar-main-menu').addClass('hide') :
                $('#navbar-main-menu').removeClass('hide');

            $position = $scroll;
        });
    },
};
