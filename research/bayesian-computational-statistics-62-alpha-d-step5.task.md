# Step 5 adjudication — group **d**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 14, 15, 16: 3 A/B pair(s), 6 page(s), 42 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **14**: `research/bayesian-computational-statistics-62-batch-14-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **15**: `research/bayesian-computational-statistics-62-batch-15-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **16**: `research/bayesian-computational-statistics-62-batch-16-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 14 | `gaussian-process-priors-and-posterior-laws` | A | bayesian-computational-statistics | 2068 | `conjugate-families-and-posterior-prediction`, `brownian-motion-construction-and-continuity`, `direct-matrix-factorisations-lu-cholesky-and-qr`, `state-space-models-as-probability-laws` |
| 14 | `gaussian-process-priors-and-posterior-laws-examples` | B | bayesian-computational-statistics | 2069 | `gaussian-process-priors-and-posterior-laws` |
| 15 | `gaussian-process-support-and-concentration` | A | bayesian-computational-statistics | 2070 | `gaussian-process-priors-and-posterior-laws`, `banach-valued-integration-and-the-radon-nikodym-property`, `polyhedral-selective-inference` |
| 15 | `gaussian-process-support-and-concentration-examples` | B | bayesian-computational-statistics | 2071 | `gaussian-process-support-and-concentration` |
| 16 | `gaussian-process-posterior-contraction` | A | bayesian-computational-statistics | 2072 | `iid-posterior-contraction`, `gaussian-process-support-and-concentration` |
| 16 | `gaussian-process-posterior-contraction-examples` | B | bayesian-computational-statistics | 2073 | `gaussian-process-posterior-contraction` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `gaussian-process-priors-and-posterior-laws` — Gaussian-process priors and finite posterior laws (3 item(s))

- `lem-real-line-is-standard-borel` · lemma — The real line with its Borel sigma-algebra is standard Borel
- `thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel` · theorem — A mean and positive-semidefinite kernel define a Gaussian process
- `thm-finite-gaussian-process-posterior-and-predictive-laws` · theorem — Finite Gaussian-process posterior and predictive laws

### `gaussian-process-priors-and-posterior-laws-examples` — Gaussian-process priors and finite posterior laws — Examples (3 item(s))

- `ex-finite-gaussian-process-posterior-with-nonzero-mean-and-correlated-noise` · example — A nonzero-mean Gaussian process with correlated observation noise
- `ex-singular-gaussian-process-prior-and-predictive-covariances` · example — Singular prior and predictive covariances in Gaussian-process regression
- `ex-gaussian-process-extrapolation-retains-independent-index-uncertainty` · example — A Gaussian process retains uncertainty at an independent index

### `gaussian-process-support-and-concentration` — Banach Gaussian priors, RKHS support, and concentration (18 item(s))

- `def-borel-gaussian-random-element-on-a-separable-banach-space` · definition — Centered Borel Gaussian random element on a separable Banach space
- `lem-borel-map-into-separable-banach-is-strongly-measurable` · lemma — A Borel map into a separable Banach space is strongly measurable
- `lem-separable-banach-has-countable-norming-family` · lemma — A separable Banach space has a countable norming family
- `thm-finite-dimensional-gaussian-isoperimetric-expansion` · theorem — Finite-dimensional Gaussian isoperimetric expansion
- `thm-standard-gaussian-log-sobolev-inequality` · theorem — Gross logarithmic Sobolev inequality for standard Gaussian measure
- `lem-countable-norming-family-determines-borel-laws` · lemma — A countable norming family determines Borel laws
- `thm-standard-gaussian-lipschitz-concentration` · theorem — Lipschitz concentration for standard Gaussian measure
- `lem-uncorrelated-joint-banach-gaussians-are-independent` · lemma — Uncorrelated jointly Gaussian Banach random elements are independent
- `thm-fernique-integrability-for-separable-banach-gaussian-law` · theorem — Fernique integrability for a separable Banach Gaussian law
- `def-banach-gaussian-covariance-operator-and-rkhs` · definition — Covariance operator and reproducing-kernel Hilbert space of a Banach Gaussian
- `thm-borell-concentration-for-separable-banach-gaussian-law` · theorem — Borell concentration for the norm of a separable Banach Gaussian
- `thm-banach-gaussian-covariance-rkhs-is-well-defined` · theorem — The Banach Gaussian covariance and RKHS construction is well-defined
- `thm-cameron-martin-translation-for-separable-banach-gaussian-law` · theorem — Cameron–Martin translation formula for a separable Banach Gaussian
- `lem-banach-gaussian-rkhs-unit-ball-is-compact` · lemma — The Cameron–Martin unit ball is compact in the Banach norm
- `thm-support-of-banach-gaussian-is-closure-of-rkhs` · theorem — The support of a Banach Gaussian is the closure of its RKHS
- `def-gaussian-prior-concentration-function` · definition — Concentration function of a Banach Gaussian prior
- `thm-borell-sudakov-tsirelson-expansion-for-banach-gaussian-law` · theorem — Borell–Sudakov–Tsirelson expansion for a Banach Gaussian law
- `thm-gaussian-concentration-sieve-bounds` · theorem — Gaussian concentration-function sieve bounds

### `gaussian-process-support-and-concentration-examples` — Banach Gaussian priors, RKHS support, and concentration — Examples (2 item(s))

- `ex-cylinder-gaussian-process-is-not-banach-valued` · example — An iid Gaussian cylinder process is not an ℓ²-valued prior
- `ex-finite-dimensional-gaussian-process-as-tight-banach-prior` · example — A rank-one finite-dimensional Gaussian process is a tight Banach prior

### `gaussian-process-posterior-contraction` — Gaussian-process posterior contraction (10 item(s))

- `lem-tight-borel-gaussian-law-has-separable-support` · lemma — A tight Gaussian law is carried by a separable closed subspace
- `lem-binary-regression-l2-controls-local-likelihood-distances` · lemma — The L² link norm controls binary-regression likelihood distances
- `lem-fixed-design-gaussian-regression-controls-local-likelihood-distances` · lemma — Empirical mean and scale distance control Gaussian-regression likelihoods
- `lem-gaussian-linear-and-quadratic-statistic-tail` · lemma — Linear and quadratic Gaussian statistics have exponential tails
- `lem-independent-observation-posterior-denominator-lower-bound` · lemma — Local KL and log-square mass bounds a non-IID posterior denominator
- `lem-independent-posterior-splitting-from-tests-and-sieve-tail` · lemma — Tests and a sieve tail imply posterior contraction from a denominator bound
- `lem-nondegenerate-gaussian-small-ball-controls-log-radius` · lemma — A nonzero Gaussian direction forces logarithmic small-ball cost
- `lem-log-gaussian-density-supnorm-controls-local-likelihood-distances` · lemma — Supremum distance controls local log-Gaussian density distances
- `lem-fixed-design-gaussian-regression-exponential-tests` · lemma — Supremum sieves admit tests in fixed-design Gaussian regression
- `thm-gaussian-process-posterior-contraction` · theorem — Gaussian-process posterior contraction in density and regression models

### `gaussian-process-posterior-contraction-examples` — Gaussian-process posterior contraction — Examples (6 item(s))

- `ex-degenerate-gp-phi-does-not-bound-unknown-scale-local-mass` · example — A degenerate GP concentration function does not bound unknown-scale prior mass
- `ex-l2-small-log-density-far-in-hellinger` · example — Small L² log-density perturbations can remain far in Hellinger distance
- `cex-degenerate-gaussian-scale-prior-can-break-arbitrary-concentration-rate` · counterexample — A spiky scale prior defeats an arbitrary degenerate-Gaussian concentration rate
- `ex-log-gaussian-uniform-density-posterior` · example — A constant Gaussian log-density prior gives the uniform density exactly
- `ex-binary-regression-logistic-intercept-gp` · example — A one-point logistic GP regression satisfies the L² link branch
- `ex-fixed-design-gaussian-constant-process-and-unknown-scale` · example — A constant GP on a repeated fixed design meets the nondegenerate scale branch

## Your seams

Your pages depend on another group's:

- `gaussian-process-priors-and-posterior-laws` requires `conjugate-families-and-posterior-prediction` (group a, batch 6)
- `gaussian-process-posterior-contraction` requires `iid-posterior-contraction` (group c, batch 11)

Another group's pages depend on yours:

- `mcmc-clt-and-monte-carlo-standard-error` (group k) requires your `gaussian-process-priors-and-posterior-laws`

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
