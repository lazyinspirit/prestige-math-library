# Opt-in V2 original item presentation protocol

`originalPresentationChanges(beforeBytes, afterBytes, proofSupportConsolidation?, proofReferenceRelocation?)` describes exact structural
changes. It does **not** decide mathematical equivalence or grant source,
publication, import, consumer, native-review or gate authority. Legacy
`originalRenderingChanges` is unchanged. Only an explicit
`entry.presentation_version: 2` selects V2 inside the existing Root-reviewed
original-maintenance protocol; other entry versions do not silently opt in.

The existing protocol still authenticates the exact immutable before pin,
current original, main published repair and prior-publication lineage,
adjudication/checks, claim/ledger extractions, Root evidence, complete scope,
consumer declarations and actual consumer source hashes. Local imports and
pins are never rewritten. The native owner snapshot additionally binds the
V2 module bytes, so changing the extractor invalidates a cached owner receipt.

## Structural limits

- Metadata must be equal as parsed YAML, excluding only `verification` and an
  explicitly extracted title pair. IDs, kind, status, provenance, dependency
  arrays, roles and bibliography cannot change. Definitions and the existing
  result kinds are supported. A changed title is an exact pair awaiting
  scientific review, not a title string automatically normalized as equivalent.
- A Statement or Definition may change only trailing section separators and
  the labels of the same ordered wikilink targets, with all surrounding bytes
  fixed. Single brackets within an old mathematical label are represented;
  nested links, changed targets and arbitrary text are rejected.
- Facts permit only those exact label changes and deletion-only flattened
  `> ` quotation markers inside existing named Fact paragraphs. Recognized
  quotation boundaries are sentence punctuation followed by a prose word, or
  a parenthesized definition identifier. Comparisons, inequalities, math/code
  spans and arbitrary sentence rewrites are rejected. Each deletion is reviewed.
- Result proofs retain their numbered sequence and exact final support labels.
  Changed proof-technique banners and individual step presentations are explicit
  deltas requiring individual reviews. Definitions retain Proof and protected
  Well-definedness/Well-formedness suffixes, apart from represented section
  separators; no well-definedness argument may be silently rewritten.
- A separately typed V2 entry may opt in to a specific support consolidation:
  `proof_support_consolidation: {version: 1, steps: ['2.2']}`. The native wrapper
  passes this exact object as the extractor's third argument only for V2.
  Unknown, duplicate, malformed or unused step requests fail; legacy entries
  reject the field. Without it, changed terminal support still fails.
  Every requested changed step uses the strict parser, even if its old and new
  terminal support strings are identical. In the named step only, one prose support cluster immediately before one
  single-line `$$...$$` display may be removed and consolidated into terminal
  support. The final ordered tags must equal the stable union of the old final
  tags and that one cluster, without duplicates, new or lost tags. The QED
  marker must remain identical. The display becomes inline math with exactly
  the same payload bytes after outer space trimming; only its existing final
  comma or period may move immediately outside the new delimiters. All surrounding
  scientific tokens stay fixed: only actual prose whitespace can collapse.
  The synchronous installed renderer parser (`unified`, `remark-parse`,
  `remark-gfm`, `remark-math`, in that order) inspects the strict changed step.
  Its only allowed node kinds are root, paragraph, text, inlineMath, math and
  inlineCode; links/reference links/definitions, images, HTML, fenced or indented
  code, headings, lists, block quotes, tables and all other kinds fail even
  unchanged. The removed cluster and both terminal-support ranges must lie in
  real text nodes outside canonical wiki spans. Ordinary reference definitions
  anywhere in either full source body fail, preventing external context from
  changing a step-local shortcut link's role. Actual AST source ranges protect
  every math and inline-code span byte-for-byte, including double-backtick and
  multiline inline code; canonical wiki spans are separately protected.
  The old double-dollar range must be an exact math node, or a standalone
  paragraph whose sole inlineMath child has the exact full `$$...$$` range.
  (The observed single-line displays genuinely have AST type inlineMath.) The
  new single-dollar range must be an exact inlineMath node. These actual types,
  roles and UTF-16 offsets are recorded, never relabeled. Ambiguous ranges,
  cross-step movement and other payload/punctuation rewrites fail.
  This emits `proof-support-consolidation` with the full before/after step,
  exact removed cluster/offset, old/new final support, stable union, display and
  inline bytes, QED and scientific-token hash. The result also binds the exact
  opt-in object. Its ordinary exact per-delta Root review, evidence, source
  hashes, scientific classification and main repair authentication are still
  mandatory; it also participates in the diagram-independence guard below.
  This is support presentation bookkeeping, not acceptance of new premises or
  a general support/TeX normalization rule.
- Opt-in changes additionally contain `proof_support_parser_runtime`, with the
  exact resolved four parser roots, package identities and a sorted `inputs`
  map of canonical realpaths to hashes. It covers the conservative installed
  declared dependency closure's JS/MJS/CJS/JSON/native-code files, the web
  package/lock and Node executable; metadata-only dependencies are identified,
  not claimed to execute. No whole-node_modules or documentation reading is
  implied. Initialization is lazy and synchronous on the supported Node 22
  runtime; default/legacy extraction never loads this parser. The initial
  loaded descriptor stays private and output copies cannot mutate it. Context
  and live closure are checked before reuse, before/after initial loading and
  after each parse; drift requires restart, never restamping a cached parser.
  The V2 review validator consumes **every** runtime map entry through the
  existing live `bind(path, hash)` guard. The authority's `inputs` must therefore
  include the exact map; missing, stale or unrelated bindings fail. Existing
  native certificate-evidence recursion binds the same map into owner snapshot
  currency without an engine change. This applies only to the explicit opt-in;
  all installed default extraction outputs remain unchanged.
- The native diagram-independence flags remain mandatory for generic proof
  presentations or actual Remarks/graphics. Their genuine omission is allowed
  only when **every** delta is a strict `proof-support-consolidation`, there is
  no title, technique or Remarks change, neither source body has any Remarks
  section, fenced block, HTML markup, Markdown image or includegraphics/TikZ
  command/environment, the authenticated native adjudication says
  `mathematical_meaning_preserved: true`, and **both** diagram keys are absent.
  This handles native no-diagram adjudications without inventing fields.
  Partial, null or contradictory keys still fail. Existing correct
  `proof_independent: true` / `diagram_mathematics_corrected: false` fields
  retain their prior behavior. For the observed difference-cochain successor,
  explicitly request **both** `steps: ['1.2', '2.2']`: the first moves its period
  and duplicate F3 support, and the second moves its comma and support union.
  Leaving either as an ordinary delta cannot obtain the omission rule.
- Independent reference relocation uses the **fourth** extractor argument and
  V2 entry field
  `proof_reference_relocation: {version: 1, steps: [{label: '1.1', target: 'thm-euclidean-inverse-function-theorem'}]}`.
  Default and third-argument APIs are unchanged; legacy entries reject this
  field. Malformed, duplicate, unknown, unused or overlapping strict-step
  requests fail. The target must already occur literally in the old `deps`.
  One exact unlabelled wiki nested at the end of an ordinary F/A/L terminal
  cluster may move to one unique existing plain prose phrase. Its new canonical
  wiki must have exactly the same target and a pure actual-AST text label equal
  byte-for-byte to that old phrase. The phrase and both wiki source ranges must
  be actual plaintext, never math/code/HTML/link-title content. The entire
  before-step core must transform into the after-step core using **only** that
  phrase-to-wiki replacement and removal of the exact old terminal wiki plus
  its preceding comma/space. Ordinary tags, order, spacing, QED and all other
  scientific bytes stay identical. A changed trailing separator is its own
  separately reviewed spacing delta.
  The `proof-reference-relocation` delta records exact spans/terminals/target
  and full step cores; its `target` activates the existing imported published
  pin and per-delta evidence checks. It uses the same AST/runtime binding map
  described above. It is substantive for the native diagram guard and **never**
  qualifies for the support-only absent-key rule, including when no Remarks
  happen to be present. Added collar Remarks/TikZ retain their separate exact
  reviews and genuine native flags. No dependency or mathematical claim is
  invented by moving a predeclared reference.
- A literal terminal old `\qed` may become `∎` only on the actual final
  numbered Proof step. The entire preceding step text, including exact support
  tags and mathematics, must be byte-identical; only the marker separator and
  trailing whitespace may differ. This emits a `proof-terminal-qed` delta with
  full step bytes and exact marker/suffix fields, requiring the same individual
  Root delta review. Other macros, nonterminal changes and marker deletion fail.
- Existing extra sections retain their exact bytes. The only new section is
  final Remarks containing an explicit complete `tikz` or `tikzcd` fence. Its
  mathematical exposition requires an actual derived-exposition review. If
  appending it adds separator whitespace after the last existing extra section,
  that exact suffix is a separate delta; all old section bytes stay intact.
  Other new, removed, reordered or rewritten scientific sections are rejected.

The extractor returns `version`, `kind`, `id`, exact raw `source_hashes`,
`verification`, `title`, `technique`, `steps`, `remarks`, `preserved_sections`,
`review_classification`, and `deltas`. Deltas include their location, exact
before/after text and, where relevant, ordered reference index, target or Fact
label. No real item's allowed title spelling or mathematical conclusion is
hardcoded in a source whitelist.

## Explicit V2 reviews

Set `entry.changes` to the exact extractor result. The overall
`entry.scientific_review` must use the extractor's literal classifications:

- `statements`: `identical`, `reference-labels-only`, `separator-only`, or
  `reference-labels-and-separator-only`; for a definition this describes its
  Definition section, identified by `review_classification.interface_section`.
- `facts`: `identical`, `reference-labels-only`, `quotation-only`, or
  `reference-labels-and-quotation-only`.
- `proof`: `unchanged` or `equivalent-presentation`, exactly as extracted.

Also require `hypotheses: identical`, `new_premises: false`,
`new_results: false`, and substantive `reason`/`reading_limits` (at least80
trimmed characters each). Calling a raw changed interface `identical` fails.
These declarations must follow actual scientific reading, not be copied as
proof from a main repair receipt's preservation assertion.

`entry.presentation_reviews` contains exactly one entry for each delta:

```json
{
  "delta_id": "the extractor delta id",
  "delta_sha256": "SHA256 of JSON.stringify(the exact delta)",
  "reason": "Actual scientific justification for this exact change, at least 80 characters.",
  "reading_limits": "Honest scope and limits of the actual reading, at least 80 characters.",
  "evidence": [{"path": "research/RUN-owned-review.json", "sha256": "exact hash"}]
}
```

Every reference-label review additionally binds
`pinned_target: {path: "items/TARGET.md", sha256: "exact immutable pin"}`.
The same published target must belong to the actual imported scope. The review
must explain the displayed label; no automatic label/title synonym test grants
scientific acceptance. The evidence is bound using the existing local research
scope, exact input map and real-file guards. Missing, duplicate, stale or
unrelated reviews fail. Source hashes and `entry.changes` must match exactly.

Definitions without proof-like sections use only the actual authenticated
main non-applicable precheck (`verification.precheck: n/a`) and zero-step layout;
result proofs retain the successful `pass` requirement. The existing main
repair policy validates the real non-applicable JSON and its check timing.
The native adjudication's independent-of-diagram qualification and all existing
consumer guards still apply. V2 supplies no source stamp and cannot turn
unreviewed placeholders into authority.

## Exact opt-in Definition display boundaries

V2 alone may declare `definition_display_layout: {version: 1, display: 0}`.
It is the independent fifth argument of `originalPresentationChanges`, after
support consolidation and reference relocation. `display` is a zero-based
index of raw single-line `$$P$$` spans occupying their own line in the old
Definition section; missing, unused or malformed selections fail. Only
`kind: definition` and its `## Definition` section qualify. This is not a
Statement formatting rule.

The entire new Definition must equal the literal one-span transformation
`\n$$P$$\n` to `\n\n$$\nP\n$$\n\n`. Payload bytes (including punctuation),
all surrounding prose, links and trailing bytes remain exact. Existing
well-definedness/Proof suffix bytes remain exact. Unsafe TeX comments,
verbatim/catcode/macro-definition/input primitives and character rewrites
are conservatively rejected. Actual old math AST ancestry must consist only
of root/paragraph nodes, and the new span must be a standalone root math
node. Canonical wiki spans and hidden Markdown contexts cannot supply math.
Whole-body reference definitions reject. The existing lazy parser and its
403-input live-bound runtime descriptor are reused without changing default
or legacy extraction.

The typed delta is `definition-display-layout`, id `Definition:display:N`,
with exact before/after boundary strings, payload and whole-section hashes,
and truthful old/new AST types and UTF-16 spans. Review classification
`statements: display-layout-only` is required, together with ordinary exact
source hashes, authentic finalized native repair, individual per-delta Root
scientific review/evidence, consumer review and runtime input bindings.
This option grants no diagram-flag exception or source permission and does
not normalize whitespace anywhere else.
