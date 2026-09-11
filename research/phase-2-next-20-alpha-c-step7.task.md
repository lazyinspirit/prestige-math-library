# Step 7 adjudication — group **c**, run `phase-2-next-20`

You are the group Alpha for batches **3**, **4**: 3 A/B pair(s), 6 page(s), 81 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-20-alpha-c-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-20-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

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

## Step-6 reader warnings

3 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-faa25d454b469f07be06f066 · `lem-uniform-sine-integral-bound-and-dirichlet-value`** (from group c, gap-a-reader-closes) — Step 2.1 derives the Cauchy estimate |S(B) - S(A)| <= 2/A for B > A >= 1 and then asserts the uniform bound |S(T)| <= 3 for all T >= 0 without the one-line assembly the reader must supply (|S(T)| <= |S(1)| + 2 for T >= 1 via the limit of the Cauchy bound, |S(T)| <= 1 for T <= 1 because |sin u / u| <= 1).
- **s8a-0de8cb4be241ffaf87d726fe · `ex-characteristic-functions-of-bernoulli-binomial-and-poisson-laws`** (from group c, presentation) — Step 3.1 passes from the mixture identity for simple functions to e^{itx} by rounding real and imaginary parts down to multiples of 2^{-N}, calling each approximation 'Borel, simple, uniformly bounded by three'; the approximations are finite-valued because |e^{itx}| = 1, but the finiteness of their range and the disjoint level-set partition that makes the simple identity apply are left implicit.
- **s8a-2dfe4b23957af942b40f178d · `rem-derivatives-at-zero-do-not-in-general-determine-the-law`** (from group c, presentation) — The remark's mathematical pointer to the examples, 'The companion's finite-support construction addresses every prescribed finite number of moments', refers to cex-equal-finitely-many-moments-do-not-determine-a-law on the companion page without a wikilink to that item and without it in deps, so the referenced construction cannot be navigated or checked from the remark itself.

Append one owning-group disposition per warning to `research/phase-2-next-20-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-20-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-20`

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

Append one row per rejection to `research/phase-2-next-20-judge-adjudications.jsonl`
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
decision in `research/phase-2-next-20-step7-alert-decisions.jsonl`. Use `not_defect` or
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
`research/phase-2-next-20-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-20-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-20-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
