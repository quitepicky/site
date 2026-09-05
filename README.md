# Quite Picky

The small, static home of Quite Picky developer tools at https://quitepicky.dev.

The site uses HTML, CSS, and an original SVG monogram. It has no JavaScript in
the browser, third-party requests, runtime services, or npm dependencies.

## Develop

Edit `public/`, then run `npm run build` with Node.js 24 or newer. Serve `dist/`
with any static HTTP server. The build checks the homepage's local assets.

## Publish

GitHub Actions validates pull requests and deploys `main` to GitHub Pages.
The custom domain is configured in the repository's Pages settings. DNS belongs
to Cloudflare. See `SETUP.md` for the initial DNS and Garden setup.

The `mark.svg` monogram, olive ink, warm paper, and serif wordmark are the initial
brand system. Considered retains its own product logo and documentation design.
