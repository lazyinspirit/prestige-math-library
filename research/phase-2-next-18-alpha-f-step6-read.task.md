# Step 6 whole-group reading — group **f**, run `phase-2-next-18`

You are the group Alpha for batches **2**: 2 A/B pair(s), 4 page(s), 60 item(s).

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
| 2 | `markov-kernels-and-markov-chains` | A | probability | 288.125 | `infinite-product-measures-and-kolmogorov-extension`, `conditional-expectation`, `conditional-distributions-and-regular-conditional-probability`, `stopping-times-and-optional-stopping`, `product-measures-and-the-fubini-tonelli-theorems` |
| 2 | `markov-kernels-and-markov-chains-examples` | B | probability | 288.126 | `markov-kernels-and-markov-chains` |
| 2 | `brownian-motion-construction-and-continuity` | A | probability | 288.131 | `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws`, `infinite-product-measures-and-kolmogorov-extension`, `weak-convergence-tightness-and-representation`, `central-limit-theorems`, `markov-kernels-and-markov-chains`, `product-measures-and-the-fubini-tonelli-theorems`, `complete-metrizability-and-baire`, `function-space-topologies` |
| 2 | `brownian-motion-construction-and-continuity-examples` | B | probability | 288.132 | `brownian-motion-construction-and-continuity` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `markov-kernels-and-markov-chains` — Markov Kernels and Markov Chains (22 item(s))

- `def-time-homogeneous-markov-chain-with-transition-kernel` · definition — Time-homogeneous Markov chain with transition kernel
- `lem-bounded-function-form-of-the-markov-property` · lemma — Bounded-function form of the Markov property
- `def-conditional-independence-given-a-sigma-algebra` · definition — Conditional independence given a sigma-algebra
- `lem-conditional-independence-equivalences-and-preservation` · lemma — Conditional-independence equivalences and preservation
- `lem-conditional-independence-splicing-over-a-standard-borel-variable` · lemma — Conditional-independence splice lemma
- `thm-markov-property-as-past-future-conditional-independence` · theorem — The Markov property is past-future conditional independence
- `def-initial-distribution-of-a-markov-chain` · definition — Initial distribution of a Markov chain
- `def-iterated-transition-kernels` · definition — Iterated transition kernels
- `thm-chapman-kolmogorov-equations` · theorem — Chapman-Kolmogorov equations
- `thm-finite-dimensional-laws-of-a-markov-chain` · theorem — Finite-dimensional laws of a Markov chain
- `thm-ionescu-tulcea-construction-of-a-markov-chain` · theorem — Ionescu-Tulcea construction of a Markov chain
- `cor-canonical-markov-chain-on-path-space` · corollary — Canonical Markov chain on path space
- `thm-markov-chain-law-is-determined-by-initial-law-and-kernel` · theorem — A Markov-chain law is determined by its initial law and kernel
- `def-shift-operator-and-future-coordinate-sigma-algebra` · definition — Shift operator and future-coordinate sigma-algebra
- `thm-markov-property-for-bounded-future-path-functionals` · theorem — Markov property for bounded future path functionals
- `thm-discrete-strong-markov-property` · theorem — Discrete strong Markov property
- `cor-post-hitting-chain-restarts-from-the-hit-state` · corollary — The post-hitting chain restarts from the hit state
- `def-killed-and-absorbed-transition-kernels` · definition — Killed and absorbed transition kernels
- `lem-killed-and-absorbed-kernels-are-probability-kernels` · lemma — Killed and absorbed kernels are probability kernels
- `def-discrete-generator-of-a-countable-state-transition-matrix` · definition — Discrete generator of a countable-state transition matrix
- `thm-countable-state-martingale-problem-characterization` · theorem — Countable-state martingale-problem characterization
- `cor-bounded-harmonic-functions-yield-markov-chain-martingales` · corollary — Bounded harmonic functions yield Markov-chain martingales

### `markov-kernels-and-markov-chains-examples` — Markov Kernels and Markov Chains — Examples (9 item(s))

- `ex-iid-sequences-as-markov-chains-with-state-independent-kernel` · example — IID sequences as Markov chains with state-independent kernel
- `ex-deterministic-dynamical-system-as-a-markov-kernel` · example — A deterministic dynamical system as a Markov kernel
- `ex-simple-random-walk-transition-kernel` · example — Simple random-walk transition kernel
- `ex-absorbing-gamblers-ruin-chain` · example — Absorbing gambler's-ruin chain
- `ex-gaussian-ar-one-chain` · example — Gaussian AR(1) chain
- `ex-random-mapping-representation-for-a-finite-transition-matrix` · example — Random-mapping representation for a finite transition matrix
- `cex-identical-one-step-marginals-do-not-determine-a-markov-chain` · counterexample — Identical one-time marginals do not determine a Markov chain
- `cex-a-process-with-the-right-transition-probabilities-relative-to-its-natural-filtration-may-fail-for-a-larger-filtration` · counterexample — The Markov property can fail for a larger filtration
- `cex-time-inhomogeneous-chain-cannot-be-encoded-by-one-kernel-without-enlarging-state` · counterexample — A time-inhomogeneous chain may require enlarged state

### `brownian-motion-construction-and-continuity` — Brownian Motion Construction and Continuity (21 item(s))

- `def-gaussian-process` · definition — Gaussian process
- `lem-mean-and-covariance-determine-gaussian-finite-dimensional-laws` · lemma — Mean and covariance determine Gaussian finite-dimensional laws
- `lem-positive-semidefiniteness-of-the-brownian-covariance-kernel` · lemma — Positive semidefiniteness of the Brownian covariance kernel
- `lem-consistency-of-brownian-finite-dimensional-laws` · lemma — Consistency of Brownian finite-dimensional laws
- `thm-kolmogorov-construction-of-the-canonical-gaussian-process` · theorem — Kolmogorov construction of the canonical Gaussian process
- `lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments` · lemma — Brownian covariance is equivalent to independent stationary normal increments
- `def-brownian-motion` · definition — Brownian motion
- `thm-kolmogorov-continuity-criterion-one-parameter` · theorem — Kolmogorov continuity criterion in one parameter
- `lem-gaussian-even-moment-bound-for-brownian-increments` · lemma — Gaussian even-moment bound for Brownian increments
- `thm-existence-of-continuous-brownian-motion` · theorem — Existence of continuous Brownian motion
- `cor-brownian-paths-are-locally-holder-of-every-order-below-one-half` · corollary — Brownian paths are locally Holder below one half
- `def-uniform-on-compacts-metric-on-continuous-path-space` · definition — Uniform-on-compacts metric on continuous path space
- `lem-continuous-path-space-is-polish` · lemma — Under countable choice, continuous path space is Polish
- `def-wiener-measure-on-continuous-path-space` · definition — Wiener measure on continuous path space
- `lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates` · lemma — Borel sigma-algebra of continuous path space is generated by coordinates
- `thm-uniqueness-of-wiener-measure` · theorem — Uniqueness of Wiener measure
- `thm-brownian-scaling` · theorem — Brownian scaling
- `thm-brownian-time-inversion` · theorem — Brownian time inversion
- `def-d-dimensional-brownian-motion` · definition — d-dimensional Brownian motion
- `cor-existence-and-scaling-of-d-dimensional-brownian-motion` · corollary — Existence and scaling of d-dimensional Brownian motion
- `def-continuous-time-filtration-and-all-pairs-martingale` · definition — Continuous-time filtrations and all-pairs martingales

### `brownian-motion-construction-and-continuity-examples` — Brownian Motion Construction and Continuity — Examples (8 item(s))

- `ex-brownian-finite-dimensional-density` · example — Brownian finite-dimensional density
- `ex-covariance-of-overlapping-brownian-increments` · example — Covariance of overlapping Brownian increments
- `ex-linear-combinations-of-brownian-values-are-gaussian` · example — Linear combinations of Brownian values are Gaussian
- `ex-brownian-bridge-from-brownian-motion` · example — Brownian bridge from Brownian motion
- `ex-deterministic-integral-construction-of-a-gaussian-process` · example — A deterministic integral construction of a Gaussian process
- `ex-multidimensional-brownian-radial-second-moment` · example — Radial second moment of multidimensional Brownian motion
- `cex-kolmogorov-extension-alone-does-not-give-a-continuous-version` · counterexample — Kolmogorov extension alone does not give a continuous version
- `cex-modifying-a-process-at-each-time-can-destroy-path-continuity-on-an-uncountable-index-set` · counterexample — Pointwise modification can destroy path continuity

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-18`

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
