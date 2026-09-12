# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/phase-2-next-17-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
report the issue without changing it.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 fatal-only creation rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: phase-2-next-17
role: alpha-adjudicate
label: step7-d
covers: 5, 6, 7

# Step 7 adjudication — group **d**, run `phase-2-next-17`

You are the group Alpha for batches **5**, **6**, **7**: 5 A/B pair(s), 10 page(s), 249 item(s), 76 open rejection(s) over 76 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-17-alpha-d-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-17-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 5 | `cup-cap-cross-products-and-cohomology-rings` | A | algebraic-topology | 366.013 | `cw-complexes-and-cellular-homology`, `singular-cohomology-and-coefficient-theorems` |
| 5 | `cup-cap-cross-products-and-cohomology-rings-examples` | B | algebraic-topology | 366.014 | `cup-cap-cross-products-and-cohomology-rings`, `koszul-complexes-and-regular-sequences` |
| 5 | `orientations-poincare-lefschetz-and-alexander-duality` | A | algebraic-topology | 366.015 | `relative-homology-excision-and-mayer-vietoris`, `cup-cap-cross-products-and-cohomology-rings`, `simplicial-subdivision-and-simplicial-approximation`, `the-total-derivative` |
| 5 | `orientations-poincare-lefschetz-and-alexander-duality-examples` | B | algebraic-topology | 366.016 | `orientations-poincare-lefschetz-and-alexander-duality` |
| 6 | `hurewicz-whitehead-freudenthal-and-cw-approximation` | A | algebraic-topology | 366.023 | `relative-homology-excision-and-mayer-vietoris`, `cw-complexes-and-cellular-homology`, `higher-homotopy-groups-and-cofiber-sequences`, `fibrations-fiber-bundles-and-homotopy-exact-sequences` |
| 6 | `hurewicz-whitehead-freudenthal-and-cw-approximation-examples` | B | algebraic-topology | 366.024 | `hurewicz-whitehead-freudenthal-and-cw-approximation` |
| 7 | `the-de-rham-theorem-and-degree` | A | differential-geometry | 475 | `sard-theorem-and-transversality`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `manifolds-with-boundary-collars-and-orientations`, `integration-of-forms-and-the-general-stokes-theorem`, `the-de-rham-complex-homotopy-and-mayer-vietoris`, `singular-cochains-mayer-vietoris-and-smooth-singular-comparison`, `singular-cohomology-and-coefficient-theorems`, `cup-cap-cross-products-and-cohomology-rings`, `orientations-poincare-lefschetz-and-alexander-duality`, `chain-complexes-and-homology`, `chain-homotopy-and-the-homotopy-category`, `long-exact-sequences-in-homology`, `free-modules-and-exact-sequences` |
| 7 | `the-de-rham-theorem-and-degree-examples` | B | differential-geometry | 476 | `the-de-rham-theorem-and-degree` |
| 7 | `geodesics-the-exponential-map-completeness-and-hopf-rinow` | A | differential-geometry | 481 | `euclidean-ordinary-differential-equations-with-smooth-dependence`, `vector-fields-flows-and-lie-derivatives`, `riemannian-metrics-length-distance-and-volume`, `connections-levi-civita-and-parallel-transport`, `compactness`, `completeness-and-uniform-continuity`, `the-winding-number-and-the-global-cauchy-theorem` |
| 7 | `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples` | B | differential-geometry | 482 | `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `the-fundamental-group-of-the-circle` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cup-cap-cross-products-and-cohomology-rings` — Cup Cap Cross Products and Cohomology Rings (21 item(s))

- `def-alexander-whitney-diagonal-approximation` · definition — Alexander--Whitney map and diagonal approximation
- `thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses` · theorem — Alexander--Whitney and shuffle are natural chain-homotopy inverses
- `def-singular-cup-product-on-cochains` · definition — Singular cup product on cochains
- `thm-cup-product-leibniz-identity` · theorem — Cup product Leibniz identity
- `def-singular-cohomology-ring` · definition — Singular cohomology ring
- `prop-cup-product-is-natural-unital-and-associative` · proposition — Cup product is natural, unital and associative
- `lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal` · lemma — Factor reversal gives the commutativity chain homotopy
- `thm-singular-cohomology-is-graded-commutative` · theorem — Singular cohomology is graded commutative
- `def-relative-cup-product` · definition — Relative cup product for an excisive triad
- `prop-relative-cup-products-are-natural-and-compatible-with-connectors` · proposition — Relative cup products are natural and connector-compatible
- `def-cap-product-with-cohomology-first` · definition — Cap product with cohomology written first
- `thm-cap-product-boundary-identity` · theorem — Cap product boundary identity
- `prop-cap-product-naturality-and-projection-formula` · proposition — Cap naturality and projection formula
- `def-relative-cap-product` · definition — Relative cap products with quotient domains displayed
- `lem-relative-singular-product-chain-equivalence-for-cw-pairs` · lemma — Relative singular product comparison for CW pairs
- `lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses` · lemma — Relative cohomological Kunneth under finite free homology hypotheses
- `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism` · theorem — Cohomological Kunneth cross product is a ring isomorphism
- `lem-local-coordinate-cup-products-generate-top-relative-cohomology` · lemma — Local coordinate cup products generate top relative cohomology
- `def-cup-length-over-a-coefficient-ring` · definition — Cup length over a coefficient ring
- `prop-positive-degree-cup-products-on-a-suspension-vanish` · proposition — Positive-degree cup products on a suspension vanish
- `lem-integral-surface-cup-pairing-from-the-oriented-polygon` · lemma — Integral surface cup pairing from the oriented polygon

### `cup-cap-cross-products-and-cohomology-rings-examples` — Cup Cap Cross Products and Cohomology Rings — Examples (8 item(s))

- `ex-integral-cohomology-ring-of-a-torus` · example — Integral cohomology ring of a torus
- `ex-integral-cohomology-ring-of-an-orientable-surface` · example — Integral cohomology ring of a closed orientable surface
- `ex-mod-two-cohomology-ring-of-real-projective-space` · example — Mod-two cohomology ring of real projective space
- `ex-integral-cohomology-ring-of-complex-projective-space` · example — Integral cohomology ring of complex projective space
- `ex-cap-product-on-the-oriented-circle` · example — Cap product on the oriented circle
- `ex-same-additive-cohomology-different-rings-cp-three-and-a-wedge` · example — Equal additive cohomology but different rings
- `cex-the-cup-product-of-arbitrary-abelian-group-valued-cochains-is-not-canonical` · counterexample — An additive coefficient group does not determine a cup multiplication
- `cex-cochain-cup-product-is-not-graded-commutative-on-the-nose` · counterexample — Cochain cup product is not strictly graded commutative

### `orientations-poincare-lefschetz-and-alexander-duality` — Orientations Poincare Lefschetz and Alexander Duality (39 item(s))

- `def-topological-manifold-with-and-without-boundary` · definition — Topological manifolds with and without boundary
- `thm-local-homology-detects-interior-points-boundary-points-and-dimension` · theorem — Local homology detects manifold dimension, interior, and boundary
- `lem-coordinate-ball-classes-identify-local-homology-stalks` · lemma — Coordinate-ball classes identify local homology stalks
- `def-orientation-local-system-and-orientation-cover` · definition — Orientation local system and orientation cover
- `def-r-orientation-of-a-topological-manifold` · definition — R-orientation of a topological manifold
- `prop-every-manifold-is-f-two-orientable-and-orientability-is-componentwise` · proposition — Every manifold is F2-orientable and orientability is componentwise
- `lem-relative-homology-mayer-vietoris-for-closed-supports` · lemma — Relative homology Mayer–Vietoris for closed supports
- `lem-compatible-local-orientation-classes-exist-over-compact-subsets` · lemma — Compatible orientation classes over compact subsets
- `def-fundamental-class-of-a-compact-oriented-manifold` · definition — Fundamental class of a compact oriented manifold
- `thm-top-homology-characterizes-compact-orientable-manifolds` · theorem — Top homology of a connected manifold
- `def-compactly-supported-singular-cohomology-of-a-locally-compact-space` · definition — Compactly supported singular cohomology
- `def-cap-duality-map-for-an-oriented-manifold` · definition — The cap-duality map of an oriented manifold
- `lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls` · lemma — Cap duality on a Euclidean coordinate ball
- `lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder` · lemma — Cap product and the Mayer–Vietoris duality ladder
- `lem-cap-duality-passes-to-increasing-open-unions` · lemma — Cap duality passes to increasing open unions
- `lem-cap-duality-for-open-subsets-of-euclidean-space` · lemma — Cap duality for open subsets of Euclidean space
- `lem-duality-extends-from-two-open-sets-to-finite-unions-of-coordinate-balls` · lemma — Duality extends to finite unions of coordinate balls
- `lem-manifold-exhaustion-passes-local-duality-to-the-colimit` · lemma — A manifold exhaustion passes duality to the colimit
- `thm-poincare-duality-for-oriented-topological-manifolds` · theorem — Poincaré duality for oriented topological manifolds
- `lem-closed-oriented-pid-manifolds-have-finitely-generated-homology` · lemma — Finite generation from cap with a finite fundamental cycle
- `cor-poincare-duality-gives-a-nonsingular-cup-pairing` · corollary — Poincaré duality gives a nonsingular cup pairing
- `def-degree-of-a-map-between-oriented-closed-manifolds` · definition — Degree of a map between oriented closed manifolds
- `prop-manifold-degree-is-functorial-and-detected-by-top-cohomology` · proposition — Manifold degree is functorial and detected in top cohomology
- `thm-topological-collaring-for-manifold-boundaries` · theorem — Topological manifold boundaries admit collars
- `lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class` · lemma — A collar constructs the relative orientation class and its boundary class
- `def-relative-fundamental-class-and-boundary-orientation` · definition — Relative fundamental class and boundary orientation
- `thm-poincare-lefschetz-duality` · theorem — Poincaré–Lefschetz duality
- `thm-fully-relative-poincare-lefschetz-duality` · theorem — Fully relative Poincaré–Lefschetz duality
- `thm-compact-locally-contractible-euclidean-subsets-are-neighborhood-retracts` · theorem — Compact locally contractible Euclidean subsets are neighborhood retracts
- `thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere` · theorem — Alexander duality for compact locally contractible subsets of a sphere
- `thm-jordan-brouwer-separation` · theorem — Jordan–Brouwer separation
- `thm-invariance-of-domain` · theorem — Invariance of domain
- `lem-horn-replacement-block-has-injective-commutator-meridian` · lemma — A horn replacement block has an injective commutator meridian
- `lem-controlled-nested-horn-construction-embeds-a-closed-three-ball` · lemma — A controlled nested horn construction embeds a closed three-ball
- `def-lefschetz-number-of-a-finite-cw-self-map` · definition — Lefschetz number of a finite CW self-map
- `lem-hopf-trace-formula` · lemma — Hopf trace formula
- `thm-simplicial-approximation-after-sufficient-subdivision` · theorem — Simplicial approximation after sufficient subdivision
- `lem-finite-cw-complexes-are-euclidean-neighborhood-retracts` · lemma — Finite CW complexes are Euclidean neighborhood retracts
- `thm-lefschetz-fixed-point-theorem-for-finite-complexes` · theorem — Lefschetz fixed-point theorem for finite complexes

### `orientations-poincare-lefschetz-and-alexander-duality-examples` — Orientations Poincare Lefschetz and Alexander Duality — Examples (10 item(s))

- `ex-fundamental-classes-and-duality-for-spheres-and-tori` · example — Fundamental classes and duality for spheres and tori
- `ex-intersection-pairing-of-a-closed-oriented-surface` · example — Intersection pairing of a closed oriented surface
- `ex-poincare-lefschetz-duality-for-a-disk-and-its-boundary` · example — Poincaré–Lefschetz duality for a disk
- `ex-mod-two-duality-for-real-projective-space` · example — Mod-two duality for real projective space
- `ex-alexander-duality-for-the-standard-equator` · example — Alexander duality for the standard equator
- `ex-lefschetz-number-of-the-identity-is-euler-characteristic` · example — The Lefschetz number of the identity is Euler characteristic
- `cex-a-nonorientable-manifold-has-no-ordinary-integral-fundamental-class` · counterexample — A nonorientable closed manifold has no integral fundamental class
- `cex-ordinary-cohomology-does-not-give-noncompact-poincare-duality` · counterexample — Ordinary cohomology does not give noncompact Poincaré duality
- `cex-an-alexander-horned-sphere-has-complementary-components-that-need-not-be-balls` · counterexample — A horned sphere has complementary components that need not be balls
- `cex-zero-lefschetz-number-does-not-imply-no-fixed-points` · counterexample — Zero Lefschetz number does not imply absence of fixed points

### `hurewicz-whitehead-freudenthal-and-cw-approximation` — Hurewicz Whitehead Freudenthal and Cw Approximation (38 item(s))

- `lem-compact-cw-images-have-finite-cell-support-without-choice` · lemma — Compact CW images have finite cell support without choice
- `lem-a-low-dimensional-disk-can-be-pushed-off-a-higher-cell` · lemma — A low-dimensional disk can be pushed off a higher cell
- `thm-cellular-approximation-for-maps-of-cw-pairs` · theorem — Cellular approximation for maps of CW pairs
- `cor-homotopy-groups-of-a-cw-complex-depend-on-finite-skeleta-in-each-representative` · corollary — Each homotopy representative is supported on a finite CW subcomplex
- `lem-cellular-attachments-with-finite-boundary-support-form-a-cw-complex` · lemma — Cellular attachments with finite boundary support form a CW complex
- `thm-cw-approximation-of-an-arbitrary-space` · theorem — CW approximation of an arbitrary space
- `lem-cubical-pinch-is-additive-on-relative-homology` · lemma — Cubical pinch is additive on relative homology
- `def-hurewicz-homomorphism` · definition — Absolute and relative Hurewicz homomorphisms
- `prop-the-first-hurewicz-map-in-degree-one-is-abelianization` · proposition — The first Hurewicz map is abelianization
- `def-weak-homotopy-equivalence` · definition — Weak homotopy equivalence
- `lem-a-weak-equivalence-of-cw-complexes-has-vanishing-relative-homotopy-groups` · lemma — A weak equivalence has vanishing mapping-cylinder relative groups
- `lem-vanishing-relative-homotopy-extends-a-homotopy-inverse-over-successive-cells` · lemma — Vanishing relative homotopy extends an inverse over cells
- `lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes` · lemma — Cellular mapping cylinders and relative cylinders are CW complexes
- `thm-whitehead-theorem` · theorem — Whitehead theorem
- `cor-a-weakly-contractible-cw-complex-is-contractible` · corollary — A weakly contractible CW complex is contractible
- `def-n-connected-cw-pair` · definition — Connectivity of a CW pair
- `lem-high-relative-cells-do-not-change-lower-homotopy` · lemma — High relative cells do not change lower homotopy
- `lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice` · lemma — Weak homotopy equivalences induce integral homology isomorphisms without choice
- `lem-a-connected-cw-pair-has-a-model-without-low-relative-cells` · lemma — A connected CW pair has a model without low relative cells
- `lem-finite-relative-homotopy-lifting-across-a-weak-equivalence` · lemma — Finite relative homotopy lifting across a weak equivalence
- `lem-weak-equivalences-glue-along-a-common-connected-cw-subcomplex` · lemma — Weak equivalences glue along a common connected CW subcomplex
- `lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy` · lemma — Weak equivalences of pairs induce isomorphisms on relative homotopy
- `lem-homotopy-excision-for-a-single-relative-cell-layer` · lemma — Homotopy excision for a single relative cell layer
- `lem-relative-homotopy-exact-sequence-of-a-triple-in-group-degrees` · lemma — Relative homotopy exact sequence of a triple in group degrees
- `thm-homotopy-excision` · theorem — Homotopy excision
- `lem-cw-quotients-and-collapse-of-a-contractible-subcomplex` · lemma — CW quotients and collapse of a contractible subcomplex
- `lem-relative-homotopy-compares-with-the-cw-quotient-in-the-connectivity-range` · lemma — Relative homotopy compares with the CW quotient in the connectivity range
- `lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis` · lemma — The first homotopy group of a wedge of higher spheres has its cell basis
- `lem-cw-quotient-induces-relative-singular-homology-isomorphisms` · lemma — A CW quotient induces relative singular homology isomorphisms
- `lem-integral-homology-of-a-wedge-of-higher-spheres-has-its-cell-basis` · lemma — Integral homology of a wedge of higher spheres has its cell basis
- `lem-relative-single-cell-layer-has-compatible-homotopy-and-homology-bases` · lemma — A relative single cell layer has compatible homotopy and homology bases
- `lem-cell-attachment-below-the-first-nonzero-homotopy-degree-preserves-the-required-connectivity` · lemma — Cellular reduction for a highly connected pair
- `thm-relative-hurewicz-theorem` · theorem — Relative Hurewicz theorem in the simple-connectivity range
- `lem-relative-hurewicz-comparison-through-a-choice-free-weak-model` · lemma — Relative Hurewicz comparison through a choice-free weak model
- `thm-absolute-hurewicz-theorem` · theorem — Absolute Hurewicz theorem at the first nonzero degree
- `def-double-mapping-cylinder-homotopy-pushout-and-path-space-homotopy-pullback` · definition — Double-mapping-cylinder homotopy pushout and path-space homotopy pullback
- `thm-blakers-massey-connectivity-for-a-homotopy-pushout` · theorem — Blakers--Massey connectivity for a homotopy-pushout square
- `thm-freudenthal-suspension-theorem` · theorem — Freudenthal suspension theorem

### `hurewicz-whitehead-freudenthal-and-cw-approximation-examples` — Hurewicz Whitehead Freudenthal and Cw Approximation — Examples (6 item(s))

- `ex-first-nonzero-homotopy-group-of-a-sphere` · example — First nonzero homotopy group of a sphere
- `ex-hurewicz-calculation-for-a-wedge-of-simply-connected-spheres-in-the-first-degree` · example — Hurewicz calculation for a wedge of simply connected spheres
- `ex-whitehead-recognizes-a-homology-equivalence-between-simply-connected-cw-complexes-under-hurewicz-induction` · example — A simply connected CW homology equivalence is a homotopy equivalence
- `ex-freudenthal-stable-range-for-spheres` · example — Freudenthal stable range for spheres
- `cex-whitehead-theorem-fails-without-cw-type` · counterexample — Whitehead theorem fails without CW type
- `cex-a-homology-equivalence-need-not-be-a-homotopy-equivalence-without-simple-connectivity` · counterexample — A homology equivalence need not be a homotopy equivalence without simple connectivity

### `the-de-rham-theorem-and-degree` — The De Rham Theorem and Degree (52 item(s))

- `def-standard-orientation-of-the-affine-simplex` · definition — Standard orientation of the affine simplex
- `def-integral-of-a-form-over-a-smooth-singular-simplex` · definition — Integral of a form over a smooth singular simplex
- `lem-simplex-integrals-are-independent-of-affine-coordinate-identification` · lemma — Simplex integrals are independent of affine coordinate identification
- `lem-stokes-theorem-for-the-standard-simplex` · lemma — Stokes theorem for the standard simplex
- `thm-stokes-theorem-for-smooth-singular-chains` · theorem — Stokes theorem for smooth singular chains
- `lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary` · lemma — The de Rham complex and pullback extend to manifolds with boundary
- `def-de-rham-integration-cochain-map` · definition — De Rham integration cochain
- `thm-de-rham-integration-is-a-cochain-map` · theorem — De Rham integration is a cochain map
- `thm-the-de-rham-map-on-cohomology-is-well-defined` · theorem — The de Rham map on cohomology is well defined
- `prop-naturality-of-the-de-rham-map` · proposition — Naturality of the de Rham map
- `lem-the-de-rham-homotopy-formula-extends-to-boundary-manifolds` · lemma — The de Rham homotopy formula extends to boundary manifolds
- `lem-the-de-rham-map-is-an-isomorphism-on-convex-coordinate-domains` · lemma — The de Rham map is an isomorphism on convex coordinate domains
- `lem-de-rham-mayer-vietoris-with-boundary-and-an-explicit-partition-lift` · lemma — De Rham Mayer–Vietoris with boundary and an explicit partition lift
- `lem-the-de-rham-and-smooth-singular-mayer-vietoris-diagram-commutes-away-from-connectors` · lemma — The de Rham and smooth singular Mayer–Vietoris diagram commutes away from connectors
- `lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors` · lemma — The de Rham map commutes with Mayer–Vietoris connectors
- `thm-the-de-rham-map-is-an-isomorphism-on-a-two-open-union-when-it-is-on-the-pieces-and-intersection` · theorem — The de Rham map is an isomorphism on a two-open union
- `thm-de-rham-theorem-for-smooth-singular-cohomology` · theorem — De Rham theorem for smooth singular cohomology
- `cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology` · corollary — De Rham vector-space comparison with continuous singular cohomology
- `lem-affine-diagonal-and-front-back-shuffle-have-a-specified-chain-homotopy` · lemma — An affine cone homotopy from the diagonal to the front-back shuffle
- `lem-integration-over-the-signed-shuffle-equals-the-product-of-simplex-integrals` · lemma — Integration over the signed shuffle equals the product of simplex integrals
- `lem-de-rham-integration-respects-wedge-and-cup-in-cohomology` · lemma — De Rham integration respects wedge and cup in cohomology
- `thm-de-rham-theorem` · theorem — The de Rham theorem
- `cor-de-rham-cohomology-depends-only-on-the-underlying-homotopy-type` · corollary — De Rham cohomology depends only on the underlying homotopy type
- `rem-ring-form-of-the-de-rham-theorem-needs-the-singular-cup-product` · remark — The ring form of de Rham’s theorem needs the singular cup product
- `def-compactly-supported-de-rham-cochain-complex-and-cohomology` · definition — Compactly supported de Rham cohomology
- `prop-proper-smooth-maps-pull-back-compactly-supported-forms` · proposition — Proper smooth maps pull back compactly supported forms
- `prop-compactly-supported-de-rham-cohomology-is-contravariant-for-proper-smooth-maps` · proposition — Compactly supported de Rham cohomology is contravariant for proper smooth maps
- `lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes` · lemma — Finite chart localization gives choice-free integration and compact Stokes
- `thm-integration-descends-to-compactly-supported-top-de-rham-cohomology` · theorem — Integration descends to compactly supported top de Rham cohomology
- `lem-zero-integral-compactly-supported-top-forms-on-euclidean-space-have-compactly-supported-primitives` · lemma — Zero-integral compactly supported top forms on Euclidean space have compactly supported primitives
- `lem-compactly-supported-top-cohomology-propagates-across-overlapping-oriented-coordinate-balls` · lemma — Compactly supported top cohomology propagates across overlapping oriented coordinate balls
- `thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology` · theorem — Integration is an isomorphism on top compactly supported de Rham cohomology
- `cor-top-de-rham-cohomology-of-a-closed-connected-oriented-manifold-is-real` · corollary — Top de Rham cohomology of a closed connected oriented manifold is real
- `def-degree-of-a-proper-smooth-map-by-compact-support-cohomology` · definition — Degree of a proper smooth map by compact-support cohomology
- `lem-degree-is-well-defined-and-independent-of-the-normalized-top-form` · lemma — Degree is well defined and independent of the normalized top form
- `def-local-orientation-sign-of-a-regular-preimage` · definition — Local orientation sign of a regular preimage
- `thm-regular-value-formula-for-compact-support-degree` · theorem — Regular-value formula for compact-support degree
- `lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier` · lemma — Smooth orientation sign is the local integral homology multiplier
- `thm-regular-value-formula-for-degree` · theorem — Regular-value formula for degree
- `cor-degree-is-an-integer-and-independent-of-the-regular-value` · corollary — Degree is an integer and independent of the regular value
- `prop-degree-is-multiplicative-under-composition` · proposition — Degree is multiplicative under composition
- `prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism` · proposition — Degree of an orientation-preserving or reversing diffeomorphism
- `thm-degree-is-invariant-under-proper-smooth-homotopy` · theorem — Degree is invariant under proper smooth homotopy
- `cor-a-nonzero-degree-map-to-a-connected-manifold-is-surjective` · corollary — A nonzero-degree map to a connected manifold is surjective
- `prop-degree-of-the-antipodal-map-on-the-sphere` · proposition — Degree of the antipodal map on the sphere
- `prop-degree-of-the-power-map-on-the-circle` · proposition — Degree of the power map on the circle
- `fs-the-de-rham-map-is-a-cochain-map-without-stokes-on-simplices` · false-statement — The de Rham map is a cochain map without Stokes on simplices
- `fs-naturality-alone-implies-that-two-comparison-maps-commute-with-mayer-vietoris-connectors` · false-statement — Naturality alone gives Mayer–Vietoris connector compatibility
- `fs-the-de-rham-theorem-as-built-here-is-an-isomorphism-of-rings` · false-statement — The vector-space de Rham comparison is automatically a ring isomorphism
- `fs-compactly-supported-cohomology-is-contravariant-for-every-smooth-map` · false-statement — Compactly supported cohomology is contravariant for every smooth map
- `fs-the-degree-of-a-proper-map-is-the-number-of-points-in-a-regular-fibre` · false-statement — Degree is the unsigned number of points in a regular fibre
- `fs-a-homotopy-between-proper-maps-is-automatically-a-proper-homotopy` · false-statement — A homotopy between proper maps is automatically proper

### `the-de-rham-theorem-and-degree-examples` — The De Rham Theorem and Degree — Examples (12 item(s))

- `ex-de-rham-integration-cochain-on-a-smooth-path` · example — De Rham integration cochain on a smooth path
- `ex-chain-stokes-on-an-oriented-two-simplex` · example — Chain Stokes on an oriented two-simplex
- `ex-the-de-rham-map-on-the-angular-form` · example — The de Rham map on the angular form
- `ex-the-local-de-rham-comparison-on-a-ball` · example — The local de Rham comparison on a ball
- `ex-connector-compatibility-for-a-two-arc-cover-of-the-circle` · example — Connector compatibility for a two-arc cover of the circle
- `ex-a-normalized-compactly-supported-top-form-on-euclidean-space` · example — A normalized compactly supported top form on Euclidean space
- `ex-degree-of-a-reflection-of-a-sphere` · example — Degree of a reflection of a sphere
- `ex-degree-of-z-to-the-m-on-the-circle-from-a-regular-value` · example — Degree of z to the m on the circle from a regular value
- `ex-a-two-sheeted-orientation-preserving-cover-has-degree-two` · example — A displayed two-sheeted orientation-preserving covering has degree two
- `cex-a-map-with-two-preimages-but-degree-zero` · counterexample — A map with two preimages but degree zero
- `cex-a-proper-endpoint-homotopy-that-is-not-a-proper-combined-map` · counterexample — Proper endpoint maps joined by a nonproper combined homotopy
- `ex-nonzero-degree-forces-surjectivity-on-closed-oriented-manifolds` · example — Nonzero degree forces surjectivity on closed oriented manifolds

### `geodesics-the-exponential-map-completeness-and-hopf-rinow` — Geodesics the Exponential Map Completeness and Hopf Rinow (51 item(s))

- `rem-boundaryless-convention-for-geodesic-flow-and-hopf-rinow` · remark — Boundaryless convention for geodesic flow and Hopf–Rinow
- `def-geodesic-of-an-affine-connection` · definition — Geodesic of an affine connection
- `prop-geodesics-have-constant-speed-for-a-metric-compatible-connection` · proposition — Geodesics have constant speed for a metric-compatible connection
- `prop-coordinate-geodesic-equation` · proposition — Coordinate geodesic equation
- `def-geodesic-spray` · definition — Geodesic spray
- `lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm` · lemma — The geodesic spray is a well-defined smooth vector field on TM
- `thm-existence-uniqueness-and-smooth-dependence-of-geodesics` · theorem — Existence uniqueness and smooth dependence of geodesics
- `prop-affine-reparametrization-of-a-geodesic-is-a-geodesic` · proposition — Affine reparametrization of a geodesic is a geodesic
- `lem-geodesic-scaling-identity` · lemma — Geodesic scaling identity
- `def-geodesically-complete-riemannian-manifold` · definition — Geodesically complete Riemannian manifold
- `def-domain-and-exponential-map-of-a-connection` · definition — Domain and exponential map of a connection
- `thm-the-exponential-domain-is-open-and-the-exponential-map-is-smooth` · theorem — The exponential domain is open and the exponential map is smooth
- `prop-exponential-map-scales-geodesic-time` · proposition — The exponential map scales geodesic time
- `thm-the-differential-of-exp-p-at-zero-is-the-identity` · theorem — The differential of exp at zero is the identity
- `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space` · lemma — Choice-free smooth inverse function theorem in Euclidean space
- `thm-existence-of-normal-neighborhoods` · theorem — Existence of normal neighborhoods
- `def-normal-neighborhood-and-normal-coordinate-chart` · definition — Normal neighborhood and normal coordinate chart
- `prop-properties-of-normal-coordinates-at-the-center` · proposition — Properties of normal coordinates at the center
- `def-injectivity-radius-at-a-point-and-of-a-manifold` · definition — Injectivity radius at a point and of a manifold
- `prop-injectivity-radius-at-each-point-is-positive` · proposition — Injectivity radius at each point is positive
- `def-smooth-variation-and-variation-field-of-a-curve` · definition — Smooth variation and variation field of a curve
- `def-energy-of-a-piecewise-smooth-curve` · definition — Energy of a piecewise smooth curve
- `prop-length-energy-inequality-and-constant-speed-equality-case` · proposition — Length-energy inequality and equality case
- `thm-first-variation-formula-for-energy` · theorem — First variation formula for energy
- `cor-geodesics-are-exactly-critical-points-of-energy-with-fixed-endpoints` · corollary — Geodesics are exactly critical points of energy with fixed endpoints
- `thm-first-variation-formula-for-length` · theorem — First variation formula for length
- `thm-gauss-lemma` · theorem — Gauss lemma
- `cor-polar-form-of-the-metric-in-normal-coordinates` · corollary — Polar form of the metric in normal coordinates
- `thm-radial-geodesics-minimize-length-in-a-normal-neighborhood` · theorem — Radial geodesics minimize length in a normal neighborhood
- `cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood` · corollary — Local distance formula in a normal neighborhood
- `cor-sufficiently-short-geodesic-segments-are-uniquely-minimizing` · corollary — Sufficiently short geodesic segments are uniquely minimizing
- `thm-existence-of-geodesically-convex-neighborhoods` · theorem — Existence of geodesically convex neighborhoods
- `thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization` · theorem — Length minimizers are constant-speed geodesics up to reparametrization
- `lem-geodesics-can-be-continued-while-their-velocity-lifts-remain-in-a-compact-subset` · lemma — Geodesics continue while velocity lifts remain compact
- `lem-a-finite-endpoint-of-a-maximal-unit-speed-geodesic-produces-a-cauchy-curve` · lemma — A finite endpoint of a maximal unit-speed geodesic produces a Cauchy curve
- `thm-metric-completeness-implies-geodesic-completeness` · theorem — Metric completeness implies geodesic completeness
- `lem-radial-geodesics-from-one-point-reach-every-point-under-global-exp-domain` · lemma — Radial geodesics from one point reach every point under global exponential domain
- `thm-hopf-rinow` · theorem — Hopf–Rinow theorem
- `cor-complete-connected-riemannian-manifolds-are-proper-length-spaces` · corollary — Complete connected Riemannian manifolds are proper length spaces
- `cor-compact-riemannian-manifolds-are-geodesically-complete` · corollary — Compact Riemannian manifolds are geodesically complete
- `cor-a-closed-embedded-submanifold-of-a-complete-riemannian-manifold-is-complete-in-the-induced-metric` · corollary — Closed embedded submanifolds of complete Riemannian manifolds are complete
- `lem-local-isometries-send-geodesics-to-geodesics` · lemma — Local isometries send geodesics to geodesics
- `cor-a-local-isometry-from-a-complete-connected-manifold-has-geodesically-complete-target-image` · corollary — A local isometry from a complete connected manifold has geodesically complete target image
- `prop-a-riemannian-product-is-complete-iff-each-factor-is-complete` · proposition — A Riemannian product is complete iff each factor is complete
- `prop-a-connected-riemannian-manifold-is-incomplete-iff-some-unit-speed-geodesic-escapes-every-compact-set-in-finite-time` · proposition — Incompleteness is finite-time geodesic escape
- `fs-every-affinely-reparametrized-geodesic-remains-unit-speed` · false-statement — Every affinely reparametrized geodesic remains unit speed
- `fs-the-exponential-map-is-defined-on-all-of-tm-for-every-riemannian-manifold` · false-statement — The exponential map is always defined on all of TM
- `fs-normal-coordinates-make-the-metric-euclidean-throughout-the-chart` · false-statement — Normal coordinates make the metric Euclidean throughout the chart
- `fs-every-geodesic-segment-is-globally-length-minimizing` · false-statement — Every geodesic segment is globally length minimizing
- `fs-any-two-points-of-a-riemannian-manifold-are-joined-by-a-minimizing-geodesic` · false-statement — Any two points admit a minimizing geodesic
- `fs-geodesic-completeness-means-the-manifold-is-compact` · false-statement — Geodesic completeness means compactness

### `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples` — Geodesics the Exponential Map Completeness and Hopf Rinow — Examples (12 item(s))

- `ex-straight-lines-as-euclidean-geodesics` · example — Straight lines as Euclidean geodesics
- `ex-great-circles-as-round-sphere-geodesics` · example — Great circles as round-sphere geodesics
- `ex-geodesics-of-a-riemannian-product` · example — Geodesics of a Riemannian product
- `ex-geodesics-in-the-poincare-upper-half-plane` · example — Geodesics in the Poincare upper half-plane
- `ex-normal-coordinates-on-the-round-sphere` · example — Normal coordinates on the round sphere
- `ex-the-exponential-map-of-a-flat-torus-is-not-injective` · example — The exponential map of a flat torus is not injective
- `ex-the-punctured-euclidean-plane-is-geodesically-incomplete` · example — The punctured Euclidean plane is geodesically incomplete
- `ex-an-open-unit-ball-with-euclidean-metric-is-metrically-incomplete` · example — An open Euclidean unit ball is metrically incomplete
- `ex-hyperbolic-space-is-complete` · example — Hyperbolic space is complete
- `cex-antipodal-points-on-a-round-sphere-have-many-minimizing-geodesics` · counterexample — Antipodal points on a round sphere have many minimizing geodesics
- `cex-a-complete-manifold-with-zero-global-injectivity-radius` · counterexample — A complete manifold with zero global injectivity radius
- `ex-hopf-rinow-on-a-flat-cylinder` · example — Hopf–Rinow on a flat cylinder

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

4 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-63816b7f7e212a3587cca60a · `ex-integral-cohomology-ring-of-an-orientable-surface`** (from group d, presentation) — The Verification reproduces, step for step (1.1 through 8.1), the entire proof of lem-integral-surface-cup-pairing-from-the-oriented-polygon: same statement, same genus-g polygon, same fan/triangles, same cup recurrence and same signs. As a B-page example of an A-page lemma it adds no illustration of its own and duplicates roughly a thousand words; the two items should be reconciled (example = illustration, lemma = proof) or cross-referenced.
- **s8a-edefeae33420d5b912bcb377 · `thm-relative-hurewicz-theorem`** (from group d, presentation) — This theorem assumes AC, but the same page contains lem-relative-hurewicz-comparison-through-a-choice-free-weak-model, which proves the identical conclusion (H_i(X,A;Z) = 0 for 0 <= i < n and h : pi_n(X,A,a) -> H_n(X,A;Z) an isomorphism for an (n-1)-connected CW pair with A nonempty simply connected, n >= 2) with no choice principle at all; thm-absolute-hurewicz-theorem then inherits the unnecessary AC hypothesis through this item. The AC flag is sound as bookkeeping for the quoted replacement argument but overstates what the group needs; adjudication should decide which statement is canonical and whether the absolute theorem can drop AC.
- **s8a-1e2af29f12f652b180741db1 · `cex-the-cup-product-of-arbitrary-abelian-group-valued-cochains-is-not-canonical`** (from group d, presentation) — Step 1.2 proves the stronger statement that no unital multiplication on Z^2 can be invariant under every additive automorphism, whereas the refuted claim only says a bare abelian group does not determine a unital multiplication without extra data. The load-bearing witness is the explicit pair of unital rings Z x Z and Z[epsilon]/(epsilon^2) on the same additive group in steps 1.1 and 3.1; the invariance argument is extra and its phrase no unital multiplication can be recovered could be misread as denying all canonical constructions, which is not what the counterexample needs.
- **s8a-decb2b1f46aa96f00c90ab0a · `thm-topological-collaring-for-manifold-boundaries`** (from group d, gap-a-reader-closes) — Step 6.2 asserts continuity of the homotopy-extension retraction at the collar limit by prose alone: as v approaches b from below, a(v) = v/(b-v) tends to infinity, uniformly dominating t in [0,1], and the new collar height tends to b, so the formula extends continuously to the outside rule. The necessary uniform estimate (both branches approaching the same limit value, including the piecewise-defined second branch and the r=0 case) is not displayed, so a reader must reconstruct an epsilon computation to certify the stated HEP retraction.

Append one owning-group disposition per warning to `research/phase-2-next-17-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-complete-manifold-with-zero-global-injectivity-radius` | `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples` | gpt-5.6-terra | `616c6918d7429e1a5b5d024e690b0e44779c5f3d27b1f2f430d976659c08f95f` |
| `cex-a-homology-equivalence-need-not-be-a-homotopy-equivalence-without-simple-connectivity` | `hurewicz-whitehead-freudenthal-and-cw-approximation-examples` | gpt-5.6-terra | `c09349432fbafb1177ab1ef81ffc2233a3b77752371d08daf3a2d3b1a4c37cf8` |
| `cex-cochain-cup-product-is-not-graded-commutative-on-the-nose` | `cup-cap-cross-products-and-cohomology-rings-examples` | gpt-5.6-terra | `abc0840ff7260a53bfc2e973023140aa1ec6bdfd92e3ef68d92634ae7c52ad42` |
| `cor-a-nonzero-degree-map-to-a-connected-manifold-is-surjective` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `f6b8059541ba26c3c3f15b146bb7ababeba1aae0054a7a313de76e8f1945bb5e` |
| `cor-de-rham-cohomology-depends-only-on-the-underlying-homotopy-type` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `6d712c33139bd39cb128fb04a168fb40ec3b7a965ee23e73b21920d8e31f5943` |
| `cor-polar-form-of-the-metric-in-normal-coordinates` | `geodesics-the-exponential-map-completeness-and-hopf-rinow` | gpt-5.6-terra | `7c60885225e750bc1705b426cf4aed065abd7f1be5ab771898569935a482f457` |
| `def-degree-of-a-proper-smooth-map-by-compact-support-cohomology` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `06f294e288757bb3e3254c0b952c75508f893d2ef95100b0b06c8c6a6bfc3f60` |
| `def-energy-of-a-piecewise-smooth-curve` | `geodesics-the-exponential-map-completeness-and-hopf-rinow` | gpt-5.6-terra | `db12bb5c6bdddce115b6406cb08d3f7a7bbb3cd615abf72917ab1be50d88b59f` |
| `def-geodesic-spray` | `geodesics-the-exponential-map-completeness-and-hopf-rinow` | gpt-5.6-terra | `f72b209e0a33612b42a8383cad97f129e8ddaf7443de117b349d620f8119b6f0` |
| `def-local-orientation-sign-of-a-regular-preimage` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `1ff60f141fe4df8e26e11bd2a2466bd063ed4deb5878600c220ab65c82d3db40` |
| `def-r-orientation-of-a-topological-manifold` | `orientations-poincare-lefschetz-and-alexander-duality` | gpt-5.6-terra | `a4b331cf9c3f67f9e3bdb2f1c386e78bc8f68a06fefed2d4d203543a62ada49f` |
| `def-relative-cup-product` | `cup-cap-cross-products-and-cohomology-rings` | gpt-5.6-terra | `944239dcf7ee782a448a66c854e2c528c7ad1288ca887e876cf41ef7c185a5de` |
| `def-singular-cup-product-on-cochains` | `cup-cap-cross-products-and-cohomology-rings` | gpt-5.6-terra | `154fca469ab21320f19ed461d0216831c2b2621217f1e3b00e60f53896e5e74b` |
| `def-smooth-variation-and-variation-field-of-a-curve` | `geodesics-the-exponential-map-completeness-and-hopf-rinow` | gpt-5.6-terra | `d93c6bcabf98cf826303868127d9fe7815e83fcd0b38c7a3fdb71fecafc584fa` |
| `ex-a-normalized-compactly-supported-top-form-on-euclidean-space` | `the-de-rham-theorem-and-degree-examples` | gpt-5.6-terra | `995a00adf2d60a722d95398dde52b48a248066ce02ea01c18cbd93f668a384a9` |
| `ex-a-two-sheeted-orientation-preserving-cover-has-degree-two` | `the-de-rham-theorem-and-degree-examples` | gpt-5.6-terra | `d4e26d02315a597e4c7ca92cebd736ce477359e22d85e840179a54be619c74aa` |
| `ex-an-open-unit-ball-with-euclidean-metric-is-metrically-incomplete` | `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples` | gpt-5.6-terra | `28bae1f260f0ff40b73905584bc13357a5397ca9c6ddc9336aee58f429d9e649` |
| `ex-degree-of-z-to-the-m-on-the-circle-from-a-regular-value` | `the-de-rham-theorem-and-degree-examples` | gpt-5.6-terra | `96a8d1ed8a66154fc72819308414780d05c168eacb3339af826439fc51e0605c` |
| `ex-first-nonzero-homotopy-group-of-a-sphere` | `hurewicz-whitehead-freudenthal-and-cw-approximation-examples` | gpt-5.6-terra | `b569fa32f4454ffdd8efc8c16a9951dc1544537b9f9de64d0912413b00d1323b` |
| `ex-fundamental-classes-and-duality-for-spheres-and-tori` | `orientations-poincare-lefschetz-and-alexander-duality-examples` | gpt-5.6-terra | `f8bda45ba0db80bf5024859f3895d34d8a3e011f313093482bb5d5538e8441f9` |
| `ex-geodesics-in-the-poincare-upper-half-plane` | `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples` | gpt-5.6-terra | `fe96b864753fcff50ba80c380f44918591e08080ab5b091f480b4b818f8a40ec` |
| `ex-hyperbolic-space-is-complete` | `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples` | gpt-5.6-terra | `9272a15d48497a3accb29c9978d2e064cb0d7c3a2514df9c3f243ec3a6575492` |
| `ex-integral-cohomology-ring-of-a-torus` | `cup-cap-cross-products-and-cohomology-rings-examples` | gpt-5.6-terra | `f1dfa5977e5b84382a6c08b5b207401aba2a955d4c59950d3fbf40670de6aefd` |
| `ex-integral-cohomology-ring-of-an-orientable-surface` | `cup-cap-cross-products-and-cohomology-rings-examples` | gpt-5.6-terra | `d4f289224a537b016be24d3cc16d8e878dc330155d80a901f758fadda989a32d` |
| `ex-intersection-pairing-of-a-closed-oriented-surface` | `orientations-poincare-lefschetz-and-alexander-duality-examples` | gpt-5.6-terra | `aeee154f98b6bfb2c8d7588438ccb5d8a6afb934a836fe4a8bb4226959d1a4be` |
| `ex-mod-two-cohomology-ring-of-real-projective-space` | `cup-cap-cross-products-and-cohomology-rings-examples` | gpt-5.6-terra | `0c31e39a678a8c6c90f73cf8a8f96f8383ebfc5605dd42366760eb9f1e67ed74` |
| `ex-same-additive-cohomology-different-rings-cp-three-and-a-wedge` | `cup-cap-cross-products-and-cohomology-rings-examples` | gpt-5.6-terra | `269b0ba42889dd2a4220f82211f121ff7d09ebab6f4d3587d1cc5ef08c06e3ab` |
| `ex-the-exponential-map-of-a-flat-torus-is-not-injective` | `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples` | gpt-5.6-terra | `eff2b5b38bac8dafdc165a3d56d6b1a998c9e669f26567707259e104ea46e3aa` |
| `ex-the-local-de-rham-comparison-on-a-ball` | `the-de-rham-theorem-and-degree-examples` | gpt-5.6-terra | `761305ed4afb75bd2170b9056ad5a02495afc69b9eb2fcf3d653b295f6541a98` |
| `ex-the-punctured-euclidean-plane-is-geodesically-incomplete` | `geodesics-the-exponential-map-completeness-and-hopf-rinow-examples` | gpt-5.6-terra | `546159cde8c78f2dddee0da2310256cedad8a9677b0422eac3443d47bd1f49fc` |
| `ex-whitehead-recognizes-a-homology-equivalence-between-simply-connected-cw-complexes-under-hurewicz-induction` | `hurewicz-whitehead-freudenthal-and-cw-approximation-examples` | gpt-5.6-terra | `a5b30412d7a52736ad14671e77c00baf62af47d533881fd05e74631c7659a5ef` |
| `fs-naturality-alone-implies-that-two-comparison-maps-commute-with-mayer-vietoris-connectors` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `e1fdc441440d790a58ddd8b18e31bd29f9c76e6cc47ac9ca59b647959913ad32` |
| `fs-the-de-rham-map-is-a-cochain-map-without-stokes-on-simplices` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `88f23d36f0820666ca8883d55b8def8958d5ad3ef1c9d1548c292574f2d2c826` |
| `lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class` | `orientations-poincare-lefschetz-and-alexander-duality` | gpt-5.6-terra | `f6edbce49e7fb055de00aba4e80e5a3f07a691c74098b1b73785cf1aed7ce43d` |
| `lem-cap-duality-for-open-subsets-of-euclidean-space` | `orientations-poincare-lefschetz-and-alexander-duality` | gpt-5.6-terra | `4aba437a59fa0cdeaed2fdde7e923e28f24bd69e34b980e9070031fa0669c70b` |
| `lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder` | `orientations-poincare-lefschetz-and-alexander-duality` | gpt-5.6-terra | `005c29c0d43117063d4a0a54ece00958fb9a1cfb7417922e1bb9867acfdd0ade` |
| `lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls` | `orientations-poincare-lefschetz-and-alexander-duality` | gpt-5.6-terra | `d31f8f9d6319e524bb5037ea5c2cc9192664f200977c14aca4643232ef9ed808` |
| `lem-cell-attachment-below-the-first-nonzero-homotopy-degree-preserves-the-required-connectivity` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `a02abacbacd83197612b9947c8c767333fd7e358a1caf11acce0851c9a0f2d88` |
| `lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `0cad7268ecb990b12dfe65dc654aca5e559f4b9a1bd6ad74dddb7ffe862642d0` |
| `lem-coordinate-ball-classes-identify-local-homology-stalks` | `orientations-poincare-lefschetz-and-alexander-duality` | gpt-5.6-terra | `2b0785da90f798738f5f3259370f505605be81b6e93855981c1d09b845fa54b1` |
| `lem-cubical-pinch-is-additive-on-relative-homology` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `b9601a6b4c878e550160666f1006f7d4fe8efc648559abb77b429849f395edc3` |
| `lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `6661bcba83ef2972fc325af89f62d86792dd437d21d6529362d6db1c49c1e49c` |
| `lem-finite-relative-homotopy-lifting-across-a-weak-equivalence` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `89f4174081385d8fe852aa34e7641c8a17bd5c05ef21fb481e8173066faad6f4` |
| `lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `c80dba2db46e24ad75f78d0fd744c1344055845aed1d83ae17a77cc4046c016c` |
| `lem-homotopy-excision-for-a-single-relative-cell-layer` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `c459962890c1801bcce90cc42aa386865cced4c143e0bcd23e26c47d36aa40f0` |
| `lem-integral-homology-of-a-wedge-of-higher-spheres-has-its-cell-basis` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `4517c02f8bd944ea97e22c3ea2a0630692fd9569dfc695c28cdb1974cadf7bb0` |
| `lem-integral-surface-cup-pairing-from-the-oriented-polygon` | `cup-cap-cross-products-and-cohomology-rings` | gpt-5.6-terra | `f35d7a3410ec1a542300260b500c8419514c3c4f2bef20cacd90e0cfec3d3147` |
| `lem-integration-over-the-signed-shuffle-equals-the-product-of-simplex-integrals` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `649be85313b3bd076d7bc50b5e0b125dcd9f273a1516f697608d24025cc25de3` |
| `lem-local-coordinate-cup-products-generate-top-relative-cohomology` | `cup-cap-cross-products-and-cohomology-rings` | gpt-5.6-terra | `1a52996abb3d8d5eafeeeac668c6e267687109f5fa5841bf13c1d04aa5758608` |
| `lem-local-isometries-send-geodesics-to-geodesics` | `geodesics-the-exponential-map-completeness-and-hopf-rinow` | gpt-5.6-terra | `7be45794d4ea95ef55262948e0da0aa95eccfc0f99e13bc340f3687ba662fd84` |
| `lem-relative-single-cell-layer-has-compatible-homotopy-and-homology-bases` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `2e832b46af179a322969ee137675a0b07c0ee8e3188e3a7d9172946cc429478e` |
| `lem-simplex-integrals-are-independent-of-affine-coordinate-identification` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `7d67e2d673b2ebf9e85420618586e83b29354a8f51ffcee9acdd1c28d62ff040` |
| `lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `c80dffc78e0834d62e417d1f8bb3de89e42e831ca288e272e0be6ef5f5327dfc` |
| `lem-the-de-rham-map-commutes-with-mayer-vietoris-connectors` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `5ab792b8b23a8a00e1e02748b92385f34e38d050ad13f9ffa24625e2be56e8f8` |
| `lem-the-de-rham-map-is-an-isomorphism-on-convex-coordinate-domains` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `e935e5fa481498f8fc28a874553faf36fdb76a4ed8c134fff505b1d18a5c57e4` |
| `lem-the-geodesic-spray-is-a-well-defined-smooth-vector-field-on-tm` | `geodesics-the-exponential-map-completeness-and-hopf-rinow` | gpt-5.6-terra | `7f10f52a9d5ca6aaec00a5d1dbdb9dcc445bf18ac512467fdf5f1e19eac17729` |
| `lem-vanishing-relative-homotopy-extends-a-homotopy-inverse-over-successive-cells` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `904c9f4ce4daea633ef3aa8d5638b8be248f5d7e75385127c856fa7a40513b1c` |
| `lem-weak-equivalences-glue-along-a-common-connected-cw-subcomplex` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `4263cb00b317b3f05fccea4d3da276e4987098568155e435e2a130083b007e41` |
| `lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `8fbe3682d07a01b3829ed8dfbd30e7c89161a7deae33a17b30d6c71595882acd` |
| `prop-affine-reparametrization-of-a-geodesic-is-a-geodesic` | `geodesics-the-exponential-map-completeness-and-hopf-rinow` | gpt-5.6-terra | `cad72a475476376ea7d8c16a8230574c92a76bfa2959b3515a42f672221add5c` |
| `prop-cap-product-naturality-and-projection-formula` | `cup-cap-cross-products-and-cohomology-rings` | gpt-5.6-terra | `6841a3322dbcec3e2cf9f6580924cbb212d77795391192fec0f436b3a986d694` |
| `prop-the-first-hurewicz-map-in-degree-one-is-abelianization` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `78616d59be802b65382f29bd93928d1d8ed833cbd0cfcc6e21063edda0e791cf` |
| `thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization` | `geodesics-the-exponential-map-completeness-and-hopf-rinow` | gpt-5.6-terra | `3df617781e5d434e374ef0d94c6fb998de51f4c58735006858b8e381645fbba3` |
| `thm-absolute-hurewicz-theorem` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `4b41b8ac61d052ed81df07905cc97d134555d8ff7443c9f0b3d1928072a8efc6` |
| `thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere` | `orientations-poincare-lefschetz-and-alexander-duality` | gpt-5.6-terra | `3919690a631b16f163a88ba8fdf7df3dd7cc907643c5da53f5febd9ed7a4766d` |
| `thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses` | `cup-cap-cross-products-and-cohomology-rings` | gpt-5.6-terra | `6384937f0a3d1b254bf2fbe16bd878e2e98918afb9ae9ac132a14cf02f3d66f7` |
| `thm-cellular-approximation-for-maps-of-cw-pairs` | `hurewicz-whitehead-freudenthal-and-cw-approximation` | gpt-5.6-terra | `84d3080534fc2f7096203f2bdf3d595a7114f4f1b22b4e590b8759bb04bc5b45` |
| `thm-fully-relative-poincare-lefschetz-duality` | `orientations-poincare-lefschetz-and-alexander-duality` | gpt-5.6-terra | `001ca073b4de3df92b7cf9fbfa84779c50944fccf170f96f5607942844bfa990` |
| `thm-integration-is-an-isomorphism-on-top-compactly-supported-de-rham-cohomology` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `0cccf0ed3b4f9a074ff6449328957392e31d82e52c902438c926f1ec0d164fe3` |
| `thm-jordan-brouwer-separation` | `orientations-poincare-lefschetz-and-alexander-duality` | gpt-5.6-terra | `c37214f81bc832b17f55d78d2b881690e38b60abf348dd9045619e53b7ac0933` |
| `thm-poincare-duality-for-oriented-topological-manifolds` | `orientations-poincare-lefschetz-and-alexander-duality` | gpt-5.6-terra | `318519d7cea6dc41f8fec2e3210ef95166e36eaadaded82ac5c0c8dab86204b7` |
| `thm-poincare-lefschetz-duality` | `orientations-poincare-lefschetz-and-alexander-duality` | gpt-5.6-terra | `2a1937d5ccc7a8379396567c1be23f7524943a289b56fba89e48e6933085f556` |
| `thm-stokes-theorem-for-smooth-singular-chains` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `153135429e77dd1a275c5029e86edfbaa9d2dad73f103c5f4e7107c5cf75e51e` |
| `thm-the-de-rham-map-is-an-isomorphism-on-a-two-open-union-when-it-is-on-the-pieces-and-intersection` | `the-de-rham-theorem-and-degree` | gpt-5.6-terra | `cf0740bc2a38448949c61d06d504ad97ec15d6c257d0c046caea1c2f03db461f` |
| `thm-top-homology-characterizes-compact-orientable-manifolds` | `orientations-poincare-lefschetz-and-alexander-duality` | gpt-5.6-terra | `33c7cbc478e81a3fed2bb80bcc1d431fa1f55d6cc2d091d6cabfa4648159e37d` |
| `thm-topological-collaring-for-manifold-boundaries` | `orientations-poincare-lefschetz-and-alexander-duality` | gpt-5.6-terra | `f4f361811b5992236fa4773af578f07ebad335c14fdf8e1453e2ee872954d07a` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-17`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-next-17-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

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
decision in `research/phase-2-next-17-step7-alert-decisions.jsonl`. Use `not_defect` or
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
`research/phase-2-next-17-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-17-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-17-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
