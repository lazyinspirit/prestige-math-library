# Step 5 adjudication — group **g**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 19, 20, 21: 3 A/B pair(s), 6 page(s), 40 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **19**: `research/numerical-analysis-remaining-71-2026-10-17-batch-19-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **20**: `research/numerical-analysis-remaining-71-2026-10-17-batch-20-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **21**: `research/numerical-analysis-remaining-71-2026-10-17-batch-21-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 19 | `fast-multipole-expansions-and-error` | A | numerical-linear-algebra-and-approximation | 2592 | `hierarchical-low-rank-matrices-and-error-propagation`, `computed-fast-transforms-and-convolution` |
| 19 | `fast-multipole-expansions-and-error-examples` | B | numerical-linear-algebra-and-approximation | 2593 | `fast-multipole-expansions-and-error` |
| 20 | `multigrid-methods-and-complexity` | A | numerical-linear-algebra-and-approximation | 2594 | `preconditioner-algorithms-and-residual-metrics`, `lax-milgram-and-weak-elliptic-solutions` |
| 20 | `multigrid-methods-and-complexity-examples` | B | numerical-linear-algebra-and-approximation | 2595 | `multigrid-methods-and-complexity` |
| 21 | `alternating-tensor-optimization-and-effective-eigenproblems` | A | numerical-linear-algebra-and-approximation | 2596 | `tensor-train-compression-and-truncation-error`, `restarted-and-block-eigensolvers` |
| 21 | `alternating-tensor-optimization-and-effective-eigenproblems-examples` | B | numerical-linear-algebra-and-approximation | 2597 | `alternating-tensor-optimization-and-effective-eigenproblems` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `fast-multipole-expansions-and-error` — Fast multipole expansions and error (10 item(s))

- `def-finite-planar-quadtree-fmm-pair-lists` · definition — Finite planar quadtree and separated interaction lists
- `def-three-dimensional-spherical-harmonic-space` · definition — Degree-indexed spherical harmonic spaces in three dimensions
- `alg-planar-laplace-fmm-fixed-order` · algorithm — Fixed-order planar Laplace fast multipole procedure
- `lem-planar-fmm-pair-lists-partition-off-diagonal-pairs` · lemma — Planar FMM lists partition all ordered off-diagonal particle pairs
- `lem-three-dimensional-laplace-spherical-harmonic-addition-theorem` · lemma — Three-dimensional Laplace spherical-harmonic addition theorem
- `lem-planar-fmm-multipole-local-translation-identities` · lemma — Planar Laplace multipole and local translation identities
- `thm-planar-fmm-operation-count-under-linear-list-assumptions` · theorem — Planar FMM operation count under explicit linear-size tree and list bounds
- `alg-three-dimensional-laplace-cluster-expansion` · algorithm — Single-cluster three-dimensional Laplace multipole evaluator
- `thm-planar-fmm-global-potential-force-error` · theorem — Global planar FMM potential and derivative error
- `thm-three-dimensional-laplace-expansion-error-and-work` · theorem — Three-dimensional Laplace cluster expansion error and work

### `fast-multipole-expansions-and-error-examples` — Fast multipole expansions and error — Examples (3 item(s))

- `ex-fmm-clustered-points-require-depth-sensitive-work` · example — A clustered point set makes tree depth enter the work
- `ex-fmm-two-separated-charge-clusters` · example — Two separated planar charge clusters
- `ex-fmm-near-far-potential-and-force-error` · example — Near/far split with exact near evaluation and truncated far error

### `multigrid-methods-and-complexity` — Multigrid methods and complexity (11 item(s))

- `def-galerkin-coarse-grid-correction` · definition — Galerkin coarse matrices and the exact coarse-correction error map
- `lem-zero-boundary-piecewise-affine-functions-lie-in-h1zero` · lemma — Continuous piecewise-affine functions with zero endpoints lie in H1-zero
- `thm-galerkin-coarse-correction-is-energy-orthogonal-projector` · theorem — The Galerkin coarse correction is an energy-orthogonal projector
- `def-symmetric-two-grid-error-operator` · definition — The symmetric two-grid error map from a pre-smoother and Galerkin correction
- `alg-aggregation-based-algebraic-multigrid-hierarchy` · algorithm — Finite strength-graph aggregation and Galerkin hierarchy with explicit statuses
- `lem-one-dimensional-poisson-smoothing-and-approximation` · lemma — Level-uniform 1D Poisson smoothing and approximation bounds
- `alg-finite-galerkin-v-cycle` · algorithm — Finite recursive Galerkin V- and W-cycle for an SPD hierarchy
- `thm-two-grid-energy-contraction-under-joint-estimate` · theorem — A joint smoothing-correction estimate gives symmetric two-grid energy contraction
- `thm-aggregation-amg-hierarchy-preserves-spd-and-terminates` · theorem — Finite aggregation AMG preserves the SPD matrix class and returns a status
- `thm-galerkin-v-cycle-work-recurrence-master-regimes` · theorem — Work recurrence for fixed-coarsening multigrid cycles in all three regimes
- `thm-one-dimensional-poisson-two-grid-energy-contraction` · theorem — The symmetric 1D Poisson two-grid cycle is uniformly contractive

### `multigrid-methods-and-complexity-examples` — Multigrid methods and complexity — Examples (3 item(s))

- `ex-one-dimensional-poisson-coarse-correction-removes-linear-error` · example — A linear error on the one-dimensional Poisson coarse space is removed exactly
- `ex-v-and-w-cycle-costs-in-two-dimensions` · example — V- and W-cycle work under two-dimensional four-to-one coarsening
- `ex-one-dimensional-poisson-two-grid-uniform-contraction` · example — One high-frequency mode in the finite one-dimensional Poisson two-grid cycle

### `alternating-tensor-optimization-and-effective-eigenproblems` — Alternating tensor optimization and effective eigenproblems (10 item(s))

- `lem-na-finite-hermitian-ground-vector-with-deterministic-tie` · lemma — Finite Hermitian ground vectors and a deterministic tie rule
- `lem-na-normalized-rayleigh-energy-perturbation` · lemma — Rayleigh energy perturbation for normalized finite states
- `def-na-finite-mps-state-and-hermitian-hamiltonian` · definition — Finite matrix-product states and Hermitian Hamiltonians
- `lem-na-periodic-mps-to-open-tt` · lemma — A periodic finite MPS has an exact open-boundary TT conversion
- `lem-na-mixed-canonical-qr-gauge-preserves-state` · lemma — Rank-revealing QR sweeps give exact mixed canonical gauge
- `lem-na-mps-environment-isometry-and-effective-hamiltonian` · lemma — Canonical MPS environments are isometric and the effective Hamiltonian is Hermitian
- `prop-na-exact-local-dmrg-update-does-not-increase-energy` · proposition — An exact local DMRG ground solve does not increase Rayleigh energy
- `alg-na-alternating-tensor-optimization-and-effective-eigenproblems` · algorithm — Finite alternating tensor optimization with effective eigenproblems
- `thm-na-dmrg-sweep-truncation-energy-increase-bound` · theorem — TT discarded weights bound the post-sweep DMRG energy increase
- `thm-na-convergent-exact-dmrg-sweeps-are-coordinatewise-stationary` · theorem — Convergent fixed-rank exact sweeps are coordinatewise stationary

### `alternating-tensor-optimization-and-effective-eigenproblems-examples` — Alternating tensor optimization and effective eigenproblems — Examples (3 item(s))

- `ex-na-two-site-spin-chain-exact-local-solve` · example — A two-site spin-chain local solve reaches the exact ground state
- `ex-na-degenerate-local-ground-state-tie-break` · example — A degenerate local ground eigenspace has a deterministic tie choice
- `ex-na-two-site-tt-truncation-can-increase-energy` · example — A two-site TT truncation can increase energy after an exact solve

## Your seams

Your pages depend on another group's:

- `fast-multipole-expansions-and-error` requires `hierarchical-low-rank-matrices-and-error-propagation` (group f, batch 16)
- `alternating-tensor-optimization-and-effective-eigenproblems` requires `tensor-train-compression-and-truncation-error` (group d, batch 10)

Another group's pages depend on yours:

- `overlapping-schwarz-and-stable-subspace-decompositions` (group o) requires your `multigrid-methods-and-complexity`
- `nonlinear-full-approximation-multigrid` (group p) requires your `multigrid-methods-and-complexity`
- `boundary-integral-equations-and-galerkin-bem` (group s) requires your `fast-multipole-expansions-and-error`

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
