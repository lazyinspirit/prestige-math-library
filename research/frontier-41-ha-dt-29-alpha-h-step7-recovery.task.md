# Step 7 adjudication — group **h**, run `frontier-41-ha-dt-29`

You are the group Alpha for batches **3**, **7**, **15**: 3 A/B pair(s), 6 page(s), 83 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-41-ha-dt-29-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 3 | `handle-cancellation-slides-and-elementary-moves` | A | differential-topology | 533 | `sublevel-deformation-and-the-handle-attachment-theorem`, `handle-decompositions-duality-and-rearrangement`, `oriented-and-mod-two-intersection-numbers`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `vector-fields-flows-and-lie-derivatives`, `manifolds-with-boundary-collars-and-orientations`, `fundamental-solutions-newtonian-potentials-and-green-functions`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `hurewicz-whitehead-freudenthal-and-cw-approximation` |
| 3 | `handle-cancellation-slides-and-elementary-moves-examples` | B | differential-topology | 534 | `handle-cancellation-slides-and-elementary-moves` |
| 7 | `vector-field-index-euler-characteristic-and-poincare-hopf` | A | differential-topology | 541 | `morse-critical-points-hessians-and-indices`, `morse-inequalities-and-the-handle-chain-complex`, `oriented-and-mod-two-intersection-numbers`, `intersection-pairings-self-intersection-and-euler-classes`, `vector-fields-flows-and-lie-derivatives`, `manifolds-with-boundary-collars-and-orientations`, `the-de-rham-theorem-and-degree`, `singular-chains-and-singular-homology`, `cw-complexes-and-cellular-homology`, `orientations-poincare-lefschetz-and-alexander-duality`, `obstruction-theory-postnikov-towers-and-classifying-spaces`, `chern-weil-theory-and-characteristic-forms` |
| 7 | `vector-field-index-euler-characteristic-and-poincare-hopf-examples` | B | differential-topology | 542 | `vector-field-index-euler-characteristic-and-poincare-hopf` |
| 15 | `the-smooth-h-cobordism-theorem` | A | differential-topology | 561 | `handle-decompositions-duality-and-rearrangement`, `handle-cancellation-slides-and-elementary-moves`, `morse-inequalities-and-the-handle-chain-complex`, `oriented-and-mod-two-intersection-numbers`, `smooth-surgery-traces-and-handle-trading`, `the-whitney-trick-and-surgery-below-the-middle-dimension`, `relative-homology-excision-and-mayer-vietoris`, `cw-complexes-and-cellular-homology`, `orientations-poincare-lefschetz-and-alexander-duality`, `higher-homotopy-groups-and-cofiber-sequences`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `the-fundamental-group` |
| 15 | `the-smooth-h-cobordism-theorem-examples` | B | differential-topology | 562 | `the-smooth-h-cobordism-theorem`, `pontryagin-thom-and-framed-cobordism` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `handle-cancellation-slides-and-elementary-moves` — Handle Cancellation Slides and Elementary Moves (19 item(s))

- `def-geometric-cancelling-handle-pair` · definition — Geometrically cancelling adjacent handle pair
- `lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type` · lemma — Isotopic attaching embeddings give diffeomorphic handle attachments
- `lem-transverse-complementary-spheres-have-product-charts` · lemma — Transverse submanifolds have product charts
- `lem-standard-complementary-pair-fills-an-n-ball` · lemma — The standard complementary pair fills a ball
- `lem-one-intersection-gives-the-standard-local-cancelling-model` · lemma — One transverse intersection gives the standard local cancelling model
- `thm-handle-cancellation` · theorem — Handle cancellation
- `thm-creation-of-a-cancelling-handle-pair` · theorem — Creation of a cancelling handle pair
- `lem-embedded-bands-joining-two-framed-spheres-exist` · lemma — Embedded bands joining two framed spheres exist
- `def-handle-slide-of-one-k-handle-over-another` · definition — Handle slide of one k-handle over another
- `lem-handle-slides-preserve-the-relative-diffeomorphism-type` · lemma — Handle slides preserve the relative diffeomorphism type
- `lem-handle-slides-act-by-elementary-basis-change-on-handle-chains` · lemma — Handle slides act by elementary basis change on handle chains
- `def-attaching-belt-intersection-matrix-of-adjacent-index-handles` · definition — Attaching-belt intersection matrix of adjacent-index handles
- `lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix` · lemma — Geometric cancellation is a unit entry in the handle matrix
- `prop-elementary-matrix-operations-are-realized-by-handle-slides` · proposition — Elementary matrix operations are realized by handle slides
- `lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation` · lemma — Algebraic cancellation does not yet give geometric cancellation
- `prop-morse-cancellation-criterion-via-a-unique-connecting-orbit` · proposition — Morse cancellation criterion via a unique connecting orbit
- `lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood` · lemma — The cancellation modification is supported in a trajectory neighbourhood
- `rem-handle-slides-are-not-handle-cancellations` · remark — Handle slides are not handle cancellations
- `rem-elementary-moves-do-not-constitute-full-cerf-theory-here` · remark — Elementary moves do not constitute full Cerf theory here

### `handle-cancellation-slides-and-elementary-moves-examples` — Handle Cancellation Slides and Elementary Moves — Examples (5 item(s))

- `ex-cancelling-zero-one-handle-pair` · example — A cancelling zero-one handle pair
- `ex-cancelling-one-two-handle-pair-on-a-surface` · example — A cancelling one-two handle pair on a surface
- `ex-a-handle-slide-realizes-an-elementary-row-operation` · example — A handle slide realizes an elementary row operation
- `cex-algebraic-intersection-one-with-three-geometric-points` · counterexample — Algebraic intersection one with three geometric points
- `cex-adjacent-index-handles-with-zero-intersection-do-not-cancel` · counterexample — Adjacent-index handles with zero intersection do not cancel

### `vector-field-index-euler-characteristic-and-poincare-hopf` — Vector Field Index Euler Characteristic and Poincare Hopf (27 item(s))

- `def-euler-characteristic-of-a-compact-manifold` · definition — Euler characteristic of a compact manifold
- `prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions` · proposition — Finiteness and additivity of the Euler characteristic
- `def-reduced-degree-into-the-zero-sphere` · definition — The reduced degree of a map into the 0-sphere
- `lem-reduced-degree-into-the-zero-sphere-is-homotopy-invariant-and-multiplicative` · lemma — Reduced degree into the 0-sphere is homotopy invariant and multiplicative
- `def-isolated-zero-and-local-index-of-a-vector-field` · definition — Isolated zero and local index of a vector field
- `lem-vector-field-index-is-independent-of-chart-ball-and-trivialization` · lemma — The local index is independent of chart, ball and trivialization
- `def-nondegenerate-zero-of-a-vector-field` · definition — Nondegenerate zero of a vector field
- `thm-index-of-a-nondegenerate-vector-field-zero` · theorem — The index of a nondegenerate vector-field zero
- `lem-local-index-is-additive-under-a-transverse-perturbation` · lemma — The local index is additive under a transverse perturbation
- `prop-vector-field-zero-index-is-a-zero-section-intersection-number` · proposition — The index of a zero is its zero-section intersection number
- `lem-negation-scales-the-local-index-by-minus-one-to-the-dimension` · lemma — Negation scales the local index by $(-1)^n$
- `lem-index-sum-of-an-outward-field-is-the-gauss-degree` · lemma — The index sum of an outward field is the Gauss degree
- `thm-poincare-hopf-for-closed-manifolds` · theorem — Poincare-Hopf for closed manifolds
- `cor-nowhere-zero-vector-field-forces-zero-euler-characteristic` · corollary — A nowhere-zero vector field forces zero Euler characteristic
- `cor-morse-gradient-zero-contributes-minus-one-to-the-index-power-lambda` · corollary — A Morse gradient zero contributes $(-1)^\lambda$ to the index
- `cor-morse-critical-point-sum-is-the-euler-characteristic` · corollary — The Morse critical-point sum is the Euler characteristic
- `cor-closed-odd-dimensional-manifolds-have-zero-euler-characteristic` · corollary — Closed odd-dimensional manifolds have zero Euler characteristic
- `lem-degree-zero-unit-vector-field-on-a-sphere-extends-over-the-ball` · lemma — A degree-zero sphere map extends over the ball without zeros
- `lem-two-points-avoiding-a-finite-set-lie-in-a-common-embedded-ball` · lemma — Two points avoiding a finite set lie in a common embedded ball
- `lem-opposite-index-nondegenerate-zeros-cancel-in-a-ball` · lemma — Opposite-index nondegenerate zeros cancel in a ball
- `lem-reflection-of-an-outward-field-extends-over-the-double` · lemma — The reflection of an outward field extends over the double
- `lem-index-sum-of-an-outward-field-on-an-even-dimensional-manifold` · lemma — The index sum of an outward field on an even-dimensional manifold
- `thm-poincare-hopf-with-outward-pointing-boundary` · theorem — Poincare-Hopf with outward-pointing boundary
- `cor-euler-number-of-the-tangent-bundle-is-the-euler-characteristic` · corollary — The Euler number of the tangent bundle is the Euler characteristic
- `thm-converse-poincare-hopf-for-nowhere-zero-fields` · theorem — Converse Poincare-Hopf for nowhere-zero fields
- `lem-closed-connected-one-manifolds-are-circles` · lemma — Nonempty closed connected 1-manifolds are circles
- `rem-the-outward-boundary-hypothesis-cannot-be-replaced-by-nonzero-on-the-boundary` · remark — The outward boundary hypothesis cannot be replaced by nonzero on the boundary

### `vector-field-index-euler-characteristic-and-poincare-hopf-examples` — Vector Field Index Euler Characteristic and Poincare Hopf — Examples (6 item(s))

- `ex-hairy-ball-theorem-for-even-spheres` · example — The hairy-ball theorem for even spheres
- `ex-a-nowhere-zero-vector-field-on-an-odd-sphere` · example — A nowhere-zero vector field on an odd sphere
- `ex-source-sink-and-saddle-indices-on-a-surface` · example — Source, sink and saddle indices on a surface
- `ex-outward-radial-field-on-a-disk` · example — The outward radial field on a disk
- `cex-an-inward-radial-field-violates-the-outward-boundary-formula` · counterexample — An inward radial field violates the outward boundary formula
- `cex-an-interval-has-nonzero-euler-characteristic-despite-being-odd-dimensional` · counterexample — An interval has nonzero Euler characteristic despite being odd-dimensional

### `the-smooth-h-cobordism-theorem` — The Smooth H Cobordism Theorem (21 item(s))

- `def-h-cobordism` · definition — h-Cobordism
- `lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends` · lemma — Relative homology of an h-cobordism vanishes at both ends
- `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions` · proposition — h-Cobordisms admit adapted ordered handle decompositions
- `prop-relative-handle-chain-complex-of-a-cobordism` · proposition — The relative handle chain complex computes $H_*(W,M_0)$ and has the intersection matrix as its differential
- `lem-handle-elimination-by-trading-a-pair` · lemma — Elimination lemma: trading a handle for a handle two indices higher
- `lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism` · lemma — Zero- and one-handles are eliminated in a simply connected h-cobordism
- `lem-duality-eliminates-top-and-cotop-handles` · lemma — Duality eliminates the top and codimension-one handles
- `lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group` · lemma — Belt-sphere complements in low handle levels preserve the fundamental group
- `lem-homology-lemma-realizes-handle-bases-by-isotopy` · lemma — Homology lemma: a handle-basis class is realized by a sphere meeting the belt sphere once
- `lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation` · lemma — Modification lemma: prescribed class changes by isotopy of an embedded boundary sphere
- `lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices` · lemma — Trading concentrates a simply connected h-cobordism in two adjacent middle indices
- `def-middle-handle-intersection-matrix-of-an-h-cobordism` · definition — The middle-handle intersection matrix of an h-cobordism
- `lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular` · lemma — Acyclicity makes the simply connected middle-handle matrix unimodular
- `lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity` · lemma — Handle slides reduce a unimodular middle-handle matrix to the identity
- `lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically` · lemma — The Whitney trick realizes algebraic middle-handle cancellation geometrically
- `lem-middle-handle-pairs-with-one-geometric-intersection-cancel` · lemma — Middle-handle pairs with one geometric intersection cancel
- `thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary` · theorem — A cobordism with no handles is a product
- `thm-smooth-simply-connected-h-cobordism-theorem` · theorem — The smooth simply connected h-cobordism theorem
- `cor-high-dimensional-simply-connected-h-cobordant-manifolds-are-diffeomorphic` · corollary — High-dimensional simply connected h-cobordant manifolds are diffeomorphic
- `cor-high-dimensional-smooth-poincare-for-homotopy-spheres-bounding-a-contractible-manifold` · corollary — Homotopy spheres of dimension at least five bounding a contractible manifold are standard spheres
- `rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four` · remark — The h-cobordism theorem does not cover boundary dimension four

### `the-smooth-h-cobordism-theorem-examples` — The Smooth H Cobordism Theorem — Examples (5 item(s))

- `ex-a-product-cobordism-is-an-h-cobordism` · example — A product cobordism is an h-cobordism
- `ex-an-elementary-cancelling-handle-pair-gives-a-product-cobordism` · example — An elementary cancelling handle pair gives a product cobordism
- `cex-a-homology-cobordism-need-not-be-an-h-cobordism` · counterexample — A homology cobordism need not be an h-cobordism
- `cex-a-four-dimensional-boundary-case-is-outside-the-smooth-h-cobordism-theorem` · counterexample — A four-dimensional boundary case is outside the smooth h-cobordism theorem
- `ex-the-handle-matrix-of-a-simple-acyclic-presentation` · example — The handle matrix of a simple acyclic presentation

## Your seams

Your pages depend on another group's:

- `handle-cancellation-slides-and-elementary-moves` requires `handle-decompositions-duality-and-rearrangement` (group f, batch 1)
- `vector-field-index-euler-characteristic-and-poincare-hopf` requires `morse-inequalities-and-the-handle-chain-complex` (group f, batch 4)
- `vector-field-index-euler-characteristic-and-poincare-hopf` requires `intersection-pairings-self-intersection-and-euler-classes` (group d, batch 2)
- `the-smooth-h-cobordism-theorem` requires `handle-decompositions-duality-and-rearrangement` (group f, batch 1)
- `the-smooth-h-cobordism-theorem` requires `morse-inequalities-and-the-handle-chain-complex` (group f, batch 4)
- `the-smooth-h-cobordism-theorem` requires `smooth-surgery-traces-and-handle-trading` (group f, batch 13)
- `the-smooth-h-cobordism-theorem` requires `the-whitney-trick-and-surgery-below-the-middle-dimension` (group j, batch 14)
- `the-smooth-h-cobordism-theorem-examples` requires `pontryagin-thom-and-framed-cobordism` (group i, batch 9)

Another group's pages depend on yours:

- `exotic-smooth-structures-and-milnor-spheres` (group d) requires your `the-smooth-h-cobordism-theorem`
- `exotic-smooth-structures-and-milnor-spheres` (group d) requires your `vector-field-index-euler-characteristic-and-poincare-hopf`
- `fixed-point-index-and-the-lefschetz-theorem` (group e) requires your `vector-field-index-euler-characteristic-and-poincare-hopf`
- `morse-inequalities-and-the-handle-chain-complex` (group f) requires your `handle-cancellation-slides-and-elementary-moves`
- `smooth-surgery-traces-and-handle-trading` (group f) requires your `handle-cancellation-slides-and-elementary-moves`
- `whitehead-torsion-and-the-s-cobordism-theorem` (group i) requires your `the-smooth-h-cobordism-theorem`
- `the-whitney-trick-and-surgery-below-the-middle-dimension` (group j) requires your `handle-cancellation-slides-and-elementary-moves`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-41-ha-dt-29-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-41-ha-dt-29`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
