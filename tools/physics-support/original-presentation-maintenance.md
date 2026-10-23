# Opt-in V2 original item presentation protocol

`originalPresentationChanges(beforeBytes, afterBytes)` describes exact structural
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
