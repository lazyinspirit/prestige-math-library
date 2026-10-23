# Step 3a reader report — batch 42

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader (`reader-42`)  
Scope: batch 42 only

## Opened inventory

- Current batch manifest: `research/fluid-dynamics-all-47-2026-10-23-batch-42.pages.json`.
- Current batch proof contract, cross-batch edge record, and notes: `research/fluid-dynamics-all-47-2026-10-23-batch-42.proof-contracts.json`, `research/fluid-dynamics-all-47-2026-10-23-batch-42.cross-batch-dependencies.json`, and `research/fluid-dynamics-all-47-2026-10-23-batch-42.notes.md`. These were treated as navigation and evidence, not as verdicts.
- Assigned pages: `library/fluid-dynamics/fd-pmp01.md` (A, draft, physics, `compact-v1`, requires `fd-f01` and `fd-mp01`) and `library/fluid-dynamics/fd-pmp01-examples.md` (B, draft, physics, `compact-v1`, requires `fd-pmp01`). Both bodies are empty. I also opened prerequisite page frontmatter `library/fluid-dynamics/fd-f01.md` and `library/fluid-dynamics-mathematics/fd-mp01.md`; both resolve with the declared library classifications.
- Assigned items, reviewed in dependency order: `def-fd-phase-field-dimensionalization`, `post-fd-diffuse-interface-material-law`, `pthm-fd-phase-field-conditional-energy`, and `ex-fd-phase-outside-unit-interval`.
- In-run prerequisite items opened: `def-fd-periodic-torus-domain`, `def-fd-diffuse-interface-equations`, `post-fd-continuum-balances`, `def-fd-quantity-and-frame-conventions`, `def-fd-smooth-motion`, `lem-fd-transport-and-density`, `lem-fd-c1-domain-jordan-integrals`, `lem-fd-periodic-integration-by-parts`, and `thm-fd-diffuse-interface-energy`.
- Published mathematical statement suppliers opened for the local supplier arguments: `thm-euclidean-inverse-function-theorem`, `thm-chain-rule-for-total-derivatives`, `cor-determinant-is-a-polynomial-in-the-matrix-entries`, `thm-change-of-variables-for-compact-jordan-sets`, `thm-injective-c-one-images-of-compact-jordan-sets-are-jordan`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `def-riemann-integral-over-a-jordan-set`, `lem-jordan-set-integral-well-defined`, `thm-multidimensional-integral-properties`, `thm-mean-value-inequality-for-total-derivatives`, `cor-zero-total-derivative-on-a-convex-open-set-is-constant`, `thm-graphs-of-continuous-functions-have-content-zero`, `def-null-and-content-zero-in-rn`, `thm-jordan-boundary-criterion`, `thm-heine-borel-rn`, `thm-compactness-under-continuous-maps`, `thm-lebesgue-criterion-in-rn`, and `thm-jordan-content-and-indicator-integrability`. I also opened `cor-mean-value-theorem`, `thm-cauchy-mean-value`, `thm-rolle`, and `thm-heine-borel-r` for the periodic-calculus proof.

## Review and repair

The phase-field scales have consistent SI dimensions: the bulk coefficient is an energy density, the gradient coefficient has units of energy per length per phase-unit squared, the viscosity has units Pa s, and the mobility coefficient has units `[Phi]^2 m^3 s kg^-1`. Substitution of the scale map gives `mu = (rho_* U^2/Phi_*) mu_c`, the capillary-stress divergence `-varphi grad_x(mu)`, and the dimensionless momentum and phase equations used by the theorem. The stated dissipation factors both scale by `rho_* U^3 L^2`. The constant example has `W(2)=9/4`, `W'(2)=6`; its zero velocity and constant phase make every derivative term in the adopted equations vanish, and its energy is finite and constant. No empirical inputs or observations are claimed.

I repaired `items/def-fd-phase-field-dimensionalization.md`. Its original Definition named `v(s,y)`, `phi(s,y)`, and `pi(s,y)` without giving their maps or regularity, even though it used their Laplacian, chemical potential, and Riemann energy integrals. I made their domains, codomains, and the exact classical periodic regularity explicit by identifying the earlier *Periodic Cahn–Hilliard incompressible flow system* definition and restating its relevant field class. I defined `Delta_y` locally, made `mu_c` a standalone definition instead of a dangling “where” clause, stated the physical field maps and units, and recorded that both functionals have units joules. The current model postulate and physical theorem use the same regularity, and the example's constant fields satisfy it; I checked all direct and indirect consumers in this batch. The scaling coefficients and claim strength are unchanged.

I updated the assigned proof contract's degenerate-domain evidence to match the explicit field class. I preserved the existing root-owned `reviewed` and `template_review` records unchanged; the latter remains bound to the prior item hash `8f843e4962ea490316cd1bf3ae796a7655659478e805a30039da69032caf536c` and is stale for the repaired carrier. I did not rebind that review. The edited Definition had no `verification.judge` record to remove. Required checks after the final item edit:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-fd-phase-field-dimensionalization.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-fd-phase-field-dimensionalization.md` — 0 checked, 0 failing (the item is a definition with no proof steps).
- `node tools/physics-support/proof-layout.mjs items/def-fd-phase-field-dimensionalization.md` — 1 item, 0 steps, 0 defects.

No assigned item contains a TikZ or tikzcd diagram.

## Source review

- [Oden, *Foundations of Predictive Computational Science*, Chapter 11 §§11.2 and 11.4](https://www.oden.utexas.edu/media/reports/2017/1701.pdf), printed pp. 209–212, gives the gradient free-energy functional, chemical potential, and conserved mobility form. It does not establish the local SI scales or physical applicability.
- [Georgiadis, “Energy identity for the incompressible Cahn–Hilliard/Navier–Stokes system with non-degenerate mobility,” §1 and Theorem 1 statement](https://d-nb.info/1352416549/34) has matched densities, constant coefficients, a phase range `[-1,1]`, and a weak-solution identity. Those hypotheses and its stress convention are not imported into the local smooth theorem. I did not reread the complete §2 proof because the local proof is independent of it.
- [Badalassi, Ceniceros, and Banerjee, “Computation of multiphase systems with phase field models,” §§2.1–2.4](https://web.math.ucsb.edu/~hdc/public/JCP2003BCB.pdf) covers density-matched binary fluids, a concentration order parameter, free energy, chemical potential, Model H coupling, and a different nondimensionalization. Its empirical/material scope is not asserted for this reduced model.
- [Sonin, *Fundamental Laws of Motion for Particles, Material Volumes, and Control Volumes*, §§1.1–1.3](https://ocw.mit.edu/courses/2-25-advanced-fluid-mechanics-fall-2013/d11fcb4ad68d875ce88a12c18c263932_MIT2_25F13_Fundam_Law-Son.pdf), and [Hazel, *Continuum Mechanics*, Chapters 3–4](https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch3.pdf) ([Chapter 4](https://personalpages.manchester.ac.uk/staff/Andrew.Hazel/MATH45061/MATH45061_Ch4.pdf)), support the material-volume balances, traction/stress setting, and local-temperature entropy-flux convention. [Tong, *Fluid Mechanics*, §1.1–1.1.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf) describes the continuum approximation, Eulerian density/velocity fields, and mass balance; it qualifies the approximation by coarse-graining over many molecules and says it breaks down at atomic scales. These are source discussions of modeling assumptions, not evidence that the local model fits a particular material.

## Uneditable finding

`post-fd-continuum-balances` is outside batch 42 (batch 3), so I did not edit it. Its Postulate balances integrate traction and heat flux over `partial chi_t(V)` using `dS`, but the item and its listed mathematical dependency `lem-fd-c1-domain-jordan-integrals` define only volume Riemann integrals; neither defines the surface measure or surface-integral convention. The cited source's notation `dA` as an elemental boundary area does not supply the missing local mathematical definition. These balance statements are therefore ill-formed as written. A mathematical surface-integration definition (for example, an explicit Euclidean area element in C1 graph charts) or an exact surface-integral supplier is needed. The finding is routed through assigned consumer `post-fd-diffuse-interface-material-law`, whose dependency closure reaches this supplier. Its observed current source SHA-256 is `90c7eff2a551c2843c421f22c1b1d7731db5b9fd116cb59f48225f1c1c2e7efc`.

## Page verdicts and blocker

| Page | Verdict | Evidence |
|---|---|---|
| `fd-pmp01` | Pass | Draft physics A-page; frontmatter-only `compact-v1`; exact three-item inventory and both declared prerequisite pages resolve. The assigned physical claims have explicit scale units, scope, and a complete conditional proof. |
| `fd-pmp01-examples` | Pass | Draft physics B-page; frontmatter-only `compact-v1`; companion and example inventory resolve. The example is an exact model construction, not an observation. |

One owner follow-up remains: the hash-bound contract `template_review` must be reviewed and rebound by an authorized owner for the repaired Definition. One fatal in-run dependency defect is also uneditable in this batch and is returned in the findings JSON. I checked the assigned items, their immediate suppliers, and the exact published mathematical statements used by the local proofs; I did not re-audit every transitive proof below the published mathematical suppliers.
