# Step 3a reader report — batch 28

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `28`

## Opened inventory

Assigned pages:

- `cm12-legendre-transformation-and-hamiltonian-mechanics` (A), with nine assigned items.
- `cm12-legendre-transformation-and-hamiltonian-mechanics-examples` (B), with five assigned items.

Assigned items, in dependency order within the two-page frontier:

- Definitions: `def-cm12-cotangent-momentum`, `def-cm12-regularity`, `def-cm12-hyperregularity`, `def-cm12-hamiltonian`.
- A-page result chain and remark: `pthm-cm12-local-legendre`, `pthm-cm12-mechanical-hyperregularity`, `pthm-cm12-hamilton-equivalence`, `pthm-cm12-energy-time`, `rem-cm12-singular-models`.
- B-page examples: `ex-cm12-mechanical-legendre-positive-metric`, `ex-cm12-pendulum-legendre`, `ex-cm12-shifted-momentum`, `ex-cm12-regular-not-surjective`, `ex-cm12-moving-coordinates`.

The page summaries and the assigned carriers were opened. I also read the physical suppliers needed for the force, potential, variational, energy, coordinate-change and constraint claims, including `post-cm01-spacetime`, `post-cm01-frames`, `post-cm01-worldlines`, `def-cm01-velocity-acceleration`, `def-cm01-configuration`, `def-cm01-units`, `post-cm02-force-superposition`, `def-cm02-newtonian-flow`, `pthm-cm02-ivp`, `pthm-cm02-continuation`, `def-cm03-centre-of-mass-and-momenta`, `def-cm03-potential-and-mechanical-energy`, `pthm-cm03-energy-balance`, `def-cm06-holonomic-constraint-model`, `post-cm06-ideal-reaction-law`, `lem-cm-constraint-multipliers-and-accelerations`, `def-cm07-action-and-mechanical-lagrangian`, `def-cm07-generalized-coordinates-and-forces`, `pthm-cm07-first-variation-and-euler-lagrange-expression`, `pthm-cm07-euler-lagrange-equations`, `pthm-cm07-newton-equivalence`, `pthm-cm07-lagrangian-reduction-of-ideal-constraints`, `pthm-cm07-coordinate-covariance-of-the-equations`, `pthm-cm07-boundary-terms-and-gauge`, and `lem-cm07-immersion-euler-lagrange-transport`.

Mathematical suppliers needed for the local derivations were read at their relevant statements and proof sections, including the time-dependent Lagrangian and Legendre-map definitions; the local inverse Legendre lemma; the positive-definite mechanical-chart proposition; the Hamiltonian branch identities; the stationarity/Euler–Lagrange theorem; the gauge and coordinate-covariance propositions; the work-energy calculation; and the Euclidean inverse-function theorem. The concrete matrix, differentiability, interval, trigonometric, exponential, circle-parametrization and intermediate-value suppliers used in the examples were also opened. Contracts and the batch dependency record were used as navigation and cross-check evidence, not as verdicts.

## Repairs and evidence

1. **`ex-cm12-pendulum-legendre`, Example prose before clause 1 and verification step 4.1.** The overlap statement used the technical notation `d\theta\wedge dp` without defining its object. I defined the form on coordinate increments by
   `\omega_a((u_\theta,u_p),(v_\theta,v_p))=u_\theta v_p-v_\theta u_p`, and stated that `d\theta\wedge dp` denotes this field. Step 4.1 now checks that the overlap transition has identity derivative and hence preserves the defined form. The assigned proof contract's step-4.1 inputs now include `[F5]`. This preserves the phase-cylinder claim while making its coordinate form explicit.

2. **`ex-cm12-moving-coordinates`, Example clause 4, verification steps 4.1 and 6.1, and Remarks.** The derivative formula `E'=-kv_0y_1` does not imply strict monotonicity across an interval on which its sign may change, and the former remark incorrectly limited `H=E` to the inertial chart. The statement now says that `E'` is nonzero at times with `v_0y_1\ne0`, and that the displayed solution has nonconstant energy when `v_0y_0\ne0`; step 4.1 gives the corresponding derivative at the initial time. The remark now agrees with `pthm-cm12-energy-time` clause 3: the identity also holds in time-independent generalized-coordinate charts. The assigned proof contract derivations for steps 4.1 and 6.1 were updated to match.

No `verification.judge` record was present on either edited item, so none was removed. No other item or page was edited.

## Validation

- `reflow.mts` on `ex-cm12-pendulum-legendre.md`: unchanged.
- `precheck.mts` on `ex-cm12-pendulum-legendre.md`: pass.
- `reflow.mts` on `ex-cm12-moving-coordinates.md`: reflowed proof/remark layout.
- `precheck.mts` on `ex-cm12-moving-coordinates.md`: pass.
- Final batched `proof-layout.mjs` on both changed item paths: 2 items, 11 steps, 0 defects.

## Unedited defects and blockers

No confirmed defects remain outside my edit scope. No blocker remains.

## Page verdicts

- **`cm12-legendre-transformation-and-hamiltonian-mechanics` (A):** no unresolved reader defect found in its summary or assigned items. The conditional Hamiltonian results preserve the potential-branch hypotheses, the distinction between local regularity and global hyperregularity, and the separate treatment of eliminated constraints.
- **`cm12-legendre-transformation-and-hamiltonian-mechanics-examples` (B):** no unresolved reader defect found in its summary or assigned examples after the two repairs above. The witnesses and computations remain conditional model calculations; none reports an observation.

## Source and coverage limits

For citation locators relevant to the examples, I checked the author-hosted split versions of Tong's [*Classical Dynamics*, Chapter 2](https://davidtong.org/pdfs/teaching/classical-dynamics/clas2.pdf), §§2.3.1–2.3.2, printed pp. 18–20, and [Chapter 4](https://davidtong.org/pdfs/teaching/classical-dynamics/clas4.pdf), §§4.1.1–4.1.3, printed pp. 82–84. The original full-PDF URL in the carriers was inaccessible to the web reader; the official chapter PDFs and HTML supplied the inspected passages. I checked Stewart, [*Advanced Classical Mechanics* (MIT OCW)](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf), §1.2, printed pp. 10–11 for the pendulum and pp. 14–15 for the moving-cart Hamiltonian. The cited Cline/LibreTexts PDF could not be retrieved through the web reader; the relevant results have local mathematical or physical derivations and are not accepted solely on that citation.

I did not recursively re-audit every foundational proof beneath the published mathematical suppliers. I checked the exact supplier statements and proof arguments needed for this frontier, including the current-run draft suppliers used in the assigned proofs. No experiment or statistical inference appears in this batch.
