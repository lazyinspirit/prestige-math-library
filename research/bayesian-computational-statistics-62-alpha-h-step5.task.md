# Step 5 adjudication — group **h**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 26, 27, 28: 3 A/B pair(s), 6 page(s), 26 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **26**: `research/bayesian-computational-statistics-62-batch-26-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **27**: `research/bayesian-computational-statistics-62-batch-27-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **28**: `research/bayesian-computational-statistics-62-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 26 | `laplace-approximation-and-marginal-integration` | A | bayesian-computational-statistics | 2092 | `numerical-optimization-for-statistical-computation` |
| 26 | `laplace-approximation-and-marginal-integration-examples` | B | bayesian-computational-statistics | 2093 | `laplace-approximation-and-marginal-integration` |
| 27 | `approximate-bayesian-computation-and-simulation-based-inference` | A | bayesian-computational-statistics | 2094 | `numerical-optimization-for-statistical-computation`, `complete-sufficiency-exponential-families-and-basu` |
| 27 | `approximate-bayesian-computation-and-simulation-based-inference-examples` | B | bayesian-computational-statistics | 2095 | `approximate-bayesian-computation-and-simulation-based-inference` |
| 28 | `iid-monte-carlo-integration-and-error` | A | bayesian-computational-statistics | 2096 | `central-limit-theorems` |
| 28 | `iid-monte-carlo-integration-and-error-examples` | B | bayesian-computational-statistics | 2097 | `iid-monte-carlo-integration-and-error`, `detection-and-quantification-limits` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `laplace-approximation-and-marginal-integration` — Laplace approximation and deterministic quadrature (5 item(s))

- `def-composite-trapezoidal-rule` · definition — Composite trapezoidal rule
- `lem-positive-definite-gaussian-integral` · lemma — Gaussian integral for a positive-definite quadratic form
- `lem-linear-interpolation-error-bound` · lemma — Pointwise linear interpolation error from a second-derivative bound
- `thm-laplace-approximation-under-unique-interior-maximum` · theorem — Laplace asymptotic under a unique nondegenerate interior maximum
- `thm-composite-trapezoidal-rule-error-bound` · theorem — Second-derivative error bound for the composite trapezoidal rule

### `laplace-approximation-and-marginal-integration-examples` — Laplace approximation and deterministic quadrature — Examples (5 item(s))

- `ex-exact-gaussian-laplace-integral` · example — An exact Gaussian Laplace integral on the noncompact line
- `cex-boundary-mode-changes-laplace-rate` · counterexample — A boundary mode has a different concentration rate
- `cex-singular-interior-mode-changes-laplace-rate` · counterexample — A singular interior mode need not have Gaussian scaling
- `cex-equal-multiple-modes-double-laplace-constant` · counterexample — Two equal modes contribute two Gaussian terms
- `ex-one-panel-composite-trapezoid-on-square` · example — The one-panel trapezoidal bound is attained by x squared

### `approximate-bayesian-computation-and-simulation-based-inference` — Approximate Bayesian computation and summary-based inference (5 item(s))

- `def-approximate-bayesian-computation` · definition — Approximate Bayesian computation and the tolerance-conditioned target
- `alg-abc-rejection` · algorithm — ABC rejection sampling
- `thm-abc-rejection-target-is-tolerance-conditioned-posterior` · theorem — ABC rejection returns the tolerance-conditioned posterior
- `thm-abc-zero-tolerance-target-is-summary-posterior-under-density-regularity` · theorem — ABC targets the density-defined summary posterior at zero tolerance
- `thm-sufficient-summary-recovers-full-posterior` · theorem — A sufficient summary preserves the Bayesian posterior

### `approximate-bayesian-computation-and-simulation-based-inference-examples` — Approximate Bayesian computation and simulation-based inference — Examples (4 item(s))

- `cex-abc-zero-tolerance-limit-fails-without-integrable-envelope` · counterexample — Pointwise continuity alone does not guarantee the zero-tolerance limit
- `cex-identifiable-model-with-insufficient-abc-summary` · counterexample — An identifiable model can have persistent ABC summary distortion
- `ex-abc-vanishing-acceptance-rate` · example — Vanishing acceptance probability with a stable zero-tolerance target
- `ex-abc-finite-sample-sufficient-summary` · example — A Bernoulli count is a sufficient summary for a finite-sample posterior

### `iid-monte-carlo-integration-and-error` — IID Monte Carlo integration and error (5 item(s))

- `def-iid-monte-carlo-estimators` · definition — IID Monte Carlo sample mean, variance, and standard error
- `thm-iid-monte-carlo-mean-moments` · theorem — Unbiasedness and exact variance of the IID Monte Carlo mean
- `thm-iid-monte-carlo-mean-consistency` · theorem — Strong and weak consistency of the IID Monte Carlo mean
- `thm-iid-monte-carlo-sample-variance-consistency` · theorem — Consistency of the IID Monte Carlo sample variance
- `thm-iid-monte-carlo-central-limit` · theorem — Lindeberg–Lévy limit for the IID Monte Carlo mean

### `iid-monte-carlo-integration-and-error-examples` — IID Monte Carlo integration and error — Examples (2 item(s))

- `ex-gaussian-monte-carlo-integrand` · example — Gaussian integrand: exact Monte Carlo moments and asymptotic error
- `ex-finite-mean-infinite-variance-monte-carlo-integrand` · example — Finite mean does not give a finite-variance Monte Carlo error

## Your seams

Your pages depend on another group's:

- `laplace-approximation-and-marginal-integration` requires `numerical-optimization-for-statistical-computation` (group g, batch 23)
- `approximate-bayesian-computation-and-simulation-based-inference` requires `numerical-optimization-for-statistical-computation` (group g, batch 23)

Another group's pages depend on yours:

- `variance-reduction-and-randomized-integration` (group i) requires your `iid-monte-carlo-integration-and-error`
- `rejection-sampling` (group i) requires your `iid-monte-carlo-integration-and-error`
- `importance-sampling-and-weight-diagnostics` (group i) requires your `iid-monte-carlo-integration-and-error`
- `abc-mcmc-and-sequential-abc` (group o) requires your `approximate-bayesian-computation-and-simulation-based-inference`
- `statistical-and-computational-error-accounting` (group r) requires your `iid-monte-carlo-integration-and-error`
- `synthetic-likelihood-and-indirect-inference` (group s) requires your `iid-monte-carlo-integration-and-error`
- `identifiability-and-approximation-bias-in-computational-inference` (group u) requires your `laplace-approximation-and-marginal-integration`
- `identifiability-and-approximation-bias-in-computational-inference` (group u) requires your `approximate-bayesian-computation-and-simulation-based-inference`

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
