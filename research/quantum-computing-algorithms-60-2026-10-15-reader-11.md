# Step 3a reader report — batch 11

Run: `quantum-computing-algorithms-60-2026-10-15`  
Reader: `reader-11`  
Scope: batch `11`

## Opened inventory

Assigned pages:

- `library/quantum-computing/continuous-gate-universality-and-exact-synthesis.md` (A page)
- `library/quantum-computing/continuous-gate-universality-and-exact-synthesis-examples.md` (B page)

Assigned items, read in dependency order:

- `def-qc-global-phase-equivalence`
- `lem-qc-two-unitary-block-demultiplexing`
- `lem-qc-unitary-group-cayley-charts`
- `thm-qc-cosine-sine-block-decomposition`
- `def-qc-two-level-unitary`
- `alg-qc-two-level-unitary-elimination`
- `thm-qc-two-level-unitary-elimination-correct`
- `thm-qc-one-qubit-euler-decomposition`
- `thm-qc-two-qubit-cartan-decomposition`
- `lem-qc-global-phase-under-control`
- `lem-qc-generic-cnot-parameter-count`
- `lem-qc-multiplexed-axis-rotation-gray-code`
- `thm-qc-one-control-unitary-two-cnot`
- `thm-qc-two-qubit-unitary-three-cnot-synthesis`
- `lem-qc-terminal-diagonal-migration`
- `lem-qc-recursive-qsd-central-cz-absorption`
- `thm-qc-generic-unitary-cnot-lower-bound`
- `lem-qc-borrowed-bit-multicontrolled-x-linear`
- `thm-qc-exact-arbitrary-unitary-qsd-upper-bound`
- `thm-qc-multicontrolled-ancilla-resource-tradeoff`
- `alg-qc-two-level-gate-to-elementary-gates`
- `thm-qc-two-level-gate-synthesis-correct`
- `ex-qc-two-level-unitary-synthesis` (B-page example)

Dependencies opened for the reviewed claims included:

- Linear algebra and unitary structure: `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-polar-form-with-unique-principal-argument`, `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`, `thm-singular-value-decomposition`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `def-real-and-complex-inner-product-space`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `thm-finite-dimensional-orthogonal-decomposition`, `thm-finite-dimensional-isometry-characterisations`, and `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`.
- Register, gate, and circuit conventions: `def-qc-register-and-computational-basis`, `def-qc-ordered-bitstring-encoding`, `def-qc-tensor-register-and-permutation`, `thm-qc-computational-basis-orthonormal`, `def-qc-one-qubit-gate-alphabet-and-rotations`, `def-qc-pauli-matrices`, `thm-qc-axis-rotation-pauli-formula`, `def-qc-controlled-unitary-access`, `def-qc-cnot-and-control-target-order`, `def-qc-circuit-syntax-and-register-order`, `def-qc-circuit-denotational-semantics`, `def-qc-elementary-circuit-resources`, and `def-qc-clean-and-dirty-ancillas`.
- Analysis, geometry, and measure: `thm-heine-borel-rn`, `def-smooth-manifold`, `def-topological-manifold-without-boundary`, `thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas`, `def-riemannian-metric-and-riemannian-manifold`, `def-riemannian-volume-density`, `lem-the-riemannian-volume-density-is-coordinate-independent`, `thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure`, `prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density`, `cor-normalized-haar-probability-on-a-compact-group`, `def-countable-choice`, `def-axiom-of-choice`, `lem-axiom-of-choice-implies-countable-choice`, `thm-euclidean-inverse-function-theorem`, and `thm-morse-sard-for-euclidean-maps`.
- Scalar and measurement facts: `thm-sine-and-cosine-parametrize-the-unit-circle`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `def-determinant-of-a-square-matrix`, `thm-determinant-multiplicative`, `thm-determinant-of-transpose`, `def-qc-density-operator`, `def-qc-povm-and-outcome-law`, and `thm-qc-povm-probabilities-normalize`.
- Definition-change impact check: `lem-qc-fixed-arity-polynomial-cauchy-gate-decomposition` was opened to check its direct use of the two edited algorithms. Its cited operations and consumer proof remain valid under the clarifications below; its proof-contract quotations were synchronized, and no consumer proof edit was needed.

The manifest and proof contracts were used to locate carriers and synchronize the affected contracts, not as verdicts. The two assigned page files and every assigned item file were independently read. The pages' other `requires` entries were not opened because their contents were not needed to verify the assigned summaries or the item proofs; no whole-corpus dependency audit was attempted.

## Review and edits

The definitions, statements, constructions, proofs, witnesses, gate counts, exact phases, and example were checked against their stated hypotheses and the opened dependencies. The CSD proof handles singular values at both endpoints, repeated values, and empty support sectors. The two-level elimination loop preserves previously cleared entries, terminates after at most `N(N-1)/2` row operations, and returns the stated product order. The Gray-code synthesis and its post-expansion cost formula agree with the literal controlled-call choices and negative-control overhead. The multicontrol constructions restore their borrowed or clean wires under the stated contracts. The lower-bound argument is an almost-everywhere result and does not claim a per-unitary bound.

Three assigned-item repairs were made:

1. `items/alg-qc-two-level-unitary-elimination.md`: the admissible exact-arithmetic operations now include exact division by a nonzero positive real scalar. The procedure uses `1/h` when `b != 0`; its stated branch gives `h>0`, so this closes the missing operation prerequisite without changing the procedure or its output claim.

2. `items/alg-qc-two-level-gate-to-elementary-gates.md`: the Definition now takes the per-controlled-call construction choice as input, states when the clean bit must be supplied and initialized, and explicitly specifies the chronological elementary-gate list as output. The instructions reuse the supplied clean bit sequentially and state its return to zero. The correctness theorem was checked as the direct consumer.

3. `items/lem-qc-unitary-group-cayley-charts.md`, proof step 4.1: the proof now establishes the inherited Hausdorff and second-countable properties from the Euclidean matrix-space subspace, and states why translated Cayley chart transitions are smooth. These facts are needed before applying the smooth-manifold and Riemannian definitions.

No stale `verification.judge` records were present on the three repaired items. The affected quotations/step claim were synchronized in `research/quantum-computing-algorithms-60-2026-10-15-batch-11.proof-contracts.json`, `research/quantum-computing-algorithms-60-2026-10-15-batch-23.proof-contracts.json`, and `research/quantum-computing-algorithms-60-2026-10-15-proof-contracts.json`. The batch-23 consumer proof itself was unchanged.

Validation after the edits:

- `reflow` and `precheck` were run for each changed item. Both algorithms were unchanged by reflow and had no proof sections to precheck; Cayley charts passed direct precheck (`1 checked, 0 failing`).
- Final formatting pass: `node tools/proof-layout.mjs items/alg-qc-two-level-unitary-elimination.md items/alg-qc-two-level-gate-to-elementary-gates.md items/lem-qc-unitary-group-cayley-charts.md` reported `3 items, 7 steps, 0 defects`.

## Source checks

- Vatan and Williams, [*Optimal Quantum Circuits for General Two-Qubit Gates*](https://arxiv.org/html/quant-ph/0308006v3), §V, especially the construction around Eqs. (2)–(4) and the discussion immediately before Theorem 5. The paper explicitly notes the missing global `e^{iπ/4}` factor in the reduced circuit and states its generic `U(4)` result up to global phase. The assigned item retains the scalar and proves the exact matrix identity in its own QC7 sign convention. The displayed parity-block matrix product was also numerically sanity-checked at three parameter choices; this was not used as a substitute for the proof.
- Shende, Bullock, and Markov, [*Synthesis of Quantum Logic Circuits*](https://arxiv.org/html/quant-ph/0406176v5), Theorem 13 and §5.3 for the four-child/three-multiplexor recursion and recurrence; Appendix A.1–A.2 for controlled-`Z` absorption, terminal diagonal extraction, and the additional savings. Their Eq. (19) gives the same `23/48·4^n − 3/2·2^n + 4/3` bound. The assigned proof supplies the exact local gate and separator arguments in the library's register convention.

## Page verdicts

- `continuous-gate-universality-and-exact-synthesis` (A): **Pass after the listed item repairs.** The summary correctly distinguishes exact equality from global phase, the no-ancilla upper-bound model from the multicontrol clean-work-bit construction, and generic lower bounds from per-unitary claims. No page prose edit was needed.
- `continuous-gate-universality-and-exact-synthesis-examples` (B): **Pass.** Its summary matches the assigned two-qubit example and exact phase convention. B-page prose was not edited.

## Uneditable defects and blocker

No confirmed uneditable defects remain in the assigned pages, items, or opened dependencies needed for this review.

The reader task itself had no mathematical blocker. The live autopilot status still reports the pre-existing run-level `spec` blocker: `1-scaffold` has an invalid unit prerequisite graph because construction scheduling item identity `def-qc-effective-unitary-matrix-input` is invalid in batch 12. This is outside batch 11 and was not changed here.

## Coverage note

All 22 assigned A-page items, the assigned B-page example, and both assigned pages were reviewed, along with the direct supporting dependencies listed above and the direct consumer needed for the Definition-change impact check. I did not independently re-audit every transitive dependency proof or inspect upstream pages named only in `requires`; those were not needed to verify the reviewed claims. No uncertainty remains in the reviewed mathematics.
