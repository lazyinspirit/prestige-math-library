# Step 5 adjudication — group **q**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 49, 50, 51: 3 A/B pair(s), 6 page(s), 65 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **49**: `research/numerical-analysis-remaining-71-2026-10-17-batch-49-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **50**: `research/numerical-analysis-remaining-71-2026-10-17-batch-50-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **51**: `research/numerical-analysis-remaining-71-2026-10-17-batch-51-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 49 | `projection-and-pressure-correction-for-incompressible-flow` | A | numerical-pdes-and-spatial-discretization | 2652 | `preconditioner-algorithms-and-residual-metrics`, `energy-stable-incompressible-navier-stokes-discretization` |
| 49 | `projection-and-pressure-correction-for-incompressible-flow-examples` | B | numerical-pdes-and-spatial-discretization | 2653 | `projection-and-pressure-correction-for-incompressible-flow` |
| 50 | `substructuring-feti-dp-and-bddc-preconditioners` | A | numerical-pdes-and-spatial-discretization | 2654 | `overlapping-schwarz-and-stable-subspace-decompositions` |
| 50 | `substructuring-feti-dp-and-bddc-preconditioners-examples` | B | numerical-pdes-and-spatial-discretization | 2655 | `substructuring-feti-dp-and-bddc-preconditioners` |
| 51 | `crouzeix-raviart-finite-elements` | A | numerical-pdes-and-spatial-discretization | 2656 | `variational-crimes-and-strang-lemmas` |
| 51 | `crouzeix-raviart-finite-elements-examples` | B | numerical-pdes-and-spatial-discretization | 2657 | `crouzeix-raviart-finite-elements` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `projection-and-pressure-correction-for-incompressible-flow` — Projection, pressure correction and saddle-point solvers (15 item(s))

- `def-na-periodic-staggered-grid-stokes-operators` · definition — Periodic staggered-grid velocity and pressure spaces
- `def-na-symmetric-saddle-point-system-and-block-preconditioners` · definition — Symmetric saddle-point system, Schur complement, and block preconditioners
- `lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare` · lemma — Periodic pressure Laplacian gauge, solvability, and uniform Poincare bound
- `lem-na-periodic-staggered-grid-smooth-sampling-consistency` · lemma — Second-order consistency of staggered periodic sampling
- `thm-na-saddle-point-exact-schur-solve` · theorem — Exact Schur solve for a full-row-rank symmetric saddle system
- `thm-na-pressure-schur-spectral-equivalence-from-infsup` · theorem — Pressure Schur equivalence from inf-sup, continuity, and stiffness scaling
- `alg-na-periodic-incremental-pressure-correction` · algorithm — Backward-Euler incremental pressure correction on a periodic staggered grid
- `alg-na-bdf2-incremental-and-rotational-pressure-correction` · algorithm — BDF2 standard and rotational incremental pressure-correction variants
- `thm-na-symmetrically-preconditioned-saddle-point-spectrum` · theorem — Spectrum of a symmetrically pressure-mass-preconditioned saddle system
- `thm-na-periodic-pressure-correction-solves-well-defined` · theorem — Well-definedness of the periodic pressure-correction solves
- `thm-na-periodic-discrete-helmholtz-projection` · theorem — Mass-orthogonal periodic discrete Helmholtz projection and exact incompressibility
- `thm-na-periodic-pressure-correction-modified-energy-identity` · theorem — Modified velocity-pressure energy identity for periodic pressure correction
- `thm-na-periodic-pressure-correction-first-order-velocity-error` · theorem — First-order velocity accuracy for smooth periodic Stokes data
- `cor-na-mini-element-pressure-mass-schur-bounds` · corollary — Steady MINI Stokes pressure-mass Schur bounds
- `cor-na-mini-element-pressure-mass-block-spectrum` · corollary — MINI Stokes block-preconditioned spectral intervals

### `projection-and-pressure-correction-for-incompressible-flow-examples` — Projection, pressure correction and saddle-point solvers — Examples (4 item(s))

- `ex-na-wall-pressure-correction-tangential-velocity-defect` · example — A Neumann pressure correction can break tangential no-slip
- `cex-na-collocated-central-difference-checkerboard-pressure-mode` · counterexample — A collocated central gradient misses an alternating pressure mode
- `ex-na-saddle-point-block-preconditioner-golden-ratio-spectrum` · example — A scalar saddle system has golden-ratio preconditioned eigenvalues
- `ex-na-periodic-single-mode-pressure-correction` · example — One staggered Fourier mode is removed exactly by pressure correction

### `substructuring-feti-dp-and-bddc-preconditioners` — Substructuring, FETI-DP and BDDC (19 item(s))

- `def-pe26-scalar-substructuring-model` · definition — Scalar finite-element substructuring model
- `lem-pe26-preconditioned-operator-norm-bound` · lemma — Eigenvalue bounds from a left-inverse preconditioner
- `thm-pe26-local-energy-kernel-and-interior-spd` · theorem — Floating local kernels and positive interior blocks
- `def-pe26-primal-interface-spaces-and-jumps` · definition — Primal interface spaces and jump convention
- `def-pe26-discrete-harmonic-extension-and-schur-complement` · definition — Discrete harmonic extension and interface Schur complement
- `thm-pe26-primal-constraints-remove-floating-kernels` · theorem — Primal constraints remove local floating kernels
- `thm-pe26-harmonic-extension-minimizes-energy` · theorem — Discrete harmonic extension minimizes energy
- `thm-pe26-static-condensation-is-exact-interface-solve` · theorem — Static condensation is the exact interface problem
- `def-pe26-scaled-averaging-and-bddc-preconditioner` · definition — Coefficient-scaled averaging and BDDC
- `lem-pe26-discrete-trace-schur-equivalence` · lemma — Discrete Schur energy and the fractional trace norm
- `prop-pe26-bddc-constrained-local-minimization` · proposition — BDDC is the constrained partial-energy minimizer
- `def-pe26-feti-dp-dual-system-and-preconditioner` · definition — FETI-DP dual system and preconditioner
- `lem-pe26-log-edge-cutoff-and-discrete-sobolev` · lemma — Two-dimensional logarithmic edge cutoff estimates
- `prop-pe26-feti-dp-is-dual-schur-complement` · proposition — FETI-DP is the exact dual Schur system
- `lem-pe26-complementary-primal-dual-spectrum` · lemma — Complementary primal and dual projections share nonunit spectrum
- `lem-pe26-scaled-averaging-energy-bound` · lemma — Two-dimensional scaled averaging energy bound
- `rem-pe26-conditioning-and-work-are-separate` · remark — Conditioning and solver work are separate claims
- `thm-pe26-nontrivial-spectrum-bddc-feti-dp` · theorem — BDDC and FETI-DP have matching nontrivial spectra
- `thm-pe26-condition-number-2d-polylogarithmic` · theorem — The two-dimensional BDDC and FETI-DP polylogarithmic bound

### `substructuring-feti-dp-and-bddc-preconditioners-examples` — Substructuring, FETI-DP and BDDC — Examples (4 item(s))

- `ex-pe26-missing-primal-corner` · example — A floating component without a constant-detecting primal constraint remains singular
- `ex-pe26-two-floating-poisson-subdomains` · example — Two floating Poisson subdomains and primal anchoring
- `ex-pe26-matching-primal-dual-spectrum` · example — A finite-dimensional BDDC/FETI-DP spectral match
- `ex-pe26-coarse-solve-work-bottleneck` · example — A dense coarse solve can dominate local work

### `crouzeix-raviart-finite-elements` — Crouzeix–Raviart finite elements (20 item(s))

- `def-crouzeix-raviart-local-p1-element` · definition — The local P1 Crouzeix–Raviart element
- `def-crouzeix-raviart-fractional-sobolev-regularity` · definition — Fractional Sobolev regularity on a simplex
- `lem-crouzeix-raviart-continuous-poincare` · lemma — A Poincare bound on a slab-bounded domain
- `lem-crouzeix-raviart-local-face-unisolvence` · lemma — Face averages are unisolvent for the local Crouzeix–Raviart element
- `def-crouzeix-raviart-global-space` · definition — The global homogeneous Crouzeix–Raviart space
- `lem-crouzeix-raviart-simplex-traces-and-green-identity` · lemma — Fractional face traces and cellwise Green identity on a simplex
- `def-crouzeix-raviart-poisson-smoothing-index` · definition — A Dirichlet Poisson smoothing index
- `lem-crouzeix-raviart-global-face-basis` · lemma — Interior face means form the global Crouzeix–Raviart degrees of freedom
- `def-crouzeix-raviart-face-average-interpolant` · definition — The face-average Crouzeix–Raviart interpolant
- `lem-crouzeix-raviart-face-jump-estimate` · lemma — Face jumps are controlled by the broken gradient
- `def-crouzeix-raviart-poisson-method` · definition — The Crouzeix–Raviart method for the homogeneous Poisson problem
- `lem-crouzeix-raviart-broken-gradient-is-a-norm` · lemma — The broken gradient is a norm on the homogeneous Crouzeix–Raviart space
- `lem-crouzeix-raviart-local-interpolation-estimates` · lemma — Local approximation by the face-average Crouzeix–Raviart interpolant
- `lem-crouzeix-raviart-conforming-companion` · lemma — A conforming averaging companion for Crouzeix–Raviart functions
- `lem-crouzeix-raviart-comparison-norm` · lemma — The broken comparison expression is a norm
- `thm-crouzeix-raviart-discrete-well-posedness` · theorem — Well-posedness of the homogeneous Poisson and CR problems
- `thm-crouzeix-raviart-discrete-poincare` · theorem — Discrete Poincare inequality for homogeneous Crouzeix–Raviart functions
- `lem-crouzeix-raviart-consistency-defect` · lemma — Consistency bounds for the Crouzeix–Raviart Poisson method
- `thm-crouzeix-raviart-energy-error-estimate` · theorem — Energy error estimate for the Crouzeix–Raviart Poisson method
- `thm-crouzeix-raviart-l2-error-estimate` · theorem — L2 error estimate under a Dirichlet Poisson smoothing index

### `crouzeix-raviart-finite-elements-examples` — Crouzeix–Raviart finite elements — Examples (3 item(s))

- `cex-crouzeix-raviart-below-trace-threshold` · counterexample — A zero-boundary solution below the CR trace regularity threshold
- `ex-crouzeix-raviart-one-face-degree-of-freedom` · example — One shared face-average degree of freedom
- `ex-crouzeix-raviart-broken-gradient-norm` · example — A nonzero CR function on a two-triangle square

## Your seams

Your pages depend on another group's:

- `projection-and-pressure-correction-for-incompressible-flow` requires `energy-stable-incompressible-navier-stokes-discretization` (group n, batch 41)
- `substructuring-feti-dp-and-bddc-preconditioners` requires `overlapping-schwarz-and-stable-subspace-decompositions` (group o, batch 45)

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
