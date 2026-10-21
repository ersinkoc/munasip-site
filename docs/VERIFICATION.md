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
| Static export validator          | Ten pages; 460 local links/assets; canonical and social metadata, legacy anchors, sitemap, robots, 404, .nojekyll and the custom-domain CNAME |
| Playwright                       | **29 passed, 0 failed, 0 skipped**                                                                                                            |
| Viewport matrix                  | Ten routes × seven widths × two themes, all pass; 375, 768, 1024, 1440, 1920, 2560, 3840px                                                    |
| axe                              | No WCAG A/AA violations in the checked rules across ten pages in both themes and the open appearance panel                                    |
| External links                   | **18/18** live HEAD checks return HTTP 200, including redirected source ZIP and container-package page                                        |
| Image release                    | GHCR manifest for `1.6.0` returns HTTP 200; digest `sha256:28c2d7431c02933d60dd51d73b7d7ca38dc9cdfad4cf9321dc7ee65aea02f68f`                  |
| Production dependency audit      | No known vulnerabilities reported by pnpm audit                                                                                               |
| Git whitespace check             | `git diff --cached --check` passes                                                                                                            |

The browser matrix waits for fonts and loads every HTML image, checks viewport and container bounds, checks direct responses and records missing resources/page errors. It saves full homepage captures for each width/theme and complete installation-guide captures at mobile and desktop sizes. Final hero images at all seven widths were visually reviewed, along with mobile/desktop lower-page samples, footer, the appearance menu and the directly opened guide.

Interaction coverage includes native radio focus and stored themes, OS theme changes, reduced motion, pointer cleanup when mouse effects are disabled while background/diagram animations continue, bounded/expired ripples, offscreen diagrams, mobile menu/Escape, keyboard gallery tabs, route descriptions, clipboard success and denied-clipboard fallback, failed-storage fallback, JavaScript-disabled core content, direct guide refresh and a real HTTP 404. Visibility behavior is tested with controlled visibility signals; this is not a CPU or battery benchmark.

## Publication verification

The original repository rejected writes, so the user selected a new repository with admin access. The original site remains unchanged. See DEPLOYMENT.md for the current domain and workflow configuration. Hosted deployment records are available in [GitHub Actions](https://github.com/ersinkoc/munasip-site/actions/workflows/pages.yml). The Pages API records the configured domain, certificate and HTTPS enforcement; those live results are checked separately from local validation.

The PBX itself, SIP carrier, media paths and actual office deployment were not started or integration-tested by this website task. Website content is source-grounded, not a claim of a live telephony test.

## Fragment refresh regression

The first Linux CI run reproduced a fragment-refresh alignment failure (25 of 26 tests passed). Fragment navigation now re-aligns the requested target after font layout and hydration. The original deep-link assertion is unchanged; it passed five repeated local runs. A delayed-font navigation regression was added, and the complete local suite now passes 27 tests.

## Mouse effects regression

The mouse toggle previously paused all continuous animations. A regression reproduced that behavior before the fix. Pointer effects now use a separate control; the existing stored preference is preserved. Browser checks confirm background pulses and call-map animation timelines advance with mouse effects off, pointer glow/parallax/ripples stop, and the preference survives reload and navigation. The early preference script is also checked with application scripts blocked. Reduced-motion and visibility controls still pause both kinds of effects. The complete updated local suite passes 28 tests.

## Animated SVG interfaces

Nine inline SVG interface concepts replace displayed product captures across the homepage and guides. Legacy image URLs remain available. The seven gallery tabs, IVR flow/API illustrations and softphone use the active theme. SVG animation timelines advance with mouse effects disabled, pause offscreen or in hidden tabs, and stop under reduced motion. A browser check confirms the illustrated pages no longer request product WebP captures. Mobile and desktop renders in both themes were visually reviewed. The existing console-error assertions caught an SVG title hydration mismatch; a single text value fixed it, and the full suite passes 29 tests with those assertions unchanged.

The motion emphasis update adds brighter traveling call-flow packets and wider audio bars with independent rhythms. Browser checks observe packet offsets and waveform transforms changing with mouse effects off, verify packet pause/resume offscreen, and confirm both stop under reduced motion. Desktop IVR and mobile softphone renders were reviewed; the complete suite still passes 29 tests.
