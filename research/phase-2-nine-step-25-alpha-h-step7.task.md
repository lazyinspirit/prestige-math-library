# Step 7 adjudication — group **h**, run `phase-2-nine-step-25`

You are the group Alpha for batches **17**: 1 A/B pair(s), 2 page(s), 25 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-nine-step-25-alpha-h-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-nine-step-25-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 17 | `asymptotic-cones-and-the-sublinear-triangle-criterion` | A | group-theory | 302.00405 | `compactness`, `filters-and-ultrafilters`, `cayley-graphs-word-metrics-and-quasi-isometry`, `small-cancellation-and-dehn-algorithms`, `free-groups-and-presentations` |
| 17 | `asymptotic-cones-and-the-sublinear-triangle-criterion-examples` | B | group-theory | 302.0041 | `asymptotic-cones-and-the-sublinear-triangle-criterion` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `asymptotic-cones-and-the-sublinear-triangle-criterion` — Asymptotic Cones and the Sublinear Triangle Criterion (22 item(s))

- `def-rescaled-ultralimit-and-asymptotic-cone` · definition — Rescaled ultralimits and asymptotic cones
- `lem-bounded-real-ultralimits-and-free-tail-extension` · lemma — Free tail ultrafilters and bounded real ultralimit calculus
- `lem-rescaled-ultradistance-is-a-quotient-metric` · lemma — The rescaled ultradistance defines a metric
- `def-geodesic-rays-and-lines` · definition — Oriented geodesic rays, lines, parameters and tails
- `lem-geodesic-segments-have-isometric-ultralimits` · lemma — Limits of geodesic segments, rays and lines
- `def-real-tree-tripods-and-geodesic-triangle-minsize` · definition — Real trees, tripod triangles, slimness and minsize
- `lem-triangle-extrema-and-real-tree-tripod-rules` · lemma — Triangle extrema and the tripod and branch rules for real trees
- `lem-tree-cones-give-uniform-two-side-control` · lemma — Tree cones force uniform control of sides with a common endpoint
- `thm-all-asymptotic-cones-are-trees-implies-uniform-slimness` · theorem — Tree cones at all basepoints and scales imply uniform slimness
- `lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic` · lemma — Sublinear minsize identifies every cone segment with a limit segment
- `thm-sublinear-triangle-minsize-implies-hyperbolicity` · theorem — Sublinear triangle minsize implies hyperbolicity
- `def-bounded-edge-coarse-triangular-filling` · definition — Bounded-edge coarse fillings of loops and triangles
- `def-singular-planar-labelled-relator-diagram` · definition — Singular planar labelled relator diagrams and their outer walks
- `lem-finite-polygonal-disk-and-collar-surgery` · lemma — Finite polygonal disk parametrizations and boundary surgery
- `lem-relator-expressions-give-controlled-singular-planar-diagrams` · lemma — Relator expressions admit singular planar diagrams with controlled incidence
- `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings` · lemma — Controlled coarse triangulation of singular planar diagrams
- `lem-relator-disks-give-area-controlled-coarse-fillings` · lemma — Algebraic relator area controls coarse filling area
- `lem-polygonal-boundary-crossing-for-affine-disk-maps` · lemma — Polygonal boundary crossing forces coverage by affine triangles
- `lem-coarse-triangle-minsize-is-bounded-by-square-root-area` · lemma — Coarse triangle minsize is bounded by square root of area
- `thm-linear-relator-area-implies-slim-geodesic-triangles` · theorem — Linear algebraic relator area implies slim Cayley triangles
- `lem-point-wedges-preserve-a-common-triangle-minsize-bound` · lemma — Point wedges preserve common triangle minsize bounds
- `lem-uniform-filling-data-give-a-uniform-slimness-bound` · lemma — Filling constants give a uniform slimness bound

### `asymptotic-cones-and-the-sublinear-triangle-criterion-examples` — Asymptotic Cones and the Sublinear Triangle Criterion: Examples (3 item(s))

- `ex-asymptotic-cones-of-lines-and-trees` · example — Cones of a line and of real trees
- `ex-euclidean-triangle-has-positive-linear-minsize` · example — A Euclidean right triangle has minsize proportional to its scale
- `ex-scaling-distinguishes-sublinear-minsize-from-bounded-perimeter` · example — Scaling distinguishes sublinear minsize from a fixed perimeter cutoff

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-nine-step-25-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-nine-step-25`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete any authorized repair and focused
checks, then immediately finish its engine-managed handoff:

`node tools/autopilot/bin/complete-step7-item.mjs --run phase-2-nine-step-25 --id ITEM --group GROUP`

Replace ITEM and GROUP with the exact owned IDs. Await the command before
editing another item or shared group file. It checks the repair, runs the one
Terra rejudge, and immediately dispatches Astra/medium final adjudication on a
rejection. Other groups continue independently. Do not make another Sol repair
after the rejudge. A preflight-only contract or ledger failure may be corrected
locally within the existing repair licence, then handed off again; no judge
budget was spent. For a model failure or unresolved mathematics, preserve the
evidence and report the blocker; never buy another judge call.
Unchanged false-positive/nonfatal items need no
handoff. Inspect related items first only when necessary.

On resuming an interrupted group, read its report and existing exact decisions;
do not repeat them. First send previously repaired owned items through this
handoff if their paid rejudge/terminal resolution is still owed. Hand off new
dependency lemmas before repaired consumers. The whole-run closure gates remain
mandatory after all groups finish; do not wait for them to complete an item.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-nine-step-25-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set through the immediate item handoff.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-nine-step-25-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
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
`research/phase-2-nine-step-25-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-nine-step-25-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-nine-step-25-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
