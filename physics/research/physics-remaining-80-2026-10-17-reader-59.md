# Step 3a reader report — batch 59

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `59` only

## Opened inventory

Assigned pages:

- `library/thermodynamics-and-general-relativity/tgr-c02.md` (A page): reviewed the page summary and all four listed items.
- `library/thermodynamics-and-general-relativity/tgr-c02-examples.md` (B page): reviewed its summary and listed example.

Assigned items, read with their used suppliers:

- `post-tgr-first-order-dissipation`
- `post-tgr-bulk-relaxation-model`
- `pthm-tgr-dissipative-local-admissibility`
- `pthm-tgr-bulk-extended-entropy`
- `ex-tgr-homogeneous-bulk-entropy`

Mathematical and formulation dependencies opened for the claims include `def-tgr-local-fluid-state`, `def-tgr-framework-units`, `post-tgr-local-material-thermodynamics`, `post-tgr-local-entropy-admissibility`, `lem-tgr-local-gibbs-euler`, `lem-tgr-dissipative-entropy-identity`, `lem-tgr-perfect-fluid-projection`, `lem-tgr-bulk-relaxation-entropy`, `def-countable-choice`, `lem-gr-observer-projection-decomposition`, and the relevant Lorentzian, observer, worldline, tetrad, and Levi-Civita definitions/results. I also checked the exact statements or definitions used from `thm-tdmath-local-implicit-rank`, `thm-chain-rule-for-total-derivatives`, `lem-tdmath-concave-affine-maximizer-and-hessian`, `thm-sr-local-congruence-adapted-charts-and-frobenius`, `def-gr-killing-field`, `lem-tgr-killing-energy-normalization`, `def-tgr-spacelike-current-slab`, `thm-tgr-finite-current-production-balance`, `def-pullback-connection`, and `thm-pullback-connection-is-well-defined-and-functorial`.

The batch proof contracts were checked. The local Gibbs, dissipative-entropy, perfect-fluid-projection, and corrected-bulk-entropy arguments were read directly; their conclusions remain draft mathematical premises, not independently accepted facts.

## Source checks

I retrieved the cited PDFs and read the relevant passages, not every page of each document:

- Borghini, *Elements of Hydrodynamics*, §§IX.4.3–IX.4.5, PDF pp. 156–160: (IX.43b) has the diffusion contribution `-N^μ ∇_μ(μ_N/T)`, while (IX.44c) prints a positive gradient sign and (IX.45) gives positive production. The batch-59 postulate flags this conflict and its proof uses the locally proved identity with the sign required by direct substitution. §IX.4.5 supplies second-order entropy-current and relaxation-law context, not the selected coefficient choice.
- Rischke, *Microscopic Foundations of Relativistic Fluid Dynamics*, §1.3.4, PDF pp. 17–18, equations (1.81)–(1.91), and §1.5, PDF pp. 23–26, equations (1.129)–(1.139): the notes give first-order closures and a more general second-order entropy-current/relaxation structure. The batch selects a restricted constitutive law and identifies it as an assumption; the citation does not establish universal validity or empirical support.
- Romatschke, *New Developments in Relativistic Viscous Hydrodynamics*, §4.1, PDF pp. 9–14: the treatment cited is conformal and zero-charge, and the author says he knew of no experimental verification of the entropy-divergence hypothesis. The batch keeps that scope limitation and reports no measurement.
- Gourgoulhon, *An Introduction to Relativistic Hydrodynamics*, §4.3, PDF pp. 15–16, equations (4.10)–(4.14): the equation of state is total energy density including rest energy, with temperature and chemical potentials given by state-function derivatives. This supports the stated context; the local material postulate does not claim a microscopic derivation or measured equation of state.

## Findings and repairs

The four changed items had a regularity gap: the physical theorem statements said only “sufficient regularity” while transferring identities whose mathematical suppliers explicitly require smooth dissipative fields (and, for the bulk law, smooth bulk pressure). I made the regularity and scope conditions explicit:

- `post-tgr-first-order-dissipation` now requires the constitutive fields and resulting currents/stress/entropy current to be `C^1`, so the balances and divergence are pointwise classical.
- `post-tgr-bulk-relaxation-model` now records the `C^2` state data, smooth observer and bulk pressure, `C^1` coefficients, and pointwise balances/law.
- `pthm-tgr-dissipative-local-admissibility` now explicitly requires the declared model regime and future-timelike current, and the smooth field hypotheses of `lem-tgr-dissipative-entropy-identity`.
- `pthm-tgr-bulk-extended-entropy` now states the `C^2` state, smooth observer and bulk pressure, and `C^1` coefficient conditions used by `lem-tgr-bulk-relaxation-entropy`.

I updated the batch-59 proof contract with these repair notes and refreshed the changed supplier quotes in the dependent theorem/example contracts. The B-page example was checked against the amended theorem: its constant state, observer, coefficients, and exponential bulk pressure are smooth and it explicitly stays in the declared regime, so no example edit was needed. No `verification.judge` entry was present on the changed carriers.

Validation after the edits:

- Reflow: all four changed item paths reported unchanged.
- Precheck: all four changed items passed.
- Proof layout: `4 items, 9 steps, 0 defects`.
- Proof contract: `0 error(s), 0 warning(s), 5/5 item(s) checked`.

No uneditable defect was confirmed.

## Page verdicts

- `tgr-c02`: no remaining defect found. Its summary accurately describes the two adopted constitutive branches and conditional entropy deductions, and does not claim solution existence, causal or stable evolution, universal behavior, or experiment.
- `tgr-c02-examples`: no defect found. Its summary matches the constructed homogeneous model solution and distinguishes it from an observation.

## Blockers and coverage limit

No blocker remains for this batch. I reviewed the assigned items, pages, direct draft mathematical suppliers, and the exact geometric/projection statements used in the deductions. I did not audit every transitive proof in the large published-mathematics closure behind the generic geometry and unit definitions; this report does not claim such a full foundational re-audit.
