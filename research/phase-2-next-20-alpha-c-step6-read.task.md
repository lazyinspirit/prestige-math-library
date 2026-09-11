# Step 6 whole-group reading — group **c**, run `phase-2-next-20`

You are the group Alpha for batches **3**, **4**: 3 A/B pair(s), 6 page(s), 81 item(s).

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
| 3 | `characteristic-functions-inversion-and-continuity` | A | probability | 288.111 | `probability-spaces-random-variables-and-expectation`, `modes-of-convergence-for-random-variables`, `weak-convergence-tightness-and-representation`, `product-measures-and-the-fubini-tonelli-theorems`, `fourier-transform-convolution-and-approximate-identities` |
| 3 | `characteristic-functions-inversion-and-continuity-examples` | B | probability | 288.112 | `characteristic-functions-inversion-and-continuity` |
| 3 | `conditional-distributions-and-regular-conditional-probability` | A | probability | 288.117 | `probability-spaces-random-variables-and-expectation`, `infinite-product-measures-and-kolmogorov-extension`, `weak-convergence-tightness-and-representation`, `conditional-expectation`, `standard-borel-real-codings-and-determining-classes`, `sigma-algebras-and-borel-sets`, `product-measures-and-the-fubini-tonelli-theorems`, `the-radon-nikodym-theorem-and-lebesgue-decomposition`, `complete-metrizability-and-baire` |
| 3 | `conditional-distributions-and-regular-conditional-probability-examples` | B | probability | 288.118 | `conditional-distributions-and-regular-conditional-probability` |
| 4 | `discrete-time-martingales` | A | probability | 288.119 | `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws`, `conditional-expectation`, `the-lebesgue-integral-and-the-convergence-theorems`, `modes-of-convergence-egorov-and-lusin`, `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| 4 | `discrete-time-martingales-examples` | B | probability | 288.12 | `discrete-time-martingales` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `characteristic-functions-inversion-and-continuity` — Characteristic Functions Inversion and Continuity (17 item(s))

- `def-characteristic-function-of-a-real-random-variable` · definition — Characteristic function of a real random variable
- `lem-basic-properties-of-characteristic-functions` · lemma — Basic properties of characteristic functions
- `lem-characteristic-functions-under-affine-maps-and-independent-sums` · lemma — Characteristic functions under affine maps and independent sums
- `def-positive-definite-function-on-the-real-line` · definition — Positive definite function on the real line
- `lem-characteristic-functions-are-positive-definite` · lemma — Characteristic functions are positive definite
- `rem-characteristic-function-fourier-stieltjes-convention` · remark — Characteristic function fourier stieltjes convention
- `thm-uniqueness-of-a-law-from-its-characteristic-function` · theorem — Uniqueness of a law from its characteristic function
- `lem-uniform-sine-integral-bound-and-dirichlet-value` · lemma — Uniform sine integral bound and dirichlet value
- `thm-levy-inversion-formula` · theorem — Levy inversion formula
- `cor-density-inversion-from-an-integrable-characteristic-function` · corollary — Density inversion from an integrable characteristic function
- `lem-moments-give-derivatives-of-the-characteristic-function` · lemma — Moments give derivatives of the characteristic function
- `rem-derivatives-at-zero-do-not-in-general-determine-the-law` · remark — A prescribed finite jet at zero does not determine the law
- `thm-levy-continuity-theorem-forward-direction` · theorem — Levy continuity theorem forward direction
- `thm-tightness-from-characteristic-function-equicontinuity-at-zero` · theorem — Tightness from characteristic function equicontinuity at zero
- `thm-levy-continuity-theorem-converse` · theorem — Levy continuity theorem converse
- `cor-characteristic-function-criterion-for-weak-convergence` · corollary — Characteristic function criterion for weak convergence
- `thm-cramer-wold-device` · theorem — Cramer wold device

### `characteristic-functions-inversion-and-continuity-examples` — Characteristic Functions Inversion and Continuity — Examples (8 item(s))

- `ex-characteristic-functions-of-bernoulli-binomial-and-poisson-laws` · example — Characteristic functions of bernoulli binomial and poisson laws
- `ex-characteristic-function-of-the-uniform-law` · example — Characteristic function of the uniform law
- `ex-characteristic-function-of-a-gaussian-law` · example — Characteristic function of a gaussian law
- `ex-cauchy-law-and-its-characteristic-function` · example — Cauchy law and its characteristic function
- `ex-independent-sums-via-characteristic-functions` · example — Independent sums via characteristic functions
- `ex-density-inversion-for-a-triangular-characteristic-function` · example — Density inversion for a triangular characteristic function
- `cex-pointwise-limit-discontinuous-at-zero-signals-mass-escape` · counterexample — Pointwise limit discontinuous at zero signals mass escape
- `cex-equal-finitely-many-moments-do-not-determine-a-law` · counterexample — Equal finitely many moments do not determine a law

### `conditional-distributions-and-regular-conditional-probability` — Conditional Distributions and Regular Conditional Probability (18 item(s))

- `def-measure-kernel-and-probability-kernel` · definition — Measure kernel and probability kernel
- `thm-measurability-of-integration-against-a-kernel` · theorem — Measurability of integration against a kernel
- `def-composition-of-probability-kernels` · definition — Composition of probability kernels
- `lem-kernel-composition-is-well-defined-and-associative` · lemma — Kernel composition is well defined and associative
- `def-conditional-probability-given-a-sigma-algebra` · definition — Conditional probability given a sigma algebra
- `def-regular-conditional-distribution` · definition — Regular conditional distribution
- `def-regular-conditional-probability` · definition — Regular conditional probability
- `lem-simultaneous-rational-conditional-distribution-function-versions` · lemma — Simultaneous rational conditional distribution function versions
- `lem-rational-conditional-distribution-functions-produce-real-regular-kernels` · lemma — Rational conditional distribution functions produce real regular kernels
- `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets` · theorem — Existence of regular conditional distributions for standard borel targets
- `lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions` · lemma — Simultaneous ae uniqueness of regular conditional distributions
- `thm-conditional-integration-through-a-regular-conditional-law` · theorem — Conditional integration through a regular conditional law
- `def-conditional-law-given-a-random-element` · definition — Conditional law given a random element
- `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable` · lemma — Regular conditional kernels factor through a standard borel conditioning variable
- `thm-disintegration-of-a-joint-law-on-standard-borel-spaces` · theorem — Disintegration of a joint law on standard borel spaces
- `cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable` · corollary — Conditional expectation as a measurable function of the conditioning variable
- `thm-conditional-density-formula` · theorem — Conditional density formula
- `thm-bayes-formula-for-dominated-kernels` · theorem — Bayes formula for dominated kernels

### `conditional-distributions-and-regular-conditional-probability-examples` — Conditional Distributions and Regular Conditional Probability — Examples (8 item(s))

- `ex-regular-conditional-law-for-a-finite-partition` · example — Regular conditional law for a finite partition
- `ex-conditional-density-of-a-bivariate-normal-law` · example — Conditional density of a bivariate normal law
- `ex-conditioning-independent-variables-leaves-the-marginal-law` · example — Conditioning independent variables leaves the marginal law
- `ex-bayes-formula-for-a-finite-mixture-with-continuous-observation` · example — Bayes formula for a finite mixture with continuous observation
- `ex-regular-conditional-law-of-one-coordinate-given-another` · example — Regular conditional law of one coordinate given another
- `ex-a-deterministic-kernel-from-a-measurable-map` · example — A deterministic kernel from a measurable map
- `cex-the-density-ratio-is-undefined-on-zero-marginal-fibres` · counterexample — The density ratio is undefined on zero marginal fibres
- `cex-regular-conditional-laws-are-not-unique-on-null-conditioning-values` · counterexample — Regular conditional laws are not unique on null conditioning values

### `discrete-time-martingales` — Discrete Time Martingales (21 item(s))

- `def-filtration-and-filtered-probability-space` · definition — Filtration and filtered probability space
- `def-adapted-and-integrable-stochastic-process` · definition — Adapted and integrable stochastic process
- `def-natural-filtration-of-a-process` · definition — Natural filtration of a process
- `def-martingale-submartingale-and-supermartingale` · definition — Martingale submartingale and supermartingale
- `lem-multistep-martingale-characterization` · lemma — Multistep martingale characterization
- `lem-conditional-expectation-process-is-a-martingale` · lemma — Conditional expectation process is a martingale
- `def-martingale-difference-sequence` · definition — Martingale difference sequence
- `thm-martingales-and-martingale-differences-correspond` · theorem — Martingales and martingale differences correspond
- `lem-martingale-differences-are-orthogonal-in-l2` · lemma — Martingale differences are orthogonal in l2
- `thm-convex-functions-of-martingales-are-submartingales` · theorem — Convex functions of martingales are submartingales
- `cor-absolute-value-and-powers-of-a-martingale-are-submartingales` · corollary — Absolute value and powers of a martingale are submartingales
- `def-predictable-discrete-time-process` · definition — Predictable discrete time process
- `def-discrete-martingale-transform` · definition — Discrete martingale transform
- `thm-bounded-predictable-transforms-preserve-martingales` · theorem — Bounded predictable transforms preserve martingales
- `cor-nonnegative-predictable-transforms-preserve-submartingale-gains` · corollary — Nonnegative predictable transforms preserve submartingale gains
- `def-compensator-and-doob-decomposition` · definition — Compensator and doob decomposition
- `thm-doob-decomposition-of-an-integrable-adapted-process` · theorem — Doob decomposition of an integrable adapted process
- `cor-submartingale-doob-decomposition-has-increasing-compensator` · corollary — Submartingale doob decomposition has increasing compensator
- `def-predictable-quadratic-variation-in-discrete-time` · definition — Predictable quadratic variation in discrete time
- `thm-square-minus-predictable-quadratic-variation-is-a-martingale` · theorem — Square minus predictable quadratic variation is a martingale
- `cor-second-moment-is-the-expected-predictable-quadratic-variation` · corollary — Second moment is the expected predictable quadratic variation

### `discrete-time-martingales-examples` — Discrete Time Martingales — Examples (9 item(s))

- `ex-partial-sums-of-independent-centered-variables-are-a-martingale` · example — Partial sums of independent centered variables are a martingale
- `ex-product-martingale-from-independent-mean-one-factors` · example — Product martingale from independent mean one factors
- `ex-likelihood-ratio-martingale` · example — Likelihood ratio martingale
- `ex-polya-urn-proportion-martingale` · example — Polya urn proportion martingale
- `ex-dyadic-conditional-expectation-martingale` · example — Dyadic conditional expectation martingale
- `ex-square-of-a-martingale-minus-quadratic-compensator` · example — Square of a martingale minus quadratic compensator
- `cex-an-adapted-process-need-not-be-a-martingale` · counterexample — An adapted process need not be a martingale
- `cex-an-unbounded-predictable-transform-may-lose-integrability` · counterexample — An unbounded predictable transform may lose integrability
- `cex-a-submartingale-need-not-have-increasing-sample-paths` · counterexample — A submartingale need not have increasing sample paths

## Your seams

Your pages depend on another group's:

- `characteristic-functions-inversion-and-continuity` requires `fourier-transform-convolution-and-approximate-identities` (group b, batch 15)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 — group reading digest, `phase-2-next-20`

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
