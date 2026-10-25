# Shared rendering source lint — Root review handoff

Implemented only in `/home/lazyinspirit/Projects/prestige-math-library` on main.
No content, foreign WIP, worktree, backup, engine control, authority or workflow
state was changed. No commit has been made; Root owns scoped review and final
main integration.

Owned new files: `tools/render-source-lint.mjs`, its `.test.mjs`,
`tools/RENDER-SOURCE-LINT.md`, and
`tools/test-fixtures/render-source-lint/{cases.json,renderer-probe.mts}`.
Exact current review hashes are in `review-inputs.json`.

The synchronous API after ESM initialization is
`inspectRenderingSource({source,file,resolveTitle?})`, returning errors,
warnings, rendered math fragments, actual supported diagram blocks and a
toolchain fingerprint. The integration and graphics owners received the exact
API and are wiring both native workflows independently of this source module.

The module uses the actual app's installed Markdown AST pipeline, display-tag
plugin, canonical structural parser, pure wikilink resolver and ProofBlock
banner/step/tag initializers. The TS snippets are extracted from trusted
canonical app files and transpiled, avoiding duplicate parser regexes and
unnecessary serving/cache/database imports. Resolved item title lookup is
supplied by the selected integration context; no corpus is scanned or audited.
Every rendered math fragment, including item titles and actual inherited or
explicit reference labels, is parsed with the app's KaTeX defaults.

Raw notation checks operate on AST text, outside code, math, HTML, autolink URLs
and non-rendered metadata. They detect high-confidence raw commands, scripts,
comparisons and elementary equations. They deliberately do not infer every
mathematical expression. Readable L2/Lp shorthand produces warnings only,
preserving the actual rejected optional-typography cases from the defect ledger.
Actual plain first-paragraph technique banners and trailing proof tag chips
reject math/Markdown leakage even when the math would parse under KaTeX.
Normal Markdown technique paragraphs outside that precise boundary remain valid.

The bounded 256-entry LRU key binds source, file, used titles and actual source/
renderer/toolchain fingerprint; cached returns are immutable clones. Exposed
input hashes bind app renderer/parser sources, package entries and lockfile.
This is a snapshot of the loaded process toolchain, not a hot-reloading cache;
commands must restart after toolchain changes. Persistent cache and native
receipt bindings remain the integration owner's duties.

Actual validation: `node --test tools/render-source-lint.test.mjs` passed 31/31
in approximately 1.3 seconds (`tests.tap`). Fixtures cover confirmed frozen
Fourier title, estimate, inherited-label and technique defects, repaired forms,
rejected L2/Lp cases, code/HTML/URL exclusions, correct source coordinates,
multiline/context boundaries, actual title/reference KaTeX failure, diagram AST
extraction, immutable bounded cache and used-title invalidation. A dedicated
fixture executes the real app ItemBody, MathMarkdown and wikilink resolver
through its actual SSR stack and verifies representative defective/repaired
SSR output; no browser visual coverage is claimed.

`node --check` and scoped `git diff --check` passed. A synthetic 100-source
valid-input benchmark with actual AST/KaTeX and a second cached pass is recorded
in `benchmark.json`; it is performance evidence only, not a timing guarantee.

Remaining duties outside this ownership: the graphics owner's TikZ compilation,
SVG/raster checks; the integration owner's both-workflow preparation/gate/cache
wiring and explicit frontier runtime bindings; Root's main commit, AQFT resume
and old-worktree deletion. Existing YAML, delimiters, KaTeX, proof-layout and
native checks remain mandatory. This additive pass claims no mathematical,
proof, visual-layout, diagram-correctness or full-library audit acceptance.


## Root review round 1 repairs

Both concrete review gaps are repaired. Explicit AST code nodes declaring
`tikz`/`tikzcd` now fail with `unsupported-diagram-fence` when the actual renderer
cannot extract their opening/closing syntax; none are returned for compilation.
Regressions cover an unclosed intended diagram, a metadata-bearing header,
tilde and four-backtick intended fences, plus ordinary code-example negatives.

All public source-analysis, parser, fingerprint and input APIs now verify their
loaded toolchain currency before analysis or cache reuse. Stable stat identity,
size, mtime and ctime are a cheap fast path; changes compare the exact on-disk
raw hash with the loaded hash and fail closed on drift. Input reads also require
stable before/after metadata. A disposable isolated app fixture copies only the
required renderer/parser test inputs, links installed dependencies read-only,
warms the result cache, changes its temporary actual MathMarkdown input, and
verifies all five APIs throw. No production app edit, retained backup or worktree
was created. The integration owner has the guard API and is separately fixing
actual alias-title lookup and its integration regression.

Current complete source suite: 31/31 pass; updated TAP and review hashes replace
the earlier development evidence. No code commit has been made.


## Distinct actual ledger inline-diagram repair

Root identified category-theory 004 and 009, whose actual frozen proof
paragraphs contain inline triple-backtick TikZ-cd strings. The targeted AST
inline-code rule now reports `unsupported-diagram-fence` only for body inline
code with a delimiter of at least three backticks and explicit initial
`tikz`/`tikzcd` content. It does not scan generic bare text or ordinary code.
Explicit block-code TikZ languages are recognized case-insensitively for
rejection, while only the renderer's exact lowercase header is supported.

The exact two frozen ledger proof lines are regression fixtures (one and two
inline diagram defects respectively). A separate regression rejects mixed-case
headers and preserves single-backtick TikZ discussion plus ordinary fenced code
examples as negatives. No mathematical/source carrier was edited.

Actual final source suite: 34/34 pass (`tests.tap`). Actual combined source,
graphics and quality-runner pack: 47/47 pass, approximately 19.2 seconds
(`combined-quality-tests.tap`). No commit, control or authority change occurred.
