'use strict';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
    faCircle,
    faRss,
    faEnvelope,
    faChevronLeft,
    faChevronRight,
    faTag,
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faTwitter,
    faLinkedin,
    faStackOverflow,
    faInstagram,
    faGithub,
    faWeibo,
    faMedium,
    faPinterest,
    faReddit,
    faGitlab,
    faMastodon,
    faKeybase,
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faCircle,
    faRss,
    faEnvelope,
    faFacebook,
    faTwitter,
    faLinkedin,
    faStackOverflow,
    faInstagram,
    faGithub,
    faWeibo,
    faMedium,
    faPinterest,
    faReddit,
    faGitlab,
    faMastodon,
    faKeybase,
    faChevronLeft,
    faChevronRight,
    faTag,
);

export default {
    loadFontAwesome: () => {
        dom.watch();
    },
};
