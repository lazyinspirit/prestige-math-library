# Batch 26 authoring notes

Run: physics-td-qft-rpm-62-2026-10-14; role beta; assigned pair only.

## Plan and design conflicts

- Current research/plan-spec.json and the design header require both moment-maps-and-symplectic-reduction and rpm-hamiltonian-constraints for A page rpm-symmetries-hamilton-jacobi. The original A reservation block in the design lists only rpm-hamiltonian-constraints. Followed the current plan and page header; both A requirements are retained.
- The paired-inventory/design reservation lists both rpm-hamiltonian-constraints and the A page for B, while current plan-spec.json requires only the A page. Followed plan-spec: B requires rpm-symmetries-hamilton-jacobi. The A-to-Hamiltonian prerequisite remains transitive through A.
- No item claim was narrowed to reconcile these metadata conflicts.

## Inventory and dependency levels

The authoritative batch-dependency file assigns batch 26 level 2 and requires batch 25. Item levels are zero with no in-run item suppliers and otherwise one plus the maximum in-run supplier level, computed from the current page-manifest dependency graph. At final check, all 16 batch-26 item levels match that graph; the run-wide level check reports unrelated empty TD/RPM/QFT scaffolds and four unrelated QFT level mismatches.

| Item | Level | Direct dependencies |
|---|---:|---|
| def-rpm-h-poincare-charge-space | 1 | thm-sr-proper-orthochronous-lorentz-algebra, def-rpm-h-cotangent-phase-space, def-symplectic-and-hamiltonian-lie-group-action, thm-a-regular-level-set-is-an-embedded-submanifold, def-countable-choice, lem-timelike-cone-has-two-convex-components, lem-lorentz-lie-algebra-structure |
| def-rpm-h-first-class-constraint-family | 2 | def-rpm-h-regular-constraint-system, thm-rpm-h-canonical-poisson-and-flow |
| thm-rpm-h-local-hamilton-jacobi | 2 | thm-rpm-h-canonical-poisson-and-flow, thm-smooth-dependence-of-ode-solutions-on-parameters, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, def-countable-choice |
| thm-rpm-h-poincare-moment-map-and-algebra | 6 | def-rpm-h-poincare-charge-space, thm-rpm-h-canonical-poisson-and-flow, prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map, thm-rpm-h-flat-shell-global-reduction, thm-rpm-h-inertial-time-reduced-hamiltonian, def-countable-choice |
| thm-rpm-h-positive-spin-orbit | 7 | thm-rpm-h-poincare-moment-map-and-algebra, thm-coadjoint-orbits-are-symplectic-manifolds, def-countable-choice, def-rpm-h-poincare-charge-space |
| post-rpm-h-classical-spin-orbit-model | 8 | thm-rpm-h-positive-spin-orbit, def-countable-choice |
| thm-rpm-h-spinless-kks-identification | 7 | thm-rpm-h-poincare-moment-map-and-algebra, thm-rpm-h-flat-shell-global-reduction, thm-coadjoint-orbits-are-symplectic-manifolds, def-countable-choice, def-rpm-h-poincare-charge-space |
| pthm-rpm-h-classical-orbit-evolution | 9 | post-rpm-h-classical-spin-orbit-model, thm-rpm-h-positive-spin-orbit, thm-rpm-h-canonical-poisson-and-flow, thm-coadjoint-orbits-are-symplectic-manifolds, def-rpm-h-poincare-charge-space, def-countable-choice |
| thm-rpm-h-killing-shell-first-integral | 5 | thm-rpm-h-first-order-action-and-geodesics, thm-rpm-h-canonical-poisson-and-flow, thm-gr-killing-and-on-shell-matter-identities, def-countable-choice |
| pthm-rpm-h-free-symmetry-conservation | 7 | post-rpm-h-free-test-particle-action, post-rpm-h-massless-shell-action, thm-rpm-h-poincare-moment-map-and-algebra, thm-rpm-h-killing-shell-first-integral, thm-rpm-h-first-order-action-and-geodesics, def-countable-choice |
| thm-rpm-h-complete-integral-coordinates | 6 | thm-rpm-h-local-hamilton-jacobi, thm-rpm-h-temporal-shell-reduction, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, def-countable-choice |
| pthm-rpm-h-hj-trajectories | 7 | post-rpm-h-free-test-particle-action, post-rpm-h-massless-shell-action, thm-rpm-h-first-order-action-and-geodesics, thm-rpm-h-local-hamilton-jacobi, thm-rpm-h-complete-integral-coordinates, def-countable-choice |
| cex-rpm-h-instantaneous-potential-free-boost | 7 | thm-rpm-h-poincare-moment-map-and-algebra, def-rpm-h-poincare-charge-space, def-countable-choice |
| ex-rpm-h-two-shell-consistency-obstruction | 3 | thm-rpm-h-constraint-consistency, def-countable-choice, def-rpm-h-first-class-constraint-family, thm-rpm-h-canonical-poisson-and-flow |
| cex-rpm-h-relativistic-hj-caustic | 6 | thm-rpm-h-local-hamilton-jacobi, thm-rpm-h-inertial-time-reduced-hamiltonian, def-countable-choice |
| ex-rpm-h-free-relativistic-complete-integral | 7 | thm-rpm-h-complete-integral-coordinates, thm-rpm-h-inertial-time-reduced-hamiltonian, def-countable-choice |

There are 12 A items and 4 B examples, below the 100-item page cap. The scoped dependency graph has no cycle, and the run-wide item-dependency-levels output has no batch-26 or H25 level mismatch. It still reports unrelated empty TD/RPM/QFT scaffolds and six TD level mismatches; those unassigned pages were left untouched.

## Batch-25 carrier recheck and interface findings

At first inspection, relevant batch-25 item files and page manifest were empty. During authoring, the H25 manifest populated with 22 A items and 2 B examples. I reopened and inspected the current statements and proofs of the 18 H25 items in this pair’s transitive supplier closure and checked their exact interfaces against the conditional uses below. All 18 remain status draft and lack pipeline_run binding. At final recheck, the current H25 manifest dependency lists match the inspected item-file dependencies for all 18; earlier H7/H8 dependency-list differences were reconciled in the shared manifest. All 24 H25 items now have current-run Step 1 records that are ready and hash-current, but those readiness records are not independent proof approval. The H25 page prerequisite remains open while the draft mathematical proof status and H7/Hmass/H9 domain defects remain unresolved.

Current statement interfaces checked against their conditional uses:

- H0 def-rpm-h-cotangent-phase-space gives T*Q, theta=p dq, omega=-dtheta=dq wedge dp and AComega only; H0 thm-rpm-h-canonical-poisson-and-flow gives iota_XH omega=dH, {F,G}=F_qG_p-F_pG_q, and local flow only.
- H2 def-rpm-h-regular-constraint-system supplies regular constraint slices; thm-rpm-h-constraint-consistency now states the moving-level tangency equation on compact Darboux-chart intervals, with the autonomous specialization used by the two-shell example.
- H8 thm-rpm-h-flat-shell-global-reduction gives future-shell complete-line flow, the (a,p) quotient, da wedge dp, and the nonzero-null restriction. H8 thm-rpm-h-inertial-time-reduced-hamiltonian gives E, q=a+tE_p, qdot=c^2p/E and pdot=0.
- H9 thm-rpm-h-temporal-shell-reduction gives the positive root under the local temporal-chart, N>0 and positive-h hypotheses; it excludes p_i=0 on the massless branch.
- H5 post-rpm-h-free-test-particle-action and post-rpm-h-massless-shell-action are separate draft model postulates. They are used only as conditional assumptions, never as proof or observation.
- H7 thm-rpm-h-first-order-action-and-geodesics assumes a prescribed smooth time-oriented Lorentzian background, a compact chart interval, smooth x,p,e with e>0, and either the future massive or separate nonzero future-null branch. It gives the shell equations and geodesic interpretation used conditionally; its mathematics-domain proof directly depends on the two H5 physical postulates.
- Manifest recheck: actual and manifest dependency lists match for all 18 H25 items in the examined supplier closure. The H25 carriers remain draft and unbound; the remaining blockers are their readiness and the proof-domain defects below.

Unresolved prerequisite-theory defects requiring owner action:

- thm-rpm-h-first-order-action-and-geodesics is domain mathematics but its direct deps include the two domain-physics action postulates. This invalidates the workspace math-only prerequisite rule for the H7 proof status.
- thm-rpm-h-homogeneous-massive-shell is domain mathematics but directly depends on physics-domain def-rpm-h-background-and-model-quantities. H7 depends on that shell theorem, so the math-to-physics edge reaches H7/H8 inertial time. The actual H8 flat-quotient carrier no longer depends on the homogeneous-shell theorem, although its batch-25 manifest still lists that dependency.
- thm-rpm-h-inertial-time-reduced-hamiltonian is domain mathematics and directly depends on H7, whose proof uses physical postulates; its actual dependencies also add the Dirac-bracket and canonical-flow items absent from the manifest.
- thm-rpm-h-temporal-shell-reduction is domain mathematics but directly depends on physics-domain def-rpm-h-background-and-model-quantities and H7 with physical postulate dependencies.

The remaining defects are cross-batch and cannot be corrected by changing the assigned claims. Proposed owner resolution: split pure mathematical first-order shell and chart derivations from model-specific action equivalence; use physical postulates only in physics-theorem items; remove/refactor math-to-physics edges in the homogeneous-shell, inertial-time and temporal-chart results. Rebind reviewed supplier items to the H25 A page. Affected consumers include the Poincare shell result, spinless KKS identification, Killing/free-symmetry results, complete-integral/HJ-trajectory results, and B boost/caustic/free-integral examples.

| Relevant batch-25 carrier | Actual carrier state |
|---|---|
| def-rpm-h-cotangent-phase-space | draft, proof provenance not-applicable, pipeline_run absent |
| def-rpm-h-temporal-chart-data | draft, proof provenance not-applicable, pipeline_run absent |
| def-rpm-h-almost-regular-legendre | draft, proof provenance not-applicable, pipeline_run absent |
| def-rpm-h-background-and-model-quantities | draft, proof provenance not-applicable, pipeline_run absent |
| def-rpm-h-regular-constraint-system | draft, proof provenance not-applicable, pipeline_run absent |
| thm-rpm-h-canonical-poisson-and-flow | draft, proof provenance ai-altered, pipeline_run absent |
| post-rpm-h-free-test-particle-action | draft, proof provenance not-applicable, pipeline_run absent |
| post-rpm-h-massless-shell-action | draft, proof provenance not-applicable, pipeline_run absent |
| thm-rpm-h-constraint-consistency | draft, proof provenance ai-altered, pipeline_run absent |
| thm-rpm-h-first-class-local-reduction | draft, proof provenance ai-altered, pipeline_run absent |
| thm-rpm-h-homogeneous-legendre-degeneracy | draft, proof provenance ai-altered, pipeline_run absent |
| thm-rpm-h-local-legendre-and-energy-descent | draft, proof provenance ai-altered, pipeline_run absent |
| thm-rpm-h-second-class-dirac-bracket | draft, proof provenance ai-altered, pipeline_run absent |
| thm-rpm-h-flat-shell-global-reduction | draft, proof provenance ai-altered, pipeline_run absent |
| thm-rpm-h-homogeneous-massive-shell | draft, proof provenance ai-altered, pipeline_run absent |
| thm-rpm-h-regular-local-gauge-slice | draft, proof provenance ai-altered, pipeline_run absent |
| thm-rpm-h-first-order-action-and-geodesics | draft, proof provenance ai-altered, pipeline_run absent |
| thm-rpm-h-inertial-time-reduced-hamiltonian | draft, proof provenance ai-altered, pipeline_run absent |
| pthm-rpm-h-action-mechanical-momentum | draft, proof provenance ai-altered, pipeline_run absent |
| pthm-rpm-h-massive-and-null-time-motion | draft, proof provenance ai-altered, pipeline_run absent |
| thm-rpm-h-temporal-shell-reduction | draft, proof provenance ai-altered, pipeline_run absent |
| pthm-rpm-h-coordinate-versus-observer-energy | draft, proof provenance ai-altered, pipeline_run absent |

## Required dependency additions

- Added thm-rpm-h-flat-shell-global-reduction and thm-rpm-h-inertial-time-reduced-hamiltonian directly to thm-rpm-h-poincare-moment-map-and-algebra because its approved claim uses shell quotient descent and fixed-time boost conservation.
- Added thm-rpm-h-first-order-action-and-geodesics directly to pthm-rpm-h-free-symmetry-conservation because H5 postulates alone do not identify shell evolution.
- Added lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space to thm-rpm-h-complete-integral-coordinates.
- Added def-rpm-h-poincare-charge-space to the boost counterexample and classical-orbit evolution; added thm-coadjoint-orbits-are-symplectic-manifolds to classical-orbit evolution.
- Added def-countable-choice to consumers of cotangent moment-map or KKS suppliers. The strength is AComega only, never full AC.
- Added local A-page definition def-rpm-h-first-class-constraint-family, with exact Henneaux–Regge–Teitelboim and Date treatments, and made the two-shell example cite it plus its canonical bracket supplier.

## Source harvest and retrieval

- Marsden–Ratiu, Introduction to Mechanics and Symmetry, full 549-page book PDF; §§12.1, 12.4, 14.2–14.3, 7.9 inspected and fetch-verified.
- van der Schaaf, Classical and Quantum Particles in Galilean and Poincare Spacetime, full 85-page monograph; §§9.3 and 10.2.2 inspected and fetch-verified. Natural units and (+---) were translated to SI and (-+++).
- Henneaux, Regge and Teitelboim, Constrained Hamiltonian Systems, Part 1, complete 35-page PDF; Chapter I, printed pp. 7–11 inspected for weak equality, first-class closure and multiplier consistency.
- Ghanashyam Date, Lectures on Constrained Systems, 28-page arXiv PDF; §3 Eq. (3.9), PDF pp. 13–14, and §4 Eq. (4.22), PDF p. 20 inspected for tangency and first-class closure.
- MIT OCW Chapter 4 full 33-page text was inspected. source-fetch-check fetched the canonical PDF but failed page-tree verification six times because mutool is unavailable. The source is dropped from active coverage with six attempts and two complete alternatives recorded. Four active sources are fetch-verified; the single drop remains resolved separately.
- No experimental data or observation claim is used. Classical spin is an optional adopted postulate; physical theorem statements are conditional model deductions.

## Readiness

All 16 items remain escalated. H25's 24 current Step 1 records are ready and hash-current, but H25 carriers remain draft/unbound and those records are not independent proof approval; affected closures also include H7/H8-inertial/H9 math-to-physics defects. I refreshed assigned supplier facts and cross-batch records to show this current status. The local first-class definition and the other 15 batch items have escalation records from before H25 readiness records arrived. At the time of the first 15 records, batch 42 still contained string-form item rows that made the live loader fail; those CLI records were created in a temporary inventory that normalized only those unrelated rows and copied back. No batch-26 dependency closure contains a batch-42 item. I preserved these escalations rather than overwriting them; their stored input hashes predate later item edits, so they remain open and none is treated as ready. The new local-definition record was written through the live CLI and has a current hash. Current interfaces and proof closures are recorded in the items, manifest, contracts, and cross-batch evidence. The latest run-wide Step 1 check loads all 547 items and reports 219 ready and 354 open, including all 16 escalations in this batch. Step 1 readiness is not independent proof approval.

## Final scoped checks

- `author-check` passed: 16 items; precheck, renderer/KaTeX/YAML rendercheck, content policy, and strict proof contracts all pass.
- Strict proof-contract check passed: 16/16 items, 0 errors, 0 warnings. Contracts use checker-canonical phases, actual per-step inputs and current H25 excerpts.
- `coverage-checklist --require-destination` passed: 1 A page, 13 harvested results, 0 errors or warnings. `source-fetch-check --stamp` reports 4/5 sources fetch-stamped and all 5 resolved through the one documented source drop; no new stamps were needed at final check.
- `item-dependency-levels check` reports no batch-26 mismatches. The run-wide command still exits nonzero for unrelated empty scaffolds and six unrelated TD level mismatches.
- Explicit `proof-layout` on all 16 items is blocked before item rendering because the app renderer cannot resolve `@/components` imported by `web/components/library/ItemBody.tsx`. The scoped rendercheck nevertheless passes KaTeX and renderer YAML parsing for 16 items and 2 pages.
