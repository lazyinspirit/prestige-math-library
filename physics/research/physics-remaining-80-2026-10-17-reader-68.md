# Step 3a reader report — batch 68

Run: `physics-remaining-80-2026-10-17`  
Batch: `68`  
Role: reader  
Disposition: no edits; no uneditable defects found.

## Opened inventory

Assigned pages:

- `tgr-pet03` — `library/thermodynamics-and-general-relativity/tgr-pet03.md`.
- `tgr-pet03-examples` — `library/thermodynamics-and-general-relativity/tgr-pet03-examples.md`.

Assigned items:

- `post-tgr-supported-static-heat-model` — `items/post-tgr-supported-static-heat-model.md`.
- `pthm-tgr-supported-redshift-heat-relaxation` — `items/pthm-tgr-supported-redshift-heat-relaxation.md`.
- `ex-tgr-redshifted-cosine-medium` — `items/ex-tgr-redshifted-cosine-medium.md`.

Page prerequisites opened:

- `tgr-c02` — `library/thermodynamics-and-general-relativity/tgr-c02.md`.
- `tgr-et04` — `library/thermodynamics-and-general-relativity-mathematics/tgr-et04.md`.

Opened direct physical suppliers and model-specific mathematical suppliers used by the assigned arguments:

- `def-tgr-framework-units`.
- `def-tgr-local-fluid-state`.
- `post-tgr-local-material-thermodynamics`.
- `post-tgr-first-order-dissipation`.
- `post-tgr-local-entropy-admissibility`.
- `thm-tgr-supported-static-heat-evolution`.
- `lem-tgr-eckart-entropy-specialization`.
- `lem-tgr-dissipative-entropy-identity`.
- `lem-tgr-local-gibbs-euler`.
- `lem-tgr-fluid-frame-projection`.
- `def-tgr-stationary-thermal-carriers`.
- `lem-tgr-killing-thermal-normalization`.
- `thm-heat-cauchy-solution-for-bounded-continuous-data`.
- `def-heat-kernel`.
- `lem-heat-kernel-normalisation-scaling-and-derivatives`.
- `lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time`.

Also inspected the assigned batch manifest, cross-batch dependency record, and proof contracts. The manifest and earlier dependency-review notes were treated as navigation/evidence, not as verdicts.

## Review

### `post-tgr-supported-static-heat-model`

The postulate defines a fixed Lorentzian background, its future timelike Killing field and unit observer congruence, the material state function and SI units, admissible positive initial data, the heat flux, insulated boundary condition, support force, and zero-local-power condition. The selected state function gives `n=n0`, `p=0`, `epsilon=CV*T+n0*e0`, and the displayed entropy density by direct differentiation. With `vartheta=N*T`, its declared conductivity and heat flux give `N^2 q=-A0 grad(vartheta)` and the diffusivity `A0/CV`; the units agree. The chosen first-order closure is explicitly an adopted assumption, and the item distinguishes its supported stress balance from the supplier's source-free balance. It reports no measurement or empirical realization.

The referenced material and first-order postulates supply the stated local state, current, stress, and closure conventions. Their sources are described as contextual; neither the cited perfect-fluid conventions nor first-order literature is presented as proving this particular supported parabolic model.

### `pthm-tgr-supported-redshift-heat-relaxation`

The proof's transformation is correct: time independence of `N` gives `N partial_t T=partial_t(NT)`, and the heat closure gives `N^2 q=-A0 grad(NT)`. Thus the adopted balance becomes `CV partial_t vartheta=A0 Delta(vartheta)` and the insulated condition becomes zero normal derivative. The stated positive even periodic extension supplies the face compatibility used by the mathematical heat-evolution supplier. Its positivity, regularity, material state, and geometry hypotheses match the model postulate.

The downstream conclusions match the inspected mathematical supplier: energy conservation, the exact nonnegative entropy-rate integral, and the exponential `L2` estimate. The `L2` convergence of `T` follows from `N>=Nmin`; the limit is positive because the initial mean is at least `m0`. The local entropy-admissibility postulate is named as a physical premise, while the exact rate is separately obtained from the mathematical supplier. The item keeps the result conditional on the adopted model and makes no empirical or full Einstein-fluid claim.

The model-specific mathematical heat theorem was read in full. Its reflected periodic construction, uniqueness energy estimate, support calculation, entropy calculation, and rectangular-box Poincare estimate support the uses made here. Its named `AC_omega` condition remains visible in the assigned theorem's supplier fact and contract; the proof does not claim unrestricted choice. Its heat-Cauchy, heat-kernel, and convolution-smoothing inputs were also checked at their stated uses. I did not recursively re-audit every foundational item in that mathematical supplier's transitive closure.

### `ex-tgr-redshifted-cosine-medium`

The cosine profile is positive under `|delta|<bar(vartheta)`, extends smoothly with the required even periodicity, and has mean `bar(vartheta)`. Direct differentiation verifies the heat equation, initial trace, and all six Neumann face conditions. The decay rate, nonconstant proper-temperature limit under the stipulated nonconstant lapse, and exact `L2` norm are correct. The example is clearly a calculated model solution rather than an observation.

## Page verdicts

- `tgr-pet03` — pass. Its summary accurately describes the fixed supported model and its conditional theorem, including the scope limits.
- `tgr-pet03-examples` — pass. Its summary accurately describes the analytic cosine mode and does not present it as experimental evidence.

## Edits and uneditable defects

No item or page was edited. No confirmed or suspected defect requiring owner routing was found in the reviewed assigned content or the model-specific dependencies opened.

## Sources checked

- Gourgoulhon, *An Introduction to Relativistic Hydrodynamics*, arXiv:gr-qc/0603009v1, retrieved excerpts from §4.3 and §§5.1–5.3 (PDF pp. 16–19): equations (4.10)–(4.14) concern the EOS, rest-frame state variables, and total energy, while §5 treats the adopted local stress conservation equation. This is contextual perfect-fluid material, not a derivation of the assigned restricted heat model.
- Borghini, *Elements of Hydrodynamics* (2015), retrieved excerpts from §§IX.4.3–IX.4.4 (PDF pp. 157–159; printed pp. 150–151): the entropy-production condition and first-order constitutive discussion, including a short-wavelength causality/stability limitation. This is not treated as empirical validation or proof of the assigned model.
- Hunter, *Notes on Partial Differential Equations*, §5.1.2, Theorem 5.5 and proof (printed pp. 130–131; PDF pp. 137–138): Gaussian convolution is smooth and solves the heat equation for $L^p$ data; initial $L^p$ convergence is stated for $p<\infty$. This supports the positive-time smoothing and PDE facts for bounded data, while the assigned mathematical proof supplies uniform initial recovery and the box-boundary conclusions.

## Limitation / blocker

No blocker arose. Review covered the assigned carriers, their page prerequisites, their physical supplier interfaces, and the model-specific heat and entropy arguments. It did not recursively audit the complete foundational mathematical dependency closure of `thm-tgr-supported-static-heat-evolution`; no claim of such recursive coverage is made.
