# Alpha

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
group work, `research/frontier-31a-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

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
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
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

run: frontier-31a
role: alpha-adjudicate
label: step8-f
covers: 3, 16, 17

# Step 8 adjudication — group **f**, run `frontier-31a`

You are the group Alpha for batches **3**, **16**, **17**: 3 A/B pair(s), 6 page(s), 115 item(s), 41 open rejection(s) over 41 item(s).

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
- `def-continuous-annihilator-of-a-subspace` · definition — Continuous annihilator of a subspace
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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-two-closed-convex-sets-need-not-be-strongly-separated` | `geometric-hahn-banach-and-convex-separation-examples` | gpt-5.6-terra | `9f1d1d9bea0ee2a509697f2106e9115ffb0d19d1ceba8a8ba9309c46204f5545` |
| `cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `a4cc5a47d094c256b0ba5dd64036a295e8df98f027cbcd796a17c707b8a849ca` |
| `def-absorbing-balanced-and-absolutely-convex-set` | `geometric-hahn-banach-and-convex-separation` | gpt-5.6-terra | `b35220d051f5f681c97ed671aa6c04742ac8492eb99fa6db6471b6e87ba3f77d` |
| `def-c-zero-and-ell-infinity` | `geometric-hahn-banach-and-convex-separation-examples` | gpt-5.6-terra | `60c239b84b1a3a341ac1da27573768a2b2d2345f95fa2e7ff818deff46d06b5e` |
| `def-continuous-annihilator-of-a-subspace` | `geometric-hahn-banach-and-convex-separation` | gpt-5.6-terra | `a9c3cdd2467c782b82899df81c0a0bf7bf71f0afe433a579bb7877be42f9d906` |
| `def-exterior-derivative-by-the-invariant-vector-field-formula` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `564171e56f497e6e3fdc71eeb58d206d1b212899ad44dfdb7dc06b18cb25f8ce` |
| `def-fully-nonlinear-first-order-pde-and-complete-integral` | `quasilinear-characteristics-and-cauchy-kovalevskaya` | gpt-5.6-terra | `e2367dbcfe84636bd7d48ed4df6163a5171338e8948130bcc53677919b6eda0a` |
| `def-graded-derivation-of-the-algebra-of-differential-forms` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `3ba406bc4e93246fe6ceaff07b8de17adf7a6d3ea12dadd90d9b4cefa26f5d12` |
| `def-lie-derivative-of-a-differential-form` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `c934c09aa45fe5c1dc346dc3c16992ae2aa63431cc41b51da4f304749113783a` |
| `def-linear-hyperplane` | `geometric-hahn-banach-and-convex-separation` | gpt-5.6-terra | `6ff43dfd361936a22cea22d64be47f282cc0fb8cc72dcb4e505cb7ed21a9027a` |
| `def-semilinear-and-quasilinear-first-order-cauchy-problems` | `quasilinear-characteristics-and-cauchy-kovalevskaya` | gpt-5.6-terra | `84d52b24771d5939c84691f640a5ebc2557d59805cec99644144831a6bff6486` |
| `ex-curl-and-divergence-encoded-by-the-exterior-derivative` | `the-exterior-derivative-and-cartan-calculus-examples` | gpt-5.6-terra | `6ca3684bbdce32a825f1efffdba47f7bd3b24b72911e05af5dd6499e9509fe31` |
| `ex-distance-to-a-subspace-via-annihilating-functionals` | `geometric-hahn-banach-and-convex-separation-examples` | gpt-5.6-terra | `766c86b498530a91f8944df6b6e2ca22bde35f272d80517d2bc487774ade1d52` |
| `ex-exterior-derivatives-of-coordinate-one-forms` | `the-exterior-derivative-and-cartan-calculus-examples` | gpt-5.6-terra | `72a1d46c920150d3a602aa21ff5501abe3f0c02f307bbba4e54e8c2af9fa868c` |
| `ex-semilinear-characteristics-with-logistic-growth` | `quasilinear-characteristics-and-cauchy-kovalevskaya-examples` | gpt-5.6-terra | `e09a27eaee9bb445a4471934d65de56a5cba6c6951c4590130eba751f084dcac` |
| `lem-burgers-slope-obeys-a-riccati-law-along-characteristics` | `quasilinear-characteristics-and-cauchy-kovalevskaya` | gpt-5.6-terra | `e1cc7fbb988f4a3af98108f6e726d659225f86f7dfe8ed717298598e4b718662` |
| `lem-c-zero-is-a-closed-subspace-of-ell-infinity` | `geometric-hahn-banach-and-convex-separation-examples` | gpt-5.6-terra | `1ec997bc5b8de2ac6fbedb39ef55d866d98304020bb092040d0bb69bf86a41bf` |
| `lem-characteristic-solution-satisfies-the-quasilinear-pde` | `quasilinear-characteristics-and-cauchy-kovalevskaya` | gpt-5.6-terra | `48ce6882a32e92388f20a4e843f648127311cdfc29798d27ae1d8c66420cee01` |
| `lem-characteristic-strip-compatibility` | `quasilinear-characteristics-and-cauchy-kovalevskaya` | gpt-5.6-terra | `69b6da5506f1e3920808dd8c987feb331bac9adc8c01177a53128ea050126da4` |
| `lem-characteristic-strip-jacobian-at-the-initial-surface` | `quasilinear-characteristics-and-cauchy-kovalevskaya` | gpt-5.6-terra | `5b5855fb2304c86bb1a9b5da4ced8cb2ed5d688f98e45079cd43cd8b5aa27684` |
| `lem-charpit-flow-preserves-the-pde-constraint` | `quasilinear-characteristics-and-cauchy-kovalevskaya` | gpt-5.6-terra | `7b365ab894183c4d1aa5a50616dc08120de113b4ee14ab4c9fc1da3185492779` |
| `lem-envelope-stationarity-implies-the-hamilton-jacobi-equation` | `quasilinear-characteristics-and-cauchy-kovalevskaya` | gpt-5.6-terra | `1c28180c6075e6c3df75e5c0d7bdbd90b4634604f4f63519f4ab0754427b55fb` |
| `lem-local-solvability-of-the-augmented-characteristic-ode` | `quasilinear-characteristics-and-cauchy-kovalevskaya` | gpt-5.6-terra | `684c7e576b697411b6f2318e3463260ec55d66c1391cdafec922565f6921d2bf` |
| `lem-quasilinear-solution-lifts-to-characteristics` | `quasilinear-characteristics-and-cauchy-kovalevskaya` | gpt-5.6-terra | `29e1097979773fd95aa34e488c9e9a180d83b0569bec932f1b7df0a59ee4fa38` |
| `lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `b65af76069c6158ddaa59e5957e92a424f37bb9996f9b22a11cad29361906942` |
| `lem-uncountable-almost-disjoint-family-on-natural-numbers` | `geometric-hahn-banach-and-convex-separation-examples` | gpt-5.6-terra | `bb7798fd720fa78901febb9f68de86bcd0ecb4260b5ded7171720c6e75acc67b` |
| `prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `01fe3d8c4ee8e24b06c1d37a1b93e37cd2497fee0c69fe09100f156227a8972d` |
| `prop-cartan-commutator-identities` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `f703bc277d70512df29ee045abbfa2ace24b9a14f7b9556fa25a6c00d1e1df32` |
| `prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `8c2feeec2acaf5996a3a9bcb679e2e4e63fb275b912e8e468ce66529aeb83996` |
| `prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `173124261f83a4586dc3c4a0efbfd187c0ea1992bf93956481ba863f58d9a2ac` |
| `prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `50d4edcd11820fc56e3fc73fd2e82eeb6644a31096031ad820eded769656eaf2` |
| `prop-the-exterior-derivative-commutes-with-restriction` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `26c53aad645f5c0d8f3a40119eda19ba02d98aa4e7e6f19ca557f868eb764f4b` |
| `thm-cartans-magic-formula` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `38ba5274576cb1a43319be3a2b28ba55b7f56ff14775ebfb15c1db704afbf1b1` |
| `thm-existence-and-uniqueness-of-the-exterior-derivative` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `2c0064cf08c8fef630da20be0f578ea241c246d800cd70aeaf8ecba7133f6e82` |
| `thm-local-coordinate-formula-for-the-exterior-derivative` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `dec487032cd25f2853571e796159f9faa54d9ffe5e31569a03ee5c79689bcaca` |
| `thm-local-fully-nonlinear-cauchy-problem-by-charpit` | `quasilinear-characteristics-and-cauchy-kovalevskaya` | gpt-5.6-terra | `68d55429049fd3002bd01aee88fb10e7fac9088d67d46eb9c0a1b9eacf4cb06c` |
| `thm-local-quasilinear-cauchy-problem-by-characteristics` | `quasilinear-characteristics-and-cauchy-kovalevskaya` | gpt-5.6-terra | `da188904f9e7fea010a7768a454cd226950c0e5dc6064b6684547f2f87cd9c95` |
| `thm-separation-of-an-open-convex-set-and-a-point` | `geometric-hahn-banach-and-convex-separation` | gpt-5.6-terra | `09c71b08591f8e749d55cd2868052bb1a6c878e0714ba50313da287a1f757e41` |
| `thm-the-exterior-derivative-commutes-with-pullback` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `76e1a2cfdab84f376561d29d4f55b42269ade9b6be1ff2933c767fbbcc5ade41` |
| `thm-the-exterior-derivative-is-a-graded-derivation` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `139bbba02e35d24a14fdd8fc661d9b7613c7883a35621be5fd66e47b30164b00` |
| `thm-the-exterior-derivative-squares-to-zero` | `the-exterior-derivative-and-cartan-calculus` | gpt-5.6-terra | `1bbd984963dcc5ab8a8eb03ab2ea14da1389f3e3613d9b8e5059a34168fd7fa0` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-31a`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-31a-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-31a-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-31a-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-31a-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-31a-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


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
