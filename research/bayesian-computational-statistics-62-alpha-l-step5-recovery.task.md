# Step 5 adjudication — group **l**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 38, 39, 40: 3 A/B pair(s), 6 page(s), 43 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **38**: `research/bayesian-computational-statistics-62-batch-38-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **39**: `research/bayesian-computational-statistics-62-batch-39-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **40**: `research/bayesian-computational-statistics-62-batch-40-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 38 | `langevin-monte-carlo-mala-and-ula` | A | bayesian-computational-statistics | 2116 | `numerical-optimization-for-statistical-computation`, `metropolis-hastings-algorithm-and-invariance`, `forward-ito-sde-well-posedness`, `conjugate-families-and-posterior-prediction`, `structural-causal-models-dags-and-adjustment`, `linear-prediction-for-dependent-data` |
| 38 | `langevin-monte-carlo-mala-and-ula-examples` | B | bayesian-computational-statistics | 2117 | `langevin-monte-carlo-mala-and-ula` |
| 39 | `adaptive-mcmc-convergence-and-limitations` | A | bayesian-computational-statistics | 2118 | `mcmc-ergodicity-and-mixing` |
| 39 | `adaptive-mcmc-convergence-and-limitations-examples` | B | bayesian-computational-statistics | 2119 | `adaptive-mcmc-convergence-and-limitations` |
| 40 | `mcmc-diagnostics-and-finite-run-limitations` | A | bayesian-computational-statistics | 2120 | `mcmc-clt-and-monte-carlo-standard-error`, `adaptive-mcmc-convergence-and-limitations` |
| 40 | `mcmc-diagnostics-and-finite-run-limitations-examples` | B | bayesian-computational-statistics | 2121 | `mcmc-diagnostics-and-finite-run-limitations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `langevin-monte-carlo-mala-and-ula` — Langevin algorithms: ULA bias and MALA exactness (17 item(s))

- `def-v-weighted-total-variation-distance` · definition — Weighted total variation for probability measures
- `lem-ula-potential-coercivity-from-radial-drift` · lemma — Radial gradient drift forces potential coercivity
- `lem-langevin-potential-exponential-generator-drift` · lemma — Exponential Lyapunov drift for the formal Langevin generator
- `alg-unadjusted-langevin-algorithm` · algorithm — Unadjusted Langevin algorithm (ULA)
- `lem-weighted-pinsker-inequality-for-probability-laws` · lemma — A weighted total-variation bound from relative entropy
- `lem-weighted-drift-minorization-gives-contraction-and-invariant-law` · lemma — Global drift and one-step minorization give weighted contraction and a unique invariant law
- `lem-langevin-gaussian-proposal-kernel` · lemma — The ULA Gaussian proposal is a probability kernel with a positive density
- `thm-ula-gaussian-target-invariant-law-and-stationary-variance` · theorem — The Gaussian ULA invariant law has variance $2/(2-\gamma)$
- `lem-ula-fixed-step-gaussian-kernel-exponential-drift` · lemma — ULA's Gaussian kernel satisfies an exponential drift bound
- `alg-metropolis-adjusted-langevin-algorithm` · algorithm — Metropolis-adjusted Langevin algorithm (MALA)
- `lem-finite-horizon-girsanov-and-relative-entropy-for-lipschitz-drifts` · lemma — Finite-horizon Brownian change of drift and relative entropy
- `thm-metropolis-adjusted-langevin-target-invariant` · theorem — MALA preserves its target probability exactly
- `lem-ula-pathwise-kl-error-bound` · lemma — Pathwise relative-entropy error of the Langevin Euler interpolation
- `lem-langevin-diffusion-density-reversibility-and-compact-minorization` · lemma — Langevin diffusion has a reversible density and compact minorization
- `lem-ula-uniform-exponential-moments-and-invariant-laws` · lemma — ULA invariant laws have uniform exponential moments on the needed step ranges
- `thm-langevin-diffusion-weighted-geometric-ergodicity-under-radial-drift` · theorem — Radial drift gives weighted geometric contraction of Langevin diffusion
- `thm-ula-quantitative-invariant-law-weighted-tv-bias` · theorem — ULA's invariant-law bias under smoothness and radial drift

### `langevin-monte-carlo-mala-and-ula-examples` — Langevin algorithms: ULA bias and MALA exactness — Examples (3 item(s))

- `ex-ula-critical-step-has-no-invariant-law` · example — At the critical quadratic ULA step size, no invariant law exists
- `ex-ula-gaussian-target-stationary-bias` · example — ULA has a biased invariant variance for a standard Gaussian target
- `ex-mala-gaussian-target-acceptance-correction` · example — MALA corrects the Gaussian ULA proposal with a Hastings ratio

### `adaptive-mcmc-convergence-and-limitations` — Adaptive MCMC convergence limits (6 item(s))

- `def-diminishing-adaptation` · definition — Diminishing adaptation
- `def-adaptive-mcmc-containment` · definition — Containment for adaptive MCMC
- `lem-adaptive-mcmc-block-perturbation-bound` · lemma — Finite-block perturbation bound for adaptive MCMC
- `lem-adaptive-mcmc-uniform-drift-minorization-bound` · lemma — Common drift and strongly aperiodic minorization give a uniform geometric bound
- `thm-adaptive-mcmc-converges-under-uniform-ergodicity-or-containment` · theorem — Adaptive MCMC marginal convergence under diminishing adaptation with uniform ergodicity or containment
- `cor-adaptive-mcmc-containment-from-uniform-drift-minorization` · corollary — Common drift and minorization give containment under diminishing adaptation, strong aperiodicity, and a finite initial V-moment

### `adaptive-mcmc-convergence-and-limitations-examples` — Adaptive MCMC convergence limits — Examples (3 item(s))

- `cex-diminishing-adaptation-alone-does-not-imply-strong-law` · counterexample — Diminishing adaptation and uniform ergodicity need not give a strong law
- `ex-adaptive-mcmc-loss-of-containment` · example — Diminishing adaptation with loss of containment
- `ex-uniformly-ergodic-adaptive-mcmc-family` · example — A uniformly ergodic adaptive refresh family

### `mcmc-diagnostics-and-finite-run-limitations` — MCMC diagnostics and finite-run limitations (10 item(s))

- `def-blom-rank-normalization-for-pooled-draws` · definition — Blom rank-normal scores for pooled draws
- `def-empirical-left-quantile-for-finite-draws` · definition — Left empirical quantile of finite draws
- `def-standard-cauchy-law` · definition — Standard Cauchy probability law
- `def-functional-specific-effective-sample-size` · definition — Functional-specific effective sample size
- `alg-split-rhat-from-multiple-chains` · algorithm — Split R-hat from multiple chains
- `alg-multichain-effective-sample-size` · algorithm — Split multi-chain autocorrelation effective sample size
- `alg-rank-normalized-folded-split-rhat` · algorithm — Rank-normalized folded split R-hat
- `alg-bulk-effective-sample-size` · algorithm — Bulk effective sample size
- `alg-tail-effective-sample-size` · algorithm — Tail effective sample size
- `alg-quantile-monte-carlo-standard-error` · algorithm — Quantile Monte Carlo standard error

### `mcmc-diagnostics-and-finite-run-limitations-examples` — MCMC diagnostics and finite-run limitations — Examples (4 item(s))

- `ex-thinning-can-mask-sticky-mcmc-output` · example — Thinning lowers observed lag correlation but discards information
- `ex-shared-funnel-region-missed-by-all-chains` · example — A shared missed region in a finite funnel-shaped target
- `ex-cauchy-heavy-tail-and-location-shift-rhat` · example — Heavy tails and a location shift in split R-hat
- `ex-centered-eight-schools-low-tail-ess-and-thinning` · example — Centered eight-schools runs show small R-hat with low tail ESS

## Your seams

Your pages depend on another group's:

- `langevin-monte-carlo-mala-and-ula` requires `numerical-optimization-for-statistical-computation` (group g, batch 23)
- `langevin-monte-carlo-mala-and-ula` requires `metropolis-hastings-algorithm-and-invariance` (group j, batch 33)
- `langevin-monte-carlo-mala-and-ula` requires `forward-ito-sde-well-posedness` (group u, batch 1)
- `langevin-monte-carlo-mala-and-ula` requires `conjugate-families-and-posterior-prediction` (group a, batch 6)
- `adaptive-mcmc-convergence-and-limitations` requires `mcmc-ergodicity-and-mixing` (group k, batch 35)
- `mcmc-diagnostics-and-finite-run-limitations` requires `mcmc-clt-and-monte-carlo-standard-error` (group k, batch 36)

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
