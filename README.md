# Chunky Poster

A bootstrap 4 based theme.

The structure and design is based on the [Prisma blog](https://www.prisma.io/blog/).

# Features

* Multi-author
* Image processing
* Basic i18n

# Installation

`git clone https://gitlab.com/virtualcursor/chunky-poster.git` and copy the configuration under `exampleSite/config.toml`.

# Customization

Fork the project and run `yarn watch` during development.

The application javascript file is located at `src/js/app.js`.

For customizing SCSS, the main entrypoint is at `src/scss/style.scss`. Bootstrap variables can be overridden in the `_variables.scss` file. The theme's styles are located at `src/scss/chunky-poster.scss`.

# Credits

* [Victor Hugo](https://github.com/netlify-templates/victor-hugo)
* [hugo-theme-even](https://github.com/olOwOlo/hugo-theme-even)
* [Blank](https://github.com/vimux/blank/)
