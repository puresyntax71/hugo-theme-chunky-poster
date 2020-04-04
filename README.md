# Chunky poster

[![CircleCI](https://img.shields.io/circleci/build/github/puresyntax71/hugo-theme-chunky-poster)](https://circleci.com/gh/puresyntax71/hugo-theme-chunky-poster/tree/master)

A simple, bootstrap 4 based blog theme. The structure and design is based on the [Prisma blog](https://www.prisma.io/blog/).

[Demo](https://hugo-theme-chunky-poster.netlify.com) | [Demo 2](https://themes.gohugo.io/theme/hugo-theme-chunky-poster)

# Screenshot

![Chunky poster](https://github.com/puresyntax71/hugo-theme-chunky-poster/raw/master/images/screenshot-responsive.png)

# Features

* Multi-author
* Image processing
* Basic i18n
* Prism
* LazyLoad
* Commento
* Image gallery

# Usage

```shell
git clone https://github.com/puresyntax71/hugo-theme-chunky-poster.git
```

Check out the configuration at [`exampleSite/config.toml`](exampleSite/config.toml) for configuring your Hugo site.

## Authors

The authors structure is based on this [blog post](https://www.netlify.com/blog/2018/07/24/hugo-tips-how-to-create-author-pages/).

1. Add the taxonomy ["author"](exampleSite/config.toml#L28).
2. `hugo new authors/john-doe/_index.md`
3. Configure the author metadata `twitter`.
4. Configure the author metadata `images`. First image on the list will be used as the avatar and on the profile page. Images are page resources under the author e.g. `content/authors/john-doe/image.png`.
5. Assign the author to a content:

    ```yaml
    ---
    authors: ["John Doe"]
    ---
    ```

## Content images

The images structure is based on this [blog post](https://forestry.io/blog/how-to-use-hugo-s-image-processing-with-forestry/).

Upload the images that will be used on content pages under `content/images` and create the file `content/images/index.md` with the front matter:

```yaml
---
headless: true
---
```

Set the path to the image in a `post` content under the `images` property:

```yaml
---
images: ["/images/image.png"]
---
```

The first image on the list will be used as the "cover" image on a post.

## Prism

Configure [Prism](https://prismjs.com/) under `[params.prismJS]` and set `enable` to `true`. Change the theme under `theme`.

```toml
[params]
  [params.prismJS]
    enable = true
    theme = "okaidia"
```

## Commento

Configure [Commento](https://commento.io/) under `[params.commento]`. Set `enable` to `true` and add the URL at `url`:

```toml
[params]
  [params.commento]
    enable = true
    url = "https://somename.commento.io"
```

## Share

Enable sharing under `params` with `share` set to `true` and disable per-post sharing by setting `share` to `false` in the front matter.

```toml
[params]
  share = true
```

```yaml
---
share: false
---
```

## Image gallery

The image gallery feature uses the [`ekko-lightbox`](https://github.com/ashleydw/lightbox/) and `figure` shortcode. This is just a simple implementation of the lightbox gallery feature from the library.

# Customization

Fork the project and run `yarn watch` during development.

> The project has an `.nvmrc` if you wish to use [`nvm`](https://github.com/nvm-sh/nvm).

The application javascript file is located at `src/js/app.js`.

For customizing SCSS, the main entrypoint is at `src/scss/style.scss`. Bootstrap variables can be overridden in the `_variables.scss` file. The theme's styles are located at `src/scss/chunky-poster.scss`.

For production, you can run `yarn build` for the assets to be updated.

# Credits

* [Victor Hugo](https://github.com/netlify-templates/victor-hugo)
* [hugo-theme-even](https://github.com/olOwOlo/hugo-theme-even)
* [Blank](https://github.com/vimux/blank/)
* [CleanWhite](https://github.com/zhaohuabing/hugo-theme-cleanwhite)

Images from [Unsplash](https://unsplash.com/) and [Freepik](https://www.freepik.com/).

# License

This theme is released under the [MIT license](LICENSE).
