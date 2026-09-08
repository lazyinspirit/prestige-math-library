# Step 8 adjudication — group **e**, run `phase-2-wave-1`

You are the group Alpha for batches **4**, **5**: 2 A/B pair(s), 4 page(s), 26 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/phase-2-wave-1-alpha-e-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-wave-1-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `complex-lp-spaces-and-test-function-conventions` | A | measure-theory | 288.0321 | `the-duality-of-lp-and-lq` |
| 4 | `complex-lp-spaces-and-test-function-conventions-examples` | B | measure-theory | 288.0322 | `complex-lp-spaces-and-test-function-conventions` |
| 5 | `norming-and-separation-under-hahn-banach` | A | functional-analysis | 288.0541 | `the-analytic-hahn-banach-theorem` |
| 5 | `norming-and-separation-under-hahn-banach-examples` | B | functional-analysis | 288.0542 | `norming-and-separation-under-hahn-banach` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `complex-lp-spaces-and-test-function-conventions` — Complex Lp Spaces and Test-Function Conventions (9 item(s))

- `def-complex-lp-and-euclidean-test-function-conventions` · definition — Complex Lp classes and Euclidean test-function conventions
- `thm-complex-holder-minkowski-and-the-quotient-norm` · theorem — Complex Holder, Minkowski, and the quotient norm
- `thm-complex-lp-completeness-and-almost-everywhere-subsequences` · theorem — Complex Lp completeness and almost-everywhere subsequences
- `thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p` · theorem — Complex finite-simple and smooth compact-support density for finite p
- `def-complex-l-two-inner-product` · definition — The complex L2 pairing on equivalence classes
- `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz` · theorem — The complex L2 pairing is well-defined and satisfies Cauchy–Schwarz
- `lem-complex-lp-completeness-density-and-inner-product` · lemma — Complex completeness, density, and inner product: the consumer interface
- `lem-complex-lq-norm-from-finite-simple-dual-tests` · lemma — Complex Lq norm recovery from finite simple dual tests
- `lem-complex-translation-and-approximate-identity-interfaces` · lemma — Complex translation, convolution, approximate identities, and mollification

### `complex-lp-spaces-and-test-function-conventions-examples` — Complex Lp Spaces and Test-Function Conventions: Examples (3 item(s))

- `ex-complex-phase-in-l-q-dual-norming` · example — Conjugate phases norm a three-atom function
- `ex-complex-l-two-pairing-on-two-step-functions` · example — Two-step functions expose the L2 conjugation convention
- `ex-complex-mollification-by-components` · example — Mollification of a complex two-step function

### `norming-and-separation-under-hahn-banach` — Norming and Separation under Hahn–Banach (12 item(s))

- `def-hahn-banach-extension-principle-relative` · definition — The real dominated-extension principle as an additional hypothesis over ZF
- `thm-relative-hahn-banach-dominated-extension` · theorem — Dominated extension conditional on the relative principle
- `thm-relative-hahn-banach-norm-preserving-extension` · theorem — Relative norm-preserving Hahn–Banach extension over the real and complex fields
- `cor-relative-hahn-banach-dual-norming` · corollary — Relative dual norming, point separation, and recovery of the norm
- `lem-relative-bidual-evaluation-is-a-contraction` · lemma — Evaluation defines a bounded scalar-linear map into the bidual
- `cor-relative-hahn-banach-bidual-isometry` · corollary — Relative Hahn–Banach makes the canonical bidual map an isometry
- `def-relative-normed-convexity-and-separation` · definition — Convex sets and continuous real-hyperplane separation in a normed space
- `def-relative-open-convex-gauge` · definition — The finite gauge of an open convex neighbourhood of zero
- `lem-relative-open-convex-gauge-properties` · lemma — The open convex gauge is sublinear and recovers its set
- `lem-relative-hahn-banach-separates-an-open-convex-set-from-a-point` · lemma — Relative separation of an open convex set from an exterior point
- `lem-relative-compact-closed-sets-have-a-positive-distance-gap` · lemma — A compact set and a disjoint closed set have a positive norm-distance gap
- `thm-relative-hahn-banach-geometric-separation` · theorem — Relative geometric Hahn–Banach with the exact open, closed, and compact hypotheses

### `norming-and-separation-under-hahn-banach-examples` — Norming and Separation under Hahn–Banach: Examples (2 item(s))

- `ex-relative-norming-in-a-finite-dimensional-space` · example — An explicit norming functional for the finite-dimensional maximum norm
- `ex-relative-separation-of-a-ball-and-an-exterior-point` · example — Quantitative separation of a norm ball from an exterior point

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

None. No Step-7 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-wave-1-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `phase-2-wave-1`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete any authorized repair and focused
checks, then proceed to the next. Inspect related items first only when necessary.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-wave-1-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-8 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/phase-2-wave-1-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-wave-1-step8-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-wave-1-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/phase-2-wave-1-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
