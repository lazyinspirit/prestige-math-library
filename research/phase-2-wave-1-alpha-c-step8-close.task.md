# Step 8 adjudication — group **c**, run `phase-2-wave-1`

You are the group Alpha for batches **10**, **11**: 3 A/B pair(s), 6 page(s), 62 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/phase-2-wave-1-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
| 10 | `analytic-majorants-and-the-cauchy-kovalevskaya-theorem` | A | pde | 458.0001 | `partial-differential-equations-and-characteristics`, `power-series-and-real-analytic-functions`, `holomorphic-functions-of-several-variables`, `holomorphic-inverse-and-weierstrass-preparation` |
| 10 | `analytic-majorants-and-the-cauchy-kovalevskaya-theorem-examples` | B | pde | 458.0002 | `analytic-majorants-and-the-cauchy-kovalevskaya-theorem` |
| 10 | `euclidean-surface-measure-divergence-and-green-identities` | A | pde | 458.0021 | `lebesgue-measure-on-euclidean-space`, `the-lebesgue-integral-and-the-convergence-theorems`, `product-measures-and-the-fubini-tonelli-theorems`, `fubini-and-change-of-variables`, `the-fundamental-theorems-of-calculus`, `inner-product-spaces-and-orthogonality`, `smooth-partitions-of-unity-and-exhaustions`, `radon-measures-and-the-riesz-markov-kakutani-theorem` |
| 10 | `euclidean-surface-measure-divergence-and-green-identities-examples` | B | pde | 458.0022 | `euclidean-surface-measure-divergence-and-green-identities` |
| 11 | `measurable-densities-and-radon-volume-on-manifolds` | A | differential-geometry | 476.1 | `smooth-partitions-of-unity-and-exhaustions`, `integration-of-forms-and-the-general-stokes-theorem`, `lebesgue-measure-on-euclidean-space`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-lebesgue-and-riemann-integrals-compared`, `product-measures-and-the-fubini-tonelli-theorems`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `euclidean-surface-measure-divergence-and-green-identities` |
| 11 | `measurable-densities-and-radon-volume-on-manifolds-examples` | B | differential-geometry | 476.2 | `measurable-densities-and-radon-volume-on-manifolds` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `analytic-majorants-and-the-cauchy-kovalevskaya-theorem` — Analytic Majorants and the Cauchy–Kovalevskaya Theorem (15 item(s))

- `def-real-analytic-germ-in-several-variables` · definition — Real analytic germs in several variables
- `def-coefficientwise-majorisation-of-multivariable-power-series` · definition — Coefficientwise majorisation
- `lem-coefficient-majorisation-is-preserved-by-sums-products-composition-and-differentiation` · lemma — Operations preserving coefficient majorisation
- `lem-an-analytic-germ-has-a-rational-geometric-majorant` · lemma — Geometric majorants for analytic germs
- `thm-real-analytic-inverse-and-implicit-function-theorems` · theorem — Real analytic inverse and implicit functions
- `lem-analytic-ordinary-differential-systems-by-coefficient-majorants` · lemma — Analytic ODE systems from majorants
- `lem-analytic-noncharacteristic-hypersurfaces-flatten-to-a-coordinate-hyperplane` · lemma — Analytic flattening and the normal principal coefficient
- `lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form` · lemma — Subtracting analytic Cauchy jets
- `lem-normal-form-pde-determines-a-unique-formal-taylor-series` · lemma — Formal recursion for solved analytic normal equations
- `lem-a-positive-majorant-system-dominates-the-formal-cauchy-recursion` · lemma — Positive majorants dominate the Cauchy recursion
- `lem-the-goursat-majorant-equation-has-a-convergent-positive-power-series-solution` · lemma — Convergence of the Goursat majorant
- `thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form` · theorem — Cauchy–Kovalevskaya for first-order analytic systems
- `lem-higher-order-analytic-normal-form-reduces-to-a-first-order-system` · lemma — Reduction of higher-order normal form with jet compatibility
- `thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem` · theorem — Cauchy–Kovalevskaya on a noncharacteristic analytic hypersurface
- `rem-cauchy-kovalevskaya-is-an-analytic-not-smooth-well-posedness-theorem` · remark — The analytic existence and uniqueness boundary

### `analytic-majorants-and-the-cauchy-kovalevskaya-theorem-examples` — Analytic Majorants and the Cauchy–Kovalevskaya Theorem: Examples (7 item(s))

- `ex-majorising-a-two-variable-analytic-germ-by-a-geometric-series` · example — A concrete geometric majorant
- `ex-cauchy-kovalevskaya-for-an-analytic-transport-equation` · example — Analytic transport data
- `ex-cauchy-kovalevskaya-for-a-second-order-normal-form` · example — A second-order normal system
- `cex-smooth-nonanalytic-data-need-not-have-an-analytic-solution` · counterexample — Smooth data do not force an analytic solution
- `cex-a-characteristic-analytic-surface-does-not-determine-the-normal-jet` · counterexample — Characteristic analytic data may be nonunique or incompatible
- `cex-analytic-heat-data-can-have-divergent-time-taylor-series` · counterexample — Analytic heat data need not give a time-analytic germ
- `cex-analytic-elliptic-cauchy-solutions-lack-smooth-continuous-dependence` · counterexample — Hadamard instability despite analytic solvability

### `euclidean-surface-measure-divergence-and-green-identities` — Euclidean Surface Measure, Divergence, and Green Identities (16 item(s))

- `def-bounded-c-one-domain-boundary-charts-and-outward-normal` · definition — Bounded C1 domains and their outward normals
- `lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound` · lemma — Compactly supported scaled Euclidean bumps
- `lem-finite-ambient-partitions-for-euclidean-boundary-integration` · lemma — Finite ambient partitions near compact sets
- `def-surface-integral-on-a-compact-c-one-hypersurface` · definition — Surface integration on compact C1 hypersurfaces
- `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness` · lemma — Borel change of variables from the compact-support formula and Radon uniqueness
- `lem-surface-integral-is-independent-of-c-one-boundary-charts` · lemma — Chart and partition independence of surface measure
- `lem-local-graph-flux-from-fubini-and-the-fundamental-theorem` · lemma — The local graph flux calculation
- `thm-divergence-theorem-for-bounded-c-one-euclidean-domains` · theorem — Divergence on a bounded C1 Euclidean domain
- `def-bounded-piecewise-c-one-euclidean-domain` · definition — Specified finite piecewise C1 boundary presentations
- `lem-surface-null-edges-admit-small-gradient-cutoffs` · lemma — Cutoffs around surface-null edges
- `thm-divergence-theorem-for-bounded-piecewise-c-one-domains` · theorem — Divergence for finite piecewise C1 presentations
- `lem-euclidean-chart-measure-agrees-with-polar-surface-measure` · lemma — Agreement with the existing polar sphere measure
- `def-classical-normal-derivative` · definition — Classical normal derivative
- `cor-first-green-identity-on-a-bounded-c-one-domain` · corollary — First Green identity
- `cor-second-green-identity-on-a-bounded-c-one-domain` · corollary — Second Green identity
- `rem-euclidean-divergence-versus-classical-and-manifold-stokes` · remark — Euclidean divergence and the Stokes comparison

### `euclidean-surface-measure-divergence-and-green-identities-examples` — Euclidean Surface Measure, Divergence, and Green Identities: Examples (6 item(s))

- `ex-surface-density-and-outward-normal-on-a-graph` · example — Graph density and outward orientation
- `ex-divergence-theorem-on-a-ball-in-rn` · example — Flux and scaling on balls
- `ex-internal-face-cancellation-for-two-glued-regions` · example — Internal faces cancel for glued boxes
- `cex-reversing-boundary-orientation-reverses-flux` · counterexample — The wrong normal gives the wrong sign
- `cex-a-corner-is-not-covered-by-the-single-c-one-chart-theorem` · counterexample — A box is not a C1-boundary domain
- `ex-punctured-domains-and-truncated-cones-with-explicit-faces` · example — Holes and truncated space-time cones

### `measurable-densities-and-radon-volume-on-manifolds` — Measurable Densities and Radon Volume on Manifolds (11 item(s))

- `def-borel-measurable-nonnegative-density-on-a-manifold` · definition — Pointwise Borel nonnegative densities
- `lem-measurable-density-chart-integrals-agree-on-overlaps` · lemma — Agreement of Borel overlap integrals
- `def-countable-chart-gluing-of-a-nonnegative-density-measure` · definition — Countable partition construction of the Borel set function
- `thm-chart-gluing-defines-a-countably-additive-borel-density-measure` · theorem — The glued set function is a Borel measure
- `thm-density-measure-is-independent-of-the-chart-gluing` · theorem — Intrinsic density measure and its chart restriction
- `thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure` · theorem — Positive smooth densities give Radon volume
- `lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals` · lemma — Borel Darboux integrands in finite dimension
- `thm-density-measure-integration-agrees-with-smooth-density-integration` · theorem — Measurable integration extends smooth density integration
- `cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls` · corollary — Positive open-set and metric-ball volume
- `fs-local-finiteness-means-finite-total-density-measure` · false-statement — False: locally finite volume has finite total mass
- `fs-orientation-is-required-for-a-density-measure` · false-statement — False: density measures require an orientation

### `measurable-densities-and-radon-volume-on-manifolds-examples` — Measurable Densities and Radon Volume on Manifolds: Examples (7 item(s))

- `ex-chart-gluing-recovers-euclidean-lebesgue-measure` · example — Euclidean volume from chart gluing
- `ex-positive-weighted-volume-on-an-open-interval` · example — Weighted interval volume
- `ex-density-measure-in-two-overlapping-circle-charts` · example — Circle overlap weights count each arc once
- `ex-density-measure-on-a-nonorientable-manifold` · example — Flat Mobius strip density measure
- `ex-zero-dimensional-density-measure-is-weighted-counting` · example — Weighted counting in dimension zero
- `cex-a-smooth-density-can-have-infinite-total-mass` · counterexample — A smooth positive density with infinite mass
- `ex-borel-ball-volume-before-any-comparison-theorem` · example — Metric balls need no curvature comparison for measurability

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

# Step 8 — frozen integrity close, `phase-2-wave-1`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Resolve all assigned documentary findings in this pass. A serial reviewer must
establish ownership before editing an ambiguous record. Report detector or
authority defects explicitly; unchanged retries stop.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.
