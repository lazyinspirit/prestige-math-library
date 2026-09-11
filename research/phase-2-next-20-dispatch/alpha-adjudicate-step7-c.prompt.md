# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

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
group work, `research/phase-2-next-20-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
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
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
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

run: phase-2-next-20
role: alpha-adjudicate
label: step7-c
covers: 3, 4

# Step 7 adjudication — group **c**, run `phase-2-next-20`

You are the group Alpha for batches **3**, **4**: 3 A/B pair(s), 6 page(s), 81 item(s), 16 open rejection(s) over 16 item(s).

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
- `rem-derivatives-at-zero-do-not-in-general-determine-the-law` · remark — Derivatives at zero do not in general determine the law
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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-an-adapted-process-need-not-be-a-martingale` | `discrete-time-martingales-examples` | gpt-5.6-terra | `f6c493802933e6a46ef4d831ffebc58eec7429b6df000e0fb4bcaea96845ca36` |
| `cex-pointwise-limit-discontinuous-at-zero-signals-mass-escape` | `characteristic-functions-inversion-and-continuity-examples` | gpt-5.6-terra | `7ae54582fcaeee5d0fb8071d705672e69b5d6a9e080cd708ec3ed1969a7e18c4` |
| `cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable` | `conditional-distributions-and-regular-conditional-probability` | gpt-5.6-terra | `a4bc01e9e409858446d7bd153d6c03ad93e179bc44cee4b9d78bf78863877423` |
| `cor-submartingale-doob-decomposition-has-increasing-compensator` | `discrete-time-martingales` | gpt-5.6-terra | `3f64a597b254f78740a5d35a523432c2b37a79fe443203b00830dc769464b3f5` |
| `def-regular-conditional-probability` | `conditional-distributions-and-regular-conditional-probability` | gpt-5.6-terra | `ae5bf357710b1046f7b7dd7dee70ca09e244f116990f862f792a457dda33a79e` |
| `ex-a-deterministic-kernel-from-a-measurable-map` | `conditional-distributions-and-regular-conditional-probability-examples` | gpt-5.6-terra | `3062b02e99ae4d1feeb997c6ed6b0b2ff51f305b9ca960bd59dc0cfd04f5e227` |
| `ex-cauchy-law-and-its-characteristic-function` | `characteristic-functions-inversion-and-continuity-examples` | gpt-5.6-terra | `d29cf17c148e849a5619f6075b9cca5a1f441da38b4efb1aced58e8e49ee5e03` |
| `ex-independent-sums-via-characteristic-functions` | `characteristic-functions-inversion-and-continuity-examples` | gpt-5.6-terra | `e0ce8c703ace518b7db931e22d8182f58116a3b67131c153598c612b50b91e57` |
| `ex-likelihood-ratio-martingale` | `discrete-time-martingales-examples` | gpt-5.6-terra | `e8733ffc8ce28169ce06fc0c62b4341de8384a8fdde8937ad70f16bbdc90e3b8` |
| `ex-product-martingale-from-independent-mean-one-factors` | `discrete-time-martingales-examples` | gpt-5.6-terra | `10f23219058851331b13a88c376ac2d94cd2d3a9cffa40de77e6537a155267ff` |
| `ex-square-of-a-martingale-minus-quadratic-compensator` | `discrete-time-martingales-examples` | gpt-5.6-terra | `d0e3dcf1f986fc4f51758b34ba4e4f8b8cbe4b43702c63da5047a68cb85bae84` |
| `lem-basic-properties-of-characteristic-functions` | `characteristic-functions-inversion-and-continuity` | gpt-5.6-terra | `4d3f13aa4b609afed74f8a73c4426e0c9505e473b8ba9c70cd482812a6c35615` |
| `lem-kernel-composition-is-well-defined-and-associative` | `conditional-distributions-and-regular-conditional-probability` | gpt-5.6-terra | `d4c3e42c32da8244c7589551f2c2873c8480f86cad4a872274a8bd0ec2cc8270` |
| `lem-martingale-differences-are-orthogonal-in-l2` | `discrete-time-martingales` | gpt-5.6-terra | `d7a93898d800ee3fd9fc0fea219ffd17a6e8979bab199df1dfab3f708893b73c` |
| `rem-derivatives-at-zero-do-not-in-general-determine-the-law` | `characteristic-functions-inversion-and-continuity` | gpt-5.6-terra | `84f9bf7ea35271d19867dd35c4972b45f1b2f83677c0f6f9ef432999b055332a` |
| `thm-bayes-formula-for-dominated-kernels` | `conditional-distributions-and-regular-conditional-probability` | gpt-5.6-terra | `03274431dcef8a90a573be1b9c41291ed51318226d76c4b11f01097cd1681e64` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

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


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


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
