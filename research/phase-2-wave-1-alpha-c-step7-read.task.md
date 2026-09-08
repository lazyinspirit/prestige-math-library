# Step 7 whole-group reading — group **c**, run `phase-2-wave-1`

You are the group Alpha for batches **10**, **11**: 3 A/B pair(s), 6 page(s), 62 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

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

---

# Step 7 — group reading digest, `phase-2-wave-1`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
