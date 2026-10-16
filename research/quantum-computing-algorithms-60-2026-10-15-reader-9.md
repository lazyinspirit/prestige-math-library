# Reader report — batch 9

## Scope and opened inventory

I reviewed the assigned batch independently of the authors' conclusions. The batch manifest and `briefs/reader.md` were used to establish scope and review obligations. The batch-9 proof-contract file was cross-checked against the current proofs for citations, derivation steps, and boundary cases; its earlier checks were not treated as verdicts.

Assigned pages opened:

- A page: `library/quantum-computing/circuit-syntax-denotational-semantics-and-measurement.md`
- B page: `library/quantum-computing/circuit-syntax-denotational-semantics-and-measurement-examples.md`

All 16 assigned items were opened in the manifest's dependency order:

- `def-qc-circuit-syntax-and-register-order`
- `lem-qc-finite-isometry-unitary-extension`
- `lem-qc-local-gate-wire-embedding`
- `lem-qc-disjoint-layer-order-independence`
- `def-qc-circuit-denotational-semantics`
- `lem-qc-instrument-output-space-is-nonzero`
- `thm-qc-instrument-kraus-normalization`
- `lem-qc-coherent-record-isometry`
- `thm-qc-instrument-induces-povm`
- `def-qc-classical-control-and-measurement-circuit`
- `def-qc-elementary-circuit-resources`
- `def-qc-measurement-branch-output-law`
- `thm-qc-circuit-inverse-reversal`
- `thm-qc-deferred-measurement`
- `thm-qc-terminal-measurement-circuit-equivalence`
- `ex-qc-deferred-measurement-one-bit`

The four page prerequisites were also opened: `channels-kraus-choi-and-stinespring-representations`, `controlled-gates-phase-and-entanglement`, `measurements-povms-and-instruments`, and `registers-tensor-products-and-partial-trace`.

All 42 distinct direct item dependencies were opened. Current-run dependencies were: batch 1 — `def-qc-dirac-notation-conversion`; batch 2 — `def-qc-register-and-computational-basis`, `def-qc-ordered-bitstring-encoding`, `def-qc-tensor-register-and-permutation`, `def-qc-tensor-map`, `thm-qc-tensor-map-composition-and-adjoint`, `lem-qc-trace-pairing-nondegenerate`, `def-qc-partial-trace`, `thm-qc-computational-basis-orthonormal`; batch 3 — `def-qc-finite-positive-effect-family`, `def-qc-pure-state-and-ray`, `thm-qc-ray-projector-well-defined-and-bijective`, `def-qc-density-operator`; batch 4 — `def-qc-instrument-and-conditional-state`, `def-qc-projective-measurement`, `def-qc-povm-and-outcome-law`, `thm-qc-instrument-outcome-law-normalizes`, `def-qc-completely-positive-map`, `thm-qc-projective-measurement-outcome-law`, `thm-qc-projective-conditional-state`; batch 5 — `def-qc-kraus-representation`, `thm-qc-kraus-choi-equivalence`; batch 8 — `def-qc-controlled-unitary-access`, `def-qc-inverse-unitary-access`.

Published direct dependencies opened were `def-dimension`, `cor-tensor-products-of-finite-free-modules-and-dimension`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-finite-dimensional-orthogonal-decomposition`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `thm-finite-dimensional-isometry-characterisations`, `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`, `def-coordinate-column-and-matrix-of-a-linear-map`, `def-matrix-product-and-identity-matrix`, `def-trace-of-an-endomorphism`, `def-trace-of-a-square-matrix`, `prop-trace-is-linear`, `thm-trace-of-ab-equals-trace-of-ba`, `thm-adjoint-exists-and-is-unique-in-finite-dimension`, `def-non-negative-and-positive-operator`, `prop-adjoint-algebra`, and `thm-induction-principle`.

Additional transitive items needed to check those suppliers were opened: `lem-qc-tensor-product-basis-and-dimension`, `lem-qc-finite-ancilla-amplification-is-block-map`, `thm-qc-partial-trace-characterization-and-basis-independence`, `def-qc-choi-matrix`, `lem-qc-complete-positivity-implies-choi-positivity`, `lem-qc-positive-choi-matrix-yields-kraus-operators`, `thm-qc-kraus-map-completely-positive`, and the published `thm-non-negative-operator-characterisations`.

## Review results

- The circuit syntax keeps wire order, local gate tuple order, chronological layer order, and operation-model access/cost separate. The local embedding construction and the disjoint-support commutation calculation agree with those conventions; empty registers, empty complements, empty layers, and empty circuits are handled.
- The finite isometry extension matches the padded input and output dimensions. Its prescribed map sends orthonormal lists to orthonormal lists, and the orthogonal-complement argument supplies equal-size complements before completing the isometry to a unitary.
- The instrument output-space lemma follows from the trace-preservation identity on (I_H). The branch Kraus normalization uses rectangular trace cyclicity and the stated nondegenerate trace pairing. The coherent-record construction keeps outcome labels orthogonal, traces out hidden Kraus indices, and recovers each branch map. The induced effects are nonnegative, sum to (I_H), and are unique by the same trace-pairing argument.
- The measurement and classical-control definitions distinguish observed histories from hidden Kraus indices and keep zero-probability branches unnormalized. Resource accounting separates declared size/depth/width from controlled and inverse access. Circuit reversal uses the explicit inverse-access and legal-adjoint hypotheses.
- The deferred-measurement theorem's block/Kraus calculation gives equality for arbitrary operators and finite references, including the zero-dimensional reference case. Its implementation caveat correctly avoids claiming same-alphabet synthesis or a cost bound. The terminal-readout theorem's finite-height induction preserves each orthogonal history branch and its reference correlations; terminal POVM probabilities follow by taking traces of the equal branch operators.
- The one-bit example's matrices give measured and deferred final laws supported on (00) and (11), each with probability (1/2); the other outcomes have probability (0). The stated controlled-(X) access is explicit.

No inference, computation, definition, title, or citation defect was confirmed. The page summaries match the reviewed item content and preserve the stated operation-model caveat.

## Edits and uneditable defects

No item or page prose was changed. No confirmed defect remains outside this batch's edit scope, so there are no uneditable findings. Because no item changed, no proof contract or `verification.judge` record required updating, and no reflow, precheck, or proof-layout command was required.

## Page verdicts

- `circuit-syntax-denotational-semantics-and-measurement` (A): no confirmed defect; the summary accurately describes the circuit semantics, resource distinctions, instrument results, and explicit implementation limits.
- `circuit-syntax-denotational-semantics-and-measurement-examples` (B): no confirmed defect; the summary accurately describes the one-bit feed-forward example. No B-page prose was edited.

## Blocker and coverage note

The run status remains blocked at `1-scaffold`: the unit prerequisite graph is invalid because of construction scheduling item identity `def-qc-effective-unitary-matrix-input` in batch 12 (reported at `2026-10-15T16:12:27.315Z`). This is outside batch 9 and does not prevent this reader review.

No external source search was needed: the claims under review were checked against the opened local definitions, proofs, and their cited dependencies, and no mathematical uncertainty remained. This review did not audit unrelated portions of the full repository dependency graph.
