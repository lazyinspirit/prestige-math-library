# Step 3a reader report — batch 31

Run: physics-cm-qm-gr-79-2026-10-11  
Role: independent reader  
Scope: batch 31 only

## Opened inventory

Pages opened:

- A: cm15-scattering-and-impulse-model-boundaries.
- B: cm15-scattering-and-impulse-model-boundaries-examples.

All 16 assigned items were opened and checked: def-cm15-asymptotic-data, def-cm15-cross-section, pthm-cm15-central-scattering, pthm-cm15-rutherford-model, post-cm15-impulse, pthm-cm15-impact-balance, pthm-cm15-control-volume-balance, rem-cm15-model-boundaries, ex-cm15-hard-sphere-reflection-check, ex-cm15-rutherford-cutoff-check, cex-cm15-deflection-need-not-decrease, ex-cm15-impact-check, cex-cm15-restitution-above-one-increases-energy, cex-cm15-momentum-alone-does-not-fix-the-impact, ex-cm15-rocket-check, and ex-cm15-control-volume-check.

Argument-bearing supplier items opened included: post-cm01-spacetime, post-cm01-frames, post-cm01-worldlines, post-cm02-force-superposition, post-cm02-interactions, def-cm01-units, def-cm01-configuration, def-cm02-newtonian-flow, def-cm03-centre-of-mass-and-momenta, def-vector-valued-derivative-and-integral, def-vector-valued-functions-limits-and-continuity, def-interval, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, def-cross-product-in-r3, post-cm05-central-model, pthm-cm05-relative-reduction, def-cm-central-force-trajectory, thm-cm-central-force-angular-momentum-conservation, thm-cm-central-force-polar-reduction, lem-cm-oriented-orthonormal-triads, lem-cm-planar-polar-lift, def-cm-scattering-data, thm-cm-differential-cross-section-density, thm-cm-coulomb-scattering, thm-cm-rutherford-cross-section, thm-cm-impulse-restitution-and-energy-loss, lem-cm-piecewise-c1-jump-derivative, thm-cm-variable-mass-momentum-balance, thm-cm-center-of-mass-and-kinetic-splitting, def-cm-material-region-and-density, def-cm-continuum-motion, def-cm-euclidean-spatial-calculus, thm-cm-transport-theorem, thm-cm-local-mass-balance, thm-cm-local-momentum-balance, thm-cm-control-volume-balance, def-cm-traction-and-stress, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-surface-integral-on-a-compact-c-one-hypersurface, and thm-divergence-theorem-for-bounded-c-one-euclidean-domains.

For source fidelity, I independently opened the relevant sections of [Fitzpatrick, Newtonian Dynamics, §6.4, Eqs. 340–367](https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html), [Mechanics Map §11.4](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.04%3A_Surface_Collisions_and_the_Coefficient_of_Restitution), [Mechanics Map §11.7](https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.07%3A_Steady-Flow_Devices), [MIT 16.07 Lecture L14, Eqs. 9–15](https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/98d19cb2b9983c14c6907052499e7a98_MIT16_07F09_Lec14.pdf), and Abeyaratne, Continuum Mechanics Vol. II, §§3.7, 4.2, 4.4 (transport, mass balance, and momentum balance). These sources support the stated mathematical/mechanical conventions; they do not turn the adopted assumptions or declared-data checks into observations.

## Repairs made

- def-cm15-asymptotic-data, clause (iv): replaced the pushforward claim for the globally partial deflection map with a branch-local rate formula. The rate now uses the incident measure restricted to the Borel preimage where a recorded branch is defined. Incidences outside those branches are left without a scattering-angle assignment. Checked consumers: def-cm15-cross-section, pthm-cm15-central-scattering, pthm-cm15-rutherford-model, rem-cm15-model-boundaries, both page summaries, and the assigned examples that use these definitions. Their current claims are consistent with branch-local use.

- rem-cm15-model-boundaries: made the incident-preimage probability explicitly branch-local, matching the preparation’s partial scattering map.

- pthm-cm15-impact-balance, clause 6: replaced the ellipsis in the function types with the exact domains and codomains already adopted in post-cm15-impulse clause (iii): force into R^3, nonnegative mass rates, and inertial velocities into R^3.

- pthm-cm15-central-scattering, clause 1: repaired a sentence break that had separated “is finite” from the time-quadrature assertion. No claim changed.

- ex-cm15-rutherford-cutoff-check, step 2.2: replaced the undefined endpoint evaluation b(pi) with the limit as theta increases to pi.

- ex-cm15-control-volume-check: specified open reference domains for the fixed and material control motions. Recast the elbow check as conditional control-volume data with an explicit finite C1 boundary partition, port normals and areas, impermeable remainder, steady field assumptions, and unknown outlet speed. The mass-rate calculation now states how no leakage plus steady mass balance supplies the outlet rate. For the uniform-expansion check, derived the adopted material balances from the verified local balances using the moving-control theorem with the material control motion.

The batch proof-contract entries for the four changed proof-bearing items were regenerated. No changed carrier had a verification.judge record, so no judge record needed removal. Reflow reported all six changed item paths unchanged. Precheck passed on the four proof-bearing changed items; the definition and remark have no proof body. Strict proof-contract check passed 4/4. The final proof-layout command checked the six changed item paths: 26 steps, 0 defects.

## Defects outside this batch’s write scope

1. In-run supplier thm-cm-impulse-restitution-and-energy-loss (batch 2), Facts & Assumptions [L1]. The current bytes paraphrase the jump lemma as requiring p:I→R to be continuous, but the exact linked lemma lem-cm-piecewise-c1-jump-derivative requires continuity only on I without t* and is designed to permit a jump at t*. That stronger local paraphrase is not met when J is nonzero. The exact supplier still supplies the needed identity; the local fact should be aligned with its actual piecewise-continuity hypotheses. This file changed during my review; the current [L1] still has the mismatch, and only the current source hash is bound in the findings artifact.

2. In-run supplier thm-cm-coulomb-scattering (batch 5), proof step 4.1. The symbol c was set in step 2.1 to the exact limiting speed sqrt(2E/mu). For finite rho under kappa>0, the Coulomb energy identity gives |rho'|<c, so the asserted lower bound |rho'|>=c is false. Also, rho(t)>=c|t| up to an additive constant is not established for the long-range Coulomb tail. The limit |rho'|→c implies a lower bound with any fixed c0 strictly between 0 and c, which is enough to make the acceleration tail integrable. Consumer: pthm-cm15-rutherford-model. This is a nonfatal local proof correction.

3. In-run supplier lem-cm-planar-polar-lift (batch 5), proof steps 1.1 and 2.1. The assumptions say “twice differentiable” without explicitly identifying this with class C2, while step 2.1 asserts g is C1 for g=(rho sigma'−sigma rho')/r^2. If “twice differentiable” has its ordinary pointwise meaning, that C1 assertion needs more regularity than stated; differentiability of g is enough for the claimed twice-differentiable angle and follows directly by the product and quotient rules. The supplier should either state C2 inputs or use the weaker differentiability claim. Consumer: pthm-cm15-central-scattering. This is a suspected, nonfatal regularity/proof issue.

No defect was found in a published dependency during the reviewed portions. The three dependency findings are routed in the JSON artifact; they were not edited.

## Page verdicts

- cm15-scattering-and-impulse-model-boundaries (A): no remaining in-scope defect after the repairs above. The page summary accurately distinguishes the restricted model, its conditional predictions, and the empirical limits. Its dependent proof items remain conditional on the routed batch-2 and batch-5 supplier findings.
- cm15-scattering-and-impulse-model-boundaries-examples (B): the summary accurately describes the declared-data checks. The elbow check now states the boundary and balance premises needed for its resultant calculation. The page prose was read and left unchanged as required. The Rutherford and scattering examples inherit the routed batch-5 supplier findings.

## Blocker and coverage limits

No blocker prevented the authorized repairs. I did not independently re-audit every low-level transitive calculus, measure, and ODE proof beneath the opened supplier theorems, nor refetch every source recorded in the author’s coverage ledger. The dependency findings identify the concrete supplier defects observed; this report does not claim a complete audit of all foundational mathematical proofs or all recorded source entries. A few consumers were first opened before their suppliers, but I reopened the argument-bearing supplier statements before assessing those consumers; strict supplier-first reading order was not maintained for every initial file open.

