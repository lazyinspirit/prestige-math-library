# Step 3a Reader Report — batch 12

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Batch: `12`

## Opened inventory

Read the workspace instructions and content rules: `../CLAUDE.md`, `CLAUDE.md`,
`README.md`, `SCHEMA.md`, `WORKFLOW.md`, and `../PHYSICS-CONTENT-MODEL.md`. Read
`briefs/reader.md`, the assigned manifest
`research/physics-non-fluid-129-2026-10-21-r2-batch-12.pages.json`, batch notes,
cross-batch dependency rows, source-reading log, and the batch proof contracts.
Checked the relevant entries in `research/math-imports.json`; the imported
mathematical supplier snapshots opened for this review matched their pinned raw
SHA-256 values.

Assigned pages opened:

- `library/classical-electromagnetism/emx-compatible-finite-elements.md`
- `library/classical-electromagnetism/emx-compatible-finite-elements-examples.md`

Assigned items opened in supplier-before-consumer order:

1. `def-emx-whitney-semidescretization`
2. `pthm-emx-discrete-maxwell-balance`
3. `pthm-emx-coercive-maxwell-galerkin`
4. `pthm-emx-topological-zero-modes`
5. `cex-emx-edge-moment-domain-failure`
6. `ex-emx-resonance-outside-coercivity`

Current in-run suppliers opened: `def-emx-finite-energy-boundary-model`,
`def-emx-matrix-maxwell-system`, and `thm-emx-matrix-energy-constraints`.
Additional physical suppliers opened: `def-em-lab-geometry`,
`def-em-si-conventions`, `post-em-material-closure`,
`def-em-guide-cavity-geometry`, `def-em-fields`,
`def-em-polarization-magnetization`, `pthm-em-macroscopic-maxwell`,
`pthm-em-rectangular-mode-candidates`, `lem-em-transverse-vector-identities`,
`lem-em-rectangle-mode-profile-identities`, and
`lem-em-separated-phasor-calculus`.

Mathematical supplier items opened included the choice definitions and
`thm-finite-dimensional-orthogonal-decomposition`; the real H(curl), H(div),
Sobolev and zero-boundary definitions; `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`;
`thm-lax-milgram`; the full Whitney cohomology theorem; the commuting projection
theorem and its averaged-pullback/correction suppliers; the full-Dirichlet
regular-decomposition lemma; the discrete-compactness theorem and its
gradient-lift gap lemma; and the matrix-exponential and Riemann-integral
suppliers directly used by the in-run matrix energy theorem. The exact statements
and local proofs actually used are recorded below; this list does not claim a
review of every transitive supplier in the imported mathematics library.

## Review and edits

### `def-emx-whitney-semidescretization`

The definition asserted that `grad:S_h -> V_h` is well-defined and established
the closure-defined H_0(curl) part, but its local explanation did not show that
the piecewise-constant gradient belongs to the local Whitney edge span. Added
the nodal identity

`grad q|_K = sum_{i<j} (q_j - q_i) phi_ij`,

which supplies that membership and identifies the oriented edge moments. Since
the shared endpoint values of the continuous piecewise-affine representative
agree, the moments are single-valued across adjacent cells. The identity uses
the exact local basis `phi_ij` in
`def-na-lowest-order-whitney-de-rham-spaces`; it is the elementary nodal
expansion of the affine function on each tetrahedron.

Reviewed all direct and indirect assigned consumers of this definition:
`pthm-emx-discrete-maxwell-balance`,
`pthm-emx-coercive-maxwell-galerkin`,
`pthm-emx-topological-zero-modes`, `cex-emx-edge-moment-domain-failure`, and
`ex-emx-resonance-outside-coercivity` through its coercive-theorem dependency.
The addition makes the existing subspace interface explicit; it does not
change the defined spaces or any consumer hypothesis or conclusion. No consumer
repair was needed.

### `ex-emx-resonance-outside-coercivity`

Made the positive root `k_{mn}` explicit in the frequency formula and recorded
the units and domain needed by the time-dependent field: `k_{mn}` is in
`m^{-1}`, `omega_{mn}` is an angular frequency in `s^{-1}`, and `t` ranges over
`R` in seconds. The profile `f_{mn}` is dimensionless. This follows from
`a,b,d` in metres, `epsilon` in `F m^{-1}`, and `mu` in `H m^{-1}`.

The item verified the electric tangential PEC condition on the end faces but did
not spell out the normal-magnetic condition required by the cited PEC boundary
model. Added that the TM supplier gives `B_z=0`, which yields `n dot B=0` on
the two end faces; the supplier already gives the normal-magnetic condition on
the four side walls. The example's local curl calculation still establishes
`curl curl u = k_{mn}^2 u`; integration by parts on compactly supported tests,
then graph-density in the closure-defined PEC space, gives a nonzero kernel
vector for the real-frequency form. The `s>0` positive-shift estimate is not
contradicted.

This example has no item consumers; its only other references are its assigned
B-page placement and the batch manifest. The B-page prose was not changed.

No stale `verification.judge` record was present on either repaired item. The
affected contract records were updated: the definition-only contract now records
the explicit Whitney gradient identity, and the example's step 1.1 derivation
now includes the end-wall `B_z=0` check.

## Mathematical and physical review

- The semidiscretization uses the stated real Whitney/Nedelec and RT0 spaces,
  the closure-defined PEC electric space, static measurable uniformly positive
  symmetric material tensors, and bounded nonnegative conductivity. The inverse
  permeability is bounded; the mass and loss matrices are finite and have the
  stated (semi)definiteness and SI units. The tested weak equations give the
  declared finite matrix system, with `DC=CG=0` from the full cochain complex.
- `pthm-emx-discrete-maxwell-balance` correctly applies the in-run matrix ODE
  result after checking continuity of each load coordinate. The quadratic
  integral is the matrix energy; the energy balance, conservation of `Db`, and
  evolution of the weak discrete-divergence coordinate follow with the stated
  signs and units. These are conditional model deductions, not empirical claims.
- `pthm-emx-coercive-maxwell-galerkin` correctly bounds the positive-shift form
  on the length-scaled real H(curl) norm. Its `alpha` and `M` have matching
  units, Lax–Milgram gives the unique continuous and finite-dimensional weak
  solutions, Galerkin orthogonality gives the stated quasi-optimal estimate,
  and the relative commuting projections supply graph-norm density. It makes
  no real-frequency or empirical claim.
- `pthm-emx-topological-zero-modes` keeps the full absolute Whitney complex
  separate from the closure-defined PEC-relative edge complex. Its diagram
  correctly matches nodal values, edge circulations, face fluxes and cell
  integrals to simplicial cochains; each square has the signed boundary
  incidence convention. The proof is independent of the diagram. Absolute
  Betti dimensions are not assigned to the relative PEC harmonic space.
- `cex-emx-edge-moment-domain-failure` is valid: changing a representative on
  an interior line segment preserves the three-dimensional L2 class and its
  distributional curl while changing the raw line integral. It does not deny
  Whitney polynomial moments or the separately constructed smoothed projection.
- The resonance example's witness is smooth, nonzero, lies in the closure-defined
  PEC space by the stated cutoff estimates, and satisfies the real-frequency
  weak kernel identity. This is a deduction in the declared lossless constant
  coefficient model, not a cavity measurement.

No item in this batch reports empirical observations or statistical inference;
the claims are conditional mathematical consequences of the stated models.

## External source check

The relevant excerpts of Arnold, Falk and Winther,
[*Finite Element Exterior Calculus: From Hodge Theory to Numerical Stability*](https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf),
were checked as a cross-reference: §5.5, PDF pp. 55–56 (Theorem 5.9) states
the smoothed projection's boundedness, convergence and commutation properties;
§5.6, PDF pp. 56–57, identifies the Whitney complex with simplicial cochains;
§6.2, PDF p. 59, treats the homogeneous boundary-condition complex separately.
The inspected published source supports these distinctions; the batch's claims
are also supplied by the opened local mathematical items and proofs.

Attempts to retrieve the cited Long Chen and Hiptmair PDFs through the web reader
failed in this session. I do not claim to have independently read those full
texts. Their excerpts are not needed to complete the local arguments reviewed
here.

## Page verdicts

- `emx-compatible-finite-elements` — **Pass.** The draft A-page identity,
  inventory and prerequisite list agree with the batch manifest. Its body is
  empty as required by the active compact statement-first page policy.
- `emx-compatible-finite-elements-examples` — **Pass.** The draft B-page title,
  item/example inventory and companion relation agree with the manifest. Its
  body is empty as required by the active compact statement-first page policy.

## Scoped checks

- Reflow: both changed items reported `unchanged`.
- Precheck: `def-emx-whitney-semidescretization` reported `0 checked, 0 failing`;
  `ex-emx-resonance-outside-coercivity` passed its direct proof check, `1 checked,
  0 failing`.
- Final proof layout: `2 items, 3 steps, 0 defects`.
- No broader tests or unscoped validators were run.

## Uneditable findings and blockers

No confirmed defect remained in an uneditable page or dependency. No blocker
remains.

## Coverage note

All six assigned items and both assigned pages were opened, and the direct
supplier statements and proofs used by the inspected arguments were checked.
I did not audit every transitive dependency in the imported mathematics library.
The AFW source check above is limited to the cited relevant sections; web
retrieval for the Chen and Hiptmair PDFs failed during this review.
