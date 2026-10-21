# GitHub Pages deployment

Website source: **[ersinkoc/munasip-site](https://github.com/ersinkoc/munasip-site)**.
Public URL: **https://munasip.oxog.dev/**.

## Domain and routing

- DNS: `CNAME munasip.oxog.dev → ersinkoc.github.io` (the repository name is not part of the DNS target).
- GitHub Pages: custom domain `munasip.oxog.dev`, publishing source GitHub Actions, HTTPS enforced after certificate issuance.
- `public/CNAME` contains exactly `munasip.oxog.dev` and is copied into `out/` as a portable domain declaration. For an Actions deployment, the authoritative domain binding is the repository Pages setting; a CNAME file alone does not configure it.
- Next exports with `output: "export"` and `trailingSlash: true`. The custom domain serves the site at `/`, so no `/munasip-site` base path or asset prefix is added.
- Canonical URLs, Open Graph metadata, robots, sitemap and structured data use the custom origin. `public/.nojekyll` is included in the artifact.

The original website repository `MunaSIP/munasip.github.io` remains unchanged. Its publisher targets only that original repository, so it does not need to be disabled for this independent deployment. The local `upstream` remote preserves its identity; `origin` points to the new website repository.

## Build and publish

Use Node 26.12.1 and pnpm 12.14.0:

```sh
pnpm install --frozen-lockfile
pnpm peers check
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
pnpm check:export
pnpm exec playwright install chromium
pnpm test
pnpm check:links
```

Commit and push to `main`. The Pages workflow checks the source, exports the site, verifies routes/assets, runs browser tests and deploys `out/`. Pull requests run checks without deployment; manual dispatch is also available. The `github-pages` environment identifies the public deployment.

Repository administrators can configure initial Pages settings with:

```sh
gh api --method POST repos/ersinkoc/munasip-site/pages -f build_type=workflow
gh api --method PUT repos/ersinkoc/munasip-site/pages -f cname=munasip.oxog.dev
# After GitHub has issued the certificate:
gh api --method PUT repos/ersinkoc/munasip-site/pages -F https_enforced=true
```

Create Pages only once; use PUT for later updates. The Pages certificate may take time to issue after domain binding. Do not disable certificate validation to claim a successful HTTPS check.

## Live verification

After a successful Actions deployment, verify HTTPS, every content route and the custom 404. Check the new heading, canonical URLs, social image, sitemap, local fonts, original SVG marks and WebP captures. Exercise theme and motion preferences, mobile navigation, tabs and clipboard on the public origin; check the browser console and RSC requests.

Release, source ZIP and container-package links remain on the official product's GitHub destinations. Product ownership, licensing and the original website are unaffected by the hosting move.
