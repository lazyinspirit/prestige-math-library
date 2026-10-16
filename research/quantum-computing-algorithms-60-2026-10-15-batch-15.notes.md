# Batch 15 authoring notes

Run: `quantum-computing-algorithms-60-2026-10-15` · pair: `pauli-and-clifford-groups-binary-symplectic-tableaux`

## Plan and design reconciliation

The assigned page IDs, titles, order (2194/2195), category, and ten page prerequisites match `plan-spec.json`. The track design at `research/plan-quantum-computing-track.md` L89 scopes the pair to phase-aware Pauli and Clifford groups, binary symplectic labels, and tableaux. The audited QC15 proposal and `research/quantum-computing-planning/reports/qc_r4.md` specify 12 A items plus one B example. The active batch-15 scaffold contains 16 A items plus one B example. I retained the active assignment and supplied four local proof items needed by its stronger claims: `thm-qc-binary-pauli-quotient-isomorphism`, `def-qc-binary-clifford-tableau`, `lem-qc-symplectic-transvections-generate`, and `lem-qc-clifford-lifts-symplectic-transvections`.

The QC15 report describes Clifford-to-symplectic surjectivity as optional because the cited literature only asserts or hints at the converse. The active scaffold includes the surjectivity theorem, so it is proved locally from finite transvection generation and explicit gate lifts. The QC15 audit also questions the need for the algebraic-extension and Chinese-remainder prerequisites. The controlling plan and task retain all ten page prerequisites; I left them unchanged. No shared plan or design file was edited.

Conventions are $P(k,x,z)=i^kX^xZ^z$, $Y=iXZ$, phase modulo four, binary arithmetic over $\mathbb F_2$, and label order $(x,z)$. Wire names $1,\ldots,n$ map to source factor positions $0,\ldots,n-1$; bit strings use the declared big-endian order. The Clifford group is the actual unitary normalizer, so scalar global phases remain distinct unitaries with the same conjugation action.

## Inventory, dependencies, and levels

The pair contains 16 A items and one B example, within the 100-item page cap. Batch 15 is assigned dependency level 5 with prerequisite batches 2, 7, and 8. Item levels were recomputed from the current run manifests using in-run `deps`; published out-of-run dependencies contribute level zero. The deps-only dependency-level closure contains 35 items and is acyclic. The broader supplier-review closure, following `deps`, `justified_by`, and `forward_refs`, contains 40 items including 23 current-run supplier items; this broader inventory is not used to calculate item levels.

- Level 5: `def-qc-phase-aware-n-qubit-pauli-group`.
- Level 6: `lem-qc-hadamard-pauli-action`, `lem-qc-phase-gate-pauli-action`, `thm-qc-pauli-product-and-adjoint`.
- Level 7: `def-qc-binary-pauli-label-and-quotient`, `def-qc-clifford-normalizer`, `thm-qc-hermitian-pauli-phase-criterion`.
- Level 8: `lem-qc-cnot-pauli-action`, `def-qc-binary-symplectic-form`, `thm-qc-binary-pauli-quotient-isomorphism`.
- Level 9: `def-qc-binary-clifford-tableau`, `lem-qc-clifford-lifts-symplectic-transvections`, `lem-qc-symplectic-transvections-generate`, `thm-qc-pauli-commutator-is-symplectic-pairing`.
- Level 10: `thm-qc-clifford-induces-symplectic-map` and `ex-qc-pauli-commutator-binary-symplectic`.
- Level 11: `thm-qc-clifford-symplectic-surjectivity`.

The ten direct current-run suppliers from batches 2, 7, and 8 are listed with exact excerpts, required hypotheses, and consumers in `research/quantum-computing-algorithms-60-2026-10-15-batch-15.cross-batch-dependencies.json`. Their current draft carriers and relevant proofs were inspected. Direct suppliers are the ordered-bitstring encoding, tensor map, tensor-register/permutation definition, bitstring-index bijection, tensor-map composition/adjoint theorem, one-qubit gate alphabet, Pauli matrices, Pauli algebra, CNOT control-target definition, and controlled-unitary access. The cross-batch file also records the 11 direct published root dependencies and all 23 transitive current-run suppliers. No unresolved supplier proof gap was found; this is a body-level authoring check, not supplier acceptance.

The dispatch assigns scheduling input `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`. At handoff, the current `batch-dependency-levels.json` reports `3f55de225893a2f57b439920686c78adb37adeb62e118e7c7689e17ae715b09f`; its hash advanced during concurrent authoring, with all observed values retained in the cross-batch evidence. Its batch-15 row still says level 5 and requires batches 2, 7, and 8, and recomputation leaves all 17 item levels unchanged. The assigned and current hashes are preserved for owner reconciliation; no shared schedule was changed.

## Mathematical and source evidence

The transvection-generation proof reduces a symplectic basis by finite-dimensional linear algebra over $\mathbb F_2$, rank-nullity, and induction. It proves the needed transitivity and stabilizer reduction, handles the $n=0$ base case, and uses no axiom of choice. The lift proof reduces each nonzero Pauli label to $Z_1$ using local $H$, $S^*$, CNOT, and wire swaps, then conjugates the $S_1$ transvection; every gate's exact mod-4 phase rule is retained. Arbitrary CNOT wire positions are obtained by an explicit finite permutation extending the control/target assignment. The quotient-uniqueness proof compares coefficients at the common basis vector $|x\rangle$ and then at $|e_j+x\rangle$.

For the A page, the independent full lecture-note treatments are de Wolf and Preskill. This batch inspected de Wolf, Chapter 20 §§20.1–20.2, PDF pp. 185–187; footnote 4 points to Exercise 5 for the converse but does not prove it. The current retrieved Preskill Chapter 7 text was inspected at §§7.10.1–7.10.2, printed pp. 27–31 (PDF pp. 33–37). Preskill orders labels as $(Z|X)$, uses anti-Hermitian $Y$, and describes a $\pm$ scalar center; the local proof translates these to $(x,z)$, $Y=iXZ$, and the full $i^k$ center. The previous §7.9.2/§7.13 locator was incorrect for this retrieved edition: those sections cover the no-cloning bound and other code examples. Watrous, Aaronson–Gottesman, and Hein et al. support the gate, tableau, and forward-action context, but are not used as substitutes for the local surjectivity proof.

The coverage file retains source history and dispositions. `source-fetch-check --stamp` reports 7/7 source records fetch-verified, 0 newly stamped, and 0 documented drops. There were no retrieval failures, so no recovery retry or source drop was needed. Exact supplier excerpts for linked proof facts are in the proof-contract file.

A bounded one-off finite calculation reported: 256 one-qubit Pauli products; 16 distinct one-qubit parameter operators; 16 one-qubit Hermitian cases; 256 commutator pairs; 48 one-qubit gate/input cases; 64 two-qubit CNOT cases; all 6 matrices in $\mathrm{Sp}(2,2)$ generated by its 3 nonzero transvections; and 3 nonzero $V_1$ transvections lifted. These are sanity checks for finite instances only, not general proofs. No registered `finite_smoke` check exists.

## Scoped checks and readiness

- `precheck.mts`: 17 files, 15 proof-bearing items checked, 0 failures; the two pure definitions are not applicable.
- `proof-layout.mjs`: 17 files, 44 numbered steps, 0 defects.
- `proof-contract.mjs --strict`: 15 proof-bearing items checked; 71 fact/source citations, all 44 proof steps mapped, 120 boundary dispositions, 11 finite checks; 0 errors and 0 warnings.
- `content-policy.mjs`: 17 items, 0 errors, 0 warnings.
- Scoped deps-only dependency graph: no cycles or missing in-run suppliers; all 17 assigned item levels match their computed levels (5–11 above).
- `source-fetch-check --stamp`: 7/7 verified, 0 new stamps, 0 drops.

Each of the 17 assigned items has a Step 1 readiness record marked `ready`, with its declared dependencies and body-level evidence. The records were refreshed after a QC01 manifest metadata update invalidated their earlier hashes; the current readiness check now validates all 17 against the latest dependency snapshot. This is authoring readiness only; it is not independent approval or acceptance. The run owner retains the global integration and approval gates.
