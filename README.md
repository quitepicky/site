# Quite Picky

The small, static home of Quite Picky developer tools at https://quitepicky.dev.

The site uses HTML, CSS, and the supplied vector wordmark and QP icon. It has no JavaScript in
the browser, third-party requests, runtime services, or npm dependencies.

## Develop

Edit `public/` and `assets/`, then run `npm run build` with Node.js 24 or newer. Serve `dist/`
with any static HTTP server. The build checks local assets on the homepage and 404 page.

For the temporary Pages URL, run `SITE_BASE_PATH=/site npm run build`. The
workflow reads the base path from GitHub Pages automatically, so connecting
`quitepicky.dev` switches assets back to the domain root on the next deployment.

## Publish

GitHub Actions validates pull requests and deploys `main` to GitHub Pages.
The custom domain is configured in the repository's Pages settings. DNS belongs
to Cloudflare. See `SETUP.md` for the initial DNS and Garden setup.

The palette is blush `#f8e7ed`, dark ink `#260e15`, and raspberry `#d71c51`.
The cleaned `assets/wordmark.svg` contains only the ten visible letter paths,
with `fill="currentColor"`. The build inlines it in the homepage so `.wordmark`
uses the CSS accent color. `assets/qp2.png` is copied unchanged as the favicon
and is also the source for the GitHub organization avatar. Considered retains
its own product logo and documentation design.

The homepage contains only the Quite Picky wordmark, the slogan “Development
tooling for the rather particular”, and a Considered card. `public/considered.css`
copies the product's style declarations from `docs/src/styles/considered.css` in
`quitepicky/considered`, scoped to the card. `public/considered.png` is the same
logo used by its documentation site. Keep these in sync with Considered's design.

The tagline uses a locally hosted IBM Plex Mono Regular WOFF2 from
[`@ibm/plex-mono` 2.5.0](https://github.com/IBM/plex/tree/master/packages/plex-mono).
Its SIL Open Font License is included in `public/fonts/IBM-Plex-LICENSE.txt`.
