# Step 5 adjudication — group **g**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 20, 21, 22: 3 A/B pair(s), 6 page(s), 49 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **20**: `research/machine-learning-all-101-2026-10-19-batch-20-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **21**: `research/machine-learning-all-101-2026-10-19-batch-21-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **22**: `research/machine-learning-all-101-2026-10-19-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 20 | `ml02-clustering-mixtures` | A | machine-learning | 2734 | `central-limit-theorems`, `em-algorithm-and-latent-variable-likelihood-ascent`, `independence-borel-cantelli-and-zero-one-laws`, `inner-product-spaces-and-orthogonality`, `lebesgue-measure-on-euclidean-space`, `numerical-optimization-for-statistical-computation`, `probability-spaces-random-variables-and-expectation`, `product-measures-and-the-fubini-tonelli-theorems`, `the-spectral-theorem-and-singular-value-decomposition`, `weak-convergence-tightness-and-representation` |
| 20 | `ml02-clustering-mixtures-examples` | B | machine-learning | 2735 | `ml02-clustering-mixtures` |
| 21 | `ml02-spectral-clustering` | A | machine-learning | 2736 | `algebraic-and-spectral-graph-theory`, `ml02-clustering-mixtures`, `the-spectral-theorem-and-singular-value-decomposition` |
| 21 | `ml02-spectral-clustering-examples` | B | machine-learning | 2737 | `ml02-spectral-clustering` |
| 22 | `ml02-dimension-reduction` | A | machine-learning | 2738 | `countability-and-uncountability`, `hilbert-space-geometry-and-riesz-representation`, `inner-product-spaces-and-orthogonality`, `matrix-norms-condition-numbers-and-numerical-stability`, `the-spectral-theorem-and-singular-value-decomposition` |
| 22 | `ml02-dimension-reduction-examples` | B | machine-learning | 2739 | `ml02-dimension-reduction` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `ml02-clustering-mixtures` — K-means, Gaussian mixtures, and soft assignments (10 item(s))

- `def-k-means-objective` · definition — K-means objective
- `def-finite-gaussian-mixture` · definition — Finite Gaussian mixture with positive-definite component covariances
- `lem-log-determinant-strictly-concave-on-positive-definite-matrices` · lemma — Strict concavity of log determinant on positive-definite matrices
- `thm-equal-spherical-mixture-low-variance-kmeans-limit` · theorem — Equal-spherical mixture assignments and objective converge to k-means
- `alg-lloyd-k-means` · algorithm — Lloyd's k-means algorithm with explicit tie handling
- `thm-finite-gaussian-component-density-normalized` · theorem — Positive-definite multivariate Gaussian density is normalized
- `thm-lloyd-objective-monotonicity-and-termination` · theorem — Lloyd iteration is objective-decreasing and terminates
- `alg-gaussian-mixture-em` · algorithm — Exact EM updates for a finite Gaussian mixture
- `thm-gaussian-mixture-exact-m-step-maximizes-q` · theorem — The full-affine-span Gaussian-mixture M-step maximizes Q
- `thm-gaussian-mixture-em-observed-likelihood-is-nondecreasing` · theorem — Exact Gaussian-mixture EM does not decrease observed log likelihood

### `ml02-clustering-mixtures-examples` — K-means, Gaussian mixtures, and soft assignments — Examples (3 item(s))

- `ex-lloyd-tie-sensitive-local-minima` · example — Tie retention gives distinct Lloyd fixed points
- `ex-fractional-gaussian-mixture-responsibilities` · example — A tied observation keeps fractional Gaussian responsibilities
- `ex-gaussian-mixture-likelihood-unbounded` · example — A two-point sample has unbounded Gaussian-mixture likelihood

### `ml02-spectral-clustering` — Spectral clustering and graph cuts (8 item(s))

- `def-finite-weighted-graph-laplacian` · definition — Finite weighted graph Laplacian
- `lem-finite-trace-minimization` · lemma — Finite-dimensional trace minimization under orthonormal constraints
- `lem-deterministic-eigenspace-basis` · lemma — Projected coordinate vectors give a deterministic orthonormal basis
- `def-ratio-cut-and-normalized-cut` · definition — RatioCut and normalized cut for a finite weighted graph
- `lem-weighted-graph-laplacian-quadratic-form-and-kernel` · lemma — Quadratic form and kernel of a weighted graph Laplacian
- `lem-ratio-cut-indicator-trace-identities` · lemma — RatioCut and Ncut as indicator-matrix traces
- `thm-weighted-ratio-and-normalized-cut-relaxations` · theorem — Weighted RatioCut and Ncut spectral relaxations
- `alg-weighted-spectral-clustering` · algorithm — Deterministic weighted spectral clustering with explicit isolate and eigenspace conventions

### `ml02-spectral-clustering-examples` — Spectral clustering and graph cuts — Examples (4 item(s))

- `ex-knn-symmetrization-changes-ratio-cut` · example — KNN symmetrization changes a graph cut
- `ex-disconnected-weighted-components-spectral-clustering` · example — Disconnected weighted components are zero-cut clusters
- `ex-isolated-vertex-in-normalized-cut` · example — An isolate is excluded from Ncut and reinserted separately
- `ex-concentric-circles-spectral-embedding` · example — A disconnected graph on concentric circles separates the rings

### `ml02-dimension-reduction` — PCA, kernel PCA, MDS, and manifold embeddings (17 item(s))

- `def-finite-centering-matrix` · definition — Finite centering matrices and centered data
- `lem-ky-fan-trace-maximization` · lemma — The maximum trace over q-dimensional orthonormal frames is the sum of the top q eigenvalues
- `lem-equal-gram-configurations-are-isometric` · lemma — Finite configurations with equal Gram matrices have isometric linear spans
- `alg-deterministic-neighbor-selection` · algorithm — Deterministic finite nearest-neighbor lists and graph symmetrizations
- `thm-finite-centering-matrix-is-orthogonal-projector` · theorem — The finite centering matrix is the orthogonal projection onto the zero-sum subspace
- `def-rank-q-principal-component-analysis` · definition — Rank-q principal component analysis by Frobenius reconstruction error
- `alg-kernel-principal-component-analysis` · algorithm — Kernel principal component analysis for a finite positive-semidefinite Gram matrix
- `alg-classical-multidimensional-scaling` · algorithm — Classical multidimensional scaling from a finite dissimilarity matrix
- `def-lle-local-reconstruction-weights` · definition — Minimum-norm affine reconstruction weights for a finite LLE neighborhood
- `thm-pca-frobenius-optimality` · theorem — The top right singular subspace minimizes rank-q PCA Frobenius reconstruction error
- `thm-centered-psd-kernel-gram-matrix-is-psd` · theorem — Double-centering a finite positive-semidefinite Gram matrix preserves positive semidefiniteness
- `thm-classical-mds-recovers-euclidean-distances` · theorem — Double-centering Euclidean squared distances recovers their centered Gram matrix
- `thm-minimum-norm-lle-weights-exist-uniquely` · theorem — Finite LLE affine least-squares weights have a unique minimum-norm minimizer
- `alg-isomap` · algorithm — Finite ISOMAP with deterministic neighborhoods and connected-graph shortest paths
- `def-metric-stress-mds` · definition — Metric distance-stress multidimensional scaling
- `alg-locally-linear-embedding` · algorithm — Finite locally linear embedding with minimum-norm weights and a simple constant kernel
- `thm-lle-trace-minimizers` · theorem — Under the simple constant-kernel condition, LLE trace minimizers are bottom positive eigenvectors

### `ml02-dimension-reduction-examples` — PCA, kernel PCA, MDS, and manifold embeddings — Examples (7 item(s))

- `ex-rank-q-pca-exact-reconstruction` · example — A rank-one centered data matrix is reconstructed exactly by rank-one PCA
- `ex-non-euclidean-dissimilarity-has-negative-mds-eigenvalue` · example — A non-Euclidean three-point dissimilarity produces a negative MDS eigenvalue
- `ex-disconnected-knn-graph-blocks-isomap-distances` · example — A one-nearest-neighbor graph can disconnect finite ISOMAP
- `ex-singular-local-lle-covariance` · example — A singular local LLE covariance still has a unique minimum-norm weight vector
- `ex-connected-lle-graph-need-not-have-simple-zero` · example — A connected LLE neighbor graph can have more than one fixed vector
- `ex-square-loop-mds-isomap-lle-differ` · example — Classical MDS, ISOMAP, and LLE give different embeddings of a four-point square
- `ex-metric-stress-objective-nonconvex` · example — The metric stress objective is not convex even for two points

## Your seams

Another group's pages depend on yours:

- `semi-supervised-graph-propagation-and-pseudolabeling-limits` (group ah) requires your `ml02-spectral-clustering`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

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
