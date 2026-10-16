# Step 3a reader report — batch 16

Run: `quantum-computing-algorithms-60-2026-10-15`  
Batch: `16`  
Role: independent reader

## Opened inventory

Read the batch manifest and both assigned pages:

- A page: `library/quantum-computing/stabilizer-circuits-and-gottesman-knill-simulation.md`
- B page: `library/quantum-computing/stabilizer-circuits-and-gottesman-knill-simulation-examples.md`

Read all 22 A-page items and the B-page example:

`def-qc-pauli-measurement-branch-semantics`, `lem-qc-pauli-measurement-projectors`, `lem-qc-stabilizer-maximal-isotropic-self-dual`, `def-qc-stabilizer-subgroup`, `lem-qc-pauli-measurement-defines-an-instrument`, `lem-qc-pauli-measurement-positive-branch-is-density`, `lem-qc-zero-probability-branch`, `def-qc-adaptive-pauli-circuit-tree`, `def-qc-stabilizer-state`, `lem-qc-stabilizer-subgroup-label-space-and-order`, `lem-qc-stabilizer-average-projector`, `def-qc-stabilizer-tableau`, `lem-qc-anticommuting-stabilizer-measurement-is-fair`, `lem-qc-computational-basis-stabilizer-tableau`, `lem-qc-tableau-clifford-update`, `lem-qc-tableau-deterministic-sign`, `thm-qc-stabilizer-projector-rank-and-code-dimension`, `lem-qc-deterministic-stabilizer-measurement`, `lem-qc-random-measurement-stabilizer-update`, `alg-qc-stabilizer-exact-simulator`, `thm-qc-tableau-measurement-update`, `thm-qc-gottesman-knill-exact-simulation`, and `ex-qc-stabilizer-x-measurement-branches`.

Opened the direct supplier claims and proof sections used by those items. This included the current-run batch-15 Pauli product/adjoint, Hermitian-phase, quotient-label, symplectic-form and commutator items, the Hadamard, phase-gate and CNOT action lemmas; the batch-9 circuit syntax, denotation and resource definitions and their gate-embedding, layer-order, controlled/inverse-access and CNOT-order suppliers; the batch-7 Pauli matrix/algebra and gate definitions; batch-4 measurement/instrument/complete-positivity definitions and finite-ancilla block lemma; batch-3 state/ray and branch-norm suppliers; batch-2 register, basis, bit-string and tensor suppliers; batch-1 Dirac convention; and the empty-register Pauli convention. I also opened the cited published matrix, trace, nonnegative-operator, dimension, subgroup, finite-field, finite-sum and orthonormal-basis suppliers at their relevant claims.

## Review and repair

The measurement projector calculation establishes complementary projections, nonnegative outcome weights and total probability one. The branch lemmas establish normalized positive-probability states and the zero-weight convention; the instrument proof checks complete positivity of each ancilla amplification and trace preservation of the sum. The stabilizer-label and self-duality arguments cover the empty register as well as positive register sizes. The group average and trace calculation establish the fixed-space projector and code dimension. The tableau update lemmas preserve phase, commutation and independence, and the measurement theorem identifies the random and deterministic branches with the projective instrument. The Gottesman–Knill proof’s branch induction and its dense-row operation counts support the stated (O((n+1)^2+T(n+1)^3+C_{\rm cl})) bit-operation bound.

I repaired `items/alg-qc-stabilizer-exact-simulator.md`. Its deterministic branch previously named a binary row-membership solve without specifying its operations, and initialization allowed optional destabilizer rows that were not updated by the measurement branch. The definition now keeps only the output generator rows, specifies deterministic Gauss–Jordan elimination over the fixed ((x,z)) coordinate order with least-row pivots and inconsistency checks, covers the empty system at (n=0), and extracts the outcome bit by comparing the phase-aware row product with (M) and (-M). The deterministic-sign lemma supplies uniqueness; the existing theorem’s cubic elimination bound still covers the specified procedure.

The algorithm has no proof contract or `verification.judge` record. I refreshed the F8 supplier excerpt for `alg-qc-stabilizer-exact-simulator` in the affected `thm-qc-gottesman-knill-exact-simulation` proof contract. The theorem consumer remains valid with the clarified procedure and needed no proof edit. Checks after the final item edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/alg-qc-stabilizer-exact-simulator.md` — unchanged, exit 0.
- `node tools/tsx-run.mjs tools/precheck.mts items/alg-qc-stabilizer-exact-simulator.md` — 0 checked, 0 failing; the algorithm has no phase proof.
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-16.proof-contracts.json --strict --items thm-qc-gottesman-knill-exact-simulation` — 1/1 checked, 0 errors, 0 warnings.
- `node tools/proof-layout.mjs items/alg-qc-stabilizer-exact-simulator.md` — 1 item, 0 steps, 0 defects.

The source locations checked were de Wolf, *Quantum Computing: Lecture Notes*, Chapter 20 §§20.1–20.3: stabilizer subgroups and states (§20.1, PDF pp. 185–186), measurement-controlled Clifford circuits and tableau measurement cases (§20.3, PDF pp. 187–188), and Theorem 6 (Gottesman–Knill, §20.3, PDF p. 187); [PDF](https://arxiv.org/pdf/1907.09415). Watrous, *Understanding Quantum Information and Computation*, Lesson 14 §14.1 (Pauli observables and two eigenspace outcomes, printed pp. 405–407; PDF pp. 411–413) and §14.3 (stabilizer projector average and code-space dimension, printed pp. 420–422; PDF pp. 426–428); [PDF](https://jhwatrous.github.io/UQIC.pdf). Aaronson and Gottesman, *Improved Simulation of Stabilizer Circuits*, §§II–III (binary Pauli/tableau representation, Clifford updates, and measurement cases, PDF pp. 3–5 and 10–11); [PDF](https://arxiv.org/pdf/quant-ph/0406196). These passages support the cited interface claims; the local proofs supply the detailed finite-dimensional arguments and boundary cases reviewed here.

No uneditable mathematical defect was identified in the assigned items, pages or inspected supplier claims. No page or item was edited outside batch 16.

## Page verdicts

- `stabilizer-circuits-and-gottesman-knill-simulation`: no defect found. The objective accurately summarizes the stabilizer projector, branch, tableau and simulator items, and its distinction from a general instrument-to-POVM uniqueness argument is supported by the authored dependency route.
- `stabilizer-circuits-and-gottesman-knill-simulation-examples`: no defect found. Its summary matches the one-qubit repeated-(X)-measurement example, including the impossible opposite branch.

## Blocker and coverage limit

The current autopilot status is `running` with nothing in flight, but reports the global 1-scaffold spec blocker: the unit prerequisite graph rejects construction-scheduling item `def-qc-effective-unitary-matrix-input` in batch 12. This is outside batch 16’s dependency closure and did not block this review.

I checked the direct supplier claims/proofs needed by this batch and relevant transitive current-run interfaces. I did not independently re-audit every transitive proof behind the general-purpose published linear-algebra suppliers; their exact cited statements were opened and their uses here are elementary finite-dimensional applications. The zero-qubit Pauli convention is a draft current-run dependency outside this batch manifest; its current definition was inspected, and no defect was found.
