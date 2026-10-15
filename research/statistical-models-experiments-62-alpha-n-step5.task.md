# Step 5 adjudication — group **n**, run `statistical-models-experiments-62`

You are the group Alpha for batches 40, 41, 42: 3 A/B pair(s), 6 page(s), 22 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **40**: `research/statistical-models-experiments-62-batch-40-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **41**: `research/statistical-models-experiments-62-batch-41-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **42**: `research/statistical-models-experiments-62-batch-42-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/statistical-models-experiments-62-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 40 | `stationary-time-series-moments-and-autocovariance` | A | statistical-models-and-experiments | 1996 | `scientific-statistical-model-contracts`, `probability-spaces-random-variables-and-expectation`, `stationary-markov-chains-and-ergodic-limits` |
| 40 | `stationary-time-series-moments-and-autocovariance-examples` | B | statistical-models-and-experiments | 1997 | `stationary-time-series-moments-and-autocovariance` |
| 41 | `spectral-measures-and-periodogram-bias` | A | statistical-models-and-experiments | 1998 | `stationary-time-series-moments-and-autocovariance`, `bochner-inversion-and-plancherel-on-lca-groups` |
| 41 | `spectral-measures-and-periodogram-bias-examples` | B | statistical-models-and-experiments | 1999 | `spectral-measures-and-periodogram-bias` |
| 42 | `arma-causality-invertibility-and-spectra` | A | statistical-models-and-experiments | 2000 | `stationary-time-series-moments-and-autocovariance`, `spectral-measures-and-periodogram-bias`, `asymptotic-convergence-consistency-and-identification`, `central-limit-theorems`, `martingale-inequalities-and-convergence`, `characteristic-functions-inversion-and-continuity`, `stationary-markov-chains-and-ergodic-limits`, `strong-laws-of-large-numbers`, `discrete-time-martingales`, `modes-of-convergence-for-random-variables`, `matrix-differentiation-and-first-order-spectral-perturbation`, `product-measures-and-the-fubini-tonelli-theorems`, `gaussian-orthogonal-decomposition-and-quadratic-forms` |
| 42 | `arma-causality-invertibility-and-spectra-examples` | B | statistical-models-and-experiments | 2001 | `arma-causality-invertibility-and-spectra` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `stationary-time-series-moments-and-autocovariance` — Stationary means and sample autocovariance (4 item(s))

- `def-strict-and-weak-stationarity-for-time-series` · definition — Strict and weak stationarity for integer-indexed time series
- `def-autocovariance-and-sample-autocovariance` · definition — Autocovariance and sample autocovariance
- `cor-ergodic-time-series-sample-mean-converges-a-s-and-l1` · corollary — Ergodic time-series sample means converge almost surely and in L1
- `thm-sample-acvf-properties-and-summable-covariance-mean-consistency` · theorem — Sample-mean variance and positive semidefinite sample ACVF

### `stationary-time-series-moments-and-autocovariance-examples` — Stationary means and sample autocovariance — Examples (2 item(s))

- `ex-pairwise-uncorrelated-dependent-triple` · example — Pairwise uncorrelated data can be jointly dependent
- `cex-pair-count-normalized-sample-acvf-not-positive-semidefinite` · counterexample — Pair-count-normalized sample ACVF need not be positive semidefinite

### `spectral-measures-and-periodogram-bias` — Spectral measures and periodogram bias (5 item(s))

- `thm-discrete-integers-have-circle-dual` · theorem — The Pontryagin dual of the discrete integers is the circle
- `def-time-series-spectral-measure-and-periodogram` · definition — Spectral measures and the known-mean periodogram
- `lem-angular-fourier-orthogonality` · lemma — Integer exponentials are orthogonal for angular Lebesgue measure
- `thm-herglotz-spectrum-and-spectral-density` · theorem — Herglotz spectral measure and the summable-covariance density
- `thm-periodogram-fejer-expectation-and-smoothing-bias` · theorem — Expected periodogram and smoothed spectral-density bias

### `spectral-measures-and-periodogram-bias-examples` — Spectral measures and periodogram bias — Examples (1 item(s))

- `ex-atomic-spectrum-versus-continuous-spectral-density` · example — An atomic sinusoid and an AR(1) process have different spectra

### `arma-causality-invertibility-and-spectra` — ARMA roots, spectra and inference (7 item(s))

- `def-linear-process-and-arma-model` · definition — Linear processes, white noise, and ARMA models
- `lem-absolutely-summable-linear-filters-preserve-weak-stationarity` · lemma — Absolutely summable linear filters preserve weak stationarity
- `thm-arma-causality-and-invertibility-root-criteria` · theorem — ARMA causality and invertibility root criteria
- `thm-stationary-arma-spectral-density` · theorem — Spectral density of a stationary ARMA solution
- `thm-stable-linear-process-sample-mean-clt` · theorem — Sample-mean CLT for stable linear processes
- `thm-fixed-order-autoregressive-ols-martingale-limit` · theorem — Fixed-order autoregressive OLS martingale limit
- `cor-stable-ar-long-run-variance-plug-in-consistency` · corollary — Plug-in long-run variance for a stable AR mean

### `arma-causality-invertibility-and-spectra-examples` — ARMA roots, spectra and inference — Examples (3 item(s))

- `ex-arma-common-factor-cancellation-and-root-classification` · example — A common factor can reverse an unreduced root classification
- `ex-unit-root-precludes-nonzero-variance-stationary-ar1` · example — A unit-root AR(1) has no weakly stationary solution with nonzero white noise
- `ex-dependent-white-noise-is-not-iid` · example — Uncorrelated white noise need not be iid

## Your seams

Your pages depend on another group's:

- `stationary-time-series-moments-and-autocovariance` requires `scientific-statistical-model-contracts` (group a, batch 1)

Another group's pages depend on yours:

- `linear-prediction-for-dependent-data` (group o) requires your `stationary-time-series-moments-and-autocovariance`
- `state-space-models-as-probability-laws` (group o) requires your `stationary-time-series-moments-and-autocovariance`
- `random-fields-covariance-and-variograms` (group o) requires your `stationary-time-series-moments-and-autocovariance`
- `random-fields-covariance-and-variograms` (group o) requires your `spectral-measures-and-periodogram-bias`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/statistical-models-experiments-62-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `statistical-models-experiments-62`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
