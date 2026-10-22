# Step 3a reader report — batch 8

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Batch: `8`

## Scope and opened inventory

The assigned manifest was `research/physics-non-fluid-129-2026-10-21-r2-batch-8.pages.json`. I read the current batch notes, coverage record, proof contracts and cross-batch dependency record as review context, not as verdicts.

Assigned pages:

- `library/classical-electromagnetism/emx-radiation-reaction-models.md`
- `library/classical-electromagnetism/emx-radiation-reaction-models-examples.md`

Assigned items, reviewed in dependency order:

- `items/post-emx-abraham-lorentz-model.md`
- `items/pthm-emx-runaway-preacceleration.md`
- `items/pthm-emx-reduction-order-error.md`
- `items/ex-emx-free-runaway.md`
- `items/ex-emx-force-frequency-regime.md`

Physical prerequisite items opened for the formulation, source boundary and model-scope checks:

- `items/def-em-lab-geometry.md`
- `items/def-em-si-conventions.md`
- `items/def-em-sources.md`
- `items/post-em-lorentz-coupling.md`
- `items/rem-em-radiation-reaction-limits.md`

The required page prerequisites opened were `library/classical-electromagnetism/em-primitives-and-postulates.md`, `library/classical-electromagnetism/em-retarded-fields-and-radiation.md`, and the current draft `library/classical-electromagnetism/emx-radiation-multipoles.md`. I also inspected the four current items placed on the latter page: `pthm-emx-retarded-history-localization`, `def-emx-radiation-data`, `pthm-emx-transverse-radiation-data`, and `pthm-emx-controlled-dipole-power`.

For the assigned proofs and examples, I checked the exact statements/definitions used from these mathematical suppliers: `cor-exponential-reciprocal-and-positivity`, `cor-mean-value-theorem`, `def-oriented-integral`, `def-real-exponential-function-and-e`, `lem-smooth-bump-between-concentric-euclidean-balls`, `thm-algebra-of-derivatives`, `thm-chain-rule`, `thm-continuous-implies-integrable`, `thm-derivative-of-exponential`, `thm-ftc-first-part`, `thm-linearity-of-the-integral`, `thm-monotonicity-of-the-integral`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, and `thm-sine-and-cosine-derivatives`.

## Source review

- Fritz Rohrlich, “The Dynamics of a Charged Particle,” arXiv:0804.4614, Sections 1–2 (PDF pp. 2–6), opened at <https://arxiv.org/pdf/0804.4614>. The inspected text gives the nonrelativistic third-order equation, its force-variation restriction and first-order reduction. The assigned postulate does not adopt the paper's broader claim that the equation is physically correct; it presents a separate restricted effective-model assumption.
- Jack Vanderlinde, *Classical Electromagnetic Theory*, Chapter 12, §§12.3–12.4, printed pp. 335–339 (PDF pp. 342–346), opened from the alternate full-text PDF at <https://eva.fcien.udelar.edu.uy/pluginfile.php/55543/mod_page/content/7/Classical%20Electromagnetic%20Theory%20(Fundamental%20Theories%20of%20Physics)%20-%20Jack%20Vanderlinde%20(2004).pdf>. The inspected section derives a coefficient using a rigid charged sphere and explicitly notes that a rigid extended body conflicts with special relativity; the next section gives the mass-renormalized equation, exponential homogeneous branch and future-weighted solution. The assigned postulate labels its equation as adopted and does not use the rigid-sphere argument as a proof.

Neither source supplies reported measurements for these items, and none are claimed.

## Review findings and edits

No confirmed or suspected defect remained in the assigned items or pages. No source edit was made; this was a read-only assignment. No proof-layout, reflow or precheck command was run because no item was changed.

The postulate explicitly defines the point-trajectory model, prescribed force, acceleration equation, SI dimensions and its declared low-speed/force-variation application conventions. It distinguishes the added effective equation from the singular Maxwell self-field and from the external Lorentz-coupling postulate. The source context is used with the stated limits.

The runaway/preacceleration theorem has bounded continuous force as its mathematical hypothesis. Its proof establishes absolute convergence of the future integral, differentiates the resulting branch, classifies all homogeneous additions, proves future-half-line uniqueness and constructs a smooth future-supported force producing nonzero earlier acceleration. These are conditional properties of the adopted ODE, not observed particle behavior.

The reduction-order theorem correctly computes the residual and, for bounded twice continuously differentiable force with bounded second derivative, integrates the exact future kernel twice to obtain the stated uniform acceleration-error bound. Its hypotheses and model-only scope are retained.

The force-free example correctly integrates each acceleration branch twice and verifies identical position and velocity at the reference time. The harmonic example's phasor convention, static case, exact bounded-future response, reduction-of-order amplitude, normed amplitude error and tolerance threshold are consistent with the real three-vector ODE. It makes no empirical frequency-response claim.

## Page verdicts

| Page | Verdict | Evidence |
|---|---|---|
| `emx-radiation-reaction-models` | Pass | Its three-item inventory and declared prerequisites match the assigned manifest. The listed physical prerequisites distinguish prescribed-source radiation from self-force. The current draft multipole page and its four item scopes treat smooth-source radiation and make no point-charge self-force claim. The cross-batch page edge is therefore verified as a page-interface check only, not as proof acceptance. |
| `emx-radiation-reaction-models-examples` | Pass | Its two examples and requirement on the A page match the manifest; both examples are conditional ODE calculations and report no empirical observation. |
| `em-primitives-and-postulates` (context) | No defect observed | The page identifies the lab chart and SI conventions, and states that the Lorentz coupling excludes self-force. |
| `em-retarded-fields-and-radiation` (context) | No defect observed | The page limits its radiation results to prescribed sources and explicitly supplies no self-force or radiation-reaction dynamics. |
| `emx-radiation-multipoles` (current batch-7 context) | Interface checked | The page and its four current item statements/scopes supply smooth-source radiation context, not a point-charge self-force derivation. This check is limited to the current page interface and item scopes. |

No TikZ or tikzcd diagrams occur in the assigned pages or items.

## Uneditable defects and blockers

None identified. There is no blocker.

## Coverage limitation

I checked the exact mathematical statement/definition interfaces used at the assigned proof steps and the stated physical prerequisites; I did not re-audit the full transitive proof closures of inherited mathematical results or the proofs behind the published physical prerequisites. The batch-7 interface review was limited to its current page and four item scopes. No broader supplier-audit coverage is claimed.
