# Deterministic rendering quality

Both native workflows run these checks in the actual Step-6 metadata/render
preparation and require the `rendering-quality` gate in the final battery.
The existing proof-render pass, content gates, independent review, owner holds
and bounded repair routes remain required. This check records presentation
diagnostics; it gives no mathematical or physical acceptance.

The five checks are:

1. Find likely raw mathematical notation in visible prose, titles, headings,
   referenced display titles and plain proof labels. Diagnostics identify the
   file, source line and renderer context. Deliberate readable shorthand such
   as L2/Lp receives a warning instead of a forced rewrite.
2. Parse Markdown using the application's actual remark pipeline and item
   section/proof-label boundaries, then validate actual math fragments using
   its KaTeX. Code and diagram fences retain their actual parser semantics;
   renderer labels are checked in the context in which they appear.
3. Compile selected TikZ/Tikzcd through the production application renderer,
   with its actual preamble, TeX/WASM implementation and embedded fonts.
   Compilation failures, unavailable required tools and empty output block.
4. Load the resulting SVG in headless Chromium and check that it has visible
   geometry. Possible clipping, overlapping labels and tiny text are warnings
   for focused inspection; they do not establish mathematical incorrectness.
5. Keep small regression packs covering actual parser boundaries, raw notation,
   malformed delimiters/labels, diagram preamble and comma-label failures,
   empty SVG, layout heuristics and cache invalidation. The tests exercise the
   real parsers/compiler/browser; they do not scan the corpus.

The only subjects are item and page files in nonempty current run manifests.
Linked supplier titles are read as display context without making their bodies
new validation subjects. A lightweight frontmatter index resolves canonical IDs
before aliases; ambiguous requested ownership fails closed. Used title/identity/
alias projections are bound without hashing unrelated supplier proof bodies as
rendering context. Title or alias reassignment invalidates the receipt; a
body-only edit to a title-only supplier does not. Unrelated files do not enter
the validation selection. The same
scoped runner is available explicitly:

```sh
node tools/rendering-quality.mjs --run RUN --write
node tools/rendering-quality.mjs --run RUN --verify
# From physics/:
node tools/physics-support/rendering-quality.mjs --run RUN --write
node tools/physics-support/rendering-quality.mjs --run RUN --verify
```

`--write` performs the actual diagnostics and writes
`research/RUN-rendering-quality.json`. Native preparation invokes the same
implementation after its existing proof SSR scan; it does not SSR the corpus
again. `--verify` checks the prepared result against the exact current scope,
source, referenced titles and source/diagram toolchain fingerprints. Missing,
empty, failed or stale results fail closed. Its native liveness probe requires
a positive checked-file count. An unchanged battery does not compile diagrams
again; source or toolchain changes invalidate the cache and preparation.

Successful whole-run and per-diagram cache entries live in the ignored
`.autopilot/rendering-quality-cache/` or physics counterpart. Keys bind source,
renderer/parser/compiler/font/browser inputs, rather than timestamps or an old
success flag. The prepared-source seal includes those actual runtime files;
quiet scheduling ticks only stat the selected inputs. Cache artifacts confer
no source ownership and are not published. Source diagnostics remain blocking
where deterministic; visual heuristics remain explicitly labelled warnings.

Use the ordinary `PRESTIGE_APP_DIR` setting for the production web checkout.
Diagrams additionally need an installed Chromium executable, discovered from
the local installation or set with `PRESTIGE_CHROMIUM_PATH`. No browser or TeX
compiler is loaded for a selection without diagram blocks. The source parser
still uses the real application packages. The focused regression commands are:

```sh
node --test tools/render-source-lint.test.mjs tools/rendering-diagrams.test.mjs tools/rendering-quality.test.mjs
node tools/tsx-run.mjs --test tools/rendering-quality-gates.test.mts
```
