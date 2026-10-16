# Batch 7 authoring hold and prerequisite record

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`  
Disposition: `escalated`; no proof readiness or source acceptance claimed.

## Controlling hold

The run-local owner direction says not to start dependent quantum authoring until the inherited prerequisite repairs are integrated and the actual proposal checker passes. It identifies ten inherited remark targets, eighteen consumer repair recipes, and fourteen typed suppliers as an unresolved planning escalation. The hold applies to this pair; the separate instruction to continue across ordinary in-run supplier delays does not clear this run-wide planning hold.

The current evidence still shows that hold:

- `research/quantum-build-60-2026-10-15-owner/escalation.json` records the ten remark targets, affected root consumers, and fourteen smallest missing suppliers.
- `research/quantum-computing-algorithms-60-2026-10-15-owner/repair-integration-plan.json` has status `proposal-inventory-only; not proof acceptance, native coverage, source integration or escalation closure`; its native norm reconciliation says source application and native acceptance are pending.
- `research/quantum-planning-review/planned-repair-check.json` is a virtual closure pass: `actual_library_closure` is `hold`, with eighteen repair recipes and fourteen proposed suppliers. It does not clear the actual-library hold.
- Recomputed `.autopilot` status for this run is `1-scaffold`, `0/60` results, with nothing in flight. `git log` has no commit for this run. The prerequisite run's old status is not treated as current closure: its runtime reports live status unavailable pending guarded cutover, `.autopilot/quantum-prerequisites-4-2026-10-15/owner-closeout-hold.json` retains the owner terminal pause, and its legacy closeout commit is not adopted by this run.

The proposed run-wide supplier homes remain the four pages named by the owner direction. The separate prerequisite batch manifests place the fourteen proposed suppliers as follows; these are placement proposals, not integrated carriers:

- `pointwise-extended-real-function-products`: `def-measurable-pointwise-extended-real-product`.
- `complex-norms-and-realification`: `def-complex-norm-and-complex-normed-space`, `lem-complex-modulus-of-real-embedding-equals-real-absolute-value`, `lem-complex-norm-realification-is-a-real-norm`, `lem-complex-coordinate-l1-is-a-norm`, `def-complex-normed-subspace`, `def-equivalent-complex-norms`.
- `complex-coordinate-and-path-transport`: `thm-complex-coordinate-map-preserves-real-scalar-multiplication`, `def-complex-path-polygonal-length-and-rectifiability`, `thm-complex-coordinate-isometry-and-topology-transport`, `thm-complex-coordinate-map-preserves-real-total-differentiability`, `thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed`, `thm-complex-path-length-invariant-under-monotone-reparametrization`.
- `complex-subspace-realification`: `lem-complex-normed-subspace-realifies-to-real-normed-subspace`.

Integration and the actual closure check are owner work.

## Plan comparison and provisional inventory

The design at `research/plan-quantum-computing-track.md` QC07 and the canonical `research/plan-spec.json` entry agree on page IDs, title, category, order 2178, companion, and the four page prerequisites. There is no page-scope conflict. The canonical plan and assigned batch manifest still have empty `items` arrays, while the current audited planning export supplies the provisional item inventory below. That export is planning context, not an accepted manifest.

The frozen scheduling input `9b2c249d4992d9068191bb0f9b1490b0713c8529fcbaa1869bd16d178d892f85` assigns Batch 7 level 3 and requires batches 1, 2, and 3. The current audited proposal assigns these item levels; the inventory and levels are recorded here but were not written into the scaffold manifest while the owner hold remains open.

| Proposed item | Level | Proposed logical suppliers |
|---|---:|---|
| `def-qc-qubit-and-bloch-representation` | 2 | `def-qc-pure-state-and-ray`, `def-qc-density-operator`, `def-qc-register-and-computational-basis` |
| `def-qc-pauli-matrices` | 3 | `def-qc-qubit-and-bloch-representation` |
| `thm-qc-pauli-algebra` | 4 | `def-qc-pauli-matrices` |
| `def-qc-bloch-coordinate-map` | 4 | `def-qc-pauli-matrices`, `def-qc-density-operator` |
| `def-qc-one-qubit-gate-alphabet-and-rotations` | 4 | `def-qc-pauli-matrices` |
| `thm-qc-bloch-coordinate-existence-and-uniqueness` | 5 | `def-qc-bloch-coordinate-map`, `thm-qc-pauli-algebra` |
| `thm-qc-axis-rotation-pauli-formula` | 5 | `def-qc-one-qubit-gate-alphabet-and-rotations`, `thm-qc-pauli-algebra` |
| `thm-qc-hadamard-pauli-conjugation` | 5 | `def-qc-one-qubit-gate-alphabet-and-rotations`, `thm-qc-pauli-algebra` |
| `thm-qc-bloch-positivity-ball` | 6 | `thm-qc-bloch-coordinate-existence-and-uniqueness`, `thm-qc-pauli-algebra`, `def-non-negative-and-positive-operator` |
| `thm-qc-bloch-purity-sphere` | 7 | `thm-qc-bloch-coordinate-existence-and-uniqueness`, `thm-qc-pauli-algebra`, `def-qc-pure-state-and-ray`, `thm-qc-rank-one-density-operator`, `thm-qc-bloch-positivity-ball` |
| `ex-qc-zero-plus-bloch-and-hadamard` (B page) | 8 | `thm-qc-bloch-purity-sphere` |

## Missing in-run supplier checks

The following proposal suppliers are direct or transitive prerequisites for the listed QC07 claims. Their actual `items/` carriers are absent. The statements below are the planned interfaces only; no source excerpt, supplier proof, or acceptance is inferred from them.

| Supplier | Planned interface and hypotheses to verify | Affected QC07 claims |
|---|---|---|
| `def-qc-register-and-computational-basis` (QC02) | For `d≥1`, a register is `C^d` with ordered basis `|0〉,…,|d−1〉`; an `n`-qubit register is `(C²)⊗n`, with the `n=0` register one-dimensional. Verify basis order and distinction from the zero space. | `def-qc-qubit-and-bloch-representation` and all downstream qubit/Bloch claims. |
| `def-qc-density-operator` (QC03) | On nonzero finite-dimensional `H`, density means positive semidefinite with trace one; zero-dimensional `H` has no density state. Verify the positivity and trace conventions. | `def-qc-qubit-and-bloch-representation`, `def-qc-bloch-coordinate-map`, and downstream Bloch claims. |
| `def-qc-pure-state-and-ray` (QC03) | A pure state is a ray of nonzero vectors represented by `|u〉〈u|` for a unit representative. Verify scalar-ray equivalence and the root outer-product convention. | `def-qc-qubit-and-bloch-representation`, `thm-qc-bloch-purity-sphere`, and the B example through its supplier. |
| `def-qc-dirac-notation-conversion` (QC01) | Translate the root first-linear pairing by `〈x|y〉D=⟨y,x⟩root`; the bra is linear, and `|x〉〈y|` has coordinate matrix `xy†`. Verify the conjugations and matrix convention. | Transitive prerequisite of `def-qc-pure-state-and-ray`, then `def-qc-qubit-and-bloch-representation` and downstream claims. |
| `thm-qc-ray-projector-well-defined-and-bijective` (QC03) | Prove the ray-to-projector map is well-defined and bijective onto rank-one orthogonal projections; verify adjoint, idempotence, positivity, trace one, phase invariance, and recovery from the one-dimensional range. | Transitive prerequisite of `thm-qc-rank-one-density-operator`, then `thm-qc-bloch-purity-sphere` and the B example. |
| `thm-qc-rank-one-density-operator` (QC03) | Prove every ray projector is a density state and every rank-one density is the projector of a unique ray, using the PSD/trace-one definition and spectral decomposition. | `thm-qc-bloch-purity-sphere` and `ex-qc-zero-plus-bloch-and-hadamard`. |

The A page also declares page-level prerequisites `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `registers-tensor-products-and-partial-trace`, and the existing spectral-theorem/SVD page. The first three are assigned to batches 1–3, whose current manifests have empty item lists. Their actual supplier bodies and the relevant hypotheses must be checked after the run-wide owner hold is cleared. The proposed positivity-ball item additionally cites the existing `def-non-negative-and-positive-operator`; this note does not certify that supplier's body for the eventual proof.

## Work and checks recorded

No QC07 item or page carrier was present, and no carrier, manifest, proof contract, coverage file, readiness record, or dependency input was changed. The assigned manifest remains empty. No `ready` decisions were recorded. The pair's proposed obligations remain explicit: finite Pauli products and signs; real Bloch coordinates and unique expansion; PSD-ball eigenvalues including the zero vector; purity from rank-one density; exact gate phases and axis conventions; and the worked `|0〉`/`H|0〉` calculations. The audit flags `thm-qc-bloch-purity-sphere` with an unresolved proof obligation.

Dependency levels were read from the current audited proposal and the batch level from the frozen scheduling input. No dependency-level or proof-layout command was run because no item manifest or proof carrier was edited. No source retrieval was attempted, so `source_resolution` has no retrieval failure to record. No source or proof readiness is claimed.

Resume authoring after the owner integrates the prerequisite repairs, completes the native prerequisite closure and source-repair integration, and verifies that the actual proposal checker passes. Then inspect the actual supplier bodies before recording any item as ready.
