# Step 3a reader report — batch 60

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `60`

## Opened inventory

Assigned pages:

- `tgr-c03` — [library/thermodynamics-and-general-relativity/tgr-c03.md](../library/thermodynamics-and-general-relativity/tgr-c03.md)
- `tgr-c03-examples` — [library/thermodynamics-and-general-relativity/tgr-c03-examples.md](../library/thermodynamics-and-general-relativity/tgr-c03-examples.md)

The required A-page suppliers `tgr-c01` and `tgr-c02` were also opened. The assigned items were read before their consumers:

- Model context and definitions: `post-tgr-local-material-thermodynamics`, `def-tgr-local-fluid-state`, `def-tgr-framework-units`, `post-tgr-perfect-fluid-model`, `post-tgr-bulk-relaxation-model`, `lem-tgr-local-gibbs-euler`.
- Balance and entropy suppliers: `lem-tgr-perfect-fluid-projection`, `lem-tgr-dissipative-entropy-identity`, `lem-tgr-bulk-relaxation-entropy`.
- Linear evolution suppliers: `def-countable-choice`, `def-schwartz-space-and-its-seminorms`, `lem-tgr-constant-linear-energy-causality`, `lem-tgr-perfect-linear-causality`, `lem-tgr-bulk-linear-causality`.
- Mathematical interfaces used in those arguments: `thm-tdmath-local-implicit-rank`, `thm-chain-rule-for-total-derivatives`, `thm-fourier-transform-maps-schwartz-space-continuously-to-itself`, `thm-fourier-inversion-on-schwartz-space`, `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`, `thm-plancherel`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `def-gr-smooth-lorentzian-objects`, and `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`.
- Assigned items: `post-tgr-linearized-material-model`, `pthm-tgr-perfect-causal-linear-response`, `pthm-tgr-bulk-causal-linear-response`, and `ex-tgr-perfect-neutral-modes`.

Metadata reviewed: `research/physics-remaining-80-2026-10-17-batch-60.pages.json`, `research/physics-remaining-80-2026-10-17-batch-60.cross-batch-dependencies.json`, `research/physics-remaining-80-2026-10-17-batch-60.proof-contracts.json`, and `research/physics-remaining-80-2026-10-17-batch-60.coverage.json`. Contract claims were checked against the current item bodies; the contracts and readiness records were not treated as verdicts.

## Review and evidence

`post-tgr-linearized-material-model` is an adopted physical postulate, not a claim that the parent nonlinear constitutive equations have a solution or that nature follows either branch. It specifies Minkowski geometry, the constant rest state, first variations, the adiabatic condition, both effective systems, data classes, units, and model limits. The local Gibbs supplier gives the stated fixed-composition response `a_s = e_{vv}/(n_0 h_0)`; `e in C^2`, `n_0 > 0`, and `h_0 > 0` supply the needed hypotheses. The postulate explicitly restricts to `a_s > 0`, and the perfect theorem adds `a_s <= 1`. Its bulk coefficients are constant and positive in the linear system. The stated units match the equations.

The cited source passages support conventions and model context, not the exact adopted effective systems or the local PDE proofs. This distinction is explicit in the item. Relevant sections reviewed:

- Éric Gourgoulhon, [*An Introduction to Relativistic Hydrodynamics*](https://arxiv.org/pdf/gr-qc/0603009), §§4.2–4.3 and 5.1–5.4, PDF pp. 14–19: perfect stress and rest-frame state conventions, rest energy in the supplied equation of state, and local balance projections.
- Paul Romatschke, [*Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy*](https://arxiv.org/pdf/0906.4787), §3.1, PDF p. 8, and §4.1, PDF pp. 9–11: uniform-state perturbations, model-specific high-frequency conditions, and conformal-fluid entropy-current structure. The source's zero-charge viscous model is not presented as the exact branch here.
- Dirk H. Rischke, [*Microscopic Foundations of Relativistic Fluid Dynamics*](https://itp.uni-frankfurt.de/~drischke/Skript_Hydro.pdf), §§1.4.2–1.5, PDF pp. 20–27, and §2.5.4, PDF pp. 52–53: transient relaxation, second-order entropy-current structure, and model-specific causality conditions. The fuller Israel–Stewart equations are expressly not substituted for this postulate.

`pthm-tgr-perfect-causal-linear-response` matches the perfect system and state parameters in the postulate. Its proof invokes `lem-tgr-perfect-linear-causality` under the explicitly stated `AC_omega` assumption and the same Schwartz or smooth periodic data classes. The energy matrix is positive definite under `h_0 > 0` and `a_s > 0`; the energy flux identity, characteristic eigenvalues `0, +/- c sqrt(a_s)`, weighted Sobolev contraction, and finite-propagation speed `c sqrt(a_s) <= c` follow from the inspected supplier. The endpoint `a_s = 1` is correctly included.

`pthm-tgr-bulk-causal-linear-response` likewise matches the postulated bulk system and positive coefficient hypotheses. The inspected supplier gives the displayed positive energy and dissipation, characteristic eigenvalues `0, +/- c sqrt(a_s + zeta_0/(tau_0 h_0))`, contraction, and finite propagation for the stated data. The causal inequality is exactly the condition that this speed is at most `c`. Neutral modes are not described as decaying. The cited entropy and projection suppliers support the model context; no empirical premise or nature-level conclusion is introduced.

`ex-tgr-perfect-neutral-modes` directly substitutes the nonzero-wave formula into both equations and treats `k = 0` separately, avoiding the zero denominator. The phase and amplitude units are consistent. Constant nonzero solutions are correctly identified as neutral, so the example does not infer decay from contraction. Neither page reports observations.

## Edits, defects, and page verdicts

No edits were made. No confirmed or suspected defect remained in the assigned items, relevant dependency uses, contracts, or page summaries. The uneditable-findings array is empty.

- `tgr-c03`: **Pass.** Its summary accurately describes the conditional model and the two proved linear results, including their mathematical supplier assumption and scope limits.
- `tgr-c03-examples`: **Pass.** Its summary matches the single direct-substitution example and does not imply that all perturbations decay.

Blocker: none. No formatter or validation command was run because no item was changed. Source review covered the cited relevant sections; the full PDFs were not reread cover-to-cover.
