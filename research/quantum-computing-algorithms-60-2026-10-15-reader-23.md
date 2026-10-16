# Step 3a Reader Report — Batch 23

Run: `quantum-computing-algorithms-60-2026-10-15`  
Batch: `23`  
Role: independent reader

## Opened inventory

### Assigned pages

- `library/quantum-computing/circuit-optimization-resource-tradeoffs-and-lower-bounds.md` (A page)
- `library/quantum-computing/circuit-optimization-resource-tradeoffs-and-lower-bounds-examples.md` (B page)

### Assigned items

All 31 A-page items and the B-page example were opened in dependency order:

- A: `def-qc-unbounded-error-time-space-counting-model`, `lem-qc-logspace-uniform-iterated-addition-tc0`, `lem-qc-logspace-uniform-iterated-multiplication-tc0`, `def-qc-bqtisp-model`, `lem-qc-unbounded-error-tie-normalization`, `lem-qc-uniform-probabilistic-clocked-simulation`, `lem-qc-bounded-space-virtual-input-simulation`, `lem-qc-logspace-predicates-in-linear-counting-hierarchy`, `thm-qc-uniform-threshold-iterated-integer-arithmetic`, `lem-qc-basis-query-time-normalization`, `lem-qc-logspace-uniform-cook-formula-encoding`, `lem-qc-counting-time-space-to-linear-hierarchy`, `thm-qc-probabilistic-polynomial-time-hierarchy`, `lem-qc-tight-majority-formula-completeness`, `thm-qc-unbounded-error-counting-time-space-alternative`, `lem-qc-vmw-fh-density-and-base-net`, `lem-qc-multiplexed-rz-gray-code`, `alg-qc-basic-clifford-t-rewrite`, `lem-qc-circuit-resource-composition`, `lem-qc-unoptimized-qsd-recursive-decomposition-and-count`, `lem-qc-vmw-finite-precision-sk-compiler`, `def-qc-circuit-optimization-task`, `lem-qc-ninefold-nearest-neighbor-multiplexor-routing`, `thm-qc-basic-rewrite-correct-and-terminating`, `thm-qc-clean-ancilla-multicontrolled-tradeoff`, `thm-qc-nearest-neighbor-cnot-overhead`, `thm-qc-qsd-cnot-upper-bound`, `lem-qc-fixed-arity-polynomial-cauchy-gate-decomposition`, `thm-qc-bqtisp-to-ptisp-simulation`, `thm-qc-generic-circuit-count-lower-bound`, and `thm-qc-counting-hierarchy-time-space-lower-bound`.
- B: `ex-qc-two-qubit-qsd-cnot-count`.

### Dependencies and source material consulted

Opened the direct dependency statements and the proof sections needed to check the assigned arguments, including the probabilistic-machine interface, effective encodings, clocked universal simulation, constructible bounds, prime-number and primitive-root suppliers, operator-norm and inner-product facts, quantum register and circuit definitions, CNOT and controlled-unitary conventions, clean/dirty ancillas, Clifford+T matrices, the two-level algorithms, the QSD suppliers, and the fixed-precision Solovay–Kitaev suppliers.

Authoritative passages checked against the local claims:

- Van Melkebeek–Watson, *Time-Space Efficient Simulations of Quantum Computations* (2012): §2.3.1–2.3.2 for the published erased-index and query model; Theorems 3.1–3.2 for randomized simulation; Theorem 1.3 and Corollary 1.4 for the time-space alternative.
- Hesse–Allender–Barrington, *Uniform Constant-Depth Threshold Circuits for Division and Iterated Multiplication*: §4, Theorem 4.1 and Corollary 4.1 for the CRT/iterated multiplication basis; §§2.1–2.2 for the DLOGTIME-uniform TC0 convention.
- Allender et al., *Time-Space Tradeoffs in the Counting Hierarchy*: §3.1, Lemma 5 and §3.2, Theorem 7. The latter uses the yes/no decider selected by each proposed oracle answer to define its rank witness; this confirms the intended witness construction in `lem-qc-tight-majority-formula-completeness`.
- Vatan–Williams, *Optimal Quantum Circuits for General Two-Qubit Gates*: §V, Theorem 5 for the three-CNOT upper bound. The local matrix proof retains the scalar phase explicitly.
- Shende–Bullock–Markov, *Synthesis of Quantum Logic Circuits*: §5.2 and its CNOT-count table for the recursive QSD conventions and stated bound; the local routing and count arguments were checked directly in the assigned items.

## Edits and evidence

1. **`alg-qc-basic-clifford-t-rewrite`** — Replaced the identity-valued right sides (`I`) by deletion (`ε`, the empty subword). The former procedure could output an `I` token outside its declared H/T/T†/CNOT alphabet. Each deletion is matrix-preserving by the exact gate matrices and strictly decreases word length. Updated the `thm-qc-basic-rewrite-correct-and-terminating` proof-contract citation for the revised rule list; its termination and local-irreducibility proof now matches the procedure.

2. **`lem-qc-counting-time-space-to-linear-hierarchy`, proof step 4.1** — Made the AND-gate complement argument explicit: the existential test for a false predecessor may tie when there is no witness, so apply the tie-normalization lemma before swapping outcomes. This yields a strict-majority decider for AND under the stated at-least-half convention. Updated the proof-contract derivation for step 4.1.

3. **`lem-qc-basis-query-time-normalization`, proof step 2.1** — Added the missing insertion-path updates for subtree sizes and OR aggregates when an AVL insertion requires no rotation, and the bottom-up aggregate refresh after rotation. The later rank and range-OR procedures in steps 5.1–6.1 depend on those fields. Updated the proof-contract derivation for step 2.1.

No item had a stale `verification.judge` record to remove. Reflow reported all three changed items unchanged. Precheck passed: the algorithm returned `0 checked, 0 failing`; each changed lemma returned `1 checked, 0 failing`. The required single batched proof-layout pass on the three changed item paths reported `3 items, 17 steps, 0 defects`.

No page prose was edited.

## Page verdicts

- **A page — `circuit-optimization-resource-tradeoffs-and-lower-bounds`:** The summary accurately preserves the distinctions made by the items: exact rewrites versus optimization, construction upper bounds versus optimality, architecture-specific nearest-neighbor cost, exact clean-ancilla return, and the explicitly derived basis-profile simulation. Verdict: consistent with the reviewed item content after the repairs above.
- **B page — `circuit-optimization-resource-tradeoffs-and-lower-bounds-examples`:** The summary accurately says that one-qubit gates are counted separately. The example substitution gives $(23/48)\cdot16-(3/2)\cdot4+4/3=3$. Verdict: consistent; no edit needed.

## Unedited findings

None. No confirmed defect remained outside this batch's edit authority.

## Blocker

The live run status still reports a pre-existing `1-scaffold` specification blocker: the unit prerequisite graph is invalid because `def-qc-effective-unitary-matrix-input` has an invalid construction-scheduling identity in batch 12. The run status showed the run active at `3a-read`, with no worker running. This reader did not alter that item or the run state.

## Coverage note

The assigned pages and all 32 assigned items were read. Direct supplier statements and the source passages used by the reviewed arguments were opened as recorded above. This report is not a whole-corpus audit and does not re-prove every transitive published prerequisite.
