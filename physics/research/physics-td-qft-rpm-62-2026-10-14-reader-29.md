# Step 3a reader report — batch 29

**Run:** `physics-td-qft-rpm-62-2026-10-14`  
**Role:** independent reader  
**Batch:** `29`

## Opened inventory

Assigned pages opened:

- A page: `library/relativistic-particle-mechanics/rpm-curved-orbits-scattering.md`
- B page: `library/relativistic-particle-mechanics/rpm-curved-orbits-scattering-examples.md`

All 13 assigned items were opened and reviewed in supplier-before-consumer order.

- A page items: `pthm-rpm-schwarzschild-circular-stability`, `lem-rpm-schwarzschild-null-geodesic-reduction`, `pthm-rpm-schwarzschild-null-scattering`, `pthm-rpm-static-clock-redshift`, `def-rpm-relativistic-coulomb-phase-system`, `lem-rpm-sine-over-angle-limit`, `lem-rpm-arctangent-reciprocal-angle`, `prop-rpm-relativistic-coulomb-scattering-branch`, and `pthm-rpm-relativistic-coulomb-scattering`.
- B page items: `ex-rpm-schwarzschild-radial-stability-values`, `ex-rpm-schwarzschild-null-critical-impact`, `ex-rpm-schwarzschild-static-redshift-acceleration`, and `ex-rpm-relativistic-coulomb-newtonian-limit`.

The five required prerequisite pages were opened: `cm-math-central`, `cm-math-dynamics`, `gr-spherical-vacuum-model`, `rpm-external-charge`, and `the-integral-logarithm-and-its-characterisations`.

Material dependency statements and proof clauses reviewed included the Schwarzschild vacuum and exterior data, ideal free-fall/light rule, timelike and null geodesic reductions, circular-orbit and photon-sphere calculation, local-geodesic and compact-continuation results, Lyapunov-stability definition, nondegenerate Levi–Civita uniqueness, geodesic-speed preservation, Kruskal causal escape, static clock/redshift results, calculus and integral-log suppliers, the Coulomb phase system and exact scattering branch, the Newtonian Coulomb-scattering result, and the curvature/extension facts used by the examples. For the Coulomb physical specialization, the batch 24 interfaces opened were `def-rpm-charge-spin-model`, `post-rpm-external-charge-action`, `lem-rpm-charge-gauge-boundary`, `lem-rpm-curved-charge-action-variation`, `pthm-rpm-external-charge-action-equivalence`, `lem-rpm-external-charge-local-ivp`, `pthm-rpm-charge-mass-shell`, `post-sr-massive-particle-dynamics`, `def-em-electromagnetic-tensor`, `def-em-si-conventions`, and `def-sr-affine-minkowski-model`. Those batch 24 suppliers remain drafts; the Coulomb result remains explicitly conditional on their stated interfaces and assumptions.

## Repairs and evidence

1. **`pthm-rpm-schwarzschild-circular-stability`, proof steps 2.2 and 2.3.** The finite travel-time integrals showed that the radial coordinate would reach the selected boundary if the solution continued, but did not exclude a finite maximal-ODE endpoint before then. The repairs bound the radial speed using the conserved energy while the radius lies in a compact interval inside `(s,∞)`, then apply compact continuation [F5]. This establishes that the trajectories reach `r_c+η` and `3s−η`, respectively, and therefore leave the fixed neighborhood used to disprove Lyapunov stability. Item clauses [F4]–[F5] identify local existence and the exact continuation hypothesis; the new argument is at proof steps 2.2–2.3. The affected contract derivations were synchronized.

2. **`pthm-rpm-schwarzschild-null-scattering`.** The title now makes Kruskal capture explicitly conditional. The construction at proof step 1.1 verifies null norm and future direction from the initial data, proves equatorial invariance using the equatorial reflection isometry and uniqueness of the metric-selected connection/geodesic IVP, and preserves null norm along the geodesic. The global metric formula is now cited directly to `def-gr-schwarzschild-exterior-model`; Levi–Civita uniqueness and geodesic-speed preservation are stated as [F4]–[F5] with direct dependencies. New step 2.1 establishes the incoming branch from infinity and rules out finite-parameter termination on each bounded radial interval by compact continuation. Step 4.1 differentiates the radial first integral only where `\dot r\ne0` and extends the acceleration identity to the simple turning root by continuity. This closes the original equatorial/null-preservation, incoming-from-infinity, and turning-point gaps. The proof contract now records F4–F5, the added exterior-definition dependency, and the canonical proof-step numbering.

3. **`pthm-rpm-relativistic-coulomb-scattering`, Statement and Facts/Proof.** The model domain is now `O=R×(R^3\{0})`; the point source is explicitly excluded, and `φ`, `E`, and `B` are given as smooth maps on that domain with SI units and the stated four-potential/tensor sign convention. The proper-time worldline, coordinate-time velocity, `γ`, kinetic momentum, Hamiltonian, conserved energy and angular momentum, and scattering angle are identified with their domains and units. The scalar called `A` in the mathematical branch supplier is denoted `\mathcal A` in this theorem to distinguish it from the four-potential. The inverse time map in proof step 1.1 is denoted `\psi` to avoid reusing `\phi`, the electric scalar potential. The item does not assert regularity across the source or any observed scattering result. The affected proof-contract conclusion now uses `\mathcal A` consistently.

The batch 29 contract file `research/physics-td-qft-rpm-62-2026-10-14-batch-29.proof-contracts.json` was updated for the circular-stability continuation argument, the null-scattering new facts/dependency/derivations, and the Coulomb notation. The three edited items have `verification: {}`; there was no stale `verification.judge` record to remove.

## Page verdicts

- **`rpm-curved-orbits-scattering` (A page): pass.** Its summaries describe the fixed-angular-momentum Lyapunov result, null regimes with conditional Kruskal interpretation, static clock result, and conditional SI Coulomb specialization without claiming empirical confirmation. No page prose edit was needed.
- **`rpm-curved-orbits-scattering-examples` (B page): pass.** Its examples are described as model calculations and algebraic limits, not observations. The four assigned examples agree with their stated hypotheses and calculations. No page prose edit was needed.

No confirmed or suspected defect outside editable scope was found. In particular, the batch 24 suppliers inspected at their interfaces were not treated as already adjudicated proofs; their open status remains recorded in the existing Coulomb contract. No blocker remains for the content review.

## Source checks and validation

Authoritative references were consulted for the unfamiliar geodesic/scattering and Coulomb context:

- David Tong, *General Relativity*, author-hosted Chapter 1 HTML, §§1.3.1 and 1.3.5: equatorial geodesic behavior, the null radial effective potential and its maximum at `3GM/c²`, the turning/capture threshold, and the impact-parameter interpretation: <https://davidtong.org/teaching/general-relativity/grhtml/S1>.
- Sean Carroll, *Lecture Notes on General Relativity*, §7, equations (7.38)–(7.47) and photon-sphere discussion: conserved Killing quantities, constant geodesic norm, and radial effective-potential reduction: <https://www.physics.smu.edu/scalise/P3368sp17/CarrollGR.pdf>.
- Landau and Lifshitz, *The Classical Theory of Fields*, 4th English ed., §39, equations (39.1)–(39.4) and Problem 1, printed pp. 101–102: fixed-source Coulomb model and repulsive deflection context. The available mirrored text has OCR corruption in the displayed formula, so it was not used as the proof; the local branch proposition and SI derivation supply the exact claim: <https://djvu.online/file/HeEQkjmiSOId2>.
- Timothy H. Boyer, “Unfamiliar trajectories for a relativistic particle in a Kepler or Coulomb potential,” complete arXiv paper: its stated potential is attractive, so it was not used as proof of the repulsive branch: <https://arxiv.org/html/physics/0405090v1>.

For each edited item, `reflow.mts` completed with no further changes and `precheck.mts` passed. The final proof-layout scan completed with `3 items, 17 steps, 0 defects`. The workspace-selected fallback TypeScript loader could not resolve the web app's `@/` path alias on the initial invocation; the successful read-only scan used a temporary resolver shim under `/private/tmp` and did not modify repository or renderer files.

## Coverage note

The manifest dependency graph was enumerated (1,513 item IDs including the broad published mathematical closure), but that entire transitive graph was not reread item by item. The assigned items, both pages, prerequisite pages, and material direct/deeper supplier statements needed to check the reviewed claims were opened. External sources were read at the locators listed above; the Landau–Lifshitz mirror's formula OCR is a source limitation, not a dependency of the local proof. Findings JSON is empty because no uneditable defect remains.
