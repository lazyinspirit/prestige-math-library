# Step 5 adjudication — group **i**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 29, 30, 31: 3 A/B pair(s), 6 page(s), 32 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **29**: `research/bayesian-computational-statistics-62-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **30**: `research/bayesian-computational-statistics-62-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **31**: `research/bayesian-computational-statistics-62-batch-31-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 29 | `variance-reduction-and-randomized-integration` | A | bayesian-computational-statistics | 2098 | `iid-monte-carlo-integration-and-error`, `conditional-expectation` |
| 29 | `variance-reduction-and-randomized-integration-examples` | B | bayesian-computational-statistics | 2099 | `variance-reduction-and-randomized-integration` |
| 30 | `rejection-sampling` | A | bayesian-computational-statistics | 2100 | `iid-monte-carlo-integration-and-error` |
| 30 | `rejection-sampling-examples` | B | bayesian-computational-statistics | 2101 | `rejection-sampling` |
| 31 | `importance-sampling-and-weight-diagnostics` | A | bayesian-computational-statistics | 2102 | `iid-monte-carlo-integration-and-error`, `delta-method-and-asymptotic-normality` |
| 31 | `importance-sampling-and-weight-diagnostics-examples` | B | bayesian-computational-statistics | 2103 | `importance-sampling-and-weight-diagnostics` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `variance-reduction-and-randomized-integration` — Control variates, antithetics, and stratification (9 item(s))

- `def-control-variate-estimator` · definition — Control-variate estimators
- `thm-control-variate-unbiasedness-and-optimal-coefficient` · theorem — Unbiasedness and optimal coefficients for fixed controls
- `def-antithetic-randomized-sampling` · definition — Antithetic randomized sampling
- `lem-oppositely-monotone-functions-of-independent-coordinates-have-nonpositive-covariance` · lemma — Oppositely monotone functions of independent coordinates have nonpositive covariance
- `thm-antithetic-variance-and-monotone-sufficiency` · theorem — Antithetic variance and a monotone sufficient condition
- `def-stratified-monte-carlo-estimator` · definition — Stratified Monte Carlo estimator
- `thm-stratified-unbiasedness-variance-and-proportional-allocation` · theorem — Stratified estimator unbiasedness, variance, and proportional allocation
- `thm-same-sample-control-coefficient-remainder-is-op-one-over-n` · theorem — Same-sample coefficient remainder is of order $O_P(n^{-1})$
- `thm-independent-pilot-control-variate-is-conditionally-unbiased` · theorem — An independent pilot coefficient preserves conditional unbiasedness

### `variance-reduction-and-randomized-integration-examples` — Control variates, antithetics, and stratification — Examples (6 item(s))

- `ex-perfect-control-variate` · example — A perfect-correlation control removes all variance
- `ex-uncorrelated-control-variate` · example — An uncorrelated control has no variance benefit
- `ex-monotone-antithetic-pair` · example — A monotone uniform integrand has a zero-variance antithetic pair
- `ex-proportional-stratification-variance-reduction` · example — Proportional stratification reduces variance for a uniform mean
- `ex-same-sample-control-regression-bias` · example — A same-sample fitted coefficient can bias the estimator
- `ex-independent-pilot-control-variate` · example — A random pilot coefficient remains conditionally unbiased

### `rejection-sampling` — Rejection sampling (4 item(s))

- `alg-rejection-sampling` · algorithm — Rejection sampling
- `thm-counting-measure-integral-is-nonnegative-series` · theorem — Counting-measure integration is a nonnegative series
- `thm-rejection-sampling-has-target-acceptance-law` · theorem — Rejection sampling has the target acceptance law
- `thm-rejection-sampling-expected-proposal-count-under-finite-envelope` · theorem — Expected proposal count under a finite rejection envelope

### `rejection-sampling-examples` — Rejection sampling — Examples (3 item(s))

- `ex-rejection-sampling-tail-mismatch-no-finite-envelope` · example — A lighter-tailed proposal has no finite rejection envelope
- `ex-rejection-sampling-bounded-likelihood-ratio` · example — A bounded target-to-proposal density ratio
- `ex-rejection-sampling-unnormalized-finite-measures` · example — Rejection sampling with unnormalized finite masses

### `importance-sampling-and-weight-diagnostics` — Ordinary and self-normalized importance sampling (7 item(s))

- `alg-importance-sampling` · algorithm — Ordinary importance sampling
- `thm-ordinary-importance-sampling-is-unbiased` · theorem — Ordinary importance sampling is unbiased
- `thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment` · theorem — Ordinary importance sampling has finite variance and a CLT under a weighted second moment
- `alg-self-normalized-importance-sampling` · algorithm — Self-normalized importance sampling
- `thm-self-normalized-importance-sampling-is-consistent-under-finite-moments` · theorem — Self-normalized importance sampling is strongly consistent under finite first moments
- `thm-self-normalized-importance-sampling-ratio-clt-and-consistent-mcse` · theorem — Self-normalized importance sampling ratio CLT and consistent Monte Carlo standard error
- `def-importance-weight-effective-sample-size` · definition — Weight-based effective sample size

### `importance-sampling-and-weight-diagnostics-examples` — Ordinary and self-normalized importance sampling — Examples (3 item(s))

- `ex-ordinary-and-self-normalized-importance-sampling-on-two-point-space` · example — Ordinary and self-normalized importance sampling on a two-point space
- `cex-ordinary-importance-sampling-infinite-variance-under-light-tailed-proposal` · counterexample — A light-tailed proposal can give ordinary importance sampling infinite variance
- `cex-importance-weight-ess-misses-target-region` · counterexample — A high observed weight ESS can miss target mass

## Your seams

Your pages depend on another group's:

- `variance-reduction-and-randomized-integration` requires `iid-monte-carlo-integration-and-error` (group h, batch 28)
- `rejection-sampling` requires `iid-monte-carlo-integration-and-error` (group h, batch 28)
- `importance-sampling-and-weight-diagnostics` requires `iid-monte-carlo-integration-and-error` (group h, batch 28)

Another group's pages depend on yours:

- `feynman-kac-particle-filters` (group n) requires your `importance-sampling-and-weight-diagnostics`

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
