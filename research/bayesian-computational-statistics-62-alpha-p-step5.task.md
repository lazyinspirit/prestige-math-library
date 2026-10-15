# Step 5 adjudication — group **p**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 50, 51, 52: 3 A/B pair(s), 6 page(s), 43 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **50**: `research/bayesian-computational-statistics-62-batch-50-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **51**: `research/bayesian-computational-statistics-62-batch-51-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **52**: `research/bayesian-computational-statistics-62-batch-52-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 50 | `resampling-algorithms-and-sampling-units` | A | bayesian-computational-statistics | 2140 | `randomized-treatment-assignment-and-sharp-null-tests` |
| 50 | `resampling-algorithms-and-sampling-units-examples` | B | bayesian-computational-statistics | 2141 | `resampling-algorithms-and-sampling-units` |
| 51 | `iid-bootstrap-and-jackknife-validity` | A | bayesian-computational-statistics | 2142 | `resampling-algorithms-and-sampling-units`, `delta-method-and-asymptotic-normality`, `confidence-sets-pivots-and-test-inversion`, `polyhedral-selective-inference` |
| 51 | `iid-bootstrap-and-jackknife-validity-examples` | B | bayesian-computational-statistics | 2143 | `iid-bootstrap-and-jackknife-validity` |
| 52 | `bootstrap-failure-and-subsampling` | A | bayesian-computational-statistics | 2144 | `iid-bootstrap-and-jackknife-validity`, `robust-influence-and-breakdown`, `power-and-sample-size-planning`, `detection-and-quantification-limits` |
| 52 | `bootstrap-failure-and-subsampling-examples` | B | bayesian-computational-statistics | 2145 | `bootstrap-failure-and-subsampling` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `resampling-algorithms-and-sampling-units` — Resampling schemes and the sampling-unit contract (8 item(s))

- `def-resampling-sampling-unit-contract` · definition — Sampling units and the resampling-unit contract
- `def-empirical-measure` · definition — Empirical measure of observed units
- `lem-uniform-law-on-finite-subset-families` · lemma — Uniform laws on finite subset families
- `lem-empirical-measure-is-a-probability-measure` · lemma — The empirical measure is a probability measure
- `alg-delete-d-jackknife-replicates` · algorithm — Delete-d jackknife replicates and their uniform average
- `alg-uniform-subsampling-without-replacement` · algorithm — Uniform subsampling without replacement
- `alg-n-out-of-n-bootstrap-from-empirical-law` · algorithm — Size-n bootstrap from the empirical law
- `thm-bootstrap-draws-are-conditionally-iid-empirical-law` · theorem — Empirical-law bootstrap draws are conditionally IID

### `resampling-algorithms-and-sampling-units-examples` — Resampling schemes and the sampling-unit contract — Examples (5 item(s))

- `ex-two-point-bootstrap-sample-mean` · example — The bootstrap law of a two-point sample mean
- `ex-delete-d-and-subsampling` · example — Delete-d replicates and subsampling on four units
- `ex-cluster-resampling-unit` · example — Resampling complete cluster records
- `cex-pointwise-bootstrap-does-not-preserve-dependent-pair-law` · counterexample — Pointwise bootstrap need not preserve pair dependence
- `ex-assignment-randomization-versus-bootstrap` · example — Assignment randomization and bootstrap are different laws

### `iid-bootstrap-and-jackknife-validity` — IID bootstrap and jackknife for smooth statistics (15 item(s))

- `alg-lower-empirical-bootstrap-quantile` · algorithm — Lower empirical quantile of bootstrap values
- `def-iid-empirical-bootstrap-sample` · definition — IID empirical bootstrap sample and smooth mean statistic
- `lem-iid-sample-covariance-converges` · lemma — Finite-second-moment IID sample covariance converges
- `alg-basic-bootstrap-interval` · algorithm — Basic bootstrap interval
- `alg-bias-corrected-bootstrap-interval` · algorithm — Bias-corrected bootstrap interval
- `alg-bootstrap-t-interval` · algorithm — Bootstrap-t interval
- `alg-percentile-bootstrap-interval` · algorithm — Percentile bootstrap interval
- `lem-empirical-bootstrap-law-is-a-probability-measure` · lemma — A finite empirical law is a probability measure
- `thm-delete-one-jackknife-linearization-for-smooth-statistics` · theorem — Delete-one jackknife linearization for smooth functions of a mean
- `lem-finite-bootstrap-cdf-supremum-is-measurable` · lemma — Measurability of the finite-bootstrap CDF supremum
- `alg-delete-one-jackknife-acceleration` · algorithm — Delete-one jackknife acceleration
- `lem-finite-index-bootstrap-sample-is-conditionally-iid` · lemma — Finite-index bootstrap draws are conditionally IID from the empirical law
- `alg-bca-bootstrap-interval` · algorithm — Bias-corrected and accelerated bootstrap interval
- `thm-conditional-iid-bootstrap-clt-for-empirical-law` · theorem — Conditional IID bootstrap CLT for an empirical law
- `thm-iid-bootstrap-validity-for-smooth-statistics` · theorem — First-order IID bootstrap validity for smooth functions of a mean

### `iid-bootstrap-and-jackknife-validity-examples` — IID bootstrap and jackknife for smooth statistics — Examples (4 item(s))

- `ex-delete-one-jackknife-for-sample-mean` · example — The delete-one jackknife variance for a sample mean
- `ex-discrete-median-bootstrap-ties` · example — Discrete median bootstrap with ties
- `cex-iid-bootstrap-inconsistency-at-absolute-mean-kink` · counterexample — The IID bootstrap can fail at the kink of the absolute mean
- `ex-iid-bootstrap-smooth-mean` · example — The IID bootstrap for a smooth mean functional

### `bootstrap-failure-and-subsampling` — Bootstrap failure, m-out-of-n methods, and subsampling (8 item(s))

- `def-m-out-of-n-bootstrap-and-subsampling` · definition — m-out-of-n bootstrap and subsampling
- `lem-uniform-cdf-order-and-quantile-coverage` · lemma — CDF ordering and uniform error control quantile coverage
- `lem-pointwise-cdf-convergence-to-a-continuous-law-is-uniform` · lemma — Pointwise CDF convergence to a continuous law is uniform
- `lem-bernoulli-root-laws-are-uniformly-weak-close` · lemma — Bernoulli root laws are uniformly close in Levy–Prokhorov distance
- `thm-ordinary-bootstrap-fails-for-uniform-endpoint` · theorem — Ordinary bootstrap failure for a uniform support endpoint
- `thm-m-out-of-n-resampling-valid-for-uniform-endpoint` · theorem — m-out-of-n bootstrap and subsampling recover the uniform endpoint root
- `thm-uniform-subsampling-coverage-under-root-law-control` · theorem — Uniform subsampling coverage under root-law control
- `thm-bootstrap-fails-at-nonsmooth-boundary-and-degenerate-mean-functionals` · theorem — Ordinary bootstrap failure for nonsmooth and first-order-degenerate mean functionals

### `bootstrap-failure-and-subsampling-examples` — Bootstrap failure, m-out-of-n methods, and subsampling — Examples (3 item(s))

- `ex-uniform-endpoint-bootstrap-failure-and-m-out-of-n-remedy` · example — Uniform endpoint: ordinary bootstrap failure and the m-out-of-n remedy
- `ex-weak-metric-does-not-guarantee-uniform-bootstrap-coverage` · example — Weakly close root laws can still give failed uniform coverage
- `ex-nonsmooth-boundary-bootstrap-failure` · example — Absolute-value boundary and squared-mean degeneracy

## Your seams

Another group's pages depend on yours:

- `block-bootstrap-for-dependent-data` (group q) requires your `resampling-algorithms-and-sampling-units`
- `statistical-and-computational-error-accounting` (group r) requires your `resampling-algorithms-and-sampling-units`

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
