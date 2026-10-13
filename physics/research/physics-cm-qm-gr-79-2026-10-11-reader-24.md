# Step 3a reader report — batch 24

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `24`

## Opened inventory

Pages:

- `library/non-relativistic-classical-mechanics/cm08-symmetry-noether-and-conditional-conservation.md` (A page)
- `library/non-relativistic-classical-mechanics/cm08-symmetry-noether-and-conditional-conservation-examples.md` (B page)

Assigned items, in the manifest inventory:

- `def-cm08-symmetry-of-the-mechanical-lagrangian`
- `pthm-cm08-point-noether`
- `pthm-cm08-general-noether`
- `pthm-cm08-time-energy`
- `pthm-cm08-translation`
- `pthm-cm08-rotation`
- `pthm-cm08-boost-boundary`
- `pthm-cm08-moving-chart-energy-function`
- `rem-cm08-external-symmetry-breaking`
- `ex-cm08-uniform-field-breaks-translation-and-boost`
- `ex-cm08-pair-potential-charges-check`
- `ex-cm08-rotating-chart-hamiltonian-not-mechanical-energy`
- `ex-cm08-time-dependent-potential-breaks-energy`

Dependency material inspected for the claims and repairs included the force,
spacetime, frame and particle postulates; configuration, units, Newtonian flow,
potential, centre-of-mass and Lagrangian definitions; the chart-level point and
general Noether results; the Euler–Lagrange, Newton-equivalence, stationarity,
energy-balance and coordinate-covariance results; the work-energy supplier; the
pair-interaction postulate; the hyperregular chart and Hamiltonian identities;
the Legendre-map definition; and the cross-product, trigonometric and
special-orthogonal-group suppliers. Their exact IDs are linked in the inspected
items. The boost type check used `def-cm01-configuration` and
`def-cm03-centre-of-mass-and-momenta` in particular.

## Repairs and evidence

1. In `pthm-cm08-boost-boundary`, `\mathsf M` was used both for the mass
   operator `\mathbb R^{3N}\to\mathbb R^{3N}` and as a scalar acting on the
   centre-of-mass vector in `\mathbb R^3`. The earlier configuration definition
   makes `\mathsf M` the block mass operator; the centre-of-mass definition
   separately defines the scalar total mass `M=\sum_i m_i` and `M X=\sum_i
   m_i x_i`. I rewrote the boost charge with scalar `M`, stated its action on
   the centre-of-mass curve, and used `P'=F_{\mathrm{tot}}` and `M X'=P` in
   the rate proof. I also named the lifted direction `\mathbf a=(a,\ldots,a)`
   to keep it typed in `\mathbb R^{3N}` throughout the boost and boosted-motion
   clauses.

2. In `ex-cm08-pair-potential-charges-check`, I propagated the scalar-mass and
   centre-of-mass notation from the repaired theorem. I renamed the fixed
   centre vector to `X_0`, distinct from the time-dependent centre-of-mass
   curve `X(t)`, and clarified the dimensions of `X_0`, `\rho`, `\Omega` and
   the potential argument and values. The two-label formula now reads
   `a\cdot(tP-M X(t))`; on the exhibited motion it equals `-M a\cdot X_0`.

3. In `ex-cm08-rotating-chart-hamiltonian-not-mechanical-energy`, the chart map
   used `R(t)` without defining its matrix. I supplied the explicit
   third-axis rotation matrix and checked `R(t)^T R(t)=I_3` and `det R(t)=1`
   from `\sin^2(\omega t)+\cos^2(\omega t)=1`; differentiating its entries
   gives the angular-velocity identity used in the motion check. I also made
   the stiffness and orbit-radius dimensions explicit.

4. In `ex-cm08-time-dependent-potential-breaks-energy`, I made the stiffness,
   sinusoidal drive amplitude and frequency dimensions explicit. These
   annotations are consistent with the potential, force and numerical
   instance already specified; the model calculations are unchanged.

Updated the batch proof-contract derivations and the dependent pair-example
source quote for the repaired boost notation, the pair-example derivations, and
the rotating-chart calculation. The changed items had no
`verification.judge` records to remove; no judge or audit stamps were added.

## Page verdicts

- **`cm08-symmetry-noether-and-conditional-conservation`: pass after repairs.**
  Its summary accurately describes conditional Noether deductions, residual
  force rates, the potential gauge and the moving-chart energy distinction.
  It does not present model consequences as observations.
- **`cm08-symmetry-noether-and-conditional-conservation-examples`: pass after
  repairs.** The four worked examples are declared model calculations, not
  measurements. Its pair-potential summary is consistent with the corrected
  centre-of-mass notation and the explicit calculations.

## Checks and blockers

Reflow and precheck were run on all four changed items. Each final precheck
passed. The final batched proof-layout command reported `4 items, 27 steps,
0 defects`. No blocker remains and no uneditable defect was found in the
assigned batch or the dependencies needed for these claims.

The citations were checked against the available source sections for Tong's
Noether result and translation/rotation examples, MIT OCW §1.3, SICM second
edition §1.8.5, and Likharev's CM §§2.3–2.4 and ch. 5 §5.1. The legacy Tong PDF
URL and the Cline PDF linked by the closing remark were not extractable directly
through the web reader; the current Tong-hosted section and alternate official
PDF were available for the Noether claims. The batch's proof conclusions are
locally established and do not rely on those external citations as proof
suppliers. Unrelated shared-worktree diffs outside batch 24 were left untouched.
