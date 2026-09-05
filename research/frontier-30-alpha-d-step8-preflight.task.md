# Step 8 adjudication — group **d**, run `frontier-30`

You are the group Alpha for batches **4**, **7**, **15**: 3 A/B pair(s), 6 page(s), 96 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-30-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-30-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `the-analytic-hahn-banach-theorem` | A | functional-analysis | 288.053 | `finite-dimensional-normed-spaces-and-riesz-lemma-examples` |
| 4 | `the-analytic-hahn-banach-theorem-examples` | B | functional-analysis | 288.054 | `the-analytic-hahn-banach-theorem`, `the-duality-of-lp-and-lq` |
| 7 | `partial-differential-equations-and-characteristics` | A | pde | 288.141 | `itos-formula-and-brownian-martingales-examples`, `picard-lindelof-and-first-order-odes`, `the-spectral-theorem-and-singular-value-decomposition` |
| 7 | `partial-differential-equations-and-characteristics-examples` | B | pde | 288.142 | `partial-differential-equations-and-characteristics` |
| 15 | `distributions-integral-manifolds-and-the-frobenius-theorem` | A | differential-geometry | 461 | `tangent-cotangent-and-the-differential`, `rank-theorems-and-embedded-submanifolds`, `smooth-vector-bundles-and-sections`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `vector-fields-flows-and-lie-derivatives` |
| 15 | `distributions-integral-manifolds-and-the-frobenius-theorem-examples` | B | differential-geometry | 462 | `the-seifert-van-kampen-theorem`, `distributions-integral-manifolds-and-the-frobenius-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-analytic-hahn-banach-theorem` — The Analytic Hahn Banach Theorem (13 item(s))

- `def-sublinear-functional` · definition — A sublinear functional on a real vector space
- `lem-hahn-banach-one-step-extension` · lemma — The admissible values in a one-step Hahn-Banach extension form a nonempty interval
- `lem-union-of-a-chain-of-dominated-extensions` · lemma — The union of a chain of dominated extensions is a well-defined dominated linear functional
- `thm-hahn-banach-dominated-extension` · theorem — Hahn-Banach dominated extension theorem for real vector spaces
- `def-dual-space-of-a-normed-space` · definition — The dual space X^* of a normed space and its dual norm
- `thm-hahn-banach-norm-preserving-extension` · theorem — A bounded real linear functional on a subspace of a real normed space extends with the same norm
- `lem-real-part-determines-a-complex-linear-functional` · lemma — A complex linear functional is recovered from its real part by f(x)=u(x)-iu(ix)
- `thm-complex-hahn-banach-norm-preserving-extension` · theorem — A bounded complex linear functional on a subspace of a complex normed space extends with the same norm
- `thm-dual-norms-every-vector` · theorem — Every nonzero vector has a norming functional
- `cor-dual-separates-points` · corollary — The dual space separates points of a normed space
- `cor-norm-recovered-from-the-dual-unit-ball` · corollary — The norm of a vector is the supremum of |f(x)| over the dual unit ball
- `thm-norm-preserving-extension-from-any-subspace` · theorem — A bounded linear functional on an arbitrary subspace extends with the same norm, without assuming the subspace is closed
- `rem-choice-strength-of-hahn-banach` · remark — The set-theoretic cost of Hahn-Banach

### `the-analytic-hahn-banach-theorem-examples` — The Analytic Hahn Banach Theorem - Examples (6 item(s))

- `ex-norming-functionals-in-lp-from-the-measure-duality-page` · example — The abstract norming-functional theorem agrees with the concrete L^p-L^q formula
- `ex-many-extensions-from-a-codimension-one-subspace` · example — A codimension-one subspace can admit many norm-preserving Hahn-Banach extensions
- `ex-banach-limit-from-hahn-banach` · example — A Banach limit obtained from Hahn-Banach
- `lem-banach-limit-properties` · lemma — A Banach limit is positive, has norm one, is shift invariant, and lies between liminf and limsup
- `cex-hahn-banach-extension-need-not-be-unique` · counterexample — Hahn-Banach norm-preserving extensions need not be unique
- `rem-hahn-banach-open-choice-questions` · remark — Two choice-theoretic consequences of Hahn-Banach remain open

### `partial-differential-equations-and-characteristics` — Partial Differential Equations and Characteristics (21 item(s))

- `def-partial-differential-operator-order-and-solution` · definition — Scalar partial differential operators, order, and classical solutions
- `def-linear-semilinear-quasilinear-and-fully-nonlinear-pde` · definition — Linear, semilinear, quasilinear, and fully nonlinear partial differential equations
- `def-principal-part-and-principal-symbol-of-a-scalar-pde` · definition — Principal part and principal symbol of a scalar PDE
- `lem-principal-symbol-under-a-c-one-coordinate-change` · lemma — The principal symbol depends only on the first derivative of a smooth coordinate change
- `def-characteristic-covector-hypersurface-and-noncharacteristic-data` · definition — Characteristic covectors, hypersurfaces, and noncharacteristic data
- `lem-characteristic-hypersurface-is-independent-of-defining-function` · lemma — Characteristic hypersurfaces are independent of the defining function
- `def-elliptic-hyperbolic-and-parabolic-principal-symbols` · definition — Elliptic, hyperbolic, and parabolic principal symbols
- `thm-symmetric-principal-part-has-a-signature-normal-form` · theorem — A symmetric second-order principal part has a coordinate-invariant signature normal form
- `def-two-variable-second-order-discriminant` · definition — The discriminant for a second-order equation in two variables
- `thm-two-variable-type-and-characteristic-directions-are-coordinate-invariant` · theorem — In two variables, type and characteristic directions are coordinate invariant
- `thm-two-variable-constant-coefficient-canonical-principal-forms` · theorem — Constant-coefficient second-order equations in two variables have canonical principal forms
- `rem-limits-of-the-elliptic-parabolic-hyperbolic-trichotomy` · remark — Limits of the elliptic-parabolic-hyperbolic trichotomy
- `def-linear-transport-equation-and-its-characteristic-flow` · definition — Linear transport equations and their characteristic flow
- `lem-transport-equation-along-a-characteristic` · lemma — A transport equation restricts to a linear ODE along each characteristic
- `lem-transport-characteristics-depend-c-one-on-initial-position` · lemma — Transport characteristics depend C^1 on the initial position
- `thm-homogeneous-linear-transport-by-the-flow` · theorem — Homogeneous linear transport is solved by the inverse characteristic flow
- `thm-inhomogeneous-linear-transport-formula` · theorem — The inhomogeneous linear transport equation has the characteristic integrating-factor formula
- `def-noncharacteristic-first-order-cauchy-surface` · definition — Noncharacteristic Cauchy surfaces for first-order transport
- `thm-local-linear-transport-cauchy-problem` · theorem — Local linear transport has a unique solution from noncharacteristic Cauchy data
- `cor-support-propagates-along-transport-characteristics` · corollary — Support propagates along transport characteristics
- `rem-characteristics-are-covectors-before-they-are-curves` · remark — Characteristics are covectors before they are curves

### `partial-differential-equations-and-characteristics-examples` — Partial Differential Equations and Characteristics — Examples (8 item(s))

- `ex-constant-velocity-transport` · example — Constant-velocity transport translates the initial profile
- `ex-transport-with-growth-and-source` · example — Transport with growth and source along straight characteristics
- `ex-radial-transport-flow` · example — The stationary equation x dot Du = u is solved by radial characteristics
- `cex-characteristic-cauchy-data-may-be-nonunique-or-incompatible` · counterexample — Characteristic Cauchy data may be nonunique or incompatible
- `ex-classification-of-laplace-heat-and-wave-equations` · example — Laplace, heat, and wave equations have elliptic, parabolic, and hyperbolic principal symbols
- `ex-canonical-coordinates-for-a-hyperbolic-equation` · example — A constant-coefficient hyperbolic equation is diagonalized by characteristic coordinates
- `ex-tricomi-equation-changes-type` · example — The Tricomi equation changes type across y = 0
- `cex-threefold-classification-is-not-global` · counterexample — The elliptic-parabolic-hyperbolic trichotomy is not a global taxonomy

### `distributions-integral-manifolds-and-the-frobenius-theorem` — Distributions Integral Manifolds and the Frobenius Theorem (38 item(s))

- `def-smooth-distribution-on-a-manifold` · definition — Smooth distributions on a manifold
- `prop-local-frame-characterization-of-a-smooth-distribution` · proposition — A smooth distribution is exactly a locally framed constant-rank family of tangent spaces
- `def-vector-field-tangent-to-a-distribution` · definition — Vector fields tangent to a distribution
- `prop-sections-of-a-distribution-form-a-locally-free-module` · proposition — Sections of a distribution form a locally free module
- `def-annihilator-bundle-of-a-distribution` · definition — The annihilator bundle of a distribution
- `prop-double-annihilator-recovers-a-finite-rank-distribution` · proposition — The double annihilator recovers a finite-rank distribution
- `def-integral-manifold-of-a-distribution` · definition — Integral manifolds of a distribution
- `def-integrable-distribution` · definition — Integrable distributions
- `prop-integral-manifolds-have-the-distribution-dimension` · proposition — Integral manifolds have the distribution dimension
- `prop-local-diffeomorphisms-carry-distributions-and-integral-manifolds` · proposition — Local diffeomorphisms carry distributions and integral manifolds
- `def-involutive-distribution` · definition — Involutive distributions
- `prop-involutivity-can-be-checked-on-a-local-frame` · proposition — Involutivity can be checked on a local frame
- `prop-integrable-distributions-are-involutive` · proposition — Integrable distributions are involutive
- `lem-involutive-frame-reduction` · lemma — An involutive local frame can be reduced to one field plus commuting transverse fields
- `lem-commuting-independent-vector-fields-give-a-coordinate-system` · lemma — Commuting independent vector fields give a coordinate system
- `thm-frobenius-local-coordinate-theorem` · theorem — Frobenius local coordinate theorem
- `cor-frobenius-local-first-integrals` · corollary — Frobenius gives local first integrals
- `cor-kernel-of-a-constant-rank-submersion-is-integrable` · corollary — The kernel distribution of a constant-rank submersion is integrable
- `prop-level-set-distributions-are-involutive` · proposition — Level-set distributions are involutive
- `def-flat-chart-for-a-distribution` · definition — Flat charts for a distribution
- `def-plaque-of-a-flat-chart` · definition — Plaques of a flat chart
- `lem-integral-manifolds-are-locally-contained-in-plaques` · lemma — Integral manifolds are locally contained in plaques
- `lem-overlapping-plaques-through-a-point-have-compatible-germs` · lemma — Overlapping plaques through a point have compatible germs
- `def-leaf-equivalence-relation-of-an-integrable-distribution` · definition — The leaf equivalence relation of an integrable distribution
- `lem-tangent-curve-reachability-is-an-equivalence-relation` · lemma — Reachability by piecewise smooth tangent curves is an equivalence relation
- `thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds` · theorem — Existence and uniqueness of maximal connected integral manifolds
- `cor-maximal-integral-manifolds-partition-the-manifold` · corollary — Maximal integral manifolds partition the manifold
- `def-regular-foliation-atlas` · definition — Regular foliation atlases
- `def-leaf-of-a-regular-foliation` · definition — Leaves of a regular foliation
- `thm-regular-foliations-and-integrable-distributions-correspond` · theorem — Regular foliations and integrable distributions correspond
- `prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution` · proposition — Every connected tangent map meeting a leaf factors uniquely through that leaf
- `prop-embedded-leaves-need-not-be-closed-and-leaves-need-not-be-embedded` · proposition — Embedded leaves need not be closed, and leaves need not be embedded
- `fs-every-constant-dimensional-family-of-tangent-subspaces-is-a-smooth-distribution` · false-statement — Every constant-dimensional family of tangent subspaces is a smooth distribution
- `fs-every-smooth-distribution-is-integrable` · false-statement — Every smooth distribution is integrable
- `fs-involutivity-can-be-tested-on-the-pointwise-bracket-of-tangent-vectors` · false-statement — Involutivity can be tested on the pointwise bracket of tangent vectors
- `fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold` · false-statement — Every leaf of a regular foliation is an embedded submanifold
- `fs-the-subspace-topology-on-a-leaf-is-always-its-manifold-topology` · false-statement — The subspace topology on a leaf is always its manifold topology
- `fs-frobenius-applies-to-any-variable-rank-family-of-subspaces` · false-statement — Frobenius applies to any variable-rank family of tangent subspaces

### `distributions-integral-manifolds-and-the-frobenius-theorem-examples` — Distributions Integral Manifolds and the Frobenius Theorem — Examples (10 item(s))

- `ex-coordinate-plane-distribution-and-its-affine-leaves` · example — The coordinate-plane distribution and its affine leaves
- `ex-kernel-of-a-submersion-as-an-integrable-distribution` · example — The kernel of a submersion as an integrable distribution
- `ex-level-set-foliation-of-a-regular-function` · example — The level-set foliation of a regular function
- `ex-product-foliation` · example — A product foliation
- `ex-orbit-circles-of-rotation-as-a-foliation-away-from-the-origin` · example — Orbit circles of rotation form a foliation away from the origin
- `ex-irrational-linear-foliation-of-the-two-torus` · example — An irrational linear foliation of the two-torus
- `ex-the-mobius-band-line-foliation` · example — A line foliation on the Mobius band
- `cex-the-standard-contact-plane-field-is-not-integrable` · counterexample — The standard contact plane field is not integrable
- `cex-a-variable-rank-involutive-family-outside-regular-frobenius` · counterexample — A variable-rank involutive family lies outside regular Frobenius
- `ex-leaves-of-a-lie-subalgebra-distribution` · example — Leaves of a Lie-subalgebra distribution

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-30`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
