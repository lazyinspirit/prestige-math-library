# Batch 12 notes — Step 1 authoring

Run: fluid-dynamics-all-47-2026-10-23  
Pair: fd-px01 / fd-px01-examples  
Claim: exact Reynolds and Mach coefficient transformations for two separately adopted smooth fluid models. The incompressible branch is force-free, constant-density and constant-viscosity. The separate barotropic Euler branch is unforced, positive-density, uses both mass and momentum equations, and takes the optional potential V to be zero. The theorem assumes P in C2 and P'(rho_0)=c^2>0. These are conditional model predictions, not observations or limit theorems.

## Controlling design and reconciliation

The controlling design is research/plan-fluid-dynamics-refresh-track.md, “Exact Reynolds and Mach nondimensionalization — conditional physical prediction” (L380–409). The current owner direction names this refresh track as controlling and says it supersedes historical fluid design text. It reserves A pthm-fd-px01-prediction and B ex-fd-x01-application and points to research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json for their item dependencies.

The historical research/plan-fluid-dynamics-track.md section (L348–377) lists direct page prerequisites FD-X01, FD-F01, FD-F02 and FD-F03. The current task and research/plan-spec.json use fd-f02, fd-f03 and fd-x01, which control. The plan-spec row currently has an empty items array; the refresh inventory and dispatch provide the reserved A/B item IDs and exact item dependencies. fd-f01 remains in the transitive page graph through fd-f02/fd-f03; no transitive prerequisite was removed. The current batch-dependency-levels record places batch 12 at page level 4 and lists requires 3, 5, 9 and 11. Batch 3 is a transitive observation, not a direct edge for this batch's cross-batch dependency array.

## Item inventory and mathematical interface

- pthm-fd-px01-prediction (A), dependency level 4. Direct deps: thm-fd-x01 (level 1), post-fd-continuum-balances (2), post-fd-boundary-data (2), post-fd-newtonian-fourier (2), def-fd-barotropic-euler-model (3), and def-fd-incompressible-newtonian-model (3).
- ex-fd-x01-application (B), dependency level 5. Its only direct dep is pthm-fd-px01-prediction; the B page is a leaf.

The A statement uses Cartesian spatial derivatives, SI units, positive rho_0, mu, U, L and c, nu=mu/rho_0, Re=UL/nu and Ma=U/c. It keeps the incompressible constraint pressure separate from the barotropic equation-of-state pressure. It scales compatible data by the same invertible coordinate change, excludes thermal evolution and heat-flux scaling, and claims no limit, error estimate, uniqueness, turbulence threshold, solution existence or empirical validity.

A final interface read found that the first draft stated only barotropic momentum balance while its conclusion and proof also used continuity, and it referred to V=0 without defining V. The statement now explicitly assumes both barotropic equations and defines the optional scalar potential as the zero function. The unit list now gives the units of rho, P(rho), p_ref, U, L and c as well as mu and nu. The exact statement is mirrored in the page manifest and the B contract quotes the current A statement.

## Supplier inspection and current readiness

The complete current statements and proofs were inspected for the direct inputs. loadStep1Record and step1Decision now return current ready records for all six direct dependencies:

- items/thm-fd-x01.md: exact positive-scale equation transformations and the no-limit caveat; its chain-rule prerequisite was inspected and applies coordinatewise on the open domains.
- items/post-fd-continuum-balances.md: adopted smooth continuum balances with tension-positive traction; this is a modelling postulate, not proof of physical truth.
- items/post-fd-boundary-data.md: compatible initial, wall and periodic data are separate inputs; the carrier asserts no existence or solvability.
- items/post-fd-newtonian-fourier.md: adopted stress and Fourier-flux closure; the A proof uses only the mechanical stress part, specializes theta=0 and D_0=D, and selects constant mu>0.
- items/def-fd-barotropic-euler-model.md: unforced positive-density mass and momentum equations with C2 fields and a specified C1 pressure law. The A theorem explicitly adds P in C2 and P'(rho_0)=c^2>0.
- items/def-fd-incompressible-newtonian-model.md: constant rho_0, div u=0, sigma=-pI_3+2muD and rho_0 D_tu=div sigma; the A proof selects mu>0.

The relevant transitive inputs def-fd-quantity-and-frame-conventions and lem-fd-isotropic-linear-classification also have current ready records. The complete relevant arguments for def-fd-smooth-motion, def-fd-conservative-weak-form, lem-fd-transport-and-density and lem-fd-c1-domain-jordan-integrals were inspected; imported mathematical definitions and the published one-variable chain rule were not edited.

Some upstream Facts & Assumptions still contain historical workflow-status prose: post-fd-newtonian-fourier.md [L1] says quantity-conventions readiness is missing; def-fd-barotropic-euler-model.md [A1] and def-fd-incompressible-newtonian-model.md [A1] say continuum readiness is missing; incompressible-model [A2] says Newtonian-closure readiness awaits older batch records. The relevant current records now return ready. This prose is stale but outside batch 12's edit boundary; it is not a missing carrier or proof.

## Sources and retrieval

The complete cited sections were read; the sources support definitions and interpretation, not the local PDE proof or any asymptotic conclusion.

- Iain Stewart, MIT 8.09, Chapter 6 §6.7, printed pp. 133–134: https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf. Disposition: Reynolds ratio and similarity context; not used as an exact PDE proof or incompressible-limit theorem.
- David Tong, Fluid Mechanics Part II §§3.3.1–3.3.2, printed pp. 72–76: https://www.damtp.cam.ac.uk/user/tong/fluids/fluids2.pdf. Disposition: Re definition, inertial/viscous scale comparison and boundary-layer caveat; no error estimate imported.
- David Tong, Fluid Mechanics Part III §4.5.3, printed p. 166: https://www.damtp.cam.ac.uk/user/tong/fluids/fluids3.pdf. Disposition: Ma speed-ratio convention; no shock result used.
- MIT 16.01 Unified Engineering F5, pp. 1–4: https://ocw.mit.edu/courses/16-01-unified-engineering-i-ii-iii-iv-fall-2005-spring-2006/b4ddec4a7d0be7ec3814a10dc891d5ef_f5.pdf. Disposition: independent terminology check; its aerodynamic low-speed statements are not generalized.

A prior retrieval of Tong's combined 11,323,490-byte PDF exceeded the browser reader limit. The search and recovery are preserved in batch-12.coverage.json and tools/physics-support/source-resolution.mjs's structural format: the complete author-hosted Part II and Part III PDFs were read instead. No selected source or mathematical coverage was dropped. All four selected URLs are fetch-stamped.

## A/B authoring and records

The A proof derives the constant-viscosity incompressible stress divergence, then applies the exact positive-coordinate and field scalings to that branch and to the barotropic mass/momentum equations. The B example selects formal SI inputs rho_0=10^3 kg m^-3, mu=10^-3 Pa s, U=1 m s^-1, L=10^-1 m and c=10^2 m s^-1, obtaining nu=10^-6 m^2 s^-1, Re=10^5, Ma=10^-2 and Ma^-2=10^4. It verifies a smooth periodic shear solution and a uniform barotropic equilibrium. These are chosen mathematical inputs, not measurements.

Both page bodies are empty; the pages contain YAML frontmatter only. The manifest mirrors the two claim sections, and the cross-batch dependency file has nine verified direct rows (three page edges and six A-item edges). Verified records scoped interface checks and do not mean independent proof approval.

## Scoped validation and readiness

- Proof contract: pass for both items after regenerating citations and derivations from the final arguments.
- Normative precheck: 2 checked, 0 failing.
- Proof layout: 2 items, 8 steps, 0 defects.
- Coverage checklist: 1 A page, 9 harvested results, 0 errors and warnings.
- source-fetch-check --stamp: all 4 sources verified; final rerun verified 4/4 with 0 newly stamped.
- Content policy: 2 items, 0 errors and warnings; rendercheck: 4 files, 0 errors and warnings.
- Focused depcheck: 2 assigned items; 696-item/155-page dependency closure, 0 errors and warnings.
- Scoped dependency-level recomputation: 15 in-run items across 9 pages; A level 4, B level 5, no errors or cycles.
- The current direct and relevant transitive supplier readiness checks are ready. Both assigned Step 1 records are hash-bound and current: pthm-fd-px01-prediction is ready on its six direct dependencies; ex-fd-x01-application is ready on pthm-fd-px01-prediction. No assigned input, proof or source obligation remains unresolved.
- The run-wide Step 1 check is not closed: the current snapshot has 304 in-run items, 234 ready, and 70 other item records missing or escalated. Both batch-12 items are closed and ready; the remaining rows belong to other batch items.
