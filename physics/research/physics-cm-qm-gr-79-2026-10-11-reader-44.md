# Reader report — batch 44

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: independent reader  
Scope: batch `44`

## Opened inventory

Pages opened:

- `qm-state-geometry` — `library/non-relativistic-quantum-mechanics/qm-state-geometry.md` (A page, draft)
- `qm-state-geometry-examples` — `library/non-relativistic-quantum-mechanics/qm-state-geometry-examples.md` (B page, draft)

All 18 assigned items were opened in dependency order:

- A page: `def-nrqm-state-geometry-state-vectors-and-rays`; `lem-nrqm-state-geometry-normalization-and-phase-classes`; `lem-nrqm-state-geometry-ray-to-rank-one-projection`; `def-nrqm-state-geometry-pure-mixed-states-and-purity`; `lem-nrqm-state-geometry-density-set-convex-and-complete`; `lem-nrqm-state-geometry-purity-criterion`; `lem-nrqm-state-geometry-extreme-points-of-the-state-space`; `def-nrqm-state-geometry-framework-state-space`; `pthm-nrqm-state-geometry-pure-preparation-phase-invariance`; `pthm-nrqm-state-geometry-mixtures-and-extremal-preparations`; `rem-nrqm-state-geometry-scope-and-empirical-status`.
- B page: `ex-nrqm-state-geometry-normalization-and-phase-check`; `ex-nrqm-state-geometry-finite-spin-bloch-ball`; `ex-nrqm-state-geometry-fixed-mode-two-level-states`; `ex-nrqm-state-geometry-coherent-versus-mixed-preparation`; `ex-nrqm-state-geometry-nonunique-preparation-ensembles`; `cex-nrqm-state-geometry-zero-vector-is-not-a-preparation`; `rem-nrqm-state-geometry-examples-scope-limits`.

Current-run draft suppliers opened before their assigned consumers:

- Batch 35: `lem-nrqm-composites-rank-one-operator-calculus`; `lem-nrqm-composites-density-and-scalar-spectral-probability`.
- Batch 37: `prop-nrqm-orbital-and-spin-finite-spin-matrices`.
- Batch 43: `post-nrqm-framework-state-and-composition`; `post-nrqm-framework-identical-particles-and-spin`.

The relevant Definition or Statement sections of the published mathematical prerequisites were opened: `def-hilbert-space`, `def-real-and-complex-inner-product-space`, `def-inner-product-space`, `def-inner-product-norm`, `cor-inner-product-induces-a-norm`, `def-complex-numbers-and-arithmetic`, `lem-complex-conjugation-and-modulus-laws`, `def-field`, `def-countable-choice`, `def-dimension`, `def-linear-combination-and-span`, `def-matrix-product-and-identity-matrix`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`, `def-operator-norm`, `def-bounded-linear-operator`, `def-hilbert-orthogonal-projection`, `def-normed-subspace`, `cor-finite-dimensional-subspaces-are-closed`, `cor-finite-dimensional-normed-spaces-are-banach`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `def-metric-convergence`, `def-complete-metric-space`, `def-series-and-absolute-convergence-in-a-normed-space`, `def-banach-space`, `thm-complete-subspace-iff-closed`, `lem-restriction-of-scalars`, `def-subfield`, `def-trace-class-operator`, `def-trace-of-a-trace-class-operator`, `def-self-adjoint-positive-unitary-and-normal-operator`, `def-hilbert-space-adjoint`, `def-non-negative-and-positive-operator`, `thm-trace-class-is-a-two-sided-banach-operator-ideal`, `thm-trace-is-absolutely-convergent-and-basis-independent`, `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues`, `thm-hilbert-adjoint-properties`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-spectral-theorem-for-compact-self-adjoint-operators`, `thm-hilbert-space-fourier-expansion`, `lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal`, `lem-finite-rank-operators-are-compact`, and `lem-nuclear-series-characterizes-trace-norm`. `research/math-imports.json` was consulted to distinguish pinned mathematical suppliers from current-run drafts.

## Repairs made

- In `lem-nrqm-state-geometry-purity-criterion`, the spectral theorem fact and proof step 2.1 indexed full-eigenspace projections by an eigenvalue list that repeats eigenvalues with multiplicity. I rewrote the spectral theorem fact using distinct eigenvalues and their full eigenspace projections, then proved the squared-eigenvalue multiplicities using the orthonormal eigenvector family from the density expansion. This preserves the claim and removes the repeated-projection error.
- In `lem-nrqm-state-geometry-extreme-points-of-the-state-space`, the same repeated-eigenvalue projection error appeared in Fact F3 and step 3.1. Fact F3 now distinguishes the multiplicity list from distinct-eigenvalue projections; step 3.1 uses the distinct-eigenvalue decomposition after showing the eigenvalue 1 has multiplicity one.
- In `pthm-nrqm-state-geometry-mixtures-and-extremal-preparations`, Fact F3 repeated the inaccurate projection indexing. I removed that unnecessary assertion and stated the density expansion and multiplicity-list purity criterion used by the proof.
- In `lem-nrqm-state-geometry-ray-to-rank-one-projection`, the cited rank-one supplier used a finite-dimensional definition of non-negativity for arbitrary Hilbert spaces. I added the general bounded-operator positivity definition as a direct prerequisite and established positivity in step 1.1 from the rank-one quadratic form.
- In `ex-nrqm-state-geometry-nonunique-preparation-ensembles`, I narrowed the remark claiming that all predictions depend on the assigned state. The computation establishes equality of the two density operators; it does not supply the framework's measurement rules or exclude dependence on additional preparation data.

The batch 44 proof contract was updated for the repaired derivations in `lem-nrqm-state-geometry-purity-criterion`, `lem-nrqm-state-geometry-extreme-points-of-the-state-space`, and `lem-nrqm-state-geometry-ray-to-rank-one-projection`; the new general-positivity citation was added. No changed item contained a `verification.judge` record to remove.

Reflow and precheck passed for all five changed items. Final proof-layout check: 5 items, 22 steps, 0 defects.

## Uneditable dependency findings

1. `lem-nrqm-composites-rank-one-operator-calculus` (batch 35) states `T_{x,x} \ge 0` for an arbitrary complex Hilbert space and cites `def-non-negative-and-positive-operator`. That published definition is explicitly restricted to finite-dimensional inner-product spaces. Its Fact F6 and proof step 3.2 therefore do not supply a definition applicable to the arbitrary Hilbert space in the rank-one statement. The assigned ray-to-projection lemma now proves the needed positivity from the general bounded-operator definition, but the batch 35 supplier still needs an applicable definition or a direct quadratic-form formulation. The raw source hash at split was `95dc3da77210ec15885415ee47c7d5d55ef1ad6ff9e1b0545d55a18176cf64d1`.

2. `prop-nrqm-orbital-and-spin-finite-spin-matrices` (batch 37), Statement (e), defines `\varepsilon_{ijk}` only as the sign of the permutation `(x,y,z)\mapsto(i,j,k)`, while its final identity quantifies over all `i,j` and sums over `k`. When indices repeat, this tuple is not a permutation and the symbol has no defined value. Define the alternating symbol to be zero on repeated indices, or restrict the formula to distinct indices. The assigned Bloch-ball example uses the preceding explicit anticommutator identity, so this defect does not obstruct its proof. The raw source hash at split was `2975187b69cd0ee0e65d10d05a244cf97538da5665b3a0649174015639e19f30`.

Both subjects are current-run draft dependencies outside batch 44 and remain present for owner disposition. They are recorded in `research/physics-cm-qm-gr-79-2026-10-11-reader-findings-44.json`.

## Page verdicts

- `qm-state-geometry`: conditional pass. The summary accurately describes the mathematical state-space layer, its conditional physical readings, and the page's explicit empirical and scope limits after the proof repairs. The batch 35 rank-one supplier finding remains routed; the assigned ray-to-projection proof now establishes the needed positivity locally. No page prose edit was needed.
- `qm-state-geometry-examples`: conditional pass. The summary matches the computations and keeps the photon-polarization, measurement, apparatus, and data claims deferred as the items do. The batch 37 epsilon-symbol defect is outside the subclaims used in the Bloch-ball proof, which uses the valid stated anticommutator identity. No page prose edit was needed.

## Blocker and coverage note

No blocker prevented review of the assigned pages or items. Two defects remain in current-run draft suppliers outside this batch and are routed above. This batch contains no experiment or reported-data item, so there were no source-backed observations, sampling models, or empirical uncertainty records to audit. Published mathematical suppliers were checked at the relevant exact Definition or Statement sections; their full proof bodies were not re-audited in this batch review. Unrelated workspace changes were left untouched.
