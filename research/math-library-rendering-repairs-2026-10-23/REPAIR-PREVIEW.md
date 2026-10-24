# Local repair preview

`repair-preview.mts` renders current item sources into a new local preview
directory. It never edits `items/`, the application checkout, existing audit
evidence, or an existing preview directory. Use a fresh child directory for
each before/after comparison.

From `/home/lazyinspirit/Projects/prestige-math-library`:

```sh
TSX_TSCONFIG_PATH=/home/lazyinspirit/Projects/prestige-intelligence/web/tsconfig.json \
  node tools/tsx-run.mjs research/math-library-rendering-repairs-2026-10-23/repair-preview.mts \
  --ids lem-example-one,thm-example-two \
  --out research/math-library-rendering-repairs-2026-10-23/previews/after-001
```

`--ids` must be a nonempty comma-separated list of one to ten canonical item IDs. `--out`
must be a new child directory under
`research/math-library-rendering-repairs-2026-10-23/`; existing directories
are rejected. The preview contains current raw-source snapshots and hashes,
one rendered HTML page per item, the current reference-title map and its
diagnostics, the copied CSS and source hashes, a manifest, and revision-2
screenshots with lossless 1200 by 1400 PNG tiles. Long screenshots use 1300px
steps, giving adjacent tiles a 100px overlap. Short items get one tile.

Rendering uses the local application's actual `ItemBody`, `MathMarkdown`,
`resolveWikilinks` (with `forward_refs` and `justified_by`), and async TikZ SSR.
Scratch sections open before capture. The CSS uses the same built local
application stylesheet, library design stylesheet, KaTeX CSS/fonts, dark
surface, 1104px content width and 1200 by 1400 browser viewport as the category
inspection previews. The local Playwright route blocks non-file network
requests.

The preview covers the current item title and complete `ItemBody`, including
facts, proof sections, remarks, scratch, internal reference titles, and rendered
diagrams. It does not cover the production item route, its navigation or
dependency widgets, or the separate metadata Sources footer. The current title
map includes parseable current item frontmatter; unreadable/malformed unrelated
files are recorded in `reference-title-map.json` diagnostics and omitted, so
this is not a claim of full native item-loader coverage. Horizontally scrollable
diagrams retain their browser scroll behavior and may require checking their
clipped content separately.
