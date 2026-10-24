# Rendering source lint

`render-source-lint.mjs` supplies the inexpensive, shared source pass for math
and physics rendering checks. It changes no content and performs no mathematical
or proof audit. Integration selects the current frontier and supplies the actual
alias-resolved titles; this module never loads a whole content corpus.

```js
import {
  inspectRenderingSource,
  renderingSourceToolchainFingerprint,
  renderingSourceToolchainInputs,
} from './render-source-lint.mjs';
const result = inspectRenderingSource({
  source, file,
  resolveTitle: id => selectedReferenceTitles.get(id),
});
```

The inspector is synchronous after its ESM import initializes the actual app
packages. It returns `errors`, `warnings`, `math`, `diagrams`, and
`toolchainFingerprint`. Diagnostics contain `code`, `message` (also `msg`),
`file`, `line`, `excerpt`, `context`, and a reference `target` where applicable.
Math fragments contain `value`, `display`, `line`, `context`, and optional
`target`; each is parsed by the app's KaTeX using its ordinary defaults.
Diagram blocks contain `source`, `environment`, `line`, `section`, and
`proofSection`. The graphics checker must exclude proof-section blocks from
compilation: ItemBody does not extract them, and the source pass reports that
structural error. An explicit `tikz`/`tikzcd` code node with an unclosed,
metadata-bearing, tilde, mixed-case language or other unsupported fence produces
`unsupported-diagram-fence` and no compilation block. Body inline-code nodes
with at least three backticks and explicit initial `tikz`/`tikzcd` content also
produce that error: the actual category-theory 004/009 defects printed diagram
source inside proof paragraphs. Single-backtick code and ordinary fenced code
examples remain excluded. The source pass performs no TikZ compilation or rasterization.

The parser uses the exact installed app unified/remark-parse/GFM/math packages
and actual `remarkDisplayTags` plugin. It transpiles the canonical
`item-sections.ts` parser and uses its section, paragraph and proof-heading
rules. It extracts and executes the actual pure `resolveWikilinks` function,
with a caller-supplied title lookup replacing serving/database dependencies.
This preserves actual label precedence, including an explicit label overriding
the inherited title. It also extracts the actual ProofBlock technique, step
and trailing-tag initializers, so only the first recognized technique paragraph
and actual trailing tag chips are treated as plain text. A technique paragraph
after Given, a multiline paragraph unrecognized as a banner, or one in Remarks
continues through the normal Markdown path.

High-confidence raw TeX commands, caret/braced scripts, short variable
subscripts, ASCII comparisons and elementary equations are errors only in
rendered text AST nodes. Ordinary code, math, HTML nodes, image metadata, reference
definitions, link destinations and GFM URL autolinks are excluded. Valid math
in titles and resolved reference labels is parsed through that same AST and
KaTeX, rather than scanned as plain source. Literal math/Markdown in actual
plain proof banners or tags is an error even when its KaTeX alone would parse.

The raw-notation rules deliberately do not attempt to recognize every
mathematical expression. Bare letters and ordinary identifiers are not proof
that math delimiters are missing. `L2` and `Lp`, including rejected examples in
`research/math-library-rendering-defects.md`, produce warnings only; they never
become hard rendering defects merely for optional typography. Visual layout,
missing explanatory figures, mathematical accuracy, general overflow and
ambiguous shorthand require their separate review. Existing YAML, delimiter,
KaTeX and proof-layout checks remain necessary; this module is additive.

The bounded 256-entry in-memory LRU key includes exact source bytes, file,
resolved titles actually requested, and the source/renderer/toolchain fingerprint.
Results are cloned, so callers cannot mutate a future cache hit. Persistent
integration caches must also bind their own runtime and graphics toolchains.
`renderingSourceToolchainInputs()` exposes raw hashes of loaded inputs, including
this module, actual app parser/renderer sources, package entries, package versions
and the dependency lock. The fingerprint describes one process's loaded toolchain;
every public analysis/fingerprint/input API calls
`assertRenderingSourceToolchainCurrent()` before analysis or returning cached
results. Stable file identity, size, mtime and ctime provide a cheap fast path;
a metadata change triggers comparison against the exact loaded raw hash. Any
byte drift or disappearing input fails closed and requires a command restart,
so freshly rehashed receipt inputs cannot bless stale imported parser code.
Missing app packages/parser entry
points fail setup rather than silently substituting a weaker parser.

Run `node --test tools/render-source-lint.test.mjs` for the small regression
pack. Its frozen-source fixtures include confirmed Fourier title, estimate,
inherited-label and technique-banner failures plus rejected L2/Lp cases.
An isolated disposable app fixture changes an actual loaded renderer input
after warming the result cache and verifies fail-closed behavior without editing
the production app. Representative assertions are also checked against SSR of the actual app
ItemBody and MathMarkdown, not a test renderer. This is scoped regression
evidence, not visual coverage of any library item or a native gate verdict.
