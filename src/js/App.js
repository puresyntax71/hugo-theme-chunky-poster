'use strict';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faRss, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
);

export default {
    loadFontAwesome: () => {
        dom.watch();
    },
};
