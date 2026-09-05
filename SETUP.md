# Site setup

The repository publishes through GitHub Pages using the `Pages` workflow.
While DNS is being connected, the site is accessible at
https://quitepicky.github.io/site/.

## Cloudflare DNS

First verify `quitepicky.dev` in the Quite Picky organization's Pages settings:
https://github.com/organizations/quitepicky/settings/pages

GitHub generates a TXT record named `_github-pages-challenge-quitepicky`.
Add its exact value in Cloudflare, verify the domain in GitHub, and retain the
TXT record. The verified apex also protects its immediate subdomains.

Add these records in the `quitepicky.dev` zone. Use **DNS only** (gray cloud),
with automatic TTL. Preserve existing email and verification records.

| Type | Name | Target |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | quitepicky.github.io |
| CNAME | considered | quitepicky.github.io |

Both CNAMEs point to the organization host, without a repository path.

Then set these custom domains in each repository's **Settings → Pages**:

- `quitepicky/site`: `quitepicky.dev`
- `quitepicky/considered`: `considered.quitepicky.dev`

Wait for the GitHub DNS checks and certificates, then enable **Enforce HTTPS**
on both repositories. `.dev` requires HTTPS in browsers. Do not publish wildcard
DNS records. The Considered documentation workflow must be merged and deployed
before its custom domain will serve the new site.

## Garden

Register this repo as a `deployed` website surface through Quite Picky's own
Garden connection, initially in `observe` with automation writes disabled.
There are no npm dependencies; the maintenance dependency surface consists of
GitHub Actions. Keep workflow changes human-reviewed. A new connection requires
a private GitHub App, account pinning, secrets, and a Garden pipeline deployment;
follow Garden's `GUIDE.md`.
