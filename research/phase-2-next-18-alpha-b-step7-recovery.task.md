# Step 7 adjudication — group **b**, run `phase-2-next-18`

You are the group Alpha for batches **3**, **4**: 4 A/B pair(s), 8 page(s), 118 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-18`

Read `research/phase-2-next-18-judge-closure.json`,
`research/phase-2-next-18-judge.jsonl`,
`research/phase-2-next-18-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-18-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-18-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-18-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
