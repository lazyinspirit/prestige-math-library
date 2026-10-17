# Step 5 adjudication — group **s**, run `numerical-optimization-dynamics-2026-10-16`

You are the group Alpha for batches 61, 62, 67: 3 A/B pair(s), 6 page(s), 70 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **61**: `research/numerical-optimization-dynamics-2026-10-16-batch-61-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **62**: `research/numerical-optimization-dynamics-2026-10-16-batch-62-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **67**: `research/numerical-optimization-dynamics-2026-10-16-batch-67-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-optimization-dynamics-2026-10-16-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 61 | `verified-linear-systems-and-spectral-enclosures` | A | numerical-linear-algebra-and-approximation | 2406 | `dual-spaces-bilinear-forms-and-inertia`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-precision-direct-factorizations`, `sparse-direct-elimination-and-ordering`, `outward-rounded-interval-and-ball-arithmetic`, `computed-schur-decompositions-and-nonnormal-spectra`, `homology-axioms-degree-and-classical-applications` |
| 61 | `verified-linear-systems-and-spectral-enclosures-examples` | B | numerical-linear-algebra-and-approximation | 2407 | `verified-linear-systems-and-spectral-enclosures` |
| 62 | `interval-newton-krawczyk-and-polynomial-root-isolation` | A | numerical-linear-algebra-and-approximation | 2408 | `nonlinear-equations-and-newton-methods`, `outward-rounded-interval-and-ball-arithmetic`, `verified-linear-systems-and-spectral-enclosures`, `analyticity-liouville-and-morera` |
| 62 | `interval-newton-krawczyk-and-polynomial-root-isolation-examples` | B | numerical-linear-algebra-and-approximation | 2409 | `interval-newton-krawczyk-and-polynomial-root-isolation` |
| 67 | `restarted-and-block-eigensolvers` | A | numerical-linear-algebra-and-approximation | 2418 | `eigenvalue-iterations-and-the-qr-algorithm`, `krylov-subspaces-arnoldi-and-gmres`, `computed-schur-decompositions-and-nonnormal-spectra`, `krylov-methods-and-lanczos-convergence`, `generalized-eigenvalue-pencils-and-qz-methods`, `preconditioner-algorithms-and-residual-metrics` |
| 67 | `restarted-and-block-eigensolvers-examples` | B | numerical-linear-algebra-and-approximation | 2419 | `restarted-and-block-eigensolvers` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `verified-linear-systems-and-spectral-enclosures` — Verified linear systems and spectral enclosures (36 item(s))

- `def-complex-infinity-matrix-norm` · definition — The complex induced infinity matrix norm
- `def-hermitian-residual-orthogonality-certificate` · definition — Residual and near-orthogonality data for an approximate Hermitian eigenbasis
- `def-verified-linear-residual-certificate-data` · definition — Verified point and uniform linear residual certificate data
- `lem-brouwer-fixed-point-for-closed-boxes` · lemma — Brouwer fixed points exist on every nonempty closed box
- `lem-complex-hermitian-realification-identities` · lemma — Realification preserves Hermitian spectra, norms, and congruence
- `lem-hermitian-eigenvalue-frobenius-bound` · lemma — Hermitian eigenvalues lie within a certified Frobenius bound
- `lem-hermitian-rayleigh-residual-spectrum-distance` · lemma — A Hermitian approximate-eigenpair residual locates a spectral value
- `thm-inertia-guided-bisection-loop-soundness` · theorem — Certified inertia counts maintain ordered eigenvalue brackets
- `thm-interval-determinant-sign-certificate-soundness` · theorem — An interval determinant excluding zero certifies nonsingularity and sign
- `lem-complex-hermitian-eigenvalue-perturbation` · lemma — Hermitian eigenvalues move by at most the spectral norm perturbation
- `lem-complex-hermitian-inertia-congruence` · lemma — Complex Hermitian inertia is invariant under nonsingular congruence
- `lem-complex-infinity-matrix-norm-submultiplicative` · lemma — The complex infinity matrix norm is compatible and submultiplicative
- `lem-neumann-inverse-norm-bound` · lemma — A Neumann defect bounds the inverse norm
- `lem-hermitian-two-by-two-inertia-sign-test` · lemma — A Hermitian two-by-two pivot inertia is determined by determinant and trace signs
- `lem-complex-infinity-neumann-inverse-norm-bound` · lemma — A complex infinity-norm defect bounds the inverse norm
- `lem-hermitian-block-ldl-inertia-additivity` · lemma — Block LDL congruence adds the Hermitian pivot inertias
- `thm-krawczyk-set-inclusion-existence-and-uniqueness` · theorem — Krawczyk inclusion gives solutions and contraction gives uniqueness
- `thm-near-orthonormal-hermitian-eigenvalue-enclosure` · theorem — Near-orthonormal residual data enclose all ordered Hermitian eigenvalues
- `thm-uniform-linear-residual-solution-enclosure` · theorem — A uniform approximate inverse and residual enclose every linear solution
- `thm-complex-resolvent-cover-certificate-soundness` · theorem — Diskwise Neumann certificates bound a complex matrix resolvent
- `alg-complex-resolvent-cover-validator` · algorithm — Finite complex contour resolvent validator with cover and inconclusive statuses
- `alg-interval-determinant-sign-certifier` · algorithm — Outward Leibniz determinant sign and nonsingularity certifier
- `alg-interval-hermitian-ldl-inertia-certifier` · algorithm — Outward interval block LDL inertia certifier with pivot-inconclusive status
- `alg-interval-linear-krawczyk-certifier` · algorithm — Interval Krawczyk linear system certifier with explicit statuses
- `alg-near-orthonormal-hermitian-eigenvalue-certifier` · algorithm — Certified Hermitian eigenvalue intervals from residual and Gram bounds
- `alg-point-verified-linear-system-certifier` · algorithm — Finite precision point linear solve certificate with explicit status
- `alg-uniform-interval-linear-residual-certifier` · algorithm — Uniform interval linear residual certificate with inconclusive status
- `thm-complex-resolvent-cover-validator-soundness` · theorem — The finite disk cover validator returns a uniform resolvent bound on success
- `thm-interval-determinant-sign-certifier-soundness` · theorem — The interval determinant sign certifier is sound and failure means unknown
- `thm-interval-hermitian-ldl-inertia-certifier-soundness` · theorem — The interval block LDL certifier returns the exact inertia on success
- `thm-interval-linear-krawczyk-certifier-soundness` · theorem — The interval Krawczyk certifier has the stated per-system guarantee
- `thm-near-orthonormal-hermitian-eigenvalue-certifier-soundness` · theorem — The residual and orthogonality certifier encloses the full ordered spectrum
- `thm-point-verified-linear-system-certifier-soundness` · theorem — The point linear solve certifier returns a sound solution ball on success
- `thm-uniform-interval-linear-residual-certifier-soundness` · theorem — The uniform interval residual certifier is sound on success
- `alg-ordered-hermitian-eigenvalue-bisection` · algorithm — Budgeted ordered Hermitian eigenvalue bisection by verified inertia
- `thm-ordered-hermitian-eigenvalue-bisection-soundness` · theorem — The ordered Hermitian bisection certifier returns valid intervals or an inconclusive status

### `verified-linear-systems-and-spectral-enclosures-examples` — Verified linear systems and spectral enclosures — Examples (3 item(s))

- `ex-certified-ill-conditioned-two-by-two-linear-solve` · example — A certified residual enclosure remains valid for an ill-conditioned 2 by 2 solve
- `ex-uncertain-linear-matrix-family-contains-singular-member` · example — An interval matrix family can contain a singular member
- `ex-hermitian-eigenvalue-bisection-by-verified-inertia` · example — Ordered eigenvalue bisection by exact inertia queries

### `interval-newton-krawczyk-and-polynomial-root-isolation` — Interval newton krawczyk and polynomial root isolation (15 item(s))

- `lem-polynomial-squarefree-decomposition-and-multiplicity` · lemma — Exact gcd squarefree decomposition preserves roots and multiplicities
- `thm-sturm-sign-variation-counts-distinct-roots` · theorem — Sturm sign variation counts distinct real polynomial roots
- `lem-squarefree-integer-polynomial-root-separation-bound` · lemma — An explicit root-separation bound for squarefree integer polynomials
- `alg-rational-polynomial-root-isolation` · algorithm — Exact dyadic Sturm isolation of all real roots of a nonzero rational polynomial
- `thm-rational-polynomial-root-isolation-is-sound-and-finite` · theorem — Exact Sturm bisection isolates every distinct real root of a nonzero rational polynomial
- `def-real-boxes-and-interval-jacobian-enclosures` · definition — Real boxes and interval Jacobian enclosures
- `lem-brouwer-fixed-point-for-closed-box` · lemma — A continuous self-map of a nonempty closed box has a fixed point
- `lem-real-interval-arithmetic-preserves-enclosure` · lemma — Finite real interval operations enclose their exact values
- `alg-scalar-interval-newton-certification` · algorithm — Finite-budget scalar interval Newton root certification
- `alg-krawczyk-root-certification` · algorithm — Finite-budget multidimensional Krawczyk root certification
- `alg-smooth-function-root-isolation` · algorithm — Finite-budget interval isolation for smooth scalar roots
- `lem-interval-jacobian-mean-value-enclosure` · lemma — An interval Jacobian encloses a vector mean-value matrix
- `thm-scalar-interval-newton-exclusion-and-inclusion` · theorem — Scalar interval Newton exclusion and strict inclusion certificates
- `thm-smooth-function-root-isolation-soundness` · theorem — Soundness and finite termination of smooth-function root isolation
- `thm-krawczyk-inclusion-exclusion-and-uniqueness` · theorem — Krawczyk inclusion proves existence, disjointness excludes roots, and contraction proves uniqueness

### `interval-newton-krawczyk-and-polynomial-root-isolation-examples` — Interval newton krawczyk and polynomial root isolation — Examples (3 item(s))

- `ex-double-polynomial-root-has-no-sign-change` · example — A double polynomial root has no sign change
- `ex-validated-mass-action-equilibrium-root` · example — A validated mass-action chemical equilibrium root
- `ex-event-root-with-derivative-separated-from-zero` · example — An event root with derivative bounded away from zero

### `restarted-and-block-eigensolvers` — Restarted and block eigensolvers (10 item(s))

- `alg-thick-and-implicitly-restarted-arnoldi-with-locking` · algorithm — Finite-budget thick and implicitly restarted Arnoldi with residual acceptance and locking
- `thm-implicit-restart-polynomial-subspace-and-residual-identity` · theorem — Exact implicit Arnoldi restart applies its shift polynomial and preserves an Arnoldi residual identity
- `alg-block-lobpcg-with-rank-loss-status` · algorithm — Finite-budget block LOBPCG for a Hermitian-definite pencil with explicit rank-loss status
- `thm-finite-budget-restarted-and-block-procedures-return-a-status` · theorem — Finite-budget restarted Arnoldi and block LOBPCG return a status under finite-return primitives
- `lem-generalized-ritz-values-monotone-under-nested-subspaces` · lemma — Generalized Ritz values obey min-max bounds and are monotone under trial-space inclusion
- `lem-block-principal-angle-squared-ritz-enclosure` · lemma — A principal-angle bound encloses the largest selected generalized Ritz value across a spectral gap
- `thm-lobpcg-selected-ritz-values-do-not-increase` · theorem — A successful LOBPCG Rayleigh-Ritz update cannot increase the selected Ritz values
- `alg-shift-invert-and-harmonic-ritz-extraction` · algorithm — Shift-invert and harmonic Ritz extraction with solve and pencil status
- `thm-finite-budget-shift-invert-and-harmonic-procedures-return-a-status` · theorem — Finite-budget shift-invert and harmonic extraction return a status under finite-return primitives
- `thm-shift-invert-map-and-inexact-solve-residual-transfer` · theorem — Shift-invert maps eigenvalues exactly and transfers an inexact solve residual to the original eigenpair

### `restarted-and-block-eigensolvers-examples` — Restarted and block eigensolvers — Examples (3 item(s))

- `ex-implicit-restart-shift-can-suppress-wanted-component` · example — A shift near the wanted eigenvalue suppresses its component under repeated implicit restarts
- `ex-clustered-vibration-modes-with-block-lobpcg` · example — A two-vector LOBPCG block resolves a clustered pair in one finite Rayleigh-Ritz update
- `ex-interior-vibration-mode-shift-invert` · example — Shift-invert isolates an interior vibration mode and records solve error

## Your seams

Your pages depend on another group's:

- `verified-linear-systems-and-spectral-enclosures` requires `finite-precision-direct-factorizations` (group m, batch 1)
- `verified-linear-systems-and-spectral-enclosures` requires `sparse-direct-elimination-and-ordering` (group o, batch 16)
- `verified-linear-systems-and-spectral-enclosures` requires `outward-rounded-interval-and-ball-arithmetic` (group n, batch 14)
- `verified-linear-systems-and-spectral-enclosures` requires `computed-schur-decompositions-and-nonnormal-spectra` (group p, batch 33)
- `interval-newton-krawczyk-and-polynomial-root-isolation` requires `nonlinear-equations-and-newton-methods` (group u, batch 3)
- `interval-newton-krawczyk-and-polynomial-root-isolation` requires `outward-rounded-interval-and-ball-arithmetic` (group n, batch 14)
- `restarted-and-block-eigensolvers` requires `computed-schur-decompositions-and-nonnormal-spectra` (group p, batch 33)
- `restarted-and-block-eigensolvers` requires `krylov-methods-and-lanczos-convergence` (group q, batch 34)
- `restarted-and-block-eigensolvers` requires `generalized-eigenvalue-pencils-and-qz-methods` (group q, batch 48)
- `restarted-and-block-eigensolvers` requires `preconditioner-algorithms-and-residual-metrics` (group r, batch 50)

Another group's pages depend on yours:

- `periodic-orbit-shooting-collocation-and-floquet-error` (group g) requires your `verified-linear-systems-and-spectral-enclosures`
- `periodic-orbit-shooting-collocation-and-floquet-error` (group g) requires your `interval-newton-krawczyk-and-polynomial-root-isolation`
- `event-location-and-hybrid-trajectory-error` (group l) requires your `interval-newton-krawczyk-and-polynomial-root-isolation`
- `matrix-functions-and-scaling-squaring` (group t) requires your `verified-linear-systems-and-spectral-enclosures`
- `gaussian-quadrature` (group t) requires your `verified-linear-systems-and-spectral-enclosures`
- `gaussian-quadrature` (group t) requires your `restarted-and-block-eigensolvers`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-optimization-dynamics-2026-10-16-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `numerical-optimization-dynamics-2026-10-16`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
