# Step 5 adjudication — group **f**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 16, 17, 18: 3 A/B pair(s), 6 page(s), 53 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **16**: `research/numerical-analysis-remaining-71-2026-10-17-batch-16-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **17**: `research/numerical-analysis-remaining-71-2026-10-17-batch-17-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **18**: `research/numerical-analysis-remaining-71-2026-10-17-batch-18-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-analysis-remaining-71-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 16 | `hierarchical-low-rank-matrices-and-error-propagation` | A | numerical-linear-algebra-and-approximation | 2586 | `randomized-low-rank-approximation`, `sparse-direct-elimination-and-ordering`, `tensor-train-compression-and-truncation-error` |
| 16 | `hierarchical-low-rank-matrices-and-error-propagation-examples` | B | numerical-linear-algebra-and-approximation | 2587 | `hierarchical-low-rank-matrices-and-error-propagation` |
| 17 | `sketched-least-squares-and-subspace-embeddings` | A | numerical-linear-algebra-and-approximation | 2588 | `randomized-low-rank-approximation`, `computed-fast-transforms-and-convolution`, `robust-covariance-and-high-dimensional-stability` |
| 17 | `sketched-least-squares-and-subspace-embeddings-examples` | B | numerical-linear-algebra-and-approximation | 2589 | `sketched-least-squares-and-subspace-embeddings` |
| 18 | `interpolative-cur-and-nystrom-decompositions` | A | numerical-linear-algebra-and-approximation | 2590 | `sketched-least-squares-and-subspace-embeddings` |
| 18 | `interpolative-cur-and-nystrom-decompositions-examples` | B | numerical-linear-algebra-and-approximation | 2591 | `interpolative-cur-and-nystrom-decompositions` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `hierarchical-low-rank-matrices-and-error-propagation` — Hierarchical low rank matrices and error propagation (20 item(s))

- `def-hlr-cluster-trees-and-geometric-admissibility` · definition — Finite cluster trees and geometric admissibility
- `lem-hlr-balanced-cluster-tree-size-and-depth` · lemma — Size and depth of a balanced cluster tree
- `lem-hlr-block-cluster-leaves-partition-index-pairs` · lemma — Block-cluster leaves partition the index-pair set
- `alg-hlr-core-svd-recompression-with-tolerance` · algorithm — Core-SVD recompression with rank and error tolerances
- `def-hlr-and-h2-block-matrix-representations` · definition — H-matrix block representation
- `thm-hlr-core-svd-recompression-is-best-rank-tolerance` · theorem — Core-SVD recompression is best at the declared Frobenius tolerance
- `def-h2-nested-cluster-bases-and-interaction-lists` · definition — Nested H² cluster bases and interaction lists
- `alg-hlr-block-matvec` · algorithm — H-matrix block matrix-vector multiplication
- `alg-hlr-bottom-up-recompression` · algorithm — Bottom-up low-rank recompression of block contributions
- `thm-hlr-separated-cauchy-block-rank-bound` · theorem — A separated Cauchy block has a geometric rank bound
- `alg-hlr-compress-exact-lu-factors` · algorithm — Compress exact block LU factors with local tolerances
- `lem-hlr-bottom-up-recompression-error-bound` · lemma — Bottom-up factor-sum recompression has the reported rank and Frobenius error bound
- `alg-hlr-block-addition` · algorithm — Tolerance-controlled H-matrix block addition
- `alg-hlr-block-product` · algorithm — Tolerance-controlled H-matrix block product
- `thm-hlr-block-matvec-correct` · theorem — H-matrix block multiplication returns the represented matrix action
- `alg-h2-matrix-vector-multiplication` · algorithm — Nested-basis H² matrix-vector multiplication
- `thm-hlr-blockwise-error-propagation` · theorem — Blockwise Frobenius errors propagate by disjoint block sums
- `thm-hlr-storage-and-matvec-complexity` · theorem — Balanced H and H² storage and matvec complexity
- `thm-h2-matrix-vector-multiplication-correct` · theorem — Nested-basis H² multiplication is exact for its represented matrix
- `thm-hlr-approximate-factorization-residual-and-inverse-error` · theorem — Compressed block LU factors have a residual and inverse certificate

### `hierarchical-low-rank-matrices-and-error-propagation-examples` — Hierarchical low rank matrices and error propagation — Examples (3 item(s))

- `ex-hlr-nearfield-block-requires-full-rank` · example — A nearfield identity block requires full rank for subunit spectral error
- `ex-hlr-accumulated-truncation-can-destroy-positive-definiteness` · example — Two accepted local truncations can destroy positive definiteness after accumulation
- `ex-hlr-separated-cauchy-block` · example — A rank-one approximation of a separated Cauchy block

### `sketched-least-squares-and-subspace-embeddings` — Sketched least squares and subspace embeddings (13 item(s))

- `alg-sketch-and-solve-least-squares` · algorithm — Rank-aware sketch-and-solve least squares
- `def-oblivious-l2-subspace-embedding` · definition — Oblivious squared-norm subspace embeddings
- `def-sketch-qr-right-preconditioner` · definition — Right preconditioner from the reduced QR factor of a sketch
- `def-subspace-leverage-scores` · definition — Row leverage scores of a finite-dimensional subspace
- `lem-hermitian-sphere-net-controls-operator-norm` · lemma — A sphere net controls a real or complex Hermitian operator norm
- `lem-subspace-leverage-score-identities` · lemma — Leverage scores are basis-independent and sum to the dimension
- `thm-sketch-and-solve-exact-minimizer` · theorem — A converged exact sketch-and-solve run returns a sketch minimizer
- `thm-sketch-qr-right-preconditioner-conditioned-spectrum` · theorem — An embedded QR right preconditioner has controlled singular values
- `lem-gaussian-squared-norm-tail` · lemma — Squared-norm concentration for real and normalized complex Gaussians
- `alg-leverage-score-row-sampling-sketch` · algorithm — With-replacement leverage-score row sampling and rescaling
- `thm-sketch-and-solve-residual-guarantee` · theorem — Embedding span(A,b) gives the sketch-and-solve residual factor
- `thm-gaussian-oblivious-l2-subspace-embedding` · theorem — Gaussian sketches embed a fixed subspace at the additive dimension rate
- `thm-leverage-score-row-sampling-subspace-embedding` · theorem — Leverage-score row sampling embeds the column space

### `sketched-least-squares-and-subspace-embeddings-examples` — Sketched least squares and subspace embeddings — Examples (3 item(s))

- `cex-embedding-the-column-space-alone-does-not-control-ls-residual` · counterexample — Embedding Ran(A) alone does not control the sketch-and-solve residual
- `ex-leverage-zero-rows-and-high-coherence` · example — Zero leverage rows and a maximally coherent one-dimensional design
- `ex-overdetermined-regression-exact-subspace-sketch` · example — An exact two-row sketch for a three-row regression problem

### `interpolative-cur-and-nystrom-decompositions` — Interpolative cur and nystrom decompositions (11 item(s))

- `alg-strong-rrqr-interpolative-decomposition` · algorithm — Strong-RRQR interpolative decomposition with explicit statuses
- `lem-moore-penrose-products-are-orthogonal-projectors` · lemma — The Moore-Penrose products are orthogonal projectors
- `def-cur-reconstruction-cores` · definition — Skeleton and projected least-squares CUR cores
- `def-psd-nystrom-approximation` · definition — The positive-semidefinite Nyström approximation
- `lem-strong-rrqr-interpolative-decomposition-returns-a-status` · lemma — Capped RRQR interpolation returns a status and its direct certificate bounds the actual residual
- `thm-strong-rrqr-interpolative-decomposition-error` · theorem — Strong-RRQR interpolative decomposition error and coefficient bounds
- `thm-skeleton-cur-exactness` · theorem — Skeleton CUR is exact for a full-rank cross
- `thm-cur-projection-residual-bound` · theorem — Projected CUR has a two-sided Frobenius residual bound
- `lem-nystrom-square-root-projector-identity` · lemma — Nyström is a square-root orthogonal-projection compression
- `thm-psd-nystrom-order-and-exactness` · theorem — Nyström is positive semidefinite, dominated by A, and exact when it captures the range
- `thm-nystrom-deterministic-spectral-residual-bound` · theorem — Nyström deterministic spectral residual bound under a full-row-rank leading sketch

### `interpolative-cur-and-nystrom-decompositions-examples` — Interpolative cur and nystrom decompositions — Examples (3 item(s))

- `cex-arbitrary-selected-columns-miss-dominant-direction` · counterexample — A prescribed column can miss the dominant direction
- `ex-exact-rank-two-skeleton-cur` · example — An exact rank-two CUR reconstruction from a nonsingular cross
- `ex-psd-nystrom-residual-is-psd` · example — A PSD Nyström residual remains positive semidefinite

## Your seams

Your pages depend on another group's:

- `hierarchical-low-rank-matrices-and-error-propagation` requires `randomized-low-rank-approximation` (group d, batch 11)
- `hierarchical-low-rank-matrices-and-error-propagation` requires `tensor-train-compression-and-truncation-error` (group d, batch 10)
- `sketched-least-squares-and-subspace-embeddings` requires `randomized-low-rank-approximation` (group d, batch 11)

Another group's pages depend on yours:

- `fast-multipole-expansions-and-error` (group g) requires your `hierarchical-low-rank-matrices-and-error-propagation`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-analysis-remaining-71-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `numerical-analysis-remaining-71-2026-10-17`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
