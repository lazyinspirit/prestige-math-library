# Step 5 adjudication — group **r**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 56, 57, 58: 3 A/B pair(s), 6 page(s), 31 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **56**: `research/bayesian-computational-statistics-62-batch-56-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **57**: `research/bayesian-computational-statistics-62-batch-57-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **58**: `research/bayesian-computational-statistics-62-batch-58-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 56 | `cross-validation-risk-and-model-comparison` | A | bayesian-computational-statistics | 2152 | `delta-method-and-asymptotic-normality` |
| 56 | `cross-validation-risk-and-model-comparison-examples` | B | bayesian-computational-statistics | 2153 | `cross-validation-risk-and-model-comparison` |
| 57 | `statistical-and-computational-error-accounting` | A | bayesian-computational-statistics | 2154 | `iid-monte-carlo-integration-and-error`, `resampling-algorithms-and-sampling-units`, `finite-group-permutation-inference`, `cross-validation-risk-and-model-comparison` |
| 57 | `statistical-and-computational-error-accounting-examples` | B | bayesian-computational-statistics | 2155 | `statistical-and-computational-error-accounting` |
| 58 | `multilevel-monte-carlo` | A | bayesian-computational-statistics | 2156 | `statistical-and-computational-error-accounting`, `euler-maruyama-convergence` |
| 58 | `multilevel-monte-carlo-examples` | B | bayesian-computational-statistics | 2157 | `multilevel-monte-carlo` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cross-validation-risk-and-model-comparison` — Cross-validation risk, model selection, and comparison uncertainty (6 item(s))

- `def-cross-validation-split-and-risk-target` · definition — Cross-validation splits and training-size risk targets
- `def-risk-estimation-versus-model-identification` · definition — Risk estimation versus model identification
- `alg-holdout-loo-lpo-v-fold-and-repeated-cv` · algorithm — Holdout, leave-out, V-fold, and repeated cross-validation
- `thm-cross-validation-risk-bias-at-training-size` · theorem — Cross-validation estimates risk at its training sizes
- `lem-kfold-cv-variance-covariance-decomposition` · lemma — The covariance decomposition of a fixed K-fold score
- `thm-no-universal-unbiased-k-fold-cv-variance-estimator` · theorem — No universal unbiased estimator of K-fold cross-validation variance

### `cross-validation-risk-and-model-comparison-examples` — Cross-validation risk, model selection, and comparison uncertainty — Examples (4 item(s))

- `ex-holdout-cv-training-size-bias` · example — A holdout estimate targets a smaller training sample
- `ex-paired-kfold-model-comparison-uncertainty` · example — Paired K-fold comparison retains correlated fold errors
- `ex-random-row-split-leaks-group-information` · example — Random row splits leak repeated-group information
- `ex-cross-validation-risk-minimization-does-not-identify-model` · example — Equal predictive risks do not identify a model label

### `statistical-and-computational-error-accounting` — Statistical, resampling, simulation, and numerical error ledger (5 item(s))

- `def-statistical-and-computational-error-ledger` · definition — Successive statistical and computational error targets
- `thm-pathwise-error-ledger-decomposition` · theorem — Pathwise error decomposition along a reference chain
- `thm-error-ledger-mse-covariance-identity` · theorem — MSE of a sum of error components includes covariance terms
- `thm-independent-replicate-variance-estimator` · theorem — Unbiased variance estimate from independent computation replicates
- `cor-independent-replicate-mean-clt` · corollary — CLT for independent computation replicates

### `statistical-and-computational-error-accounting-examples` — Statistical, resampling, simulation, and numerical error ledger — Examples (6 item(s))

- `ex-bootstrap-finite-b-versus-sampling-error` · example — Sampling and finite-bootstrap errors for a Bernoulli mean
- `ex-permutation-pvalue-resolution` · example — Exact-orbit and finite-B permutation p-value resolution
- `ex-euler-discretization-bias-and-path-variance` · example — Euler discretization bias and path-to-path variance
- `ex-rqmc-replicate-error-estimate` · example — Replicate variance for randomized quadrature
- `ex-dot-product-roundoff-and-conditioning` · example — Dot-product cancellation under normal-range rounding
- `ex-correlated-error-components` · example — Perfectly correlated error components

### `multilevel-monte-carlo` — Multilevel Monte Carlo and cost theorem (5 item(s))

- `def-mlmc-hierarchy-and-coupled-corrections` · definition — Geometric MLMC hierarchy and coupled corrections
- `lem-mlmc-estimator-moments-and-mse` · lemma — Expectation, variance, and MSE of a finite MLMC estimator
- `thm-mlmc-complexity-under-rate-assumptions` · theorem — MLMC cost complexity under bias, variance, and work rates
- `cor-mlmc-euler-hms-autonomous-cost-rate` · corollary — Autonomous all-moment Euler MLMC logarithmic cost
- `cor-mlmc-euler-finite-l2-and-weak-cost-rate` · corollary — Finite-L2 strong and conditional weak Euler MLMC cost

### `multilevel-monte-carlo-examples` — Multilevel Monte Carlo and cost theorem — Examples (5 item(s))

- `ex-mlmc-finite-level-telescoping-and-bias` · example — A three-level telescoping estimator and its remaining bias
- `ex-mlmc-euler-strong-and-weak-cost-regimes` · example — Euler strong, weak, and autonomous MLMC rate contracts
- `ex-mlmc-discontinuous-payoff-half-rate` · example — A discontinuous payoff with bias order one and variance order one-half
- `cex-mlmc-no-bias-rate-no-accuracy` · counterexample — Finite correction variance cannot replace bias control
- `cex-mlmc-no-positive-variance-decay` · counterexample — Nondecaying correction variance can force cubic cost

## Your seams

Your pages depend on another group's:

- `statistical-and-computational-error-accounting` requires `iid-monte-carlo-integration-and-error` (group h, batch 28)
- `statistical-and-computational-error-accounting` requires `resampling-algorithms-and-sampling-units` (group p, batch 50)
- `statistical-and-computational-error-accounting` requires `finite-group-permutation-inference` (group q, batch 54)
- `multilevel-monte-carlo` requires `euler-maruyama-convergence` (group t, batch 3)

Another group's pages depend on yours:

- `quasi-monte-carlo-discrepancy-and-rules` (group s) requires your `statistical-and-computational-error-accounting`
- `identifiability-and-approximation-bias-in-computational-inference` (group u) requires your `statistical-and-computational-error-accounting`

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

# Step 5 batch adjudication, `bayesian-computational-statistics-62`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
