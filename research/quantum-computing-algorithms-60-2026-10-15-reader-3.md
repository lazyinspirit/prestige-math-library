# Step 3a reader report — batch 3

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Review date: 2026-10-16

## Scope and opened inventory

Read the assigned batch manifest and `briefs/reader.md`, then reviewed both assigned pages:

- A page: `library/quantum-computing/pure-and-mixed-states-ensembles-and-schmidt-decomposition.md`
- B page: `library/quantum-computing/pure-and-mixed-states-ensembles-and-schmidt-decomposition-examples.md`

Opened every assigned item in dependency order:

- Level 0: `def-qc-density-operator`, `def-qc-finite-positive-effect-family`.
- Level 1: `def-qc-pure-state-and-ray`, `lem-qc-complete-effect-family-members-are-effects`, `thm-qc-density-operator-existence`.
- Level 2: `thm-qc-ray-projector-well-defined-and-bijective`, `thm-qc-schmidt-decomposition`.
- Level 3: `def-qc-ensemble-and-purification`, `thm-qc-density-spectral-ensemble`.
- Level 4: `thm-qc-ensemble-barycenter-is-density`, `thm-qc-purification-existence-and-unitary-equivalence`, `thm-qc-rank-one-density-operator`, `ex-qc-bell-state-schmidt-reduction`.
- Level 5: `thm-qc-ensemble-purification-correspondence`, `thm-qc-density-operator-convexity`, `thm-qc-purification-minimal-environment-dimension`.

Reviewed the dependency statements and the proof passages used by those items, including the current-run suppliers `def-qc-dirac-notation-conversion`, `thm-qc-dirac-notation-coordinate-identity`, `def-qc-tensor-register-and-permutation`, `def-qc-partial-trace`, `def-qc-tensor-map`, `lem-qc-tensor-product-basis-and-dimension`, `thm-qc-partial-trace-characterization-and-basis-independence`, and `lem-qc-trace-pairing-nondegenerate`. The published dependency context included the trace, inner-product, dimension, kernel/image, subspace, orthogonal projection/complement, rank, coordinate/matrix, finite-basis, tensor-basis, singular-value, non-negative-operator, square-root, and finite-dimensional orthogonal-decomposition results named by the assigned items.

Checked cited source passages at:

- John Watrous, *The Theory of Quantum Information*: §1.1.3 (Schmidt decomposition); §§2.1.2–2.1.3, including Theorems 2.10 and 2.12 (states, reductions, purification existence and unitary equivalence). [PDF](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf)
- John Preskill, *Quantum Computation*, Chapter 2: §§2.4, 2.5.1, and 2.5.5 (Schmidt decomposition, convexity, and HJW). [PDF](https://www.preskill.caltech.edu/ph219/chap2_15.pdf)
- Ronald de Wolf, *Quantum Computing: Lecture Notes*: §15.1 (density matrices and POVMs), §18.3 and Exercise 4 (Schmidt decomposition, EPR reduction, and purification). [PDF](https://arxiv.org/pdf/1907.09415)

## Review and edits

No edits were made. The item proofs preserve the root linear-first inner-product convention. I checked the coefficient-matrix conjugation in the Schmidt proof, the padded-environment unitary construction, the support and zero-weight cases in the ensemble/filter proof, and the rank lower bound for purification dimensions. The Bell-state computations and both page summaries agree with the item statements and derivations.

No defect requiring an uneditable finding was confirmed. No proposed withdrawal was identified. Because no item changed, reflow, precheck, and proof-layout repair checks were not applicable.

## Page verdicts

| Page | Verdict | Evidence |
|---|---|---|
| `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (A) | Pass | Its claims about density operators, spectral ensembles, Schmidt decomposition, effects, convexity, purification, and ensemble filters are supported by the assigned items. |
| `pure-and-mixed-states-ensembles-and-schmidt-decomposition-examples` (B) | Pass | Its summary is supported by the Bell-state Schmidt and partial-trace calculations and the two ensemble decompositions in `ex-qc-bell-state-schmidt-reduction`. |

## Run status and blocker

The autopilot status command reports the run as running. It reports a pre-existing `1-scaffold` spec blocker: invalid construction scheduling identity `def-qc-effective-unitary-matrix-input` in batch 12. That is outside this review’s scope and did not prevent the batch 3 review.

