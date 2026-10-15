# Step 5 adjudication — group **q**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 53, 54, 55: 3 A/B pair(s), 6 page(s), 58 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **53**: `research/bayesian-computational-statistics-62-batch-53-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **54**: `research/bayesian-computational-statistics-62-batch-54-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **55**: `research/bayesian-computational-statistics-62-batch-55-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 53 | `block-bootstrap-for-dependent-data` | A | bayesian-computational-statistics | 2146 | `resampling-algorithms-and-sampling-units`, `hilbert-valued-clt-for-weakly-dependent-functional-time-series` |
| 53 | `block-bootstrap-for-dependent-data-examples` | B | bayesian-computational-statistics | 2147 | `block-bootstrap-for-dependent-data`, `brownian-motion-construction-and-continuity`, `stationary-time-series-moments-and-autocovariance` |
| 54 | `finite-group-permutation-inference` | A | bayesian-computational-statistics | 2148 | `conditional-and-finite-group-exact-inference`, `randomized-treatment-assignment-and-sharp-null-tests` |
| 54 | `finite-group-permutation-inference-examples` | B | bayesian-computational-statistics | 2149 | `finite-group-permutation-inference` |
| 55 | `asymptotically-robust-permutation-tests` | A | bayesian-computational-statistics | 2150 | `finite-group-permutation-inference`, `martingale-inequalities-and-convergence`, `conformal-prediction-and-exchangeable-ranks`, `horvitz-thompson-variance-and-srswor` |
| 55 | `asymptotically-robust-permutation-tests-examples` | B | bayesian-computational-statistics | 2151 | `asymptotically-robust-permutation-tests` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `block-bootstrap-for-dependent-data` — Moving and tapered block bootstrap for dependent data (17 item(s))

- `def-conditional-weak-convergence-in-probability` · definition — Conditional weak convergence in probability
- `def-hadamard-differentiability-tangentially` · definition — Hadamard differentiability tangentially to a subspace
- `alg-overlapping-block-resampling` · algorithm — Overlapping block-index resampling
- `alg-moving-block-bootstrap` · algorithm — Moving block bootstrap
- `alg-tapered-block-bootstrap` · algorithm — Tapered block bootstrap
- `lem-moving-block-bootstrap-conditional-covariance` · lemma — Exact conditional covariance of a moving block bootstrap mean
- `lem-tapered-block-bootstrap-conditional-covariance` · lemma — Exact conditional covariance of a tapered block bootstrap mean
- `lem-taper-window-l2-normalization` · lemma — Asymptotic squared-norm normalization of a tapered window
- `alg-k-sample-null-constrained-block-bootstrap` · algorithm — Null-constrained block bootstrap for independent series
- `lem-k-sample-null-centering` · lemma — Exact null centering of the K-sample block bootstrap
- `thm-conditional-bootstrap-hadamard-delta-method` · theorem — Conditional bootstrap delta method for Hadamard differentiable maps
- `lem-weighted-overlapping-block-moment-and-covariance-limits` · lemma — Weighted overlapping-block moment and covariance limits
- `lem-conditional-independent-block-bootstrap-clt` · lemma — Conditional CLT for independent resampled weighted blocks
- `thm-k-sample-block-bootstrap-validity` · theorem — Conditional K-sample block-bootstrap validity under a joint CLT
- `lem-independent-tail-replacement-errors-are-monotone` · lemma — Independent-tail replacement errors are decreasing and summability implies the rate condition
- `thm-moving-block-bootstrap-clt-for-dependent-data` · theorem — Moving block bootstrap CLT for dependent Hilbert-valued data
- `thm-tapered-block-bootstrap-clt-for-dependent-data` · theorem — Tapered block bootstrap CLT for dependent Hilbert-valued data

### `block-bootstrap-for-dependent-data-examples` — Moving and tapered block bootstrap for dependent data — Examples (6 item(s))

- `ex-moving-block-bootstrap-small-sample` · example — A finite moving-block bootstrap calculation
- `ex-tapered-block-bootstrap-triangular-window` · example — Triangular taper weights for a block of length three
- `ex-block-length-n-one-third` · example — A block-length sequence in the bootstrap CLT regime
- `cex-pointwise-bootstrap-ar1-variance-mismatch` · counterexample — Pointwise resampling misses the long-run variance of an AR(1) mean
- `ex-two-series-block-bootstrap-null-centering` · example — Two-series null centering with a final block prefix
- `ex-iid-functional-data-block-bootstrap` · example — IID functional data in the block bootstrap regime

### `finite-group-permutation-inference` — Exact permutation tests and random-permutation Monte Carlo (5 item(s))

- `def-measurable-finite-group-permutation-setup` · definition — Measurable finite-group permutation setups
- `def-measurable-finite-group-orbit-pvalues` · definition — Full-orbit and tie-randomized permutation p-values
- `alg-random-permutation-monte-carlo-pvalue` · algorithm — Identity-corrected random-permutation Monte Carlo p-value
- `thm-finite-group-permutation-validity` · theorem — Exact finite-group permutation p-values and tests
- `thm-random-permutation-monte-carlo-validity` · theorem — Validity of identity-corrected random-permutation Monte Carlo p-values

### `finite-group-permutation-inference-examples` — Exact permutation tests and random-permutation Monte Carlo — Examples (3 item(s))

- `ex-exchangeable-two-sample-permutation-test` · example — A tied two-sample Bernoulli permutation test
- `ex-unequal-assignment-sharp-null-randomization` · example — Unequal assignment weights under the Fisher sharp null
- `cex-uncorrected-random-permutation-pvalue-can-be-zero` · counterexample — The uncorrected Monte Carlo permutation fraction can be zero and invalid

### `asymptotically-robust-permutation-tests` — Studentized permutation tests under weak parameter nulls (21 item(s))

- `def-two-sample-u-statistic-parameter` · definition — Two-sample U-statistic parameter
- `lem-finite-population-permutation-clt` · lemma — Conditional CLT for a random subset of an IID finite population
- `lem-hypergeometric-binomial-contiguity-for-permutation-samples` · lemma — Hypergeometric and binomial composition counts are contiguous
- `lem-general-measurable-finite-group-randomization-validity` · lemma — Finite-group rank validity on a measurable sample space
- `lem-random-permutation-variance-by-transpositions` · lemma — A successive-revelation variance bound for a uniform permutation
- `def-two-sample-order-r-u-statistic-and-first-projections` · definition — Two-sample order-r U-statistic and first projections
- `lem-permutation-consistency-from-iid-mixture` · lemma — Consistency transfers from IID mixture samples to permuted groups
- `lem-permutation-mixture-coupling-for-two-sample-u-statistics` · lemma — Mixture coupling for permuted two-sample U-statistics
- `lem-two-sample-u-statistic-projections-well-defined` · lemma — First projections are measurable and square-integrable
- `lem-pooled-mixture-projection-and-variance` · lemma — Pooled-mixture projection and variance
- `lem-two-sample-u-statistic-hoeffding-decomposition` · lemma — Two-sample Hoeffding decomposition
- `lem-two-sample-u-statistic-degenerate-remainder-order` · lemma — Second-moment order of the degenerate remainder
- `def-studentized-two-sample-u-statistic` · definition — Studentized two-sample U-statistic and permutation distribution
- `thm-two-sample-u-statistic-projection-clt` · theorem — Projection CLT for a two-sample U-statistic
- `cor-two-sample-permutation-exact-under-equal-distributions` · corollary — Finite-sample exactness under equal distributions
- `thm-two-sample-u-statistic-permutation-clt-under-weak-null` · theorem — Permutation CLT for a two-sample U-statistic under a weak null
- `thm-two-sample-u-statistic-permutation-clt-under-mixed-centering` · theorem — Permutation CLT for a two-sample U-statistic under mixed-assignment centering
- `thm-studentized-two-sample-u-statistic-permutation-validity` · theorem — Studentized permutation validity under a weak two-sample parameter null
- `thm-studentized-permutation-validity-under-mixed-assignment-centering` · theorem — Studentized permutation validity under mixed-assignment centering
- `alg-studentized-two-sample-u-permutation-test` · algorithm — Studentized two-sample U-statistic permutation test
- `thm-studentized-wilcoxon-validity-under-heterogeneous-laws` · theorem — Studentized Wilcoxon validity under heterogeneous laws

### `asymptotically-robust-permutation-tests-examples` — Studentized permutation tests under weak parameter nulls — Examples (6 item(s))

- `cex-weak-null-does-not-imply-mixed-assignment-centering` · counterexample — The weak null does not center every mixed kernel assignment
- `cex-positive-kernel-second-moment-does-not-imply-nondegenerate-projections` · counterexample — Positive kernel second moment does not imply nondegenerate first projections
- `ex-same-mean-unequal-variance-studentized-permutation-test` · example — Studentized difference of means with equal means and unequal variances
- `ex-exact-versus-weak-two-sample-null` · example — Exact equality null versus weak parameter null
- `ex-studentized-rank-u-statistic-under-weak-null` · example — A studentized rank U-statistic under a weak null
- `cex-extra-sqrt-m-after-standard-error-studentization-diverges` · counterexample — An extra square-root sample-size factor destroys standard-error studentization

## Your seams

Your pages depend on another group's:

- `block-bootstrap-for-dependent-data` requires `resampling-algorithms-and-sampling-units` (group p, batch 50)

Another group's pages depend on yours:

- `statistical-and-computational-error-accounting` (group r) requires your `finite-group-permutation-inference`

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
