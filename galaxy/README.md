# Library galaxy

A JavaScript/WebGL2 view of the published Alphabeta Math library. Set Theory
occupies the central bulge of a three-dimensional spiral galaxy. Dragging
orbits the camera above, below or edge-on to its disc. The galaxy has a warm
stellar core, blue gas, absorbing dust lanes and a pure black surround.

No dependency lines are drawn. Hovering illuminates the complete transitive
set of prerequisites or downstream consumers, selected in the filter panel.

## Preview

```bash
node galaxy/serve.mjs
# http://localhost:8080
node --test galaxy/graph.test.mjs galaxy/graph-store.test.mjs
```

The server binds to `0.0.0.0:8080`. Set `PORT` to choose another port.
It requires Node 22+ and the app checkout's existing `yaml` and `katex` packages,
resolved through `tools/paths.mjs`; alternatively install those packages locally.
The browser needs WebGL2. No CDN assets, build step, framework or image textures
are required.

## Automatic content updates

The repository's `status: published` flags are authoritative. Both startup and
refreshes include every currently published item; drafts are excluded. A stale
live-site sitemap cannot delay an addition or prevent a deletion/unpublication.
This view follows this checkout, which may be ahead of the deployed website.
The server must be running and reading the checkout receiving publication edits.
`GALAXY_CONTENT_DIR` can point it at another content root; by default it uses this
repository. No content files are modified by the preview.

`graph-store.mjs` watches `items/` and `library/` recursively, batches changes for
one second, and checks file metadata every 30 seconds as a fallback for missed
watch events. Added/deleted files and directories, status changes, item titles,
kinds, dependency lists, category membership and category names are rebuilt.
Published body-only edits also update the revision; draft-only edits do not
broadcast an unchanged graph. A metadata cache avoids reparsing unchanged YAML.

Snapshots replace one another atomically after a stable scan. Concurrent edits
or parse failures retain the last complete graph and trigger another attempt;
errors are logged on the server. `/graph.json` provides revision-based ETags.
`/graph-events` pushes revisions to open tabs, and `graph-live.mjs` fetches and
applies the replacement graph. Conditional polling and visibility checks recover
missed connections or server restarts. The camera, selected categories, hover
mode, search and music are preserved. New categories are selected automatically
when all previous categories were selected; a restricted selection is retained.
Existing star coordinates are seeded by stable item/category IDs so unrelated
additions and removals do not rearrange the galaxy. Inspection clears because its
old item index may no longer exist. Item GPU buffers
are reused and the decorative scene is retained.

Changes normally appear after the one-second debounce and rebuild. Polling
recovery can take up to 30 seconds plus rebuild time. No manual refresh, restart,
or commit is required for subsequent content changes. Frontend source edits are
served on the next browser reload; server-code changes still require a restart.

## Interaction

- The initial and reset view match the supplied close, inclined reference, with
  a core above the viewport center and a galaxy spanning its width. Rotation is
  reversed and remains a rigid rotation of the whole galaxy.
- Drag to orbit the camera. Shift-drag or right-drag pans the view.
- Scroll or pinch to zoom; the +/- controls also zoom. Reset restores the camera.
- The node icon in the top-right toolbar toggles hover highlighting. When off,
  hovering still shows the item name and link, without tracing relationships or
  dimming the galaxy. The left corners contain no labels; the color key and count
  are available inside the filter panel.
- Hover to inspect a star and illuminate its transitive relationships. Rotation
  pauses during inspection so the target stays under the pointer.
- Click a star to open its live item page in a new tab. On touchscreens, drag to
  orbit, tap a star to inspect, then tap its tooltip link to open the item.
- The filter icon opens multiple category selection, hover direction and search.
  Search results are keyboard-accessible links to matching published items.
- With the canvas focused, arrow keys orbit, +/- zoom, and Space toggles rotation.
  Escape clears inspection and closes the filter panel.
- Reduced-motion preferences pause rotation initially. Hidden tabs stop rendering.

Definitions are bright blue. Theorems, lemmas, propositions and corollaries are
red-orange. Examples, counterexamples and false statements are brown. Remarks
are muted violet. Decorative gas, dust and faint stellar light give the galaxy
its distant appearance; only library items are interactive. Decorative light
recedes during inspection and filtering. The layout illustrates subject groups,
not mathematical distance or difficulty.

## Star size and appearance

Each item is an analytic shaded sphere rendered by the GPU, with a soft halo
outside its surface. The halo reaches zero at `1.25 × body radius`: it extends
one-quarter of a radius beyond the surface. Background dust retains its diffuse
appearance. Hover emphasis changes brightness, not size.

Let `N` be the number of distinct transitive downstream consumers among published
items. The base radius is `0.3 + 0.11 × ln(1 + N)`; the small floor keeps unused
items visible. Shared dependency paths count once. `dependency-counts.mjs`
collapses cycles into strongly connected components and uses bitsets to compute
exact reach, excluding the item itself. Counts are rebuilt with content updates
and are independent of the visible category filters.

Theorem-family items receive an importance multiplier of
`1 + 0.28 × landmark + min(0.15, 0.065 × ln(1 + C))`, where `C` is the number
of distinct other subject categories containing direct consumers. Theorem family
includes theorems, lemmas, propositions and corollaries. Cross-subject use is a
structural importance signal; `landmark` is the existing editorial designation.
These are transparent proxies, not a universal ranking of mathematical importance.

After this multiplier, the reference body radius is capped at **1.6 CSS pixels**.
Perspective and zoom scale it, with an additional **8 CSS pixel** body-radius cap
at close range (10 pixels including the halo). The same projected size is used
for hover picking. Radii have no random variation.

## Piano soundtrack

The local playlist repeats: Elgar’s *Salut d’Amour* (Luis Kolodin), Bach’s
*Prelude in C Major, BWV 846* (Kimiko Ishizaka), the second movement of
Beethoven’s *Moonlight Sonata* (a Musopen recording whose pianist is unspecified),
and Chopin’s *Nocturne, Op. 9 No. 2* (Frank Levy). The music controls at the lower
right offer play/pause, track selection, next and volume; the default volume is
24%. Browser autoplay restrictions are respected: if playback is blocked, use
the music button or touch the galaxy to start. Pausing prevents further automatic
starts. The playlist wraps from its last recording to its first.

`music.mjs` owns one HTML audio element, uses the Media Session API where
available, and reports loading failures in the playlist panel. Four bundled MP3s
work without third-party streaming. The server supports byte ranges and HEAD for
seeking and efficient metadata loading. `audio/credits.html` lists performers,
recording sources and licenses and is linked from the player. Elgar is CC BY-SA
4.0; Bach is CC0; the Beethoven and Chopin source recordings are marked public
domain. Elgar and Chopin are unchanged files; Bach and Beethoven were transcoded
to MP3 without musical edits. Recording licenses are independent of code licenses.

## Architecture

- `data.mjs` includes every published kind, resolves dependency aliases,
  deduplicates prerequisites, preserves multiple category memberships and
  provides a category for items without a published home. Categories without
  metadata receive titles from their directory. In-progress pages without
  frontmatter are skipped. Unpublished dependency endpoints are reported under
  `graph.json` → `unresolved`; draft stars are never fabricated. Forward and
  well-definedness references are not relabelled as proof prerequisites.
- `graph-utils.mjs` iteratively traverses the entire published dependency graph,
  safely handling shared paths and cycles. Category filters affect visibility,
  not traversal. Tooltips report both total reached items and visible items.
- `galaxy-model.mjs` creates deterministic XYZ positions, with a thicker Set
  Theory bulge and a thin, nonzero-thickness disc. It also creates 224,500
  decorative particles. CPU picking and GPU rendering use the same perspective
  projection. This is procedural illustration, not an astrophysical simulation.
- `renderer.mjs` uploads geometry once and renders four GPU point layers. It
  accumulates light into a half-float framebuffer when supported, then applies
  exposure and gamma correction; an RGBA8 target is the compatibility fallback.
  Stars and gas use analytic fragment shaders, so zooming does not enlarge a
  fixed bitmap. The framebuffer uses native device density up to 3×, bounded by
  GPU limits. The clear color is exactly black; there is no background starfield.
- `math-title.mjs` renders delimited LaTeX in hover titles and search results
  with KaTeX, supporting `$…$`, `$$…$$`, `\(…\)` and `\[…\]`. Plain text
  stays text; trusted HTML commands are disabled. The preview serves the local
  KaTeX modules, stylesheet and fonts through an explicit asset allowlist.
- `galaxy.js` owns UI state and camera controls. A screen-space spatial grid is
  rebuilt lazily for picking after camera movement. The GPU selection buffer
  changes only on filtering or inspection; traversal runs only when the hovered
  item or direction changes. No edge geometry exists.
- `serve.mjs` serves an explicit frontend asset allowlist and the public graph
  snapshot and revision event stream. It does not expose repository files or change
  the live website.

Relationships use the current local metadata. Dependencies whose endpoints are
not published are listed in `unresolved`; they do not create draft stars.

## Validation

Unit tests cover publication filtering, aliases, categories, optional census
reconciliation, both transitive directions, cycles, finite 3D geometry,
central Set Theory placement, perspective, depth and zoom.

An independent GPT-6-Sol (high) review checks the 3D view, orbit, zoom, projected
hover targeting, both highlight modes, filters, links and absence of edges.
Browser verification uses Chromium with WebGL2, including high-DPI rendering,
edge-on camera views, a touch viewport and reduced motion. The filter drawer
sits above hover cards so relationship controls remain clickable. Software rendering
can be substantially slower than a hardware-accelerated browser.

The title-rendering browser check covered all 3,948 live titles containing math:
no KaTeX errors, working search and tooltip formulas, and loaded local fonts.

Automatic-update tests use temporary content trees and cover publication additions,
title and body alterations, unpublication, deletion, malformed-write recovery,
draft-only no-ops and missed-event polling. Browser integration verifies pushed
add/edit/delete updates, retained camera and category filters, and reused GPU layers.

Star tests cover exact transitive counts through diamonds and cycles, comparison
with direct graph traversal, logarithmic growth, theorem boosts and radius caps.
Browser checks verify sphere shading and a black pixel beyond the halo boundary.
