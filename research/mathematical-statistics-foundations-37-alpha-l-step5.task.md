# Step 5 adjudication — group **l**, run `mathematical-statistics-foundations-37`

You are the group Alpha for batches 34, 35, 36: 3 A/B pair(s), 6 page(s), 58 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **34**: `research/mathematical-statistics-foundations-37-batch-34-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **35**: `research/mathematical-statistics-foundations-37-batch-35-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **36**: `research/mathematical-statistics-foundations-37-batch-36-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/mathematical-statistics-foundations-37-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 34 | `robust-covariance-and-high-dimensional-stability` | A | mathematical-statistics | 1910 | `minimax-lower-bounds-and-information-theoretic-methods`, `contamination-models-and-robust-risk`, `robust-mean-estimation-under-heavy-tails`, `the-spectral-theorem-and-singular-value-decomposition`, `the-identity-theorem-and-the-open-mapping-theorem`, `euclidean-surface-measure-divergence-and-green-identities`, `matrix-norms-condition-numbers-and-numerical-stability`, `sparse-high-dimensional-estimation-and-covariance` |
| 34 | `robust-covariance-and-high-dimensional-stability-examples` | B | mathematical-statistics | 1911 | `robust-covariance-and-high-dimensional-stability` |
| 35 | `sequential-testing-and-anytime-valid-inference` | A | mathematical-statistics | 1912 | `estimators-and-randomized-procedures`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `discrete-time-martingales`, `stopping-times-and-optional-stopping`, `martingale-inequalities-and-convergence` |
| 35 | `sequential-testing-and-anytime-valid-inference-examples` | B | mathematical-statistics | 1913 | `sequential-testing-and-anytime-valid-inference` |
| 36 | `hilbert-valued-clt-for-weakly-dependent-functional-time-series` | A | mathematical-statistics | 1914 | `independence-borel-cantelli-and-zero-one-laws`, `infinite-product-measures-and-kolmogorov-extension`, `central-limit-theorems`, `weak-convergence-tightness-and-representation`, `hilbert-space-geometry-and-riesz-representation`, `product-measures-and-the-fubini-tonelli-theorems`, `banach-valued-integration-and-the-radon-nikodym-property`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` |
| 36 | `hilbert-valued-clt-for-weakly-dependent-functional-time-series-examples` | B | mathematical-statistics | 1915 | `hilbert-valued-clt-for-weakly-dependent-functional-time-series` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `robust-covariance-and-high-dimensional-stability` — Robust Covariance and Sparse Robust Estimation (30 item(s))

- `def-covariance-matrix-of-a-random-vector` · definition — Covariance matrix of a finite-dimensional random vector
- `lem-finite-dimensional-golden-thompson-trace-inequality` · lemma — Finite-dimensional Golden–Thompson trace inequality
- `lem-matrix-depth-gaussian-scale-constant-exists-uniquely` · lemma — The Gaussian matrix-depth scale constant exists uniquely
- `lem-projection-slab-uniform-deviation` · lemma — Uniform deviation for squared-projection slabs
- `def-bounded-spectrum-covariance-class` · definition — Bounded-spectrum covariance class
- `def-matrix-variance-of-a-random-vector` · definition — Matrix variance for covariance estimation
- `lem-bounded-independent-matrix-bernstein-via-trace-exponential` · lemma — Bounded independent matrix Bernstein bound from the trace exponential
- `lem-finite-second-moment-covariance-matrix-is-well-defined` · lemma — A finite second moment defines a positive semidefinite covariance matrix
- `alg-adaptive-truncated-covariance-estimator` · algorithm — Adaptive truncated covariance estimator
- `def-block-sparse-covariance-class` · definition — Single-block sparse covariance class and restricted directions
- `def-huber-covariance-model` · definition — Gaussian Huber contamination model for covariance estimation
- `lem-covariance-median-pilot-exact-block-budget` · lemma — Exact block budget for the covariance geometric-median pilot
- `lem-matrix-variance-intrinsic-dimension-at-least-one` · lemma — The covariance matrix variance ratio is at least one
- `lem-oracle-truncated-covariance-and-vector-concentration` · lemma — Oracle-truncated covariance and vector concentration under finite matrix variance
- `def-matrix-depth-covariance-estimator` · definition — Matrix depth and covariance estimators
- `lem-adaptive-truncated-covariance-estimator-is-total` · lemma — The adaptive truncated covariance procedure is well-defined on its declared domain
- `lem-fixed-scale-truncated-covariance-deviation` · lemma — Fixed-scale matrix-truncated covariance deviation under finite matrix variance
- `lem-huber-covariance-mixture-is-a-probability-measure` · lemma — The Gaussian Huber covariance mixture is a probability law
- `lem-adaptive-covariance-lepski-scale-reduction` · lemma — Lepski scale selection transfers fixed-scale covariance bounds
- `lem-matrix-depth-maximizer-exists-on-compact-classes` · lemma — A matrix-depth maximizer exists on the bounded covariance classes
- `lem-scaled-gaussian-covariance-has-depth-at-least-half` · lemma — The scaled Gaussian covariance has matrix depth at least one half
- `lem-huber-covariance-ambient-action-tail-lower-bound` · lemma — Huber covariance modulus lower bound for unrestricted matrix-valued actions
- `lem-huber-covariance-contamination-modulus-lower-bound` · lemma — The Huber covariance contamination modulus has a quadratic lower bound
- `lem-huber-matrix-depth-estimator-operator-error` · lemma — Operator error bound for the Gaussian Huber matrix-depth estimator
- `lem-measurable-matrix-depth-maximizer-selection` · lemma — Measurable selection of a matrix-depth maximizer
- `thm-heavy-tailed-covariance-bound` · theorem — Adaptive truncated covariance has a finite matrix-variance operator bound
- `lem-clean-block-sparse-gaussian-covariance-minimax-lower-bound` · lemma — Clean block-sparse Gaussian covariance has squared operator lower rate s log(ep/s) over n
- `lem-clean-dense-gaussian-covariance-minimax-lower-bound` · lemma — Clean Gaussian covariance has a capped squared operator lower rate
- `thm-huber-covariance-upper-and-lower-risk` · theorem — Dense Gaussian Huber covariance: high-probability upper and capped lower bounds
- `thm-huber-sparse-covariance-upper-and-lower-risk` · theorem — Single-block sparse Gaussian Huber covariance: high-probability upper and low-ratio lower bounds

### `robust-covariance-and-high-dimensional-stability-examples` — Robust Covariance and Sparse Robust Estimation — Examples (6 item(s))

- `cex-matrix-variance-does-not-dominate-trace-covariance-product` · counterexample — Matrix variance need not dominate trace covariance times operator norm
- `ex-clean-heavy-tailed-finite-matrix-variance` · example — A polynomial-tail law with finite matrix variance
- `cex-bounded-spectrum-covariance-lower-rate-must-be-capped` · counterexample — A bounded covariance class forces a capped lower rate
- `cex-intrinsic-variance-alone-does-not-control-covariance-pilot` · counterexample — Intrinsic matrix variance alone does not control pilot-centered covariance truncation
- `ex-block-sparse-huber-covariance-model` · example — A covariance matrix with one correlated block
- `ex-dense-huber-covariance-model` · example — Dense Gaussian Huber covariance model

### `sequential-testing-and-anytime-valid-inference` — Sequential Validity and Ville's Inequality (7 item(s))

- `def-nonnegative-test-supermartingale` · definition — Nonnegative test supermartingales
- `thm-villes-inequality` · theorem — Ville's inequality for nonnegative test supermartingales
- `thm-mixture-of-null-supermartingales` · theorem — Mixtures of null test supermartingales
- `def-anytime-valid-p-value-process` · definition — Anytime-valid p-value processes
- `thm-anytime-validity` · theorem — A test supermartingale gives anytime-valid p-values
- `def-confidence-sequence` · definition — Confidence sequences
- `thm-confidence-sequence-by-test-inversion` · theorem — Confidence sequences by test-supermartingale inversion

### `sequential-testing-and-anytime-valid-inference-examples` — Sequential Validity and Ville's Inequality — Examples (3 item(s))

- `ex-likelihood-ratio-test-supermartingale` · example — A finite-horizon likelihood-ratio test supermartingale
- `ex-data-dependent-threshold-crossing` · example — A data-dependent threshold crossing
- `cex-process-valid-under-one-null-but-not-composite-null` · counterexample — Validity under one null law does not give a composite-null test supermartingale

### `hilbert-valued-clt-for-weakly-dependent-functional-time-series` — Hilbert-Valued CLT for Functional Time Series (8 item(s))

- `def-l2-m-approximable-causal-bernoulli-shift` · definition — L2-m-approximable causal Bernoulli shifts
- `lem-finite-dependent-vector-clt` · lemma — Finite-dependent vector central limit theorem
- `lem-positive-trace-class-covariance-defines-hilbert-gaussian` · lemma — Positive trace-class covariance defines a Hilbert Gaussian
- `lem-real-l-two-kernel-operator-is-bounded-and-rank-one-compatible` · lemma — Real L2 kernels define bounded operators and represent rank-one tensors
- `lem-l2-basis-projections-converge-and-satisfy-parseval` · lemma — Complete orthonormal bases give norm-convergent projections and Parseval
- `lem-independent-centered-hilbert-elements-have-zero-expected-inner-product` · lemma — Independent centered Hilbert-valued elements have zero expected inner product
- `lem-long-run-covariance-is-trace-class` · lemma — Long-run covariance of an L2-m-approximable shift is trace class
- `thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts` · theorem — Hilbert-valued CLT for L2-m-approximable Bernoulli shifts

### `hilbert-valued-clt-for-weakly-dependent-functional-time-series-examples` — Hilbert-Valued CLT for Functional Time Series — Examples (4 item(s))

- `ex-nonsummable-physical-dependence-linear-process` · example — A square-integrable linear shift with nonsummable physical dependence
- `ex-finite-dependent-functional-moving-average` · example — Finite-dependent functional moving average
- `ex-geometrically-summable-bernoulli-shift` · example — A geometrically summable Bernoulli shift
- `cex-terminal-weak-limit-does-not-imply-path-weak-limit` · counterexample — A terminal weak limit does not imply a path-space weak limit

## Your seams

Your pages depend on another group's:

- `robust-covariance-and-high-dimensional-stability` requires `minimax-lower-bounds-and-information-theoretic-methods` (group f, batch 17)
- `robust-covariance-and-high-dimensional-stability` requires `contamination-models-and-robust-risk` (group k, batch 31)
- `robust-covariance-and-high-dimensional-stability` requires `robust-mean-estimation-under-heavy-tails` (group k, batch 33)
- `robust-covariance-and-high-dimensional-stability` requires `sparse-high-dimensional-estimation-and-covariance` (group g, batch 19)
- `sequential-testing-and-anytime-valid-inference` requires `estimators-and-randomized-procedures` (group a, batch 2)
- `sequential-testing-and-anytime-valid-inference` requires `finite-sample-tests-neyman-pearson-and-valid-p-values` (group c, batch 8)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/mathematical-statistics-foundations-37-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `mathematical-statistics-foundations-37`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
