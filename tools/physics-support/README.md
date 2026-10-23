# Physics support tools

Private copies of the mathematics workflow helpers, rewired for the independent
physics engine. They default to the physics/ workspace; engine dispatches also
pin PHYSICS_REPO. Do not substitute these for the mathematics tools.

New modules:

- physics-content.mjs: class/domain, dependency-role, DAG, evidence-link, page,
  proof, experiment, and empirical-qualification checks.
- physics-check.mjs: the mandatory stage and preplanning gate.
- physics-imports.mjs: import and verify published mathematical snapshots.
- physics-guidance.mjs: embeds the owner's concise mathematical-rigor and statistical-evidence instructions, with EM and double-slit examples, in stateless judge prompts.
- physics-review.mjs: class-specific source-review contracts and judge guidance.

Copied proof, provenance, dependency, planning, and publication tools retain
ordinary mathematical behavior for mathematical items, with explicit physics
extensions. Imported original mathematical repair receipts are verified against
their original source by the unchanged mathematical repair verifier.

These helpers are deliberately separate so physics changes do not alter the
mathematics workflow. See ../../physics/SCHEMA.md and ../../physics/WORKFLOW.md.

`citation-urls.mjs` extracts URLs from decoded data. In coverage mode it excludes
validly dropped sources and diagnostic fields: `historical_*`, `checks`,
`recovery_attempts`, `failed_url_attempts`, and `source_resolution`. Preserved
failed retrieval records do not reactivate old source URLs. Active source and
citation fields remain visible, including dead URLs that still require checking;
noncoverage traversal is unchanged. Collection never edits the coverage history.

`validate-plan.mjs` resolves missing prerequisite declarations only through
authenticated published imports. A snapshot without an `order` field supplies
no numeric reading-order claim; `imported-plan-pages.mjs` preserves that absence
instead of inventing zero. Numeric prerequisite comparisons require known order
at both endpoints. Explicit imported zero, other explicit imported orders and
canonical plan/frontier ordering retain their checks. Unknown-order imports stay
in prerequisite resolution and closure, item/page cycle checks, and supplier
identity, publication, classification and immutable-pin verification. This
changes no import bytes or authored frontier scope.

`original-rendering-maintenance.mjs` is an explicit Root-reviewed original-source
successor route. It preserves every local import byte and pin. It authenticates
the exact main published-repair receipt, equal pinned before archive, current
original, adjudication, recorded checks, and unique current per-item ownership
row / ledger marker block. Root archives those extracted row/block bytes as
immutable evidence; unrelated append-only source repairs do not invalidate them.
It never binds a whole mutable source ledger or ownership log as approval input.

For authored runs the separate authority is
`research/RUN-original-rendering-maintenance.json`, with exact current manifest
and actual consumer-source bindings. For append planning it is
`research/RUN-frontier-append-N/original-rendering-maintenance.json`; the native
command explicitly passes `physics-check.mjs --plan research/plan-spec.json
--pages-file research/RUN-frontier-append-N/new-pages.json --maintenance-run RUN`.
The planning authority binds that exact run/selector, canonical plan and nonempty
selected declarations. An absent consumer is explicitly declaration-only with
`source_sha256: null`; it confers no authored-proof or source-reading coverage.
Planning approval cannot stand in for the stricter authored authority. Standalone
unscoped import checks and the existing Definition-reference maintenance route
retain their original behavior.

In the legacy V1 route, Statements, Facts, premises, dependencies, status and
scientific metadata remain exact. Supported title markup, proof-technique, numbered-step and added final
Remarks differences containing a complete standalone `tikz` or `tikzcd` fence
must be individually enumerated as exact before/after
values, tied to real source repair evidence and genuinely reviewed by Root.
Every substantive numbered-step rewrite needs its own equivalence reason;
there is no generic renderer normalization or automatic acceptance of a stamp.
The route permits only the explicit repair/precheck verification successor, not
new audit/judge claims. Native owner snapshots bind the authority's presence,
all declared evidence and helper code so edits invalidate prior receipts. All
ordinary identity, publication, source, scientific and native gates still apply.

During a guarded append, the exact `research/RUN-step1-blockers.json` native
hold diagnostic may advance without restoring its archived preimage.
`step1-hold-evidence.mjs` shares the writer's serialization and reconstructs the
packet from the historical current-generation gate battery: exact failed gate
results, matching failure block, genuine same-stage owner escalation and native
idle completion report. Later holds reuse the original escalation because the
engine deduplicates owner blocks. The packet timestamp must fall at that battery's
completion (within one second of its last gate and idle report); absent, ambiguous,
truncated or contradictory evidence fails closed. This is a historical diagnostic,
not a recomputation of gates whose cause has since been repaired.

The archived prior packet remains hash-bound. Explicit source/review bindings at
this filename remain immutable. No other research file, source, manifest, native
result, receipt or history gains this allowance. Owner snapshots bind the writer
and reconstruction helper code; all ordinary planning and apply gates still run.
The checker reads native history and never edits the diagnostic, archives or state.

Supplemental native verdict format corrections remain Root-owned sidecars at
`research/RUN-append-N-drift-format-clarification.json`; native reports/results
and applied receipts stay unchanged. Besides the original bare-verdict shape,
a row may explicitly use `format: imported-order-annotation`. Every `added_edges`
entry then records `{target, order: null, reported_order: NUMBER}`. The reported
number must match its exact native verdict annotation; the targets must equal
all actual added edges in the authenticated applied manifest archive. Each target
must resolve through immutable published import authentication, be absent from
the canonical plan, and have no stored order. A known imported numeric order
(including zero) or canonical declaration cannot use this correction.

This shape changes only those numeric annotations to `order unspecified` in the
separately attributed in-memory drift view, retaining the native verdict's
explanation. It does not certify a foreign catalogue number as a physics order.
Existing report/result/receipt/section/archive hash bindings, Root reasons,
current retained edges, import identity/publication/pins, ordinary known-order,
reading-order and buildability checks remain required. Native owner snapshots
already bind the sidecar, helper and authenticated import inputs.

An original successor may add a display label to an unlabeled Fact reference
only with an explicit per-Fact Root review. `changes.fact_reference_labels`
enumerates the exact Fact label, ordered reference index, unchanged target ID,
before/after reference bytes and new label. Surrounding Fact bytes and the full
ordered target sequence remain exact. `scientific_review.facts` must truthfully
be `reference-labels-only` for this case (`identical` otherwise).
`fact_reference_reviews` binds each corresponding Fact/index/target to its
immutable `pinned_target: {path, sha256, title}`, plus substantive Root reason
and reading limits. The added label must equal that exact pinned title after
only removing paired inline `$` delimiters and replacing literal `\ldots` by
`...`; no unescaping, whitespace or other title normalization is permitted.
Existing display labels cannot be rewritten through this route. The pinned
target is an additional bound owner-snapshot input. An unchanged final
`## Sources` section may be preserved; any source-byte delta is rejected.

A separate `changes.terminal_source_heading` records the exact old/new suffix
and final proof-step label for the narrow repair `$\square$ ## Source
qualification` followed by a newline to `∎`, a blank line and the standalone
`## Source qualification` heading. The entire remaining body, including source
qualification text, must be byte-identical. Root must supply the matching
`terminal_source_heading_review: {kind: terminal-source-heading, step_label,
reason, reading_limits}`. This is no general whitespace, end-marker or source
heading normalization. Every existing finalized main repair, adjudication,
recorded check, exact delta, scientific and consumer-review guard still applies.

Original `_category.md` overview prose already uses a bounded classification
projection in `physics-imports.mjs`: every LOCAL category byte remains strictly
pinned, while each relevant CURRENT original source category must exist, retain
the pinned library (default mathematics), and have mathematical domain (default
mathematics). That branch continues before original raw-body hash comparison.
An original category overview rewrite is therefore raw catalogue drift, not an
item-rendering successor or an authority blocker by itself. Item/page originals
and changed local category snapshots retain their ordinary strict checks.
Preparation reports must distinguish projected category prose from original
item byte blockers; do not invent category item-repair receipts or a new waiver.


The opt-in item `presentation_version: 2` route is implemented separately by
[`original-presentation-maintenance.mjs`](original-presentation-maintenance.mjs).
It extracts exact title pairs, target-preserving interface/Fact labels, narrowly
reviewed quotation-marker deletions, protected definitions, preserved extra
sections and derived final TikZ exposition. Every delta needs its own exact
source/evidence-bound scientific review; raw changes cannot be falsely called
literally identical. All legacy source/provenance/scope/consumer guards remain.
See [the V2 protocol](original-presentation-maintenance.md) for the precise
classification and review fields. This changes neither category handling nor
immutable imports, authority or native readiness.

The original-successor wrapper recognizes exactly the authenticated confirmed
finding statuses `repaired` and `repaired-and-visually-verified` as completed
repairs. The latter records the upstream reviewer's visual-review claim; physics
does not infer a fresh visual audit from it. Pending, visual-only, arbitrary or
unconfirmed findings fail. Exact native receipt/adjudication hashes, publication
lineage, ownership, checks, deltas, Root scientific reviews and current consumer
bindings remain required. This changes no legacy presentation extraction rule.
