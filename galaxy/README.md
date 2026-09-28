# Library galaxy

A JavaScript canvas view of the published Alphabeta Math library. Set Theory
occupies the center; other subjects form five slowly rotating spiral arms.
There are no visible edges. Hovering illuminates the complete transitive set of
prerequisites or downstream consumers, selected in the filter panel.

## Preview

```bash
node galaxy/serve.mjs
# http://localhost:8080
node --test galaxy/graph.test.mjs
```

The server binds to `0.0.0.0:8080`. Set `PORT` to choose another port.
It requires Node 22+ and the app checkout's existing `yaml` package, resolved
through `tools/paths.mjs`; alternatively install `yaml` locally. No browser
packages, CDN assets, build step, or framework are needed.

At startup, the live `https://alphabetamath.cc/sitemap.xml` supplies the item
census. Titles, kinds, prerequisites and category membership come from this
repository's published content. Startup fails if a live item is missing from
that content, rather than silently rendering an incomplete library. The census
matches the live site, but dependency metadata reflects the current checkout.
Use `GALAXY_LOCAL=1 node galaxy/serve.mjs` explicitly for an offline preview of
all locally published items. Restart to refresh the snapshot or assets.

## Interaction

- Drag to pan; scroll or pinch to zoom. The +/- controls also zoom.
- Hover to inspect a star and illuminate its transitive relationships. Rotation
  pauses during inspection so the target stays under the pointer.
- Click a star to open its live item page in a new tab. On touchscreens, tap to
  inspect, then tap the tooltip link to open the item.
- The filter icon opens multiple category selection, hover direction and search.
  Search results are keyboard-accessible links to the matching published items.
- Pause/resume and reset controls are always available. With the canvas focused,
  arrow keys pan, +/- zoom, and Space toggles rotation. Escape clears inspection
  and closes the filter panel.
- Reduced-motion preferences pause rotation initially. Hidden tabs stop rendering.

Definitions are bright blue. Theorems, lemmas, propositions and corollaries are
red-orange. Examples, counterexamples and false statements are brown. Remarks
are muted violet. The small neutral background dust is decorative; the brighter
colored stars represent actual items. Layout is illustrative, not a metric of
mathematical distance or difficulty.

## Data and rendering

`data.mjs` includes every published kind, resolves dependency aliases, deduplicates
prerequisites, preserves multiple category memberships and provides an explicit
category for items without a published home. Categories without `_category.md`
receive titles derived from their directory. In-progress pages without a
frontmatter header are skipped. Missing published dependency endpoints are
reported in `graph.json` under `unresolved`; draft items are never fabricated as
published stars. Forward references and well-definedness references are not
relabelled as proof prerequisites. The current snapshot contains 20,755 live
items, 99,466 published dependency links and 11 unresolved endpoints.

`graph-utils.mjs` traverses relationships iteratively and handles cycles safely.
Traversal uses the entire published graph; filters only affect which reached
stars are visible. Tooltips report both total reached items and visible items.
`galaxy.js` computes the layout once, caches stars in offscreen canvases and
rotates those layers. Close zoom redraws visible stars at screen resolution to
keep them sharp. A spatial grid handles picking. Closure computation and
highlight rasterization run only when the selected star or direction changes.
No dependency lines are drawn in any state. Canvas pixel density is capped at 2.

`serve.mjs` serves only five explicit assets and the public graph snapshot; it
does not expose repository files. This standalone preview does not install a
production route or change the live site.

## Validation

The independent GPT-6-Sol (high) review checked the full live census, central
Set Theory layout, colors, zero visible edges, both transitive hover modes,
category filtering, title tooltips, item navigation, rotation and port 8080.
Desktop Chrome and a 390px touch viewport loaded without browser errors;
None / Set Theory / All filters, search, and reduced-motion behavior passed.
Unit tests cover transitive traversal in both directions, cycles, publication
filtering, aliases, category membership and live-census reconciliation.
