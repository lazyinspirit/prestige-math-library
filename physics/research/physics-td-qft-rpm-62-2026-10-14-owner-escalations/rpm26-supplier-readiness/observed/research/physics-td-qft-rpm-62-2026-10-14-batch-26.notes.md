# Batch 26 authoring notes

Run: physics-td-qft-rpm-62-2026-10-14; role beta; assigned pair only.

## Plan and design conflicts

- Current research/plan-spec.json and the design header require both moment-maps-and-symplectic-reduction and rpm-hamiltonian-constraints for A page rpm-symmetries-hamilton-jacobi. The original A reservation block in the design lists only rpm-hamiltonian-constraints. Followed the current plan and page header; both A requirements are retained.
- The paired-inventory/design reservation lists both rpm-hamiltonian-constraints and the A page for B, while current plan-spec.json requires only the A page. Followed plan-spec: B requires rpm-symmetries-hamilton-jacobi. The A-to-Hamiltonian prerequisite remains transitive through A.
- No item claim was narrowed to reconcile these metadata conflicts.

## Inventory and dependency levels

Batch 26 remains dependency level 2 and requires batch 25. Item levels use the full planned item graph plus scoped dependency additions. Formula: zero with no in-run item suppliers; otherwise one plus the maximum in-run supplier level.

| Item | Level | Direct dependencies |
|---|---:|---|
| def-rpm-h-poincare-charge-space | 1 | thm-sr-proper-orthochronous-lorentz-algebra, def-rpm-h-cotangent-phase-space, def-symplectic-and-hamiltonian-lie-group-action, thm-a-regular-level-set-is-an-embedded-submanifold, def-countable-choice |
| thm-rpm-h-local-hamilton-jacobi | 2 | thm-rpm-h-canonical-poisson-and-flow, thm-smooth-dependence-of-ode-solutions-on-parameters, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space |
| thm-rpm-h-poincare-moment-map-and-algebra | 5 | def-rpm-h-poincare-charge-space, thm-rpm-h-canonical-poisson-and-flow, prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map, thm-rpm-h-flat-shell-global-reduction, thm-rpm-h-inertial-time-reduced-hamiltonian, def-countable-choice |
| thm-rpm-h-positive-spin-orbit | 6 | thm-rpm-h-poincare-moment-map-and-algebra, thm-coadjoint-orbits-are-symplectic-manifolds, def-countable-choice |
| post-rpm-h-classical-spin-orbit-model | 7 | thm-rpm-h-positive-spin-orbit, def-countable-choice |
| thm-rpm-h-spinless-kks-identification | 6 | thm-rpm-h-poincare-moment-map-and-algebra, thm-rpm-h-flat-shell-global-reduction, thm-coadjoint-orbits-are-symplectic-manifolds, def-countable-choice |
| pthm-rpm-h-classical-orbit-evolution | 8 | post-rpm-h-classical-spin-orbit-model, thm-rpm-h-positive-spin-orbit, thm-rpm-h-canonical-poisson-and-flow, thm-coadjoint-orbits-are-symplectic-manifolds, def-rpm-h-poincare-charge-space, def-countable-choice |
| thm-rpm-h-killing-shell-first-integral | 5 | thm-rpm-h-first-order-action-and-geodesics, thm-rpm-h-canonical-poisson-and-flow, thm-gr-killing-and-on-shell-matter-identities |
| pthm-rpm-h-free-symmetry-conservation | 6 | post-rpm-h-free-test-particle-action, post-rpm-h-massless-shell-action, thm-rpm-h-poincare-moment-map-and-algebra, thm-rpm-h-killing-shell-first-integral, thm-rpm-h-first-order-action-and-geodesics, def-countable-choice |
| thm-rpm-h-complete-integral-coordinates | 6 | thm-rpm-h-local-hamilton-jacobi, thm-rpm-h-temporal-shell-reduction, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space |
| pthm-rpm-h-hj-trajectories | 7 | post-rpm-h-free-test-particle-action, post-rpm-h-massless-shell-action, thm-rpm-h-first-order-action-and-geodesics, thm-rpm-h-local-hamilton-jacobi, thm-rpm-h-complete-integral-coordinates |
| cex-rpm-h-instantaneous-potential-free-boost | 6 | thm-rpm-h-poincare-moment-map-and-algebra, def-rpm-h-poincare-charge-space, def-countable-choice |
| ex-rpm-h-two-shell-consistency-obstruction | 3 | thm-rpm-h-constraint-consistency |
| cex-rpm-h-relativistic-hj-caustic | 5 | thm-rpm-h-local-hamilton-jacobi, thm-rpm-h-inertial-time-reduced-hamiltonian |
| ex-rpm-h-free-relativistic-complete-integral | 7 | thm-rpm-h-complete-integral-coordinates, thm-rpm-h-inertial-time-reduced-hamiltonian |

There are 11 A items and 4 B examples, below the 100-item page cap. No cycle was found.

## Batch-25 carrier recheck and interface findings

At first inspection, relevant batch-25 item files and page manifest were empty. During authoring, all 22 H25 inventory item files became available, including the 17 items in this pair’s planned transitive dependency closure. I reopened and inspected their current statements and proofs, and checked all 17 closure dependencies against the planned uses. All are status draft and lack a pipeline_run binding. The current batch-25 A/B pages manifest still has zero authored item entries, and no current-run Step 1 record binds these files. Their actual interfaces match the recorded uses below, but they remain draft inputs rather than approved run carriers. All cross-batch rows remain open.

Actual interface matches:

- H0 def-rpm-h-cotangent-phase-space gives T*Q, theta=p dq, omega=-dtheta=dq wedge dp and AComega only; H0 thm-rpm-h-canonical-poisson-and-flow gives iota_XH omega=dH, {F,G}=F_qG_p-F_pG_q, and local flow only.
- H2 def-rpm-h-regular-constraint-system and thm-rpm-h-constraint-consistency give regular levels and the same multiplier tangency equation used in the two-shell example.
- H8 thm-rpm-h-flat-shell-global-reduction gives future-shell complete-line flow, the (a,p) quotient, da wedge dp, and the nonzero-null restriction. H8 thm-rpm-h-inertial-time-reduced-hamiltonian gives E, q=a+tE_p, qdot=c^2p/E and pdot=0.
- H9 thm-rpm-h-temporal-shell-reduction gives the positive root under the local temporal-chart, N>0 and positive-h hypotheses; it excludes p_i=0 on the massless branch.
- H5 post-rpm-h-free-test-particle-action and post-rpm-h-massless-shell-action are separate draft model postulates. They are used only as conditional assumptions, never as proof or observation.
- H7 thm-rpm-h-first-order-action-and-geodesics gives the shell action equations and massive/nonzero-null interpretation used conditionally.

Unresolved prerequisite-theory defects requiring owner action:

- thm-rpm-h-first-order-action-and-geodesics is domain mathematics but its direct deps include the two domain-physics action postulates. This invalidates the workspace math-only prerequisite rule for the H7 proof status.
- thm-rpm-h-homogeneous-massive-shell is domain mathematics but directly depends on physics-domain def-rpm-h-background-and-model-quantities; thm-rpm-h-flat-shell-global-reduction inherits this edge.
- thm-rpm-h-inertial-time-reduced-hamiltonian is domain mathematics and directly depends on H7, whose proof uses physical postulates.
- thm-rpm-h-temporal-shell-reduction is domain mathematics but directly depends on physics-domain def-rpm-h-background-and-model-quantities and H7 with physical postulate dependencies.

The current defects are cross-batch and cannot be corrected by changing the assigned claims. Proposed owner resolution: split pure mathematical first-order shell and chart derivations from model-specific action equivalence; use physical postulates only in physics-theorem items; remove/refactor math-to-physics edges in the homogeneous-shell, inertial-time and temporal-chart results. Rebind reviewed supplier items to the H25 A page. Affected consumers include the Poincare shell result, spinless KKS identification, Killing/free-symmetry results, complete-integral/HJ-trajectory results, and B boost/caustic/free-integral examples.

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

## Source harvest and retrieval

- Marsden–Ratiu, Introduction to Mechanics and Symmetry, full 549-page book PDF; §§12.1, 12.4, 14.2–14.3, 7.9 inspected and fetch-verified.
- van der Schaaf, Classical and Quantum Particles in Galilean and Poincare Spacetime, full 85-page monograph; §§9.3 and 10.2.2 inspected and fetch-verified. Natural units and (+---) were translated to SI and (-+++).
- MIT OCW Chapter 4 full 33-page text was inspected. source-fetch-check fetched the canonical PDF but failed page-tree verification six times because mutool is unavailable. The source is dropped from active coverage with six attempts and two complete alternatives recorded. Marsden–Ratiu and van der Schaaf remain two active independent full-text books.
- No experimental data or observation claim is used. Classical spin is an optional adopted postulate; physical theorem statements are conditional model deductions.

## Readiness

All 15 items remain escalated: batch-25 item files are draft and unbound, the required page manifest is empty, and H7/H8/H9 contain unresolved math-to-physics proof dependencies. The assigned A/B pages and complete conditional arguments are authored. Step 1 readiness is not independent proof approval.
