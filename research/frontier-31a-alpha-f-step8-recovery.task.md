# Step 8 adjudication — group **f**, run `frontier-31a`

You are the group Alpha for batches **3**, **16**, **17**: 3 A/B pair(s), 6 page(s), 115 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-f-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-31a-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 3 | `geometric-hahn-banach-and-convex-separation` | A | functional-analysis | 288.055 | `the-analytic-hahn-banach-theorem-examples` |
| 3 | `geometric-hahn-banach-and-convex-separation-examples` | B | functional-analysis | 288.056 | `geometric-hahn-banach-and-convex-separation` |
| 16 | `quasilinear-characteristics-and-cauchy-kovalevskaya` | A | pde | 458.001 | `partial-differential-equations-and-characteristics-examples`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `inverse-and-implicit-function-theorems` |
| 16 | `quasilinear-characteristics-and-cauchy-kovalevskaya-examples` | B | pde | 458.002 | `quasilinear-characteristics-and-cauchy-kovalevskaya` |
| 17 | `the-exterior-derivative-and-cartan-calculus` | A | differential-geometry | 465 | `vector-fields-flows-and-lie-derivatives`, `distributions-integral-manifolds-and-the-frobenius-theorem`, `tensor-fields-exterior-algebra-and-differential-forms` |
| 17 | `the-exterior-derivative-and-cartan-calculus-examples` | B | differential-geometry | 466 | `the-exterior-derivative-and-cartan-calculus` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `geometric-hahn-banach-and-convex-separation` — Geometric Hahn Banach and Convex Separation (19 item(s))

- `def-absorbing-balanced-and-absolutely-convex-set` · definition — Absorbing, balanced, and absolutely convex sets
- `def-minkowski-functional` · definition — Minkowski functional of an absorbing set
- `lem-minkowski-functional-is-sublinear` · lemma — The gauge of a convex absorbing set is sublinear
- `lem-balanced-gauge-is-a-seminorm` · lemma — The gauge of an absolutely convex absorbing set is a seminorm
- `lem-open-convex-set-recovered-from-its-gauge` · lemma — An open convex neighbourhood is recovered from its gauge
- `def-weak-and-strict-separation` · definition — Weak, strict, and strong separation
- `thm-separation-of-an-open-convex-set-and-a-point` · theorem — Separate a point from an open convex set
- `thm-separation-of-disjoint-convex-sets-one-open` · theorem — Separation of disjoint convex sets when one is open
- `thm-strong-separation-of-closed-and-compact-convex-sets` · theorem — Strong separation of a closed and a compact convex set
- `cor-closed-convex-set-is-an-intersection-of-closed-half-spaces` · corollary — A closed convex set is an intersection of closed half-spaces
- `def-continuous-annihilator-of-a-subspace` · definition — Continuous annihilator of a linear subspace
- `thm-geometric-hahn-banach-for-subspaces` · theorem — Geometric Hahn–Banach theorem for subspaces
- `cor-annihilator-detects-closure` · corollary — The annihilator detects the closure of a subspace
- `cor-density-characterised-by-annihilator-zero` · corollary — Density is characterized by a zero annihilator
- `cor-finite-dimensional-subspaces-are-complemented` · corollary — Finite-dimensional subspaces are complemented
- `cor-finite-codimensional-subspaces-are-complemented` · corollary — Closed finite-codimensional subspaces are complemented
- `def-linear-hyperplane` · definition — Linear hyperplane
- `thm-closed-hyperplanes-are-kernels-of-nonzero-functionals` · theorem — Closed hyperplanes are kernels of nonzero functionals
- `thm-mazur-weak-and-norm-closure-of-convex-sets` · theorem — Mazur theorem: weak and norm closure agree for convex sets

### `geometric-hahn-banach-and-convex-separation-examples` — Geometric Hahn Banach and Convex Separation Examples (11 item(s))

- `ex-gauges-of-norm-balls-and-ellipsoids` · example — Gauges of norm balls and finite-dimensional ellipsoids
- `cex-gauge-of-a-nonbalanced-set-is-not-a-seminorm` · counterexample — A gauge of a nonbalanced set need not be a seminorm
- `cex-two-closed-convex-sets-need-not-be-strongly-separated` · counterexample — Two closed convex sets can have no strong separator
- `ex-distance-to-a-subspace-via-annihilating-functionals` · example — Distance to a subspace via annihilating functionals
- `def-c-zero-and-ell-infinity` · definition — The sequence spaces c_0 and ell-infinity
- `lem-c-zero-is-a-closed-subspace-of-ell-infinity` · lemma — c_0 is a closed subspace of ell-infinity
- `lem-uncountable-almost-disjoint-family-on-natural-numbers` · lemma — An uncountable almost-disjoint family of subsets of the naturals
- `lem-quotient-by-c-zero-has-no-countable-separating-family` · lemma — The quotient ell-infinity/c_0 has no countable separating family
- `thm-c-zero-is-not-complemented-in-ell-infinity` · theorem — c_0 is not complemented in ell-infinity
- `ex-a-closed-uncomplemented-subspace` · example — A closed uncomplemented subspace
- `rem-two-results-called-mazurs-lemma` · remark — Two results called Mazur’s lemma

### `quasilinear-characteristics-and-cauchy-kovalevskaya` — Quasilinear Characteristics and Cauchy Kovalevskaya (23 item(s))

- `def-semilinear-and-quasilinear-first-order-cauchy-problems` · definition — Semilinear and quasilinear first-order Cauchy problems on a parametrised hypersurface
- `def-augmented-characteristic-system-for-a-quasilinear-pde` · definition — The augmented characteristic system for a quasilinear first-order PDE
- `lem-local-solvability-of-the-augmented-characteristic-ode` · lemma — Local solvability and smooth parameter dependence for the augmented characteristic ODE
- `lem-quasilinear-solution-lifts-to-characteristics` · lemma — A classical quasilinear solution lifts to an augmented characteristic
- `lem-characteristic-strip-compatibility` · lemma — Compatibility of a quasilinear Cauchy strip with tangential derivatives
- `lem-characteristic-strip-jacobian-at-the-initial-surface` · lemma — The characteristic-strip projection has the prescribed nonzero Jacobian initially
- `thm-local-quasilinear-cauchy-problem-by-characteristics` · theorem — Local quasilinear characteristic graph construction
- `lem-characteristic-solution-satisfies-the-quasilinear-pde` · lemma — The inverse-projected characteristic graph satisfies the quasilinear PDE
- `def-characteristic-crossing-and-caustic-for-first-order-pde` · definition — Characteristic crossing and caustic for a first-order PDE
- `lem-burgers-slope-obeys-a-riccati-law-along-characteristics` · lemma — The slope in inviscid Burgers flow obeys a Riccati law along characteristics
- `thm-inviscid-burgers-characteristic-formula-and-first-crossing-time` · theorem — Inviscid Burgers characteristic formula and first crossing time
- `cor-burgers-classical-solution-persists-for-monotone-data` · corollary — Monotone inviscid Burgers data have no forward characteristic crossing
- `thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing` · theorem — Uniqueness of a classical quasilinear solution before characteristic crossing
- `def-fully-nonlinear-first-order-pde-and-complete-integral` · definition — Fully nonlinear first-order PDEs and complete integrals
- `lem-envelope-stationarity-implies-the-hamilton-jacobi-equation` · lemma — A nondegenerate stationary envelope of a complete integral solves the Hamilton–Jacobi equation
- `def-lagrange-charpit-characteristic-system` · definition — The Lagrange–Charpit characteristic system
- `lem-charpit-flow-preserves-the-pde-constraint` · lemma — The Lagrange–Charpit flow preserves the fully nonlinear PDE constraint
- `lem-charpit-contact-compatibility-is-preserved` · lemma — The Lagrange–Charpit flow preserves contact compatibility
- `lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi` · lemma — The Charpit momentum equation follows by differentiating Hamilton–Jacobi
- `thm-local-fully-nonlinear-cauchy-problem-by-charpit` · theorem — Local fully nonlinear Cauchy problem by Lagrange–Charpit characteristics
- `rem-characteristics-do-not-select-a-post-crossing-weak-solution` · remark — Characteristics do not select a post-crossing weak solution
- `rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem` · remark — Cauchy–Kovalevskaya theorem for a noncharacteristic analytic Cauchy problem
- `rem-cauchy-kovalevskaya-proof-boundary` · remark — The Cauchy–Kovalevskaya proof boundary

### `quasilinear-characteristics-and-cauchy-kovalevskaya-examples` — Quasilinear Characteristics and Cauchy Kovalevskaya — Examples (10 item(s))

- `ex-semilinear-characteristics-with-logistic-growth` · example — Semilinear characteristics with logistic growth
- `ex-inviscid-burgers-rarefying-data` · example — Rarefying inviscid Burgers data
- `ex-inviscid-burgers-gradient-catastrophe` · example — Inviscid Burgers gradient catastrophe
- `cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up` · counterexample — Quasilinear characteristics can cross before the lifted ODE blows up
- `ex-clairaut-complete-integral-and-envelope` · example — Clairaut complete integral and its nondegenerate stationary envelope
- `ex-eikonal-cones-are-not-classical-at-the-vertex` · example — Eikonal cones are not classical at the vertex
- `cex-characteristic-initial-data-for-a-fully-nonlinear-equation` · counterexample — Characteristic initial data need not determine a fully nonlinear solution
- `ex-cauchy-kovalevskaya-normal-form` · example — Cauchy–Kovalevskaya normal form with analytic data
- `ex-quadratic-hamilton-jacobi-data-produce-explicit-caustic-time` · example — Quadratic Hamilton–Jacobi data produce an explicit caustic time
- `ex-smooth-nonanalytic-transport-data-give-a-smooth-nonanalytic-solution` · example — Smooth nonanalytic transport data give a smooth nonanalytic solution

### `the-exterior-derivative-and-cartan-calculus` — The Exterior Derivative and Cartan Calculus (40 item(s))

- `def-graded-derivation-of-the-algebra-of-differential-forms` · definition — A graded derivation of the algebra of differential forms
- `def-exterior-derivative-by-the-invariant-vector-field-formula` · definition — The exterior derivative by the invariant vector-field formula
- `lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear` · lemma — The invariant exterior-derivative formula is $C^\infty$-multilinear
- `prop-the-exterior-derivative-is-local` · proposition — The exterior derivative is local
- `prop-exterior-derivative-of-a-function-is-its-differential` · proposition — The exterior derivative of a function is its differential
- `thm-local-coordinate-formula-for-the-exterior-derivative` · theorem — The local coordinate formula for the exterior derivative
- `thm-the-exterior-derivative-is-a-graded-derivation` · theorem — The exterior derivative is a graded derivation
- `thm-the-exterior-derivative-squares-to-zero` · theorem — The exterior derivative squares to zero
- `thm-existence-and-uniqueness-of-the-exterior-derivative` · theorem — Existence and uniqueness of the exterior derivative
- `prop-the-exterior-derivative-commutes-with-restriction` · proposition — The exterior derivative commutes with restriction
- `thm-the-exterior-derivative-commutes-with-pullback` · theorem — The exterior derivative commutes with pullback
- `cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms` · corollary — Pullback carries closed forms to closed forms and exact forms to exact forms
- `prop-the-exterior-derivative-does-not-enlarge-support` · proposition — The exterior derivative does not enlarge support
- `def-lie-derivative-of-a-tensor-field` · definition — The Lie derivative of a tensor field
- `lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined` · lemma — The flow definition of tensor Lie derivative is local and well-defined
- `prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields` · proposition — Tensor Lie derivative agrees with $X$ on functions and bracket on vector fields
- `thm-lie-derivative-is-a-derivation-of-the-tensor-algebra` · theorem — The Lie derivative is a derivation of the tensor algebra
- `prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor` · proposition — The coordinate formula for the Lie derivative of a covariant tensor
- `prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor` · proposition — The coordinate formula for the Lie derivative of a contravariant tensor
- `prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes` · proposition — A tensor field is flow-invariant exactly when its Lie derivative vanishes
- `def-lie-derivative-of-a-differential-form` · definition — The Lie derivative of a differential form
- `prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation` · proposition — Lie derivative of forms is a degree-zero graded derivation
- `thm-cartans-magic-formula` · theorem — Cartan's magic formula
- `cor-lie-derivative-commutes-with-the-exterior-derivative` · corollary — Lie derivative commutes with the exterior derivative
- `prop-cartan-commutator-identities` · proposition — Cartan commutator identities
- `prop-lie-derivatives-are-natural-for-related-vector-fields` · proposition — Lie derivatives are natural for related vector fields
- `thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow` · theorem — Differentiation of a pulled-back form along a time-dependent flow
- `cor-a-closed-form-is-flow-invariant-when-its-contraction-is-exactly-zero` · corollary — A closed form is flow-invariant when its contraction is zero
- `def-differential-ideal-in-the-algebra-of-forms` · definition — A differential ideal in the algebra of forms
- `lem-annihilator-ideal-of-a-distribution-is-frame-independent` · lemma — The annihilator ideal of a distribution is frame-independent
- `thm-pfaffian-frobenius-criterion` · theorem — The Pfaffian Frobenius criterion
- `cor-codimension-one-frobenius-criterion` · corollary — The codimension-one Frobenius criterion
- `prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields` · proposition — Closed constant-rank one-forms define integrable hyperplane fields
- `fs-the-exterior-derivative-is-c-infinity-linear` · false-statement — The exterior derivative is $C^\infty$-linear
- `fs-the-lie-derivative-is-c-infinity-linear-in-the-vector-field` · false-statement — The Lie derivative is $C^\infty$-linear in the vector field
- `fs-the-exterior-derivative-depends-on-a-riemannian-metric` · false-statement — The exterior derivative depends on a Riemannian metric
- `fs-every-closed-differential-form-is-globally-exact` · false-statement — Every closed differential form is globally exact
- `fs-lie-derivative-and-interior-product-commute-for-all-vector-fields` · false-statement — Lie derivative and interior product commute for all vector fields
- `fs-alpha-wedge-d-alpha-vanishes-for-every-one-form` · false-statement — $\alpha\wedge d\alpha$ vanishes for every one-form
- `fs-pullback-of-a-compactly-supported-form-is-always-compactly-supported` · false-statement — Pullback of a compactly supported form is always compactly supported

### `the-exterior-derivative-and-cartan-calculus-examples` — The Exterior Derivative and Cartan Calculus — Examples (12 item(s))

- `ex-exterior-derivatives-of-coordinate-one-forms` · example — Exterior derivatives of coordinate one-forms
- `ex-the-euclidean-area-form-is-closed` · example — The Euclidean area form is closed
- `ex-the-angular-one-form-on-the-punctured-plane-is-closed` · example — The angular one-form on the punctured plane is closed
- `ex-the-angular-one-form-has-no-global-potential` · example — The angular one-form has no global potential
- `ex-curl-and-divergence-encoded-by-the-exterior-derivative` · example — Curl and divergence encoded by the exterior derivative
- `ex-lie-derivative-of-the-euclidean-metric-under-dilations` · example — Lie derivative of the Euclidean metric under dilations
- `ex-lie-derivative-of-an-area-form-and-planar-divergence` · example — Lie derivative of an area form and planar divergence
- `ex-cartans-formula-for-a-coordinate-vector-field` · example — Cartan's formula for a coordinate vector field
- `ex-a-contact-form-on-three-space` · example — A contact form on three-space
- `ex-an-integrable-pfaffian-equation-with-a-local-first-integral` · example — An integrable Pfaffian equation with a local first integral
- `cex-a-nonproper-pullback-destroys-compact-support` · counterexample — A nonproper pullback destroys compact support
- `ex-time-dependent-pullback-differentiation-for-a-translation` · example — Time-dependent pullback differentiation for a translation

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

1 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-f3bbac48ab5d393d545f858b · `def-semilinear-and-quasilinear-first-order-cauchy-problems`** (from group f, would-be-fatal) — The definition says only that a,b are smooth on an open set in R^n times R, but never requires the initial graph (gamma(y),phi(y))—even near the point under discussion—to lie in that coefficient domain. Thus allowed data can make both a(gamma(y),phi(y)) and b(gamma(y),phi(y)) undefined, so the displayed Cauchy problem and every ensuing initial characteristic system are not defined as written.

Append one owning-group disposition per warning to `research/frontier-31a-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-31a-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — exact closure recovery, `frontier-31a`

Read `research/frontier-31a-judge-closure.json`,
`research/frontier-31a-judge.jsonl`,
`research/frontier-31a-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-31a-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-31a-step8-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/frontier-31a-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
