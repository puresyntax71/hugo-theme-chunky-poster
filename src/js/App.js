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
            const $navbarHeight = $('#navbar-main-menu.fixed-top').outerHeight();

            $scroll > $position ? $('#navbar-main-menu.fixed-top').css('top', -$navbarHeight) :
                $('#navbar-main-menu.fixed-top').css('top', 0);

            if ($scroll <= 0) {
              $('#navbar-main-menu.fixed-top').css('top', 0);
            }

            $position = $scroll;
        });
    },
    lightbox: async () => {
        const { default: ekkoLightbox } = await import(/* webpackChunkName: "ekkoLightbox" */ 'ekko-lightbox');
        $('[data-toggle="lightbox"]').click(function(e) {
            e.preventDefault();
            $(this).ekkoLightbox();
        });
    },
    syntaxHighlight: () => {
        if (!window.Prism) {
          return;
        }

        Prism.highlightAll();

        $('pre:has(> code[class*=language-])').removeAttr('style');

        const element = $('pre:has(> code:not([class*=language-]))');

        element.addClass('language-none');
        $('> code', element).addClass('language-none');
    }
};
