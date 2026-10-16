# Step 3a reader report — batch 7

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Coverage: batch `7`

## Opened inventory

Assigned pages:

- `library/quantum-computing/qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates.md`
- `library/quantum-computing/qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates-examples.md`

Assigned items, reviewed in their dependency order:

- `def-qc-qubit-and-bloch-representation`
- `def-qc-pauli-matrices`
- `thm-qc-pauli-algebra`
- `def-qc-bloch-coordinate-map`
- `def-qc-one-qubit-gate-alphabet-and-rotations`
- `thm-qc-bloch-coordinate-existence-and-uniqueness`
- `thm-qc-axis-rotation-pauli-formula`
- `thm-qc-hadamard-pauli-conjugation`
- `thm-qc-bloch-positivity-ball`
- `thm-qc-bloch-purity-sphere`
- `ex-qc-zero-plus-bloch-and-hadamard`

Prerequisite page summaries opened:

- `library/quantum-computing/finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces.md`
- `library/quantum-computing/pure-and-mixed-states-ensembles-and-schmidt-decomposition.md`
- `library/quantum-computing/registers-tensor-products-and-partial-trace.md`
- `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`
- `library/pde/strongly-continuous-semigroups-and-hille-yosida.md`

Relevant direct item dependencies opened to check the claims and cited steps:

- In-run suppliers: `def-qc-register-and-computational-basis`, `thm-qc-computational-basis-orthonormal`, `def-qc-pure-state-and-ray`, `def-qc-density-operator`, `thm-qc-ray-projector-well-defined-and-bijective`, `def-qc-dirac-notation-conversion`, and `thm-qc-dirac-notation-coordinate-identity`.
- Matrix, trace, and isometry facts: `def-linear-isometry-and-orthogonal-or-unitary-operator`, `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`, `thm-finite-dimensional-isometry-characterisations`, `def-trace-of-a-square-matrix`, and `def-trace-of-an-endomorphism`.
- Positivity and spectral facts: `def-non-negative-and-positive-operator`, `def-self-adjoint-and-normal-endomorphism`, `thm-non-negative-operator-characterisations`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, and `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`.
- Exponential and rotation facts: `cor-finite-dimensional-normed-spaces-are-banach`, `cor-linear-maps-with-finite-dimensional-domain-are-bounded`, `lem-exponential-series-of-a-bounded-operator`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `def-sine-and-cosine-by-power-series`, and `thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions`.
- Ray-projector context: `def-orthogonal-projection`, `def-rank-and-nullity`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, and `def-dimension`.

I also inspected `research/quantum-computing-algorithms-60-2026-10-15-batch-7.proof-contracts.json` and the relevant current-run cross-batch dependency records. The eight proof contracts in scope track the current proof facts and derivations; no contract discrepancy affects a claim.

## Review and page verdicts

| Page | Verdict |
| --- | --- |
| `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` | Pass. The summary accurately describes the definitions, finite-matrix proofs, state-space ball and sphere, gate conventions, and absence of physical postulates. The displayed `Y` sign and resulting product and rotation conventions agree throughout. |
| `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates-examples` | Pass. The summary accurately describes the worked `|0⟩` and `|+⟩` computations and its logical-leaf role. The example's projectors, trace coordinates, radii, and purity checks are correct. |

The Pauli multiplication and trace table follows from the displayed matrices. The Bloch-coordinate proof gives real coordinates, an explicit inverse, and uniqueness. The positivity proof obtains eigenvalues `λ±=(1±||r||₂)/2` and applies the non-negativity criterion with the right trace-one hypothesis. The purity proof correctly identifies rank-one projectors with the unit-radius boundary. The axis-rotation series, unitarity calculation, Hadamard conjugations, and the example's matrix products preserve the stated basis order and root inner-product convention. I found no unsupported prerequisite or other material proof gap in the reviewed claims.

## Edits and unresolved defects

No assigned item or A-page prose required repair. No assigned content was edited; there are no repair citations or validation results to report. Since no item changed, item reflow, precheck, and the post-edit `proof-layout` command were not applicable.

No confirmed defect was found in an assigned item, assigned page, or dependency outside my edit scope. The findings artifact therefore has an empty `findings` array.

## Blocker

The run status command reported a pre-existing `1-scaffold` specification blocker: invalid construction scheduling identity `def-qc-effective-unitary-matrix-input` in batch 12. This does not block the batch 7 review or its report. No blocker was found within batch 7.
