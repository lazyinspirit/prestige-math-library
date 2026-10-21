# Step 5 adjudication — group **l**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 34, 35, 36: 3 A/B pair(s), 6 page(s), 25 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **34**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-34-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **35**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-35-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **36**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-36-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/inverse-problems-knot-theory-all-109-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 34 | `compressed-sensing-with-noise-and-model-selection` | A | inverse-problems | 3064 | `sparse-recovery-and-nullspace-certificates`, `operator-splitting-admm-and-primal-dual-methods` |
| 34 | `compressed-sensing-with-noise-and-model-selection-examples` | B | inverse-problems | 3065 | `compressed-sensing-with-noise-and-model-selection` |
| 35 | `manifold-and-physical-constraint-inversion` | A | inverse-problems | 3066 | `inverse-problems-identifiability-and-stability`, `nonlinear-inverse-problems-and-tangential-cone-conditions`, `riemannian-optimization-on-stiefel-and-grassmann-manifolds`, `constrained-variational-problems-and-variational-inequalities`, `hilbert-space-geometry-and-riesz-representation` |
| 35 | `manifold-and-physical-constraint-inversion-examples` | B | inverse-problems | 3067 | `manifold-and-physical-constraint-inversion` |
| 36 | `radon-transform-and-fourier-slice-reconstruction` | A | inverse-problems | 3068 | `tempered-distributions-and-the-fourier-transform`, `bochner-inversion-and-plancherel-on-lca-groups`, `finite-fourier-analysis-and-the-fast-fourier-transform` |
| 36 | `radon-transform-and-fourier-slice-reconstruction-examples` | B | inverse-problems | 3069 | `radon-transform-and-fourier-slice-reconstruction` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `compressed-sensing-with-noise-and-model-selection` — Stable compressed sensing with noise (10 item(s))

- `lem-ip-bpdn-dual-certificates` · lemma — Primal and infeasibility certificates for basis pursuit denoising
- `lem-ip-bpdn-objectives-proper-closed-convex` · lemma — The basis-pursuit denoising objective and residual indicator are proper closed convex
- `def-ip-best-s-term-l1-error` · definition — Best s-term ℓ1 approximation error
- `def-ip-robust-nullspace-property` · definition — The ℓ2 robust nullspace property
- `lem-ip-bpdn-minimizer-exists` · lemma — A feasible finite-dimensional BPDN problem attains its minimum
- `lem-ip-robust-nsp-block-tail-estimate` · lemma — A block-tail estimate for the largest coordinates
- `alg-ip-basis-pursuit-denoising` · algorithm — Certified basis-pursuit denoising by primal-dual hybrid gradient
- `lem-ip-best-s-term-l1-sparse-vector-formulation` · lemma — The coordinate-tail and sparse-vector formulations of best s-term error agree
- `lem-ip-largest-s-coordinates-attain-best-s-term-l1-error` · lemma — The largest coordinates attain the best s-term ℓ1 error
- `thm-ip-robust-nsp-noisy-recovery-bound` · theorem — Robust nullspace property gives stable noisy recovery

### `compressed-sensing-with-noise-and-model-selection-examples` — Stable compressed sensing with noise — Examples and Counterexamples (1 item(s))

- `ex-ip-34-scope-and-boundary-cases` · example — Bounded noise, compressible truth, and a large nullspace component

### `manifold-and-physical-constraint-inversion` — Physical constraints and manifold-valued inversion (4 item(s))

- `def-ip-admissible-constraint-class` · definition — Admissible constraint classes and restricted identifiability
- `prop-ip-constraints-can-remove-kernel-ambiguity` · proposition — A constraint removes kernel ambiguity exactly when its differences avoid the kernel
- `alg-ip-stiefel-constrained-regularized-gradient` · algorithm — Finite-budget regularized gradient on a Stiefel constraint
- `lem-ip-stiefel-gradient-finite-budget-return-and-feasibility` · lemma — The Stiefel gradient procedure returns a feasible iterate within its finite budget

### `manifold-and-physical-constraint-inversion-examples` — Physical constraints and manifold-valued inversion — Examples and Counterexamples (3 item(s))

- `ex-ip-pde-inadmissible-state-rejected-before-solve` · example — A negative finite-difference PDE state is rejected before solving
- `ex-ip-constraint-eliminates-a-kernel-direction` · example — A line constraint removes one kernel direction
- `ex-ip-halfspace-constraint-leaves-continuous-kernel-ambiguity` · example — A half-space constraint leaves a continuous kernel ambiguity

### `radon-transform-and-fourier-slice-reconstruction` — Euclidean Radon transform and filtered backprojection (4 item(s))

- `def-ip-2d-radon-transform` · definition — The Euclidean Radon transform on R²
- `thm-ip-fourier-slice-identity` · theorem — The Fourier-slice identity for the Euclidean Radon transform
- `thm-ip-radon-normal-operator` · theorem — The Euclidean Radon normal operator and inversion formula
- `alg-ip-filtered-backprojection-complete-data` · algorithm — Complete-data filtered backprojection

### `radon-transform-and-fourier-slice-reconstruction-examples` — Euclidean Radon transform and filtered backprojection — Examples and Counterexamples (3 item(s))

- `ex-ip-smooth-radial-phantom` · example — A smooth radial phantom and its sinogram
- `ex-ip-point-source-distributional-limit` · example — A point source as a distributional Radon limit
- `ex-ip-discretized-complete-data-backprojection` · example — A finite complete-angle filtered-backprojection calculation

## Your seams

Your pages depend on another group's:

- `compressed-sensing-with-noise-and-model-selection` requires `sparse-recovery-and-nullspace-certificates` (group k, batch 33)
- `manifold-and-physical-constraint-inversion` requires `inverse-problems-identifiability-and-stability` (group a, batch 1)
- `manifold-and-physical-constraint-inversion` requires `nonlinear-inverse-problems-and-tangential-cone-conditions` (group i, batch 25)

Another group's pages depend on yours:

- `limited-angle-tomography-and-invisible-singularities` (group m) requires your `radon-transform-and-fourier-slice-reconstruction`
- `geodesic-x-ray-transforms-on-simple-manifolds` (group m) requires your `radon-transform-and-fourier-slice-reconstruction`
- `analytic-double-fibration-and-bolker-visibility` (group m) requires your `radon-transform-and-fourier-slice-reconstruction`
- `inverse-problem-benchmarking-and-shift` (group q) requires your `manifold-and-physical-constraint-inversion`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/inverse-problems-knot-theory-all-109-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `inverse-problems-knot-theory-all-109-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
