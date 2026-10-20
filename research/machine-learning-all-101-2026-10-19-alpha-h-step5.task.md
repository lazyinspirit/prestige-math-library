# Step 5 adjudication — group **h**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 23, 24, 25: 3 A/B pair(s), 6 page(s), 42 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **23**: `research/machine-learning-all-101-2026-10-19-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **24**: `research/machine-learning-all-101-2026-10-19-batch-24-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **25**: `research/machine-learning-all-101-2026-10-19-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/machine-learning-all-101-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 23 | `ml02-latent-representations` | A | machine-learning | 2740 | `the-spectral-theorem-and-singular-value-decomposition`, `characteristic-functions-inversion-and-continuity`, `improper-and-parameter-dependent-multiple-integrals`, `measures-and-their-basic-properties`, `product-measures-and-the-fubini-tonelli-theorems`, `properties-of-the-integral-and-the-working-ftc`, `the-derivative-and-mean-value-theorems`, `the-lebesgue-integral-and-the-convergence-theorems`, `the-riemann-integral` |
| 23 | `ml02-latent-representations-examples` | B | machine-learning | 2741 | `ml02-latent-representations` |
| 24 | `ml02-metric-learning` | A | machine-learning | 2742 | `countability-and-uncountability`, `hilbert-space-geometry-and-riesz-representation`, `matrix-norms-condition-numbers-and-numerical-stability`, `subgradient-bundle-and-derivative-free-optimization`, `the-spectral-theorem-and-singular-value-decomposition` |
| 24 | `ml02-metric-learning-examples` | B | machine-learning | 2743 | `ml02-metric-learning` |
| 25 | `ml02-graphical-models` | A | machine-learning | 2744 | `central-limit-theorems`, `convex-and-semicontinuous-functions-on-rn`, `markov-kernels-and-markov-chains`, `probability-spaces-random-variables-and-expectation`, `the-spectral-theorem-and-singular-value-decomposition`, `hierarchical-bayesian-models-and-partial-pooling` |
| 25 | `ml02-graphical-models-examples` | B | machine-learning | 2745 | `ml02-graphical-models` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `ml02-latent-representations` — Latent factors, ICA, NMF, and representation ambiguity (12 item(s))

- `def-covariance-factor-model` · definition — Covariance factor model with diagonal residual covariance
- `def-square-ica-model` · definition — Square independent-component model with standardized sources
- `def-poisson-nmf-model` · definition — Poisson nonnegative matrix-factorization model
- `prop-covariance-factor-model-rotation-ambiguity` · proposition — Orthogonal rotation preserves the covariance factor model
- `lem-ica-whitening-reduces-mixing-to-orthogonal` · lemma — Whitening a square ICA model gives orthogonal mixing
- `prop-poisson-nmf-factorization-invariances` · proposition — Positive component rescaling and permutation preserve an NMF rate matrix
- `prop-poisson-nmf-loglikelihood` · proposition — Independent Poisson counts have the stated NMF log-likelihood
- `lem-local-gaussian-characteristic-function-is-global` · lemma — A characteristic function that is Gaussian near zero is globally Gaussian
- `lem-orthogonal-independent-mixing-shared-columns-gaussian` · lemma — A shared column of an independent orthogonal mixing must be Gaussian
- `thm-square-ica-identifiability-at-most-one-gaussian` · theorem — Square ICA is identifiable up to signs and permutation with at most one Gaussian source
- `alg-poisson-nmf-multiplicative-updates` · algorithm — Finite Poisson NMF multiplicative-update sweeps
- `lem-poisson-nmf-updates-preserve-positivity` · lemma — Strictly positive initialization keeps the Poisson NMF updates well-defined

### `ml02-latent-representations-examples` — Latent factors, ICA, NMF, and representation ambiguity — Examples (4 item(s))

- `ex-ica-sign-permutation-ambiguity` · example — A standardized Laplace ICA model has signed-permutation alternatives
- `ex-gaussian-factor-rotation` · example — Two Gaussian latent factors admit a nontrivial orthogonal rotation
- `ex-poisson-nmf-nonunique-factorizations` · example — A positive rate matrix has NMFs beyond scale and permutation
- `ex-poisson-nmf-zero-count-update` · example — A zero-count cell remains well-defined in a positive NMF update

### `ml02-metric-learning` — Nearest neighbors and learned metrics (12 item(s))

- `def-mahalanobis-pseudometric` · definition — Mahalanobis pseudometric induced by a positive-semidefinite matrix
- `lem-symmetric-matrix-frobenius-isometry` · lemma — Symmetric matrices are Euclidean under the Frobenius norm
- `thm-frobenius-projection-onto-psd-cone-is-spectral-clipping` · theorem — Frobenius projection onto the positive-semidefinite cone is spectral clipping
- `lem-positive-semidefinite-cone-is-frobenius-closed` · lemma — The real positive-semidefinite cone is closed in the Frobenius metric
- `alg-knn-classifier-with-fixed-tie-breaking` · algorithm — Finite-sample k-nearest-neighbor classifier with fixed tie-breaking
- `def-lmnn-fixed-target-objective` · definition — Fixed-target large-margin nearest-neighbor objective
- `thm-mahalanobis-distance-is-pseudometric` · theorem — The Mahalanobis distance is a pseudometric and comes from a linear feature map
- `lem-svec-transports-frobenius-subgradients` · lemma — Symmetric vectorization transports closed convex domains and subgradients
- `thm-lmnn-fixed-target-objective-is-convex` · theorem — The fixed-target LMNN objective is convex
- `lem-lmnn-explicit-subgradient-and-data-bound` · lemma — LMNN hinge subgradient formula and a uniform data-dependent bound
- `alg-lmnn-finite-budget-projected-subgradient` · algorithm — Finite-budget projected-subgradient training for fixed-target LMNN
- `thm-lmnn-projected-subgradient-best-average-bound` · theorem — Conditional best-iterate and weighted-average bound for LMNN training

### `ml02-metric-learning-examples` — Nearest neighbors and learned metrics — Examples (3 item(s))

- `ex-singular-mahalanobis-metric-identifies-distinct-points` · example — A rank-deficient Mahalanobis matrix identifies distinct points
- `ex-fixed-target-lmnn-triplet-conflict` · example — A fixed LMNN target triplet can retain a positive margin loss
- `ex-one-lmnn-projected-step-is-not-convergence` · example — One decreasing LMNN projection step is not a convergence certificate

### `ml02-graphical-models` — Undirected graphical models and sparse precision estimation (8 item(s))

- `def-undirected-graphical-model-and-markov-properties` · definition — Finite undirected graphs, Markov properties, and clique factorization
- `def-graphical-lasso-objective` · definition — Gaussian sparse-precision objective with the all-entry penalty
- `def-restricted-boltzmann-machine` · definition — Binary restricted Boltzmann machine, exact likelihood gradient, and finite contrastive divergence
- `thm-gaussian-precision-zero-conditional-independence` · theorem — Gaussian precision zeros characterize pairwise conditional independence
- `lem-graphical-lasso-profiled-gaussian-likelihood` · lemma — The Gaussian profile likelihood reduces to the trace score
- `alg-graphical-lasso-coordinate-descent` · algorithm — Finite-budget block and cyclic-coordinate graphical-lasso procedure
- `lem-graphical-lasso-finite-budget-properties` · lemma — Coordinate minimization, positive-definiteness invariant and termination of the finite-budget graphical-lasso procedure
- `thm-graphical-lasso-convexity-and-kkt` · theorem — The all-entry graphical-lasso objective has a unique KKT optimizer

### `ml02-graphical-models-examples` — Undirected graphical models and sparse precision estimation — Examples (3 item(s))

- `ex-rbm-visible-units-conditionally-independent-given-hidden` · example — Visible RBM units are conditionally independent but dependent marginally
- `ex-three-node-gaussian-chain` · example — A three-node Gaussian chain has conditionally independent endpoints
- `ex-graphical-lasso-penalty-sparsity-threshold` · example — Increasing λ creates an exact zero edge in a two-variable graphical lasso

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/machine-learning-all-101-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `machine-learning-all-101-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
