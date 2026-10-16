# Step 3a reader report — batch 38

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Review completed: 2026-10-16

## Opened inventory

Assigned pages:

- `quantum-query-lower-bounds-and-search-optimality` (A): [page](../library/quantum-algorithms/quantum-query-lower-bounds-and-search-optimality.md)
- `quantum-query-lower-bounds-and-search-optimality-examples` (B): [page](../library/quantum-algorithms/quantum-query-lower-bounds-and-search-optimality-examples.md)

Assigned items, read in dependency order:

- `lem-qa-14-coherent-query-normal-form`
- `def-qa-14-boolean-search-query-model`
- `alg-qa-14-zero-completion-query-simulation`
- `def-qa-14-query-mismatch-projectors`
- `def-qa-14-search-promise`
- `lem-qa-14-state-distance-from-acceptance-gap`
- `lem-qa-14-one-query-hybrid-bound`
- `thm-qa-14-zero-completion-query-simulation-correct`
- `alg-qa-14-one-marked-search-with-verification`
- `lem-qa-14-cumulative-hybrid-bound`
- `lem-qa-14-aggregate-hybrid-squared-distance`
- `lem-qa-14-chebyshev-recurrence-matches-grover-success`
- `thm-qa-14-grover-search-upper-query-cost`
- `thm-qa-14-bbbv-search-lower-bound`
- `thm-qa-14-grover-search-upper-success`
- `thm-qa-14-optimal-search-query-complexity`
- `ex-qa-14-hybrid-budget-for-n-small`
- `cex-qa-14-query-parallelism-does-not-give-exponential-search`

Relevant dependency carriers opened to verify the interfaces and calculations include `def-qa-quantum-query-algorithm`, `def-qa-finite-branch-output-law`, `def-qc-instrument-and-conditional-state`, `thm-qc-kraus-choi-equivalence`, `thm-qc-trace-preserving-kraus-normalization`, `def-qc-kraus-representation`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-qa-standard-bit-query`, `def-qc-register-and-computational-basis`, `thm-qc-computational-basis-orthonormal`, `def-qc-toffoli-and-fredkin`, `def-qc-one-qubit-gate-alphabet-and-rotations`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `def-qa-task-and-promise-domain`, `def-qa-input-encoding-and-size`, `def-qa-quantum-query-complexity`, `def-qa-bounded-error-promise-correctness`, `def-qc-dirac-notation-conversion`, `lem-qc-tensor-product-basis-and-dimension`, `alg-qc-reversible-embedding`, `thm-qc-reversible-embedding-cost`, `def-qc-clean-and-dirty-ancillas`, `def-qc-elementary-circuit-resources`, `def-qc-quantum-acceptance-probability`, `thm-cauchy-schwarz-in-an-inner-product-space`, `alg-qa-11-grover-iterate`, `alg-qa-11-known-count-grover-search`, `thm-qa-11-integer-iteration-regime`, `thm-qa-11-exact-integer-iteration-formula`, `thm-qa-11-grover-iterate-query-cost`, `def-qa-11-marked-search-problem`, `thm-qa-bit-query-to-phase-query`, `lem-qa-11-good-bad-decomposition`, `lem-qa-11-grover-invariant-plane-rotation`, `thm-qc-reflection-unitary-involution`, `def-qc-reflection`, `def-qa-phase-query`, `thm-qa-phase-kickback`, `thm-qc-reversible-xor-oracle-unitary`, `def-qc-ordered-bitstring-encoding`, `def-qc-trace-distance`, `lem-qc-pure-state-trace-distance`, `thm-qc-hermitian-trace-norm-positive-negative-parts`, `thm-qc-measurement-variation-at-most-trace-distance`, `thm-qc-unit-vector-projector-is-density`, and the published trigonometric addition, subtraction, and double-angle results.

I reviewed the batch proof contracts against the current proof-step inventories. All 15 proof-bearing assigned items have matching step IDs; the two algorithms and the promise definition have no phase-proof contract, as expected.

## Edits and evidence

- `lem-qa-14-coherent-query-normal-form`: made `T` explicitly a nonnegative integer and completed the proof's finite query-count scheduling. The revised step labels each node by its prior query count, orders each finite nonoracle slice, uses identity on histories already at the next query or terminal, and then pads inactive histories with the fixed `|0⟩|+⟩` oracle state. The query definition and finite-branch output-law dependencies supply the finite history tree; the direct Kraus and trace-preservation suppliers justify the instrument dilations. The padding uses the stated XOR oracle action and does not require controlled oracle access. Updated derivation `1.2` in the batch proof contract. No `verification.judge` stamp was present to remove. Reflow: unchanged. Precheck: pass.

- `cex-qa-14-query-parallelism-does-not-give-exponential-search`: made the finding claim quantitative and added the missing averaging argument. For any fixed address-valued measurement, its probability of outputting the marked address on input `e_i` is at most its no-mark probability of outputting `i` plus the fixed-mark trace distance `2√(N−1)/N`. Averaging over `i` gives success at most `1/N + 2√(N−1)/N`, which tends to zero. The separate mixture calculation still gives the decision-law variation bound `4(N−1)/N²`. The pure-state trace-distance and measurement-variation suppliers support these uses. Updated derivation `2.1` in the batch proof contract. No `verification.judge` stamp was present to remove. Reflow: completed. Precheck: pass.

The final `node tools/proof-layout.mjs` pass covered both changed item paths: 2 items, 9 steps, 0 defects.

## Source check

I checked the primary source cited for the hybrid lower bound: [Bennett, Bernstein, Brassard, and Vazirani, *Strengths and Weaknesses of Quantum Computing*](https://arxiv.org/pdf/quant-ph/9701001), §3.1, Theorem 3.3 and Corollary 3.4 (PDF pp. 7–8). Theorem 3.3 bounds final-state change by the query magnitude on modified time/address pairs; Corollary 3.4 bounds the number of addresses whose change can exceed a chosen state-distance threshold. The assigned BBBV proof derives its finite one-marked lower bound locally and does not rely on the paper's separate random-oracle Theorem 3.5.

## Unedited defects

None found in assigned items, pages, or the relevant dependency statements reviewed.

## Page verdicts

- `quantum-query-lower-bounds-and-search-optimality` (A): **pass after the in-scope proof repair**. The page summary accurately describes the Boolean XOR model, the finite hybrid argument, zero-completed Grover simulation, candidate verification, and the separation of query and gate costs.
- `quantum-query-lower-bounds-and-search-optimality-examples` (B): **pass after the in-scope counterexample repair**. The four-address reflection and budget arithmetic check out; the counterexample now states and proves the uniform-prior finding bound it claims.

## Blocker

No mathematical blocker remains in batch 38. The live autopilot status still reports a run-level `1-scaffold` specification blocker: invalid construction-scheduling identity `def-qc-effective-unitary-matrix-input` in batch 12. It also still records prior `3a-read` failures for reader-38 and reader-44 and a `3a-collect` failure for collect-29. This review did not alter run state or resolve those unrelated workflow blockers.

## Coverage limitation

A metadata walk found a 1,130-item recursive dependency closure. I opened the assigned items and pages and the relevant direct interfaces and mathematical suppliers listed above, but did not re-review every foundational ancestor's full proof. No broader dependency-closure coverage is claimed.
