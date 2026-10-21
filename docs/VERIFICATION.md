# Verification record

21 October 2026. Local checkout: `D:\Codebox\munasip-site`, based on website commit `9c670e33329dee6e628145525e2684fb0ed9a489`. This records local verification; the user-selected destination is now `ersinkoc/munasip-site` at `https://munasip.oxog.dev/`.

## Passed locally

| Check                            | Observed result                                                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Node / package manager           | Node 26.12.1; pnpm 12.14.0                                                                                                                    |
| Frozen install, forced reinstall | 188 packages installed successfully from the lockfile                                                                                         |
| Peer compatibility               | No peer dependency issues                                                                                                                     |
| Formatting / ESLint / TypeScript | Passed                                                                                                                                        |
| Production build                 | Ten content routes, six statically generated guides; metadata routes and custom 404 exported                                                  |
| Windows RSC normalization        | Ten missing flat aliases created; browser prefetch requests succeed                                                                           |
| Static export validator          | Ten pages; 469 local links/assets; canonical and social metadata, legacy anchors, sitemap, robots, 404, .nojekyll and the custom-domain CNAME |
| Playwright                       | **26 passed, 0 failed, 0 skipped**                                                                                                            |
| Viewport matrix                  | Ten routes × seven widths × two themes, all pass; 375, 768, 1024, 1440, 1920, 2560, 3840px                                                    |
| axe                              | No WCAG A/AA violations in the checked rules across ten pages in both themes and the open appearance panel                                    |
| External links                   | **18/18** live HEAD checks return HTTP 200, including redirected source ZIP and container-package page                                        |
| Image release                    | GHCR manifest for `1.6.0` returns HTTP 200; digest `sha256:28c2d7431c02933d60dd51d73b7d7ca38dc9cdfad4cf9321dc7ee65aea02f68f`                  |
| Production dependency audit      | No known vulnerabilities reported by pnpm audit                                                                                               |
| Git whitespace check             | `git diff --cached --check` passes                                                                                                            |

The browser matrix waits for fonts and loads every HTML image, checks viewport and container bounds, checks direct responses and records missing resources/page errors. It saves full homepage captures for each width/theme and complete installation-guide captures at mobile and desktop sizes. Final hero images at all seven widths were visually reviewed, along with mobile/desktop lower-page samples, footer, the appearance menu and the directly opened guide.

Interaction coverage includes native radio focus and stored themes, OS theme changes, reduced motion, cleanup when motion is disabled, bounded/expired ripples, offscreen diagrams, mobile menu/Escape, keyboard gallery tabs, route descriptions, clipboard success and denied-clipboard fallback, failed-storage fallback, JavaScript-disabled core content, direct guide refresh and a real HTTP 404. Visibility behavior is tested with controlled visibility signals; this is not a CPU or battery benchmark.

## Publication verification

The original repository rejected writes, so the user selected a new repository with admin access. The original site remains unchanged. See DEPLOYMENT.md for the current domain and workflow configuration. Hosted deployment records are available in [GitHub Actions](https://github.com/ersinkoc/munasip-site/actions/workflows/pages.yml). The Pages API records the configured domain, certificate and HTTPS enforcement; those live results are checked separately from local validation.

The PBX itself, SIP carrier, media paths and actual office deployment were not started or integration-tested by this website task. Website content is source-grounded, not a claim of a live telephony test.
