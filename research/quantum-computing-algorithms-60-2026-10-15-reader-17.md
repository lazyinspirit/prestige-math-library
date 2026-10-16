# Step 3a reader report — batch 17

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Coverage: batch `17`

## Opened inventory

Assigned pages:

- `library/quantum-computing/bell-states-teleportation-and-dense-coding.md` (A page)
- `library/quantum-computing/bell-states-teleportation-and-dense-coding-examples.md` (B page)

Assigned items reviewed against their dependencies:

- `def-qc-bell-basis`
- `thm-qc-bell-transform-inverse`
- `alg-qc-teleportation`
- `thm-qc-teleportation-bell-expansion`
- `alg-qc-dense-coding`
- `def-qc-teleportation-protocol-resource-count`
- `thm-qc-teleportation-equiprobable-outcomes`
- `thm-qc-teleportation-correction-identity`
- `thm-qc-dense-coding-correctness-and-resource-count`
- `thm-qc-teleportation-reference-stability`
- `thm-qc-teleportation-correctness-and-resource-count`
- `ex-qc-teleportation-branch-correction`

Required pages opened:

- `library/quantum-computing/circuit-syntax-denotational-semantics-and-measurement.md`
- `library/quantum-computing/controlled-gates-phase-and-entanglement.md`
- `library/quantum-computing/measurements-povms-and-instruments.md`
- `library/quantum-computing/qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates.md`
- `library/quantum-computing/registers-tensor-products-and-partial-trace.md`

Direct item dependencies opened:

- `def-qc-register-and-computational-basis`
- `def-qc-tensor-register-and-permutation`
- `def-qc-one-qubit-gate-alphabet-and-rotations`
- `thm-qc-computational-basis-orthonormal`
- `def-qc-cnot-and-control-target-order`
- `def-qc-tensor-map`
- `def-adjoint-of-a-linear-map-between-inner-product-spaces`
- `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`
- `def-qc-classical-control-and-measurement-circuit`
- `def-qc-circuit-denotational-semantics`
- `def-qc-pauli-matrices`
- `def-qc-projective-measurement`
- `def-qc-density-operator`
- `thm-qc-projective-measurement-outcome-law`
- `def-trace-of-an-endomorphism`
- `thm-qc-projective-conditional-state`
- `def-qc-elementary-circuit-resources`

Additional supporting items opened for the relevant basis, trace, positivity, and adjoint arguments:
`def-non-negative-and-positive-operator`, `thm-non-negative-operator-characterisations`,
`thm-trace-of-ab-equals-trace-of-ba`, `prop-trace-is-linear`,
`def-qc-qubit-and-bloch-representation`,
`thm-complex-spectral-theorem-for-normal-endomorphisms`,
`cor-real-spectral-theorem-for-self-adjoint-endomorphisms`,
`prop-standard-coordinate-inner-products`, `lem-standard-basis-of-f-n`,
`thm-bessel-inequality-and-finite-parseval-identity`, and
`thm-adjoint-exists-and-is-unique-in-finite-dimension`.

The batch-17 proof-contract file was opened. Its eight proof-bearing contract records match the proof-step inventory and list no unresolved supplier checks.

## Source checks

- John Watrous, *The Theory of Quantum Information* (2018), Chapter 6, §6.3.1: Scenario 6.46, Theorem 6.47, Corollary 6.49, Example 6.50, Scenario 6.53, Proposition 6.54, and Example 6.55. [Source PDF](https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf).
- Richard Cleve, *Quantum Information Processing* F26 notes, version V6 dated October 13, 2026: §7.2, equations (81)–(82), PDF pp. 61–62; §10.2–10.3, equations (135)–(140), PDF pp. 81–84. [Source PDF](https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf).

Cleve’s dense-coding input bits put the X/flip bit first and the Z/phase bit second; the assigned items use phase first and flip second and explicitly account for that swap. Cleve’s teleportation equations use the same phase/flip convention as the assigned items. The source locations support the stated identities and resource claims.

## Review and edits

The Bell-vector definitions and the Bell preparation/decoding, teleportation, reference-preservation, dense-coding, probability, correction, and resource-count arguments agree with the declared right-to-left operator order and phase-first/flip-second label convention. The branch identities hold for all bit labels, including `11`; the teleportation outcome proofs establish positive weight before using conditional states. The arbitrary-reference proof covers every finite-dimensional reference and makes no product-state assumption. The algorithm definitions give finite inputs, outputs, and exact instructions and do not claim optimality or physical implementation.

One local notation gap was repaired in `items/thm-qc-bell-transform-inverse.md`, Proof 5.1. The original step used `|+⟩` and `|−⟩` without defining them in the item or its suppliers. The step now writes the four post-CNOT vectors explicitly and applies the Hadamard matrix in [F2]. The proof contract’s step-5.1 derivation was synchronized. No `verification.judge` record was present to remove, and the theorem statement and definition were unchanged.

Validation after the repair:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-qc-bell-transform-inverse.md` — completed.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-qc-bell-transform-inverse.md` — pass, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-qc-bell-transform-inverse.md` — 1 item, 6 steps, 0 defects.

No other item or page prose was edited. The other assigned proofs and definitions required no repair.

## Uneditable defects

None confirmed.

## Page verdicts

- **`bell-states-teleportation-and-dense-coding` (A page): pass.** Its item list matches the batch content. The objective accurately describes the Bell label order, the procedures, and their stated resource qualifications.
- **`bell-states-teleportation-and-dense-coding-examples` (B page): pass.** Its example list and summary accurately describe the branch calculation and correction-order check. This page was read-only and was not edited.

## Blocker

The run status reports a separate existing `1-scaffold` blocker: the unit prerequisite graph is invalid because of construction scheduling item identity `def-qc-effective-unitary-matrix-input` in batch 12 (status output timestamp `2026-10-16T00:45:53.964Z`). This does not prevent completion of the batch-17 mathematical review; no run-state change was made.

Coverage is limited to batch 17, its declared required pages, its direct item dependencies, and supporting claims needed for these finite-dimensional calculations. I did not audit unrelated transitive foundations of the generic circuit-control definitions.
