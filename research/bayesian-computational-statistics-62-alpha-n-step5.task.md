# Step 5 adjudication — group **n**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 44, 45, 46: 3 A/B pair(s), 6 page(s), 46 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **44**: `research/bayesian-computational-statistics-62-batch-44-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **45**: `research/bayesian-computational-statistics-62-batch-45-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **46**: `research/bayesian-computational-statistics-62-batch-46-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 44 | `feynman-kac-particle-filters` | A | bayesian-computational-statistics | 2128 | `state-space-filtering-and-predictive-laws`, `importance-sampling-and-weight-diagnostics` |
| 44 | `feynman-kac-particle-filters-examples` | B | bayesian-computational-statistics | 2129 | `feynman-kac-particle-filters` |
| 45 | `smc-clts-error-and-degeneracy` | A | bayesian-computational-statistics | 2130 | `feynman-kac-particle-filters` |
| 45 | `smc-clts-error-and-degeneracy-examples` | B | bayesian-computational-statistics | 2131 | `smc-clts-error-and-degeneracy` |
| 46 | `particle-smoothing-backward-simulation-and-rbpf` | A | bayesian-computational-statistics | 2132 | `kalman-filtering`, `feynman-kac-particle-filters` |
| 46 | `particle-smoothing-backward-simulation-and-rbpf-examples` | B | bayesian-computational-statistics | 2133 | `particle-smoothing-backward-simulation-and-rbpf` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `feynman-kac-particle-filters` — Feynman–Kac targets and sequential particle filters (8 item(s))

- `lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels` · lemma — Jointly measurable Radon–Nikodym derivatives for probability kernels
- `alg-multinomial-and-residual-offspring-resampling` · algorithm — Multinomial and residual offspring resampling
- `def-feynman-kac-path-targets-and-normalizers` · definition — Feynman–Kac path targets and normalizers
- `thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts` · theorem — Multinomial and residual resampling have unbiased offspring counts
- `lem-feynman-kac-path-measures-satisfy-forward-recursion` · lemma — Feynman–Kac path measures satisfy the forward recursion
- `thm-feynman-kac-path-radon-nikodym-weight` · theorem — Feynman–Kac path Radon–Nikodym weight
- `alg-sequential-importance-resampling` · algorithm — Sequential importance resampling for Feynman–Kac path targets
- `thm-sequential-particle-estimator-is-unbiased` · theorem — The sequential particle estimator is unbiased for Feynman–Kac path integrals

### `feynman-kac-particle-filters-examples` — Feynman–Kac targets and sequential particle filters — Examples (3 item(s))

- `ex-multinomial-versus-residual-resampling` · example — Multinomial and residual resampling on three weights
- `ex-bootstrap-and-informed-proposal-particle-filter` · example — Bootstrap and informed proposals on a two-state particle filter
- `cex-particle-filter-proposal-misses-target-support` · counterexample — A particle proposal can miss positive target mass

### `smc-clts-error-and-degeneracy` — Finite-horizon SMC error, CLTs, and degeneracy (13 item(s))

- `def-dobrushin-coefficient-for-probability-kernels` · definition — Dobrushin contraction coefficient for a probability kernel
- `lem-dobrushin-contraction-from-density-ratios` · lemma — Uniform density ratios bound the Dobrushin coefficient
- `def-smc-clt-function-classes-and-variance-recursions` · definition — Finite-horizon SMC CLT classes and variance recursions
- `lem-smc-backward-operator-oscillation-bound` · lemma — Uniform SMC backward-operator contraction controls oscillation
- `lem-smc-finite-horizon-empirical-law` · lemma — Finite-horizon SMC empirical laws converge for integrable tests
- `lem-smc-multinomial-variance-unrolls` · lemma — Multinomial SMC variance unrolls into local contributions
- `lem-smc-centered-filtering-feynman-kac-contraction` · lemma — Centered filtering Feynman–Kac operators contract terminal tests
- `lem-smc-multinomial-resampling-clt` · lemma — Conditional multinomial resampling central limit theorem
- `lem-smc-mutation-and-weighted-correction-clt` · lemma — Conditional mutation and weighted correction CLT
- `lem-smc-residual-resampling-clt-away-from-integer-weights` · lemma — Conditional residual resampling central limit theorem away from integer weights
- `thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights` · theorem — Time-uniform SMC asymptotic variance under uniform weight and operator bounds
- `thm-smc-multinomial-fixed-horizon-clt` · theorem — Fixed-horizon SMC central limit theorem with multinomial resampling
- `thm-smc-residual-fixed-horizon-clt-away-from-integer-weights` · theorem — Fixed-horizon SMC central limit theorem with residual resampling away from integer weights

### `smc-clts-error-and-degeneracy-examples` — Finite-horizon SMC error, CLTs, and degeneracy — Examples (8 item(s))

- `ex-smc-multinomial-ancestry-collapse` · example — Ancestry collapse under repeated multinomial resampling
- `cex-smc-clt-class-does-not-ensure-target-moment` · counterexample — The source function class need not give finite SMC CLT variances
- `cex-smc-residual-clt-fails-at-integer-weight-boundary` · counterexample — Residual resampling is discontinuous at positive integer weights
- `cex-smc-zero-residual-fraction-can-have-random-offspring` · counterexample — Zero limiting remainder does not make finite residual offspring deterministic
- `ex-smc-dominant-weight-and-ess` · example — A dominant particle weight and the effective sample size
- `cex-smc-time-bound-fails-with-varying-proposals` · counterexample — Proposal mixing ratios alone do not bound SMC asymptotic variance over time
- `ex-smc-bounded-weights-with-mixing` · example — A bounded-weight mixing filter has bounded asymptotic variance
- `ex-smc-fixed-horizon-clt-does-not-give-time-uniform-accuracy` · example — Fixed-horizon asymptotic variance can grow without mixing

### `particle-smoothing-backward-simulation-and-rbpf` — Particle smoothing, backward simulation, and Rao–Blackwellized filters (11 item(s))

- `lem-nonlinear-path-extension-is-a-probability-kernel` · lemma — Nonlinear path extension is a probability kernel
- `def-conditionally-linear-gaussian-state-space-model` · definition — Conditionally linear-Gaussian state-space model
- `lem-kalman-filter-is-exact-conditional-on-nonlinear-path` · lemma — The Kalman filter is exact conditional on a nonlinear path
- `lem-smoothing-backward-kernel-bayes-factorization` · lemma — Bayes factorization of the smoothing backward kernel
- `alg-particle-backward-simulator` · algorithm — Particle backward simulator
- `alg-rao-blackwellized-particle-filter` · algorithm — Rao–Blackwellized particle filter
- `lem-bootstrap-particle-filter-weak-consistency` · lemma — Finite-horizon bootstrap particle filters are weakly consistent
- `alg-fixed-lag-particle-smoother` · algorithm — Fixed-lag particle smoother
- `thm-particle-backward-simulator-normalization-and-cost` · theorem — Normalization and operation counts for particle backward smoothing
- `thm-particle-smoothing-consistency-under-stated-conditions` · theorem — Fixed-horizon particle backward smoothing is consistent under stated conditions
- `thm-fixed-lag-smoother-targets-truncated-conditional-law` · theorem — Exact-kernel fixed-lag smoothing targets the truncated conditional law

### `particle-smoothing-backward-simulation-and-rbpf-examples` — Particle smoothing, backward simulation, and Rao–Blackwellized filters — Examples (3 item(s))

- `ex-switching-linear-gaussian-rbpf` · example — A two-mode linear-Gaussian Rao–Blackwellized filter
- `ex-zero-backward-simulation-denominator` · example — A zero backward-simulation denominator is inadmissible
- `ex-fixed-lag-smoothing-bias-from-delayed-information` · example — Delayed information creates fixed-lag smoothing bias

## Your seams

Your pages depend on another group's:

- `feynman-kac-particle-filters` requires `state-space-filtering-and-predictive-laws` (group m, batch 41)
- `feynman-kac-particle-filters` requires `importance-sampling-and-weight-diagnostics` (group i, batch 31)
- `particle-smoothing-backward-simulation-and-rbpf` requires `kalman-filtering` (group m, batch 42)

Another group's pages depend on yours:

- `particle-mcmc-pmmh-and-particle-gibbs` (group o) requires your `feynman-kac-particle-filters`
- `abc-mcmc-and-sequential-abc` (group o) requires your `feynman-kac-particle-filters`

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
