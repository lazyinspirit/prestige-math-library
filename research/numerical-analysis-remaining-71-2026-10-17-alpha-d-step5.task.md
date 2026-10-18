# Step 5 adjudication — group **d**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 10, 11, 12: 3 A/B pair(s), 6 page(s), 64 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **10**: `research/numerical-analysis-remaining-71-2026-10-17-batch-10-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **11**: `research/numerical-analysis-remaining-71-2026-10-17-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **12**: `research/numerical-analysis-remaining-71-2026-10-17-batch-12-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 10 | `tensor-train-compression-and-truncation-error` | A | numerical-linear-algebra-and-approximation | 2574 | `computed-singular-values-and-rank-revealing-factorizations` |
| 10 | `tensor-train-compression-and-truncation-error-examples` | B | numerical-linear-algebra-and-approximation | 2575 | `tensor-train-compression-and-truncation-error` |
| 11 | `randomized-low-rank-approximation` | A | numerical-linear-algebra-and-approximation | 2576 | `sparse-matrix-models-and-kernel-costs`, `computed-singular-values-and-rank-revealing-factorizations`, `conjugate-families-and-posterior-prediction`, `identifiability-and-approximation-bias-in-computational-inference` |
| 11 | `randomized-low-rank-approximation-examples` | B | numerical-linear-algebra-and-approximation | 2577 | `randomized-low-rank-approximation` |
| 12 | `ewald-periodic-potentials-and-particle-mesh-error` | A | numerical-linear-algebra-and-approximation | 2578 | `computed-fast-transforms-and-convolution`, `poisson-summation-sampling-and-lattice-duality`, `euclidean-surface-measure-divergence-and-green-identities` |
| 12 | `ewald-periodic-potentials-and-particle-mesh-error-examples` | B | numerical-linear-algebra-and-approximation | 2579 | `ewald-periodic-potentials-and-particle-mesh-error` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tensor-train-compression-and-truncation-error` — Tensor train compression and truncation error (15 item(s))

- `def-finite-tensor-arrays-and-frobenius-inner-product` · definition — Finite tensor arrays and the Frobenius inner product
- `lem-tensor-unfoldings-are-frobenius-isometries` · lemma — Tensor unfoldings preserve the Frobenius inner product
- `def-tucker-multilinear-rank-and-mode-products` · definition — Tucker format, multilinear rank, and mode products
- `def-tensor-train-cores-bond-ranks-and-canonical-gauges` · definition — Tensor train cores, bond ranks, and canonical gauges
- `def-canonical-polyadic-rank` · definition — Canonical polyadic rank
- `thm-best-rank-k-frobenius-matrix-approximation` · theorem — Best rank-k matrix approximation in Frobenius norm
- `lem-full-column-rank-matrix-least-squares-solution` · lemma — Full-column-rank matrix least squares has a unique minimizer
- `alg-sequential-tensor-train-svd` · algorithm — Sequential tensor-train SVD
- `alg-tensor-train-rounding` · algorithm — Tensor-train rounding
- `thm-tensor-train-storage-and-inner-product-cost` · theorem — Tensor-train storage and inner-product costs
- `alg-hosvd-truncation` · algorithm — Higher-order SVD truncation
- `alg-budgeted-cp-alternating-least-squares` · algorithm — Budgeted CP alternating least squares
- `thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error` · theorem — Exact TT ranks and root-sum-square truncation error
- `thm-hosvd-quasioptimal-multilinear-rank-error` · theorem — HOSVD quasioptimality for multilinear rank
- `thm-exact-cp-als-block-updates-are-monotone` · theorem — Exact CP-ALS block updates do not increase the objective

### `tensor-train-compression-and-truncation-error-examples` — Tensor train compression and truncation error — Examples (4 item(s))

- `cex-best-rank-two-cp-approximation-may-not-exist` · counterexample — A best rank-two CP approximation need not exist
- `ex-separable-grid-tensor-has-tt-rank-one` · example — A separable grid tensor has TT rank one
- `ex-two-tt-truncations-realise-root-sum-squares-bound` · example — Two TT truncations realize the root-sum-square bound
- `ex-diagonal-tensor-has-large-minimal-tt-ranks` · example — A diagonal tensor has large minimal TT ranks

### `randomized-low-rank-approximation` — Randomized low-rank approximation (21 item(s))

- `def-standard-real-and-normalized-complex-gaussian-matrix-law` · definition — Standard real and normalized complex Gaussian matrix laws
- `lem-orthogonal-projector-power-error-inequality` · lemma — Orthogonal-projector power error inequality
- `lem-gaussian-matrix-law-normalization-and-second-moments` · lemma — Normalization and second moments of the Gaussian matrix laws
- `alg-gaussian-randomized-range-finder` · algorithm — Exact Gaussian randomized range finder
- `lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence` · lemma — Orthogonal and unitary invariance of Gaussian matrix blocks
- `lem-finite-real-gaussian-increment-comparison` · lemma — Finite Gaussian increment comparison
- `lem-finite-scan-range-basis-is-borel` · lemma — Borel measurability and range correctness of the finite scan
- `alg-randomized-power-subspace-iteration-with-qr` · algorithm — Reorthogonalized randomized power subspace iteration
- `lem-wide-gaussian-matrix-has-full-row-rank-almost-surely` · lemma — A wide Gaussian matrix has full row rank almost surely
- `lem-real-scaled-gaussian-product-expectation` · lemma — Real scaled-Gaussian spectral and Frobenius product bounds
- `lem-randomized-rangefinder-deterministic-svd-partition-error` · lemma — Deterministic SVD-partition error bound for the range finder
- `lem-power-rangefinder-projector-is-borel` · lemma — Measurability of the reorthogonalized power range finder
- `thm-randomized-power-rangefinder-error-transfer` · theorem — Power-rangefinder error transfer under finite expected powered error
- `lem-wide-gaussian-pseudoinverse-frobenius-moments` · lemma — Exact Frobenius moments of wide Gaussian pseudoinverses
- `lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail` · lemma — Spectral moments and integrable tails for wide Gaussian pseudoinverses
- `lem-normalized-complex-gaussian-block-affine-spectral-second-moments` · lemma — Affine second-moment bounds for normalized complex Gaussian block products
- `lem-normalized-complex-rangefinder-direct-spectral-expectation` · lemma — Direct expected spectral bound for the normalized complex range finder
- `thm-real-gaussian-rangefinder-expected-spectral-error` · theorem — Expected spectral error of the real Gaussian range finder
- `thm-gaussian-rangefinder-expected-spectral-error` · theorem — Expected spectral error for real and normalized complex Gaussian range finders
- `thm-real-gaussian-power-rangefinder-expected-error` · theorem — Expected real Gaussian power-rangefinder error
- `thm-gaussian-power-rangefinder-expected-error` · theorem — Expected real and normalized complex Gaussian power-rangefinder error

### `randomized-low-rank-approximation-examples` — Randomized low-rank approximation — Examples (3 item(s))

- `ex-power-rangefinder-loses-small-mode-without-qr` · example — A small mode is lost by an unorthogonalized power pass
- `ex-gaussian-rangefinder-exact-on-rank-k-matrices` · example — Exact range recovery on a rank-k matrix
- `ex-slow-singular-tail-rangefinder-error-term` · example — A slowly decaying singular tail makes the Frobenius term dominate

### `ewald-periodic-potentials-and-particle-mesh-error` — Ewald periodic potentials and particle mesh error (16 item(s))

- `def-ewald-causal-cardinal-spline-window` · definition — Causal cardinal spline window
- `def-ewald-three-dimensional-periodic-source-data` · definition — Neutral point sources and Fourier data on a three-dimensional torus
- `lem-ewald-screened-coulomb-kernel-and-self-limit` · lemma — Gaussian screened Coulomb kernel and its self limit
- `def-ewald-pme-cardinal-assignment-model` · definition — Periodic cardinal-spline assignment and unitary mesh transform
- `lem-ewald-gaussian-poisson-periodization` · lemma — Poisson periodization of a normalized Gaussian on a full-rank lattice
- `lem-ewald-lattice-shell-gaussian-tail-controllers` · lemma — Uniform lattice-shell counts and explicit Gaussian tail controllers
- `lem-ewald-smooth-torus-fourier-pairing` · lemma — Smooth torus test functions have rapidly convergent Fourier pairings
- `lem-ewald-pme-spline-alias-and-dft-normalization` · lemma — Exact three-dimensional spline assignment aliases and FFT normalization
- `thm-ewald-neutral-periodic-poisson-green-function` · theorem — The mean-zero Fourier distribution solves the neutral periodic Poisson equation
- `lem-ewald-pme-derivative-window-alias-bound` · lemma — Derivative-window alias bounds including the P=2 knot branch
- `thm-ewald-alpha-independent-energy-and-potential` · theorem — The alpha-independent Ewald potential and renormalized energy
- `thm-ewald-pme-reciprocal-energy-force-error-bound` · theorem — Deterministic reciprocal particle-mesh Ewald potential, energy, and force bounds
- `thm-ewald-real-reciprocal-cutoff-error-bounds` · theorem — Explicit real and reciprocal Ewald potential, energy, and force tail bounds
- `thm-ewald-total-pme-error-certificate` · theorem — Total deterministic Ewald and particle-mesh error certificate
- `alg-ewald-certified-particle-mesh-evaluator` · algorithm — Certified three-dimensional particle-mesh Ewald evaluator
- `lem-ewald-certified-particle-mesh-evaluator-terminates` · lemma — The certified particle-mesh Ewald evaluator terminates with finite outputs or an explicit status

### `ewald-periodic-potentials-and-particle-mesh-error-examples` — Ewald periodic potentials and particle mesh error — Examples (5 item(s))

- `ex-ewald-nonneutral-zero-mode-obstruction` · example — A nonneutral periodic source has no periodic Poisson solution
- `ex-ewald-neutral-dipole-cell` · example — A neutral dipole cell and its reciprocal modes
- `ex-ewald-source-collision-field-singularity` · example — A point-source potential is singular at a source
- `ex-ewald-alpha-cutoff-tradeoff` · example — Opposite real and reciprocal cutoff trends in the Ewald parameter
- `ex-ewald-mesh-energy-force-consistency` · example — The energy-gradient mesh force matches the differentiated mesh energy

## Your seams

Another group's pages depend on yours:

- `hierarchical-low-rank-matrices-and-error-propagation` (group f) requires your `randomized-low-rank-approximation`
- `hierarchical-low-rank-matrices-and-error-propagation` (group f) requires your `tensor-train-compression-and-truncation-error`
- `sketched-least-squares-and-subspace-embeddings` (group f) requires your `randomized-low-rank-approximation`
- `alternating-tensor-optimization-and-effective-eigenproblems` (group g) requires your `tensor-train-compression-and-truncation-error`

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
