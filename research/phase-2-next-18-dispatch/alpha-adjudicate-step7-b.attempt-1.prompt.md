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
group work, `research/phase-2-next-18-alpha-groups.json` is the assignment: it permits at
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

run: phase-2-next-18
role: alpha-adjudicate
label: step7-b
covers: 3, 4

# Step 7 adjudication — group **b**, run `phase-2-next-18`

You are the group Alpha for batches **3**, **4**: 4 A/B pair(s), 8 page(s), 118 item(s), 63 open rejection(s) over 63 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-18-alpha-b-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-18-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 3 | `the-serre-spectral-sequence-and-applications` | A | algebraic-topology | 366.027 | `singular-cohomology-and-coefficient-theorems`, `cup-cap-cross-products-and-cohomology-rings`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `obstruction-theory-postnikov-towers-and-classifying-spaces`, `local-coefficients-twisted-homology-and-duality`, `spectral-sequences`, `double-complexes-exact-couples-and-convergence` |
| 3 | `the-serre-spectral-sequence-and-applications-examples` | B | algebraic-topology | 366.028 | `the-serre-spectral-sequence-and-applications` |
| 3 | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | A | algebraic-topology | 366.035 | `cup-cap-cross-products-and-cohomology-rings`, `orientations-poincare-lefschetz-and-alexander-duality`, `the-serre-spectral-sequence-and-applications`, `topological-vector-bundles-and-grassmannian-classification` |
| 3 | `leray-hirsch-thom-isomorphism-and-gysin-sequences-examples` | B | algebraic-topology | 366.036 | `leray-hirsch-thom-isomorphism-and-gysin-sequences` |
| 4 | `topological-vector-bundles-and-grassmannian-classification` | A | algebraic-topology | 366.029 | `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `obstruction-theory-postnikov-towers-and-classifying-spaces`, `partitions-of-unity-and-paracompactness` |
| 4 | `topological-vector-bundles-and-grassmannian-classification-examples` | B | algebraic-topology | 366.03 | `topological-vector-bundles-and-grassmannian-classification` |
| 4 | `complex-topological-k-theory-and-bott-periodicity` | A | algebraic-topology | 366.031 | `cup-cap-cross-products-and-cohomology-rings`, `topological-vector-bundles-and-grassmannian-classification`, `spectra-and-stable-homotopy-groups`, `simply-connected-plane-domains` |
| 4 | `complex-topological-k-theory-and-bott-periodicity-examples` | B | algebraic-topology | 366.032 | `complex-topological-k-theory-and-bott-periodicity` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-serre-spectral-sequence-and-applications` — The Serre Spectral Sequence and Applications (25 item(s))

- `lem-serre-fibration-replacement-preserves-fiber-homology-transport` · lemma — Serre-fibration replacement preserves fiber homology transport
- `def-fiber-homology-local-system-of-a-serre-fibration` · definition — Fiber homology local system of a Serre fibration
- `lem-fiber-transport-makes-homology-into-a-functor-on-the-base-fundamental-groupoid` · lemma — Fiber transport is functorial on the base fundamental groupoid
- `def-serre-filtration-of-the-total-space-over-base-skeleta` · definition — Serre filtration over the base skeleta
- `lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology` · lemma — Relative homology over one base cell is shifted fiber homology
- `lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients` · lemma — The first Serre differential is the cellular boundary with local coefficients
- `thm-homological-serre-spectral-sequence` · theorem — Homological Serre spectral sequence
- `thm-naturality-of-the-homological-serre-spectral-sequence` · theorem — Naturality of the homological Serre spectral sequence
- `def-serre-edge-homomorphisms-and-transgression` · definition — Serre edge homomorphisms and transgression
- `prop-serre-edge-maps-are-induced-by-projection-and-fiber-inclusion` · proposition — Serre edge maps come from projection and fiber inclusion
- `prop-serre-transgression-agrees-with-the-relative-connecting-construction` · proposition — Serre transgression agrees with the relative connecting construction
- `thm-cohomological-serre-spectral-sequence` · theorem — Cohomological Serre spectral sequence
- `lem-multiplicative-filtered-cochains-induce-products-on-all-spectral-sequence-pages` · lemma — Multiplicative filtered cochains induce products on every spectral-sequence page
- `thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence` · theorem — Multiplicative cohomological Serre spectral sequence
- `prop-degree-and-parity-criteria-for-serre-collapse` · proposition — Degree and parity criteria for Serre collapse
- `thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence` · theorem — Gysin sequence from a sphere-fiber Serre spectral sequence
- `thm-wang-sequence-for-a-fibration-over-the-circle` · theorem — Wang sequence for a fibration over the circle
- `def-serre-class-ring-ideal-and-mod-c-morphism` · definition — Serre classes, Serre rings, ideals, and modulo-C morphisms
- `lem-serre-classes-are-stable-under-finite-filtrations` · lemma — Serre classes are stable under finite filtrations
- `thm-first-quadrant-spectral-sequence-transfer-modulo-a-serre-class` · theorem — First-quadrant spectral-sequence transfer modulo a Serre class
- `thm-serre-class-fibration-transfer` · theorem — Serre-class transfer through a simply connected fibration
- `cor-serre-finite-generation-torsion-and-p-primary-transfer` · corollary — Finite-generation, torsion, and p-primary Serre transfer
- `thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber` · theorem — PID finite-generation transfer for simply connected base and fiber
- `lem-circle-and-path-loop-models-for-eilenberg-maclane-induction` · lemma — Circle and path-loop models for Eilenberg–Mac Lane induction
- `thm-rational-cohomology-of-eilenberg-maclane-spaces-in-one-generator` · theorem — Rational cohomology of Eilenberg–Mac Lane spaces in one generator

### `the-serre-spectral-sequence-and-applications-examples` — The Serre Spectral Sequence and Applications — Examples (7 item(s))

- `ex-path-loop-serre-computation-of-cp-infinity` · example — Path-loop Serre computation of CP infinity
- `ex-serre-spectral-sequence-of-the-complex-hopf-fibration` · example — Serre spectral sequence of the complex Hopf fibration
- `ex-serre-spectral-sequence-of-the-quaternionic-hopf-fibration` · example — Serre spectral sequence of the quaternionic Hopf fibration
- `ex-homology-of-the-loop-space-of-an-odd-sphere` · example — Homology of the loop space of an odd sphere
- `ex-wang-sequence-of-a-mapping-torus` · example — Wang sequence of a mapping torus
- `cex-serre-page-collapse-does-not-split-the-abutment` · counterexample — A stable Serre diagonal need not split its abutment
- `cex-ignoring-monodromy-gives-the-wrong-serre-e-two-page` · counterexample — Ignoring monodromy gives the wrong Serre E2 page

### `leray-hirsch-thom-isomorphism-and-gysin-sequences` — Leray Hirsch Thom Isomorphism and Gysin Sequences (20 item(s))

- `lem-global-fiber-basis-trivializes-serre-monodromy` · lemma — A global fiber basis trivializes Serre monodromy
- `lem-leray-hirsch-isomorphism-on-associated-graded-modules-lifts-without-extension-ambiguity` · lemma — The Leray–Hirsch associated-graded isomorphism lifts without extension ambiguity
- `thm-leray-hirsch-module-isomorphism` · theorem — Leray–Hirsch module isomorphism
- `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle` · definition — Disk, sphere, and Thom spaces of a metric vector bundle
- `prop-thom-space-of-zero-and-trivial-bundles` · proposition — Thom spaces of zero and trivial bundles
- `lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring` · lemma — Disk-pair cohomology over an arbitrary commutative ring
- `def-r-oriented-vector-bundle-and-orientation-local-system` · definition — R-oriented vector bundle and orientation local system
- `def-thom-class-by-fiberwise-normalization` · definition — Thom class by fiberwise normalization
- `thm-thom-isomorphism-for-a-trivial-oriented-bundle` · theorem — Thom isomorphism for a trivial oriented bundle
- `lem-thom-isomorphisms-glue-over-two-trivializing-opens` · lemma — Thom isomorphisms glue over two trivializing opens
- `lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover` · lemma — Thom isomorphism extends over a finite numerable trivializing cover
- `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence` · lemma — General Thom isomorphism from the relative Serre spectral sequence
- `thm-thom-isomorphism-for-oriented-vector-bundles` · theorem — Thom isomorphism for oriented vector bundles
- `thm-naturality-and-uniqueness-of-thom-classes` · theorem — Naturality and uniqueness of Thom classes
- `thm-external-product-and-whitney-sum-formulas-for-thom-classes` · theorem — External-product and Whitney-sum formulas for Thom classes
- `def-thom-diagonal-and-zero-section-collapse` · definition — Thom diagonal and zero-section collapse
- `def-thom-euler-class-of-an-oriented-vector-bundle` · definition — Thom-defined Euler class of an oriented vector bundle
- `def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section` · definition — Gysin pushforward for an oriented zero section
- `thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle` · theorem — Gysin long exact sequence of an oriented sphere bundle
- `prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition` · proposition — Thom and Gysin constructions respect pullback and composition

### `leray-hirsch-thom-isomorphism-and-gysin-sequences-examples` — Leray Hirsch Thom Isomorphism and Gysin Sequences — Examples (6 item(s))

- `ex-leray-hirsch-for-a-trivial-product-bundle` · example — Leray–Hirsch for a trivial product bundle
- `ex-thom-space-of-a-trivial-line-and-plane-bundle` · example — Thom spaces of trivial line and plane bundles
- `ex-mod-two-thom-class-of-the-mobius-line-bundle` · example — Mod-two Thom class of the Möbius line bundle
- `ex-thom-isomorphism-for-the-tautological-complex-line-over-cp-infinity` · example — Thom isomorphism for the tautological complex line over CP infinity
- `cex-leray-hirsch-fails-without-a-global-restricting-fiber-basis` · counterexample — Leray–Hirsch fails without a global restricting fiber basis
- `cex-an-unoriented-real-bundle-has-no-integral-thom-class` · counterexample — An unoriented real bundle has no integral Thom class

### `topological-vector-bundles-and-grassmannian-classification` — Topological Vector Bundles and Grassmannian Classification (26 item(s))

- `def-real-and-complex-topological-vector-bundle` · definition — Real and complex topological vector bundles
- `lem-ac-supplies-dependent-choice-for-vector-bundle-constructions` · lemma — AC supplies the dependent-choice instances used in vector-bundle constructions
- `thm-vector-bundles-glued-from-transition-cocycles` · theorem — Vector bundles are glued from transition cocycles
- `def-vector-bundle-map-section-subbundle-and-isomorphism` · definition — Bundle maps, sections, subbundles, and isomorphisms
- `def-pullback-vector-bundle-and-pullback-section` · definition — Pullback vector bundles and sections
- `prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism` · proposition — Vector-bundle pullback is canonically functorial
- `def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles` · definition — Whitney sum, tensor, dual, Hom, and exterior-power bundles
- `thm-numerable-vector-bundles-admit-bundle-metrics` · theorem — Numerable vector bundles admit bundle metrics
- `cor-short-exact-sequences-of-vector-bundles-split-over-the-base` · corollary — Short exact sequences of numerable vector bundles split
- `thm-finite-rank-complement-theorem-over-compact-hausdorff-bases` · theorem — Finite-rank complement theorem over compact Hausdorff bases
- `thm-homotopy-invariance-of-vector-bundle-pullback` · theorem — Homotopy invariance of vector-bundle pullback
- `def-frame-bundle-and-associated-vector-bundle` · definition — Frame bundles and associated vector bundles
- `def-oriented-real-vector-bundle-and-oriented-frame-bundle` · definition — Oriented real bundles and oriented frame bundles
- `prop-orientation-is-equivalent-to-an-so-n-reduction` · proposition — Orientation is equivalent to an SO(n)-reduction
- `def-stiefel-space-grassmannian-and-tautological-bundle` · definition — Stiefel spaces, Grassmannians, and tautological bundles
- `def-oriented-grassmannian-and-tautological-oriented-bundle` · definition — Oriented Grassmannians and the universal oriented bundle
- `thm-stable-stiefel-space-is-contractible` · theorem — The stable Stiefel space is contractible
- `lem-a-bundle-embedding-produces-its-grassmannian-classifying-map` · lemma — A bundle embedding produces its Grassmannian classifying map
- `lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely` · lemma — Homotopic Grassmannian maps classify isomorphic bundles and conversely
- `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians` · theorem — Numerable vector bundles are classified by stable Grassmannians
- `thm-oriented-real-vector-bundles-are-classified-by-bso` · theorem — Oriented real vector bundles are classified by BSO(n)
- `def-schubert-cells-in-real-and-complex-grassmannians` · definition — Schubert cells in real and complex Grassmannians
- `thm-schubert-cells-give-the-stable-grassmannian-cw-structure` · theorem — Schubert cells give the stable Grassmannian CW structure
- `def-clutching-construction-for-bundles-over-a-suspension` · definition — Clutching construction for bundles over a suspension
- `thm-clutching-classifies-vector-bundles-over-spheres-in-the-stable-range` · theorem — Clutching classifies vector bundles over spheres in the stable range
- `thm-oriented-clutching-classifies-oriented-bundles-over-spheres` · theorem — Oriented clutching classifies oriented bundles over spheres

### `topological-vector-bundles-and-grassmannian-classification-examples` — Topological Vector Bundles and Grassmannian Classification — Examples (8 item(s))

- `ex-mobius-and-trivial-real-lines-over-the-circle` · example — The Möbius and trivial real lines over the circle
- `ex-tautological-real-and-complex-lines-over-projective-space` · example — Tautological lines over projective spaces
- `ex-hopf-line-bundle-over-the-two-sphere-by-clutching` · example — The Hopf line bundle over S² by clutching
- `ex-all-complex-vector-bundles-over-the-circle-are-trivial` · example — All complex vector bundles over the circle are trivial
- `ex-rank-zero-and-empty-base-vector-bundle-classification` · example — Rank-zero and empty-base vector-bundle classification
- `ex-oriented-two-plane-bundles-over-s-two-by-winding-number` · example — Oriented two-plane bundles over the two-sphere by winding number
- `cex-the-tautological-line-over-rp-infinity-has-no-finite-rank-complement` · counterexample — The tautological line over RP∞ has no finite-rank complement
- `cex-vector-bundle-classification-without-numerability-can-fail` · counterexample — Vector-bundle classification can fail without numerability

### `complex-topological-k-theory-and-bott-periodicity` — Complex Topological K Theory and Bott Periodicity (20 item(s))

- `def-whitney-sum-monoid-of-complex-vector-bundles` · definition — The Whitney-sum monoid of complex vector bundles
- `def-complex-topological-k-zero-by-grothendieck-completion` · definition — Complex topological K⁰ by Grothendieck completion
- `prop-equality-in-k-zero-is-stable-isomorphism-over-compact-bases` · proposition — Equality in K⁰ is stable isomorphism over compact bases
- `def-grothendieck-ring-structure-and-rank-map` · definition — Grothendieck ring structure and rank map
- `def-reduced-complex-k-theory` · definition — Reduced complex K-theory
- `prop-k-zero-is-contravariantly-functorial-and-homotopy-invariant` · proposition — K⁰ is contravariantly functorial and homotopy invariant
- `thm-reduced-k-theory-exact-sequence-of-a-cofibration` · theorem — Reduced K-theory exact sequence of a cofibration
- `def-external-product-in-complex-k-theory` · definition — External product in complex K-theory
- `lem-determinant-classifies-loops-in-complex-general-linear-groups` · lemma — Determinant classifies loops in complex general linear groups
- `thm-hopf-line-calculation-of-k-zero-of-the-two-sphere` · theorem — Hopf-line calculation of K⁰(S²)
- `lem-normalized-clutching-data-for-bundles-over-x-times-s-two` · lemma — Normalized clutching data for bundles over X×S²
- `lem-uniform-laurent-approximation-through-bundle-automorphisms` · lemma — Uniform Laurent approximation through bundle automorphisms
- `lem-negative-laurent-powers-are-cleared-by-hopf-line-stabilization` · lemma — Negative Laurent powers are cleared by Hopf-line stabilization
- `lem-polynomial-clutching-families-stabilize-to-linear-clutching` · lemma — Polynomial clutching families stabilize to linear clutching
- `lem-linear-clutching-splits-into-eigenbundles` · lemma — Linear clutching splits into spectral subbundles
- `thm-fundamental-product-theorem-for-complex-k-theory` · theorem — Fundamental product theorem for complex K-theory
- `def-negative-degree-complex-k-groups` · definition — Negative-degree complex K-groups
- `thm-complex-bott-periodicity` · theorem — Complex Bott periodicity
- `cor-complex-k-theory-of-spheres` · corollary — Complex K-theory of spheres
- `thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory` · theorem — Complex K-theory is a two-periodic generalized cohomology theory

### `complex-topological-k-theory-and-bott-periodicity-examples` — Complex Topological K Theory and Bott Periodicity — Examples (6 item(s))

- `ex-k-theory-of-a-point-and-the-empty-space` · example — K-theory of a point and the empty space
- `ex-complex-k-ring-of-the-two-sphere` · example — The complex K-ring of S²
- `ex-complex-k-theory-of-even-and-odd-spheres` · example — Complex K-theory of even and odd spheres
- `ex-complex-k-ring-of-complex-projective-space` · example — The complex K-ring of CPⁿ
- `ex-rank-map-on-a-disconnected-compact-space` · example — The rank map on a disconnected compact space
- `cex-stable-isomorphism-does-not-imply-actual-bundle-isomorphism` · counterexample — Stable isomorphism does not imply actual bundle isomorphism

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

6 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-c74ca510e75aa03527230e01 · `lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely`** (from group b, gap-a-reader-closes) — Forward direction (step 1.1) applies homotopy invariance of pullback to E = gamma_n over Gr_n(F^infinity), but the cited theorem requires the target bundle to be numerable; numerability of the tautological stable bundle is not established in this item (it is only derived in step 1.1 of thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians, which is a consumer of this lemma, so that derivation cannot be used here). A competent reader closes it with the graph-chart cover plus paracompactness of the stable Grassmannian.
- **s8a-116f40d4dbae98d222dbbbef · `thm-fundamental-product-theorem-for-complex-k-theory`** (from group b, gap-a-reader-closes) — Step 7.1 (well-definedness of nu under normalized presentation, Laurent shift, Mobius parameter and pairing homotopy) invokes homotopy invariance [F7] on the family of inside/outside subbundles over X x I, and step 2.1/7.1 reuse the block-linearization and spectral splitting with a continuously varying parameter. Numerability of those parameterized subbundles (needed to instantiate [F7]) and continuity of the splitting in the parameter are not verified in the text; the remaining computation otherwise follows Hatcher's pp. 41-51 checks.
- **s8a-8e574d232952a7395daddb4b · `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence`** (from group b, gap-a-reader-closes) — Step 1.1 runs the Serre exact-couple construction on the relative cochain complex C^*(D(xi),S(xi);R) and asserts 'the identical exact-couple argument' with fiber term H^q(D^n,S^{n-1};R) and 'the same convergence bounds', but no relative Serre spectral sequence is stated as a theorem in the library; a reader must recheck that subdivision, cellular approximation and lifting preserve the sphere-bundle subcomplex and that strong convergence applies to the quotient filtration. The same obligation recurs in step 1.2 of thm-serre-class-fibration-transfer for the pair (E,F).
- **s8a-0a87b4c6599c54b1d7c9e016 · `def-serre-class-ring-ideal-and-mod-c-morphism`** (from group b, presentation) — Source-notes link is malformed: the prose URL is 'https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf' (a slash after 18-906), which does not resolve and does not match the item's own frontmatter URL '18-906-algebraic-topology-ii-spring-2020'. Mathematical content is unaffected.
- **s8a-52968b1a8ecc659e371d0542 · `thm-serre-class-fibration-transfer`** (from group b, presentation) — The AC bookkeeping is stronger than the cited source: [A1]/[F4] justify AC by 'the library's AC-dependent PID universal-coefficient theorem', but the published item thm-universal-coefficient-theorem-for-homology-over-a-pid carries no AC hypothesis (its only hypothesis is freeness of the chain complex). Assuming AC is harmless, but the stated justification is not faithful to the cited statement, and the same attribution is repeated in cor-serre-finite-generation-torsion-and-p-primary-transfer.
- **s8a-2fb650474940ce310130c207 · `cex-vector-bundle-classification-without-numerability-can-fail`** (from group b, gap-a-reader-closes) — The counterexample rests on the smooth long line being nonmetrizable and on a differentiable structure with locally trivial tangent bundle, cited to Nyikos; the item's own argument only shows that numerability of TL would produce a metric inducing the manifold topology. Because the source was not opened by this read (external PDF), the two cited facts should be re-verified against the source by the owning group.

Append one owning-group disposition per warning to `research/phase-2-next-18-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-an-unoriented-real-bundle-has-no-integral-thom-class` | `leray-hirsch-thom-isomorphism-and-gysin-sequences-examples` | gpt-5.6-terra | `cabaea510889b630150046c97f883dd2bb13620c00eb95fc8b757b53fb8adfc0` |
| `cex-serre-page-collapse-does-not-split-the-abutment` | `the-serre-spectral-sequence-and-applications-examples` | gpt-5.6-terra | `74a57fd5f9debeaa29b8d690eb8809ca918d638c4e71f24f54e2140d97435ce4` |
| `cex-the-tautological-line-over-rp-infinity-has-no-finite-rank-complement` | `topological-vector-bundles-and-grassmannian-classification-examples` | gpt-5.6-terra | `a43aaa989ebbf83031756cd1d9647921b1f33893eed0eb118889b84c106a97e2` |
| `cor-serre-finite-generation-torsion-and-p-primary-transfer` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `6d1a6e5199364509de8590a0cdba375fcf6401c13b60555d7b9493139ebadc67` |
| `def-clutching-construction-for-bundles-over-a-suspension` | `topological-vector-bundles-and-grassmannian-classification` | gpt-5.6-terra | `94708e83b34b151e7ec8804d01d7b738021bf4c76e6795887a91e92ab1525d5c` |
| `def-external-product-in-complex-k-theory` | `complex-topological-k-theory-and-bott-periodicity` | gpt-5.6-terra | `29885f7d983b79ca86bc430be1f070cd02f3877736540bcbc7f4227dc3dce0c3` |
| `def-fiber-homology-local-system-of-a-serre-fibration` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `387b104f1ea584be6dc2b39241509e23e8f2a79c940af048014632ac9ba50909` |
| `def-frame-bundle-and-associated-vector-bundle` | `topological-vector-bundles-and-grassmannian-classification` | gpt-5.6-terra | `7e3bc4464069661fe71596007800bf69506bb1337c72a9f121bc7f39fe1a4504` |
| `def-grothendieck-ring-structure-and-rank-map` | `complex-topological-k-theory-and-bott-periodicity` | gpt-5.6-terra | `b2579b5272059daea40339a59d6dacd97da96d5b269cc6a053ceb3e15bdc15ea` |
| `def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `b79dfe03e77372a74feba1dbae56c0f6de9e3d1f2d5e4b6ecb860ce467f0234f` |
| `def-negative-degree-complex-k-groups` | `complex-topological-k-theory-and-bott-periodicity` | gpt-5.6-terra | `9be415336d10c99488b08fefde1d653c644cc39eec6c969c4c4560561b4cdeee` |
| `def-pullback-vector-bundle-and-pullback-section` | `topological-vector-bundles-and-grassmannian-classification` | gpt-5.6-terra | `84bc9e085e42855c79c93c072b60899962585495508e1e8e05042376b7eb1bf5` |
| `def-real-and-complex-topological-vector-bundle` | `topological-vector-bundles-and-grassmannian-classification` | gpt-5.6-terra | `5e19dc01186e13b188cad9f701fd80c533a5b5c153371f80f0f3c5cc5d525886` |
| `def-thom-diagonal-and-zero-section-collapse` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `421f14bc50efa6de9de7df48e10b812b3b35915f9e2eed485a0028a174c8ce22` |
| `def-whitney-sum-monoid-of-complex-vector-bundles` | `complex-topological-k-theory-and-bott-periodicity` | gpt-5.6-terra | `69c5ffbd74ef0050a578828ea550360be207372ebcab06136fd00dde2a952277` |
| `ex-complex-k-ring-of-complex-projective-space` | `complex-topological-k-theory-and-bott-periodicity-examples` | gpt-5.6-terra | `73f0817dd76317835bdb80038014dfc5736b13903e48382e997f09f0420efbea` |
| `ex-k-theory-of-a-point-and-the-empty-space` | `complex-topological-k-theory-and-bott-periodicity-examples` | gpt-5.6-terra | `a1861165a0992fb87f337a979a86d94b79b074d31ff1db6c7c95e45b551b91a5` |
| `ex-rank-map-on-a-disconnected-compact-space` | `complex-topological-k-theory-and-bott-periodicity-examples` | gpt-5.6-terra | `647614a021668f9f6dd4a39f6cb8d4e2000ef1ace19467fa29f920f739caca3a` |
| `ex-serre-spectral-sequence-of-the-complex-hopf-fibration` | `the-serre-spectral-sequence-and-applications-examples` | gpt-5.6-terra | `18a644a6aa4ea56e8300afc4bf52c405adda579c4e1053459ea67927b031007d` |
| `ex-tautological-real-and-complex-lines-over-projective-space` | `topological-vector-bundles-and-grassmannian-classification-examples` | gpt-5.6-terra | `0f48b18ebc5e1d68dadd874a1dc318af3e030d0bed103e27ba0cebe9f971e3d1` |
| `ex-thom-space-of-a-trivial-line-and-plane-bundle` | `leray-hirsch-thom-isomorphism-and-gysin-sequences-examples` | gpt-5.6-terra | `26e38de991aa2d4f2eb476acf3bbe9b0050e19b3fe974b3e3eb5f8386c62b7f8` |
| `lem-a-bundle-embedding-produces-its-grassmannian-classifying-map` | `topological-vector-bundles-and-grassmannian-classification` | gpt-5.6-terra | `5bad907e7112bcd16de1403b8591ab18ed2da56e179e8380ecc9334bf2e65ef4` |
| `lem-circle-and-path-loop-models-for-eilenberg-maclane-induction` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `8f0ae084653600f24fafceb96d336eaf412aa5993cf0f6a756d55b39a8e55ac3` |
| `lem-determinant-classifies-loops-in-complex-general-linear-groups` | `complex-topological-k-theory-and-bott-periodicity` | gpt-5.6-terra | `4931bc623df30e9797d843ea8efb3af4e3ca8c29e041f1387e05881725ee4394` |
| `lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `d7d6f74d1d7d34487c6f2b5fcc76fa4a1039ca709ca547f77a216bae1f5a1e30` |
| `lem-global-fiber-basis-trivializes-serre-monodromy` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `cda2518bddd252252ee00319873617ebba2dc1ade25a1651069e3dbe912c13d9` |
| `lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely` | `topological-vector-bundles-and-grassmannian-classification` | gpt-5.6-terra | `83b627726af99a2d866a00d94d55ecff3e2cd5049e5f605fa69f1372cc5e5279` |
| `lem-leray-hirsch-isomorphism-on-associated-graded-modules-lifts-without-extension-ambiguity` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `6523e2ddacbf7b81db9a6a8ec007756046b4532185b156ec1091e6887b31090e` |
| `lem-multiplicative-filtered-cochains-induce-products-on-all-spectral-sequence-pages` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `72ea72218221bcada63a7016c083f1a4b7d66851c68d5071276deb91adff5c1c` |
| `lem-negative-laurent-powers-are-cleared-by-hopf-line-stabilization` | `complex-topological-k-theory-and-bott-periodicity` | gpt-5.6-terra | `91df53a029cc868d16f44ac85b118966eb2c2bb31ac3aff38718ca4dacb892c3` |
| `lem-normalized-clutching-data-for-bundles-over-x-times-s-two` | `complex-topological-k-theory-and-bott-periodicity` | gpt-5.6-terra | `03e0a8f193233dc9882b84d46c941dc0a411a8b5a66af8feb37fb7456afe644f` |
| `lem-polynomial-clutching-families-stabilize-to-linear-clutching` | `complex-topological-k-theory-and-bott-periodicity` | gpt-5.6-terra | `684808a4073719896019ef6b74c63980b0d614632846205fe677e6a6de4e3d97` |
| `lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `873e3e9d043fb5c1dc0424e35cc36b36e64314e98afbb8bd43721f6d580b6ad8` |
| `lem-serre-fibration-replacement-preserves-fiber-homology-transport` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `71ffd7001d7017857d5bffffd9e7bb24944f9cec982fdcf3624726e6bca58aa5` |
| `lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `7c9fc32aca5ed6d398196677a2cd100bf9580b736e0f19d33394e73440b12716` |
| `lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `6a9fcb936359c5fced9ef85d7625254d1a7609b0d72474846b2b7e5f91129f1f` |
| `lem-thom-isomorphisms-glue-over-two-trivializing-opens` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `78f6ad869a75421ee5e5a98ea57e7e3e54ea043f15f430eaa3ed4d832cd4fd39` |
| `prop-degree-and-parity-criteria-for-serre-collapse` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `03eaa4c7ce065dc5012bcda8d617a454fc4b7e0053e091f1e32025ace6c19cb0` |
| `prop-orientation-is-equivalent-to-an-so-n-reduction` | `topological-vector-bundles-and-grassmannian-classification` | gpt-5.6-terra | `e7e925e1688126ba1eece99947ef9c64840279422751c501d3331d9cd6390900` |
| `prop-serre-transgression-agrees-with-the-relative-connecting-construction` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `41ed1a8e7fbf5f1438c324aa8a1b6b634bd85433e1fe7e25d5145d8f3d165221` |
| `prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `f5670dd7cf7926008dc3e991baa31771d22a421aec34f17deecce112fc3bd1c3` |
| `thm-cohomological-serre-spectral-sequence` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `ab78ac0ad909a26461b4befa67b4b4888da39d653f44db830d657f8f7a73ae4c` |
| `thm-complex-bott-periodicity` | `complex-topological-k-theory-and-bott-periodicity` | gpt-5.6-terra | `6dddac492e34e25c495c70c46bbabe382be13747e5963b63bd0f2e2fa2b05e38` |
| `thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory` | `complex-topological-k-theory-and-bott-periodicity` | gpt-5.6-terra | `e8e651257c8e7c04e02531df340a2cfb47da98a5173e12db18d47529e38befbc` |
| `thm-external-product-and-whitney-sum-formulas-for-thom-classes` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `183b1744737121efbf122f8675b1e6b725fa271b3de0875d7069d1b2447b0ca3` |
| `thm-finite-rank-complement-theorem-over-compact-hausdorff-bases` | `topological-vector-bundles-and-grassmannian-classification` | gpt-5.6-terra | `b49133b94c65933ce90c659bd4758d73e18273dbffe93a31d7ad51ebf09ef464` |
| `thm-fundamental-product-theorem-for-complex-k-theory` | `complex-topological-k-theory-and-bott-periodicity` | gpt-5.6-terra | `51d1857139bec1f3867610cfd7a86c955bf28857bb65504a7de92d2748c7eeea` |
| `thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `cd2d37599b23e494ff92bd35552a8018c7d69bca4c0830593a6cb924db10f0bf` |
| `thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `bfac2893b0bf7475855044c19d3580183a91a2e262d3d1081cb527643b6d45fd` |
| `thm-homological-serre-spectral-sequence` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `3808e37540336f2c1971769e8338fc819bcd442112395e32f4e66e5f201dc0d9` |
| `thm-homotopy-invariance-of-vector-bundle-pullback` | `topological-vector-bundles-and-grassmannian-classification` | gpt-5.6-terra | `5997062b3a11a0176e0c535a2e9f9e861d86f9cf7684a95091fecd790d48515d` |
| `thm-leray-hirsch-module-isomorphism` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `5bdf0d388db7cad535f50e51a2d969702ee0270c37e0321c1fc87ead69dd08fe` |
| `thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `f7f971f940679accdd5a0a98a7b8554cdb2c1a0b54e5b8a983d818e8723690c0` |
| `thm-naturality-and-uniqueness-of-thom-classes` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `30554b4bafe4d2078a732aec9f0ea26de3a4a74db6114afded3e4dd67cc53331` |
| `thm-numerable-vector-bundles-admit-bundle-metrics` | `topological-vector-bundles-and-grassmannian-classification` | gpt-5.6-terra | `83ec4978c7077c14024c13b097eb232b9d7789b8deb646660b144cd282d57e4b` |
| `thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians` | `topological-vector-bundles-and-grassmannian-classification` | gpt-5.6-terra | `d6c3ca4bffb023fe10f796f47446cbf810046c975610b2a390ba5db1c4f3ba6c` |
| `thm-reduced-k-theory-exact-sequence-of-a-cofibration` | `complex-topological-k-theory-and-bott-periodicity` | gpt-5.6-terra | `70665f612a3a8dd8ade7a16dade22ed04fa693daaaa6d1e8151d7928c19c903c` |
| `thm-schubert-cells-give-the-stable-grassmannian-cw-structure` | `topological-vector-bundles-and-grassmannian-classification` | gpt-5.6-terra | `5bd3f525a7b7fe8a244d0c352e070b31f63df93f8cc005626155ebe9d30c0986` |
| `thm-serre-class-fibration-transfer` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `10a46058e04a082fc4ee9fe30bf21700166508365ca9a37adfb9fa940d95700f` |
| `thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber` | `the-serre-spectral-sequence-and-applications` | gpt-5.6-terra | `4238951e2ad5b95cd073d5f0e6fb139f477022975cd55a6c63da7417c04507de` |
| `thm-thom-isomorphism-for-a-trivial-oriented-bundle` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `d0bc57372e3183a99c2e945c357e483b2c54edc426f55bcca53938d0de8193e2` |
| `thm-thom-isomorphism-for-oriented-vector-bundles` | `leray-hirsch-thom-isomorphism-and-gysin-sequences` | gpt-5.6-terra | `fb4debd6b0de2e3ffe1b5f30f351659192e1579133b16ade7946a8d71a8e115d` |
| `thm-vector-bundles-glued-from-transition-cocycles` | `topological-vector-bundles-and-grassmannian-classification` | gpt-5.6-terra | `33d5173aada4ce990a89554108dfb858c3aa87268de85878d58ca20922eca919` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-18`

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

Append one row per rejection to `research/phase-2-next-18-judge-adjudications.jsonl`
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
decision in `research/phase-2-next-18-step7-alert-decisions.jsonl`. Use `not_defect` or
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
`research/phase-2-next-18-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-18-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-18-alpha-step7-<group>.md` with every
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
