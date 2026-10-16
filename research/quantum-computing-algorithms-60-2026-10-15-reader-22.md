# Step 3a reader report — batch 22

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Scope: batch `22`

## Opened inventory

Read the batch manifest and reader brief, then opened both assigned pages:

- A-page: `library/quantum-computing/graph-states-and-measurement-based-computation.md`
- B-page: `library/quantum-computing/graph-states-and-measurement-based-computation-examples.md`

Reviewed all 23 A-page items in supplier-before-consumer order, and the B-page example:

`def-qc-binary-adjacency-matrix`, `def-qc-j-gate-and-equatorial-basis`, `lem-qc-j-basis-and-phase-identities`, `def-qc-graph-state`, `lem-qc-cz-matching-pauli-frame-action`, `def-qc-normalized-transport-schedule`, `lem-qc-one-bit-teleportation`, `lem-qc-r-y-r-z-multiplexor-gray-code`, `lem-qc-graph-state-amplitude-formula`, `lem-qc-graph-state-edge-gates-commute`, `def-qc-adaptive-measurement-pattern`, `lem-qc-adaptive-angle-pauli-frame-update`, `lem-qc-normalized-rounds-preserve-circuit`, `lem-qc-transport-encoding-is-simple-and-size-bounded`, `thm-qc-exact-unitary-synthesis-from-qsd`, `lem-qc-graph-state-stabilizer-generators`, `lem-qc-measurement-pattern-for-cz`, `thm-qc-pattern-branch-probabilities-and-zero-branches`, `def-qc-circuit-to-graph-resource-encoding`, `thm-qc-pattern-is-measurement-circuit`, `thm-qc-circuit-simulated-by-adaptive-pattern`, `thm-qc-circuit-pattern-equivalence-and-universality`, `thm-qc-graph-state-unique-stabilizer-ray`, and `ex-qc-one-edge-graph-state`.

Opened the supplier definitions and theorem statements/proofs needed for the checks, including the graph and binary-field conventions; ordered qubit/tensor and circuit semantics; Pauli, J-gate, controlled-phase, measurement, instrument, and trace conventions; local gate embedding; the exact multiplexor, cosine-sine, two-block demultiplexing, two-qubit synthesis, and one-qubit Euler results; and stabilizer average/projector results. Supplier interfaces were checked against the current files rather than accepted from the manifest or contracts.

## Review and page verdicts

- **A-page `graph-states-and-measurement-based-computation`: no defect found.** The graph-state definition and amplitude/stabilizer formulas use the fixed order and exact CZ convention consistently, including empty sets. The J-gate and one-bit teleportation identities have the stated phases. The normalized schedule handles empty, full, CZ-only, and mixed layers; its recorded mixed-layer scalar agrees with the chronological round product. The graph encoding has the stated simple-graph and size bounds. The branch induction tracks the CZ frame sign, adaptive angle, branch scalar, and output frame; the uniform branch probability and terminal correction follow. The exact QSD recursion covers the stated dimensions and makes no finite-bit or complexity claim.
- **B-page `graph-states-and-measurement-based-computation-examples`: no defect found.** The one-edge amplitude signs, generators, four CZ-gadget branch maps, probabilities, and correction convention agree with the cited suppliers and direct calculations.

Primary-source spot checks were consistent with the local derivations: Raussendorf and Briegel, [arXiv:quant-ph/0010033](https://arxiv.org/pdf/quant-ph/0010033), §II(a)–(b), PDF p. 2, describes wire propagation, adaptive equatorial measurements, and Pauli byproducts; Raussendorf, Browne, and Briegel, [arXiv:quant-ph/0301052](https://arxiv.org/pdf/quant-ph/0301052), Scheme 1, Eqs. (41)–(47), PDF pp. 7–8, gives the prepare/entangle/measure pattern and Pauli byproduct, and Theorem 1, Eqs. (82)–(84), PDF p. 13, states the arbitrary-input gate-simulation criterion. For synthesis, Vatan and Williams, [arXiv:quant-ph/0308006](https://arxiv.org/pdf/quant-ph/0308006), §V, Eqs. (1)–(4), Fig. 6 and Theorem 5, PDF pp. 3–4, gives the three-CNOT construction up to global phase and identifies the missing scalar phase; the assigned proof retains the scalar and proves its exact matrix identity. Shende, Bullock, and Markov, [arXiv:quant-ph/0406176](https://arxiv.org/pdf/quant-ph/0406176), §3, Theorem 8, PDF pp. 10–11, treats the Gray-code decomposition of multiplexed $R_y$ and $R_z$ gates.

The explicit three-CNOT matrix identity was also evaluated with the assigned rotation and control-target conventions at $(a,b,c)=(0,0,0)$, $(0.2,0.3,0.4)$, and $(0.5,-0.2,0.7)$; the maximum entrywise discrepancies from $N(a,b,c)$ were below $4\times10^{-16}$. This was only a spot check; the item’s displayed finite-matrix multiplication is the proof.

## Edits and uneditable defects

- **Edits:** none. No proof contract or verification record needed updating, and no item validation or proof-layout command was needed.
- **Confirmed defects not editable:** none.
- **Suspected defects not editable:** none.

## Blocker and coverage note

No mathematical blocker prevented this review. The run status still reports a separate stage-1 specification blocker: its unit prerequisite graph names invalid construction-scheduling item identity `def-qc-effective-unitary-matrix-input` in batch 12. That run-level blocker does not change the batch-22 findings.

All assigned pages and items were opened. I checked the supplier interfaces used by the assigned arguments, but did not conduct new full audits of every transitive external supplier proof or every background page listed in the A-page’s `requires` field.
