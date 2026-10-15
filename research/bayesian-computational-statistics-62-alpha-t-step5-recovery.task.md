# Step 5 adjudication — group **t**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 2, 3, 4: 3 A/B pair(s), 6 page(s), 26 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **2**: `research/bayesian-computational-statistics-62-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **3**: `research/bayesian-computational-statistics-62-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **4**: `research/bayesian-computational-statistics-62-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/bayesian-computational-statistics-62-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `euler-maruyama-scheme-and-conditions` | A | numerical-analysis | 2044 | `forward-ito-sde-well-posedness` |
| 2 | `euler-maruyama-scheme-and-conditions-examples` | B | numerical-analysis | 2045 | `euler-maruyama-scheme-and-conditions` |
| 3 | `euler-maruyama-convergence` | A | numerical-analysis | 2046 | `euler-maruyama-scheme-and-conditions`, `picard-lindelof-and-first-order-odes` |
| 3 | `euler-maruyama-convergence-examples` | B | numerical-analysis | 2047 | `euler-maruyama-convergence` |
| 4 | `bayesian-models-priors-and-posterior-laws` | A | bayesian-computational-statistics | 2048 | `statistical-experiments-models-and-identifiability`, `conditional-distributions-and-regular-conditional-probability`, `losses-risk-and-decision-rules` |
| 4 | `bayesian-models-priors-and-posterior-laws-examples` | B | bayesian-computational-statistics | 2049 | `bayesian-models-priors-and-posterior-laws` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `euler-maruyama-scheme-and-conditions` — Euler–Maruyama Scheme and Coefficient Conditions (5 item(s))

- `alg-euler-maruyama` · algorithm — Euler–Maruyama recursion
- `lem-square-integrable-predictable-step-ito-integral-is-finite-sum` · lemma — A square-integrable predictable step Itô integral is its finite sum
- `def-euler-maruyama-step-process-and-continuous-interpolation` · definition — Euler–Maruyama step process and continuous interpolation
- `lem-euler-maruyama-one-step-moment-and-increment-estimates` · lemma — Euler–Maruyama one-step moment and increment estimates
- `thm-euler-maruyama-uniform-moment-and-increment-bounds` · theorem — Euler–Maruyama uniform moments and interpolation increments

### `euler-maruyama-scheme-and-conditions-examples` — Euler–Maruyama Scheme and Coefficient Conditions — Examples (2 item(s))

- `ex-euler-maruyama-additive-noise-constant-coefficients` · example — Euler–Maruyama for a constant-coefficient additive-noise equation
- `ex-euler-maruyama-superlinear-drift-outside-global-lipschitz-contract` · example — A superlinear drift outside the Euler–Maruyama moment contract

### `euler-maruyama-convergence` — Euler–Maruyama Strong and Weak Convergence (7 item(s))

- `alg-euler-maruyama-autonomous` · algorithm — Autonomous Euler–Maruyama scheme and interpolation
- `lem-brownian-ito-integral-l1-maximal-bound` · lemma — An L1 maximal bound for finite-energy Brownian Itô integrals
- `lem-euler-maruyama-autonomous-interpolation-increment-moments` · lemma — All-moment Euler interpolation increment bound under autonomous hypotheses
- `thm-euler-maruyama-strong-rate-under-higham-mao-stuart-hypotheses` · theorem — Euler–Maruyama strong rate under Higham–Mao–Stuart hypotheses
- `thm-euler-maruyama-strong-rate-for-square-integrable-initial-data` · theorem — Euler–Maruyama strong rate for square-integrable initial data
- `thm-euler-maruyama-weak-order-one-under-backward-regularity` · theorem — Euler–Maruyama weak order one under backward regularity
- `thm-shared-brownian-euler-level-correction-rates` · theorem — Shared-Brownian Euler level correction rates

### `euler-maruyama-convergence-examples` — Euler–Maruyama Strong and Weak Convergence — Examples (4 item(s))

- `ex-euler-maruyama-additive-noise-strong-error` · example — Additive-noise Ornstein–Uhlenbeck Euler strong error
- `ex-euler-maruyama-weak-order-one-for-ornstein-uhlenbeck` · example — A verified weak-order contract for the Ornstein–Uhlenbeck process
- `ex-learned-drift-bias-is-not-solver-error` · example — A learned-drift bias that persists after solver error vanishes
- `ex-shared-brownian-euler-level-coupling-rates` · example — Shared-increment Euler coupling and payoff rates

### `bayesian-models-priors-and-posterior-laws` — Bayesian models, priors, and posterior laws (4 item(s))

- `def-bayesian-model-as-prior-and-sampling-kernel` · definition — Bayesian model as a prior and sampling kernel
- `def-bayesian-posterior-as-regular-conditional-law` · definition — Bayesian posterior as a regular conditional law
- `cor-posterior-r-c-d-exists-for-standard-borel-parameter` · corollary — Posterior RCD exists for a standard-Borel parameter
- `thm-standard-borel-bayesian-posterior-kernel-exists` · theorem — Standard-Borel Bayesian posterior kernel exists

### `bayesian-models-priors-and-posterior-laws-examples` — Bayesian models, priors, and posterior laws — Examples (4 item(s))

- `ex-finite-bayesian-posterior-and-null-version` · example — A finite Bayesian update and a null-data posterior version
- `ex-omega-indexed-bayesian-posterior-r-c-d` · example — A Bayesian posterior RCD indexed by the sample point
- `ex-dominated-posterior-on-nonstandard-observation-space` · example — A dominated posterior on a nonstandard-Borel observation space
- `ex-standard-borel-posterior-kernel-on-countable-data` · example — A standard-Borel posterior kernel for countable data

## Your seams

Your pages depend on another group's:

- `euler-maruyama-scheme-and-conditions` requires `forward-ito-sde-well-posedness` (group u, batch 1)

Another group's pages depend on yours:

- `posterior-propriety-and-dominated-bayes-formula` (group a) requires your `bayesian-models-priors-and-posterior-laws`
- `multilevel-monte-carlo` (group r) requires your `euler-maruyama-convergence`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/bayesian-computational-statistics-62-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `bayesian-computational-statistics-62`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
