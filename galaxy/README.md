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
node --test galaxy/graph.test.mjs
```

The server binds to `0.0.0.0:8080`. Set `PORT` to choose another port.
It requires Node 22+ and the app checkout's existing `yaml` and `katex` packages,
resolved through `tools/paths.mjs`; alternatively install those packages locally.
The browser needs WebGL2. No CDN assets, build step, framework or image textures
are required.

At startup, the live `https://alphabetamath.cc/sitemap.xml` supplies the item
census. Titles, kinds, prerequisites and category membership come from this
repository's published content. Startup fails if a live item is missing from
that content, rather than silently rendering an incomplete library. The census
matches the live site, but dependency metadata reflects the current checkout.
Use `GALAXY_LOCAL=1 node galaxy/serve.mjs` explicitly for an offline preview of
all locally published items. Restart to refresh the content snapshot; frontend
assets are reread on each request.

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
  snapshot. It does not expose repository files or change the live website.

The verified snapshot has 20,755 live items, 99,466 published dependency links
and 11 unresolved endpoints. Relationships use the current local metadata;
items missing from the live publication census are excluded.

## Validation

Unit tests cover publication filtering, aliases, categories, live-census
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
