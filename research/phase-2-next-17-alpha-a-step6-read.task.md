# Step 6 whole-group reading — group **a**, run `phase-2-next-17`

You are the group Alpha for batches **1**, **3**: 2 A/B pair(s), 4 page(s), 68 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
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
| 1 | `measure-preserving-transformations-and-poincare-recurrence` | A | measure-theory | 288.043 | `measure-preserving-systems-and-mixing-criteria`, `weak-mixing-and-the-chacon-transformation`, `the-lebesgue-integral-and-the-convergence-theorems`, `measures-and-their-basic-properties`, `lebesgue-measure-on-euclidean-space`, `the-maximal-function-and-lebesgue-differentiation`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `outer-measure-and-the-caratheodory-extension-theorem`, `compactness`, `countability-and-uncountability`, `the-topology-of-euclidean-space`, `sequences-and-limits` |
| 1 | `measure-preserving-transformations-and-poincare-recurrence-examples` | B | measure-theory | 288.044 | `measure-preserving-transformations-and-poincare-recurrence` |
| 3 | `central-limit-theorems` | A | probability | 288.113 | `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws`, `infinite-product-measures-and-kolmogorov-extension`, `modes-of-convergence-for-random-variables`, `weak-laws-and-series-of-independent-random-variables`, `strong-laws-of-large-numbers`, `weak-convergence-tightness-and-representation`, `characteristic-functions-inversion-and-continuity`, `the-lebesgue-integral-and-the-convergence-theorems`, `product-measures-and-the-fubini-tonelli-theorems`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `the-spectral-theorem-and-singular-value-decomposition`, `darboux-lhopital-and-taylor` |
| 3 | `central-limit-theorems-examples` | B | probability | 288.114 | `central-limit-theorems` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `measure-preserving-transformations-and-poincare-recurrence` — Measure Preserving Transformations and Poincare Recurrence (34 item(s))

- `lem-no-return-sets-have-null-preimage-towers` · lemma — No-return sets have disjoint null preimage towers
- `thm-poincare-recurrence-for-finite-measure-preserving-systems` · theorem — Poincare recurrence for finite measure-preserving systems
- `cor-topological-poincare-recurrence-on-second-countable-spaces` · corollary — Topological recurrence on second-countable spaces
- `def-first-return-time-and-induced-transformation` · definition — First-return times and induced transformations
- `prop-first-return-time-and-induced-map-are-measurable` · proposition — First-return time and induced map are measurable
- `thm-induced-transformation-preserves-the-restricted-measure` · theorem — Induced transformations preserve restricted finite measure
- `prop-inducing-preserves-ergodicity` · proposition — Inducing an ergodic system gives an ergodic system
- `thm-kac-return-time-formula` · theorem — Kac return-time formula without invertibility
- `thm-kac-integral-formula-for-excursions` · theorem — Kac integral formula for excursions
- `def-circle-rotation-and-doubling-map` · definition — The circle, rotations and the doubling map
- `prop-circle-rotations-preserve-lebesgue-measure` · proposition — Circle rotations preserve Lebesgue measure
- `lem-irrational-circle-orbits-are-dense` · lemma — Irrational circle orbits are dense
- `thm-circle-rotation-is-ergodic-iff-angle-is-irrational` · theorem — Circle rotation is ergodic for Lebesgue measure exactly at irrational angles
- `def-integer-base-map-on-the-circle` · definition — Integer-base maps and b-adic circle intervals
- `prop-integer-base-map-preserves-lebesgue-measure` · proposition — Integer-base circle maps preserve Lebesgue measure
- `thm-integer-base-map-is-strongly-mixing` · theorem — Every integer-base circle map is strongly mixing
- `prop-doubling-map-preserves-lebesgue-measure` · proposition — Doubling preserves Lebesgue measure
- `thm-doubling-map-is-ergodic-for-lebesgue-measure` · theorem — Doubling is ergodic for Lebesgue measure
- `prop-doubling-map-is-strongly-mixing` · proposition — Doubling is strongly mixing for Lebesgue measure
- `def-binary-sequence-cylinders-and-fair-coin-content` · definition — Binary-sequence cylinders and fair-coin content
- `lem-binary-sequence-space-is-compact-without-tychonoff` · lemma — Binary-sequence space is compact without Tychonoff
- `lem-fair-coin-cylinder-content-is-a-premeasure` · lemma — Fair-coin cylinder content is a premeasure
- `thm-fair-coin-measure-on-binary-sequences` · theorem — Fair-coin measure on binary sequences
- `thm-fair-coin-one-sided-shift-is-measure-preserving-and-mixing` · theorem — The fair-coin one-sided shift preserves measure and is mixing
- `lem-continuous-functions-on-a-compact-metric-space-have-a-countable-dense-family` · lemma — A countable dense family of continuous functions on a compact metric space
- `lem-positive-functionals-on-compact-metric-spaces-have-probability-representations` · lemma — A compact-metric probability representation using countable choice
- `lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences` · lemma — Probability sequences on compact metric spaces have integral-convergent subsequences
- `thm-krylov-bogolyubov-for-nonempty-compact-metric-spaces` · theorem — Krylov–Bogolyubov existence of an invariant probability
- `fs-measure-preserving-transformations-are-invertible` · false-statement — False: measure-preserving transformations are invertible
- `fs-ergodicity-implies-strong-mixing` · false-statement — False: ergodicity implies strong mixing
- `fs-poincare-recurrence-without-finite-total-measure` · false-statement — False: Poincare recurrence needs no finite total measure
- `fs-ergodicity-forces-only-empty-and-full-invariant-sets` · false-statement — False: an ergodic invariant sigma-algebra has only two sets
- `fs-ergodicity-forces-every-orbit-dense` · false-statement — False: every orbit of an ergodic system is dense
- `fs-continuous-invariant-functions-characterize-measure-ergodicity` · false-statement — False: constant continuous invariants characterize measure ergodicity

### `measure-preserving-transformations-and-poincare-recurrence-examples` — Measure Preserving Transformations and Poincare Recurrence — Examples (11 item(s))

- `ex-rational-rotation-invariant-set` · example — An explicit invariant set for a rational rotation
- `ex-doubling-dyadic-preimage-computation` · example — Dyadic preimages under doubling
- `ex-base-three-cylinder-intervals-and-preimages` · example — Base-three cylinders and their preimages
- `ex-fair-coin-cylinder-measures-tabulated` · example — Fair-coin cylinder masses and separated blocks
- `ex-doubling-recurrence-to-a-dyadic-interval` · example — Recurrence to a dyadic interval under doubling
- `ex-kac-mean-return-to-a-half-circle` · example — Kac mean return to a half-circle under irrational rotation
- `cex-mod-null-invariance-is-not-strict-invariance` · counterexample — Mod-null invariance need not be strict invariance
- `cex-doubling-ergodicity-depends-on-the-invariant-measure` · counterexample — Doubling ergodicity depends on the invariant measure
- `cex-irrational-rotation-is-not-weakly-mixing` · counterexample — Irrational rotation is ergodic but not weakly mixing
- `cex-kac-formula-needs-ergodicity` · counterexample — Kac normalization needs ergodicity
- `ex-gauss-map-preserves-gauss-measure` · example — The Gauss map preserves Gauss measure

### `central-limit-theorems` — Central Limit Theorems (16 item(s))

- `lem-characteristic-function-of-a-normal-law` · lemma — Characteristic function of a normal law
- `lem-second-order-characteristic-function-expansion` · lemma — Second-order characteristic-function expansion
- `lem-product-of-near-one-characteristic-factors` · lemma — Products of near-one characteristic factors
- `thm-lindeberg-levy-iid-central-limit-theorem` · theorem — Lindeberg-Levy iid central limit theorem
- `lem-ac-supplies-sequential-choices-for-probability-constructions` · lemma — AC supplies countable selections and prescribed serial paths
- `cor-de-moivre-laplace-central-limit-theorem` · corollary — De Moivre-Laplace central limit theorem
- `def-row-wise-independent-centered-triangular-array` · definition — Row-wise independent centered triangular array
- `def-total-row-variance-and-lindeberg-condition` · definition — Total row variance and the Lindeberg condition
- `lem-lindeberg-condition-implies-feller-negligibility` · lemma — The Lindeberg condition implies Feller negligibility
- `thm-lindeberg-feller-central-limit-theorem-sufficiency` · theorem — Lindeberg-Feller central limit theorem: sufficiency
- `thm-feller-converse-to-lindeberg-feller` · theorem — Feller converse to Lindeberg-Feller
- `cor-lyapunov-central-limit-theorem` · corollary — Lyapunov central limit theorem
- `def-multivariate-normal-law` · definition — Multivariate normal law, including singular covariance
- `lem-characteristic-function-of-a-multivariate-normal-law` · lemma — Characteristic function of a multivariate normal law
- `thm-multivariate-iid-central-limit-theorem` · theorem — Multivariate iid central limit theorem
- `rem-clt-convergence-is-only-in-distribution` · remark — Central-limit convergence is only in distribution

### `central-limit-theorems-examples` — Central Limit Theorems — Examples (7 item(s))

- `ex-normal-approximation-to-binomial-probabilities` · example — Normal approximation to binomial probabilities
- `ex-clt-for-sums-of-uniform-random-variables` · example — CLT for sums of uniform random variables
- `ex-lyapunov-condition-for-nonidentical-summands` · example — Lyapunov condition for nonidentical summands
- `ex-lindeberg-array-with-no-identically-distributed-row` · example — A Lindeberg array with no identically distributed row
- `ex-degenerate-multivariate-gaussian-limit` · example — A degenerate multivariate Gaussian limit
- `cex-clt-can-fail-with-infinite-variance-under-square-root-n-scaling` · counterexample — Infinite variance can defeat square-root-n CLT scaling
- `cex-feller-negligibility-cannot-be-removed-from-the-converse` · counterexample — Feller negligibility cannot be removed from the converse

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-17`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
