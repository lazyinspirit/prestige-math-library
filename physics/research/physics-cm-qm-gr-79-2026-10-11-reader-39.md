# Step 3a reader report — batch 39

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `39`

## Opened inventory

Pages:

- `library/non-relativistic-quantum-mechanics-mathematics/qm-math-coulomb.md`
- `library/non-relativistic-quantum-mechanics-mathematics/qm-math-coulomb-examples.md`

Assigned items (19 on `qm-math-coulomb`, then 3 examples on its companion page):

- `def-nrqm-coulomb-ltwo-kernel-operators`
- `lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact`
- `def-nrqm-coulomb-closed-semibounded-forms`
- `lem-nrqm-coulomb-three-dimensional-hardy-bound`
- `thm-nrqm-coulomb-infinitesimal-kinetic-bound`
- `thm-nrqm-coulomb-relative-compactness`
- `thm-nrqm-coulomb-essential-spectrum`
- `thm-nrqm-coulomb-angular-radial-unitary-reduction`
- `thm-nrqm-coulomb-transported-radial-endpoint-realization`
- `thm-nrqm-coulomb-kummer-recurrence-and-termination`
- `thm-nrqm-coulomb-laguerre-bound-energy-exhaustion`
- `thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy`
- `thm-nrqm-coulomb-ground-radial-probability-and-units`
- `lem-nrqm-central-positive-scaling-spectral-measure`
- `thm-nrqm-coulomb-two-body-reduced-mass`
- `thm-nrqm-coulomb-atomic-dipole-matrix-element-domain`
- `thm-nrqm-coulomb-jost-volterra-solution`
- `thm-nrqm-coulomb-continuum-spectral-density`
- `thm-nrqm-coulomb-onto-radial-continuum-transform`
- `ex-nrqm-coulomb-hydrogen-ground-normalization`
- `ex-nrqm-coulomb-no-full-discrete-eigenbasis`
- `ex-nrqm-coulomb-relative-versus-total-bound-state`

External mathematical supplier statements opened where needed included Kato–Rellich, Weyl essential-spectrum invariance, real multiplication operators, polar integration, spherical-harmonic completeness and the sphere Laplacian, dipole angular selection, the unbounded spectral theorem, Plancherel and the Fourier rule for weak derivatives, and the Borel-completion representative results used in the angular-unitary repair. The assigned items' cited claims and dependency uses were checked against their Facts & Assumptions and proof steps.

## Repairs

1. `thm-nrqm-coulomb-ground-radial-probability-and-units`: removed the undefined “definite orbit” assertion from clause (d). Replaced the dimensionally incomplete `O(ε^4)` remainder with an exact remainder bound in the dimensionless variable (t=2ε/a_0): (|R_ε|≤t^4/8), from the displayed integral (P(|x|<ε)=1-e^{-t}(1+t+t^2/2)). Specified (D(C_{\hbar,m,\kappa})=H^2(\mathbb R^3;\mathbb C)) in clause (e). Updated proof-contract step 3.2 and its endpoint/zero-boundary evidence.

2. `thm-nrqm-coulomb-two-body-reduced-mass`: defined the centre-of-mass momentum on its factor space and its lift to the full two-body Hilbert space, including the maximal weak-derivative domain. Reordered the proof so the partial-Fourier multiplier argument establishes the lifted operator and its null-hyperplane eigenvector exclusion before later consumers. Updated proof-contract derivations and source-use mappings for steps 1.2 and 6.1.

3. `thm-nrqm-coulomb-angular-radial-unitary-reduction`: replaced the compressed polar-Laplacian calculation with an explicit chart computation using the tangent-projector and sphere-coordinate identities. Also closed the representative gap: for arbitrary (L^2) classes the proof now takes finite Borel representatives, proves coefficient independence using the polar formula on Borel null sets, and uses Borel radial representatives in the inverse construction. Added the two published completion prerequisites to item `deps` and `dependency_roles`, and updated the proof-contract citations and derivations.

No `verification.judge` records were present on the three changed carriers. No assigned page prose or other item was edited.

## Direct-consumer checks

- Ground-state theorem: read `ex-nrqm-central-hydrogen-bound-energy-units-and-reduced-mass` and `pthm-nrqm-central-coulomb-bound-state-radial-distributions`. Their energy-domain and probability claims remain supported; neither uses the removed orbit phrase. No consumer repair was needed.
- Two-body theorem: read `def-nrqm-central-framework-coulomb-and-hydrogen-model`, `pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum`, and the assigned `ex-nrqm-coulomb-relative-versus-total-bound-state`. The physical theorem already defines the lifted momentum with the same full-space domain; the model definition and example use the operator decomposition. No consumer repair was needed.

## Page verdicts

- `qm-math-coulomb`: pass after the three assigned-item repairs. Its summary remains accurate for the revised polar construction, spectral statements, and mathematical scope.
- `qm-math-coulomb-examples`: pass. Its three examples remain consistent with the reviewed parent results.

## Validation and blocker

- `reflow.mts`: unchanged for all three edited items.
- `precheck.mts`: pass for all three edited items.
- `proof-layout.mjs`: `3 items, 20 steps, 0 defects`.
- No uneditable mathematical defect was confirmed.
- The two Borel-completion prerequisites added to `thm-nrqm-coulomb-angular-radial-unitary-reduction` are absent from the frozen batch-39 page manifest. The reader scope did not permit manifest edits; the owner must reconcile the manifest before a gate that checks item/manifest dependency agreement.

## Coverage note

Both assigned pages and all 22 assigned items were opened and reviewed. I checked exact supplier statements at the nontrivial interfaces named above and independently traced the authored arguments. I did not re-audit every proof in the full transitive mathematical supplier closure. The remaining workflow limitation is the batch-manifest reconciliation recorded above.
