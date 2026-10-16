# Step 3a reader report — batch 14

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Scope: batch `14`

## Opened inventory

Assigned pages:

- A page `uniform-circuit-families-promise-problems-and-complexity` at `library/quantum-computing/uniform-circuit-families-promise-problems-and-complexity.md`.
- B page `uniform-circuit-families-promise-problems-and-complexity-examples` at `library/quantum-computing/uniform-circuit-families-promise-problems-and-complexity-examples.md`.

Assigned items, read in the batch dependency order:

- A page: `def-qc-circuit-cost-model`, `def-qc-promise-computation-model`, `def-qc-uniform-circuit-family`, `def-qc-quantum-acceptance-probability`, `lem-qc-uniform-family-size-bound`, `def-qc-oracle-full-list-circuit-family`, `alg-qc-bounded-error-amplification`, `lem-qc-acceptance-probability-phase-invariance`, `thm-qc-output-acceptance-law-normalizes`, `def-qc-bqp-promise-class`, `thm-qc-bounded-error-amplification-correct`, and `thm-qc-bqp-error-robustness`.
- B page: `ex-qc-bqp-promise-off-domain`.

Opened supplier items used by those claims: `def-qc-circuit-syntax-and-register-order`, `def-qc-circuit-denotational-semantics`, `def-qc-elementary-circuit-resources`, `def-qc-clean-and-dirty-ancillas`, `def-effective-binary-encoding-and-decoder`, `def-deterministic-one-tape-turing-machine`, `def-partial-function-computed-by-a-machine`, `def-worst-case-time-and-space-complexity`, `def-promise-problem`, `def-qc-register-and-computational-basis`, `def-qc-ordered-bitstring-encoding`, `def-qc-tensor-register-and-permutation`, `def-qc-clifford-t-gate-library`, `def-real-and-complex-inner-product-space`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`, `thm-bessel-inequality-and-finite-parseval-identity`, `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`, `def-matrix-space`, `def-matrix-product-and-identity-matrix`, `def-trace-of-a-square-matrix`, `def-qc-povm-and-outcome-law`, `thm-qc-computational-basis-orthonormal`, `def-qc-partial-trace`, `thm-qc-partial-trace-characterization-and-basis-independence`, `def-finite-probability-space-and-event`, `def-trace-of-an-endomorphism`, and `lem-chernoff-bound-for-independent-bernoulli-trials`. I also opened `lem-qc-local-gate-wire-embedding`, `lem-qc-disjoint-layer-order-independence`, `def-qc-controlled-unitary-access`, and `def-qc-inverse-unitary-access` to check circuit semantics and resource interfaces.

I checked Watrous, *Quantum Computational Complexity*, §IV.2, Proposition 3 (PDF p. 13). It states the gap-only equality `BQP(a,b) = BQP = BQP(1 − 2^{-q}, 2^{-q})` under polynomial-time endpoints, inverse-polynomial gap for all but finitely many lengths, and polynomially bounded `q ≥ 2` eventually. The assigned robustness proof expressly does not rely on that gap-only implication; its source qualification is accurate.

## Repairs and evidence

- In `alg-qc-bounded-error-amplification`, renamed the rational completeness/soundness functions to `α, β`; `def-qc-promise-computation-model` already uses `a(n)` for the auxiliary-qubit count. Added exact evaluation of the fixed rational-coefficient gap polynomial, an oracle-mode comparison of printed descriptors with the supplied access specification, and a fixed order for input-copy CNOTs and repeated circuit records. The CNOT basis action and oracle descriptor agreement are supplied by the opened gate-library and oracle-interface definitions. The threshold test remains the exact integer comparison equivalent to `2S ≥ r(α+β)`.
- In `thm-qc-bounded-error-amplification-correct`, used the same threshold names and made the ancillary-count claim conditional on a declared clean or dirty contract. The proof still follows from independence of the disjoint repeated blocks, the additive Chernoff bound `P(|S−μ|≥t) ≤ 2 exp(−2t²/r)`, and the exact choice `r = 2s²(ℓ(v)+1)`. The notation in `thm-qc-bqp-error-robustness` now also distinguishes rational thresholds from the model's auxiliary count; its finite-table treatment of exceptional lengths is unchanged.
- In the A-page summary, clarified that clean/dirty counts are recorded when the computation interface declares the corresponding exact contract, and that inapplicable coordinates are marked not applicable.
- Updated `research/quantum-computing-algorithms-60-2026-10-15-batch-14.proof-contracts.json` so the two affected proof contracts mirror the current algorithm/theorem sources and proof-step text. The edited items had no `verification.judge` records to remove.

Validation after the final item edits:

- `reflow` reported unchanged for the three edited items.
- `precheck` reported `0 checked, 0 failing` for the algorithm and `1 checked, 0 failing` for each theorem.
- `node tools/proof-layout.mjs items/alg-qc-bounded-error-amplification.md items/thm-qc-bounded-error-amplification-correct.md items/thm-qc-bqp-error-robustness.md` reported `3 items, 10 steps, 0 defects`.
- The edited proof-contract citation and derivation mirrors match the current sources.

## Unedited defect

`def-qc-circuit-cost-model`, Definition, first paragraph, does not supply enough data to define `a_clean(C)` and `a_dirty(C)` for a generic circuit. The cited clean/dirty contracts require a declared data register, ancilla register, and target data unitary; the circuit description itself provides only wire/gate data, and the promise-computation model does not declare a target data unitary or require auxiliary return. The item should require the relevant register partition and target operation for these coordinates, or explicitly mark them not applicable when that interface is absent. I left the item unchanged because it is shared with numerous item consumers outside batch 14; changing its Definition would require those consumer checks, which this dispatch is not authorized to perform. The finding is returned in the JSON output.

## Page verdicts

- `uniform-circuit-families-promise-problems-and-complexity` (A): the page summary matches the reviewed acceptance, uniformity, and amplification results after the ancilla-count qualification above. One unresolved cost-coordinate defect remains in `def-qc-circuit-cost-model`.
- `uniform-circuit-families-promise-problems-and-complexity-examples` (B): the page summary and `ex-qc-bqp-promise-off-domain` are supported; the YES and NO cases meet the stated thresholds and off-promise inputs remain unrestricted.

No withdrawal is proposed.

## Blocker

The run status reports an existing `1-scaffold` spec blocker: invalid construction-scheduling item identity `def-qc-effective-unitary-matrix-input` in batch 12. No process was in flight. This is outside batch 14 and did not prevent this review.

## Coverage note

All assigned pages and items and the supplier items used by their mathematical claims were opened. The A page lists 17 prerequisite pages; I did not audit those page bodies because the assigned summaries and proofs were checked through their linked item dependencies. I also did not audit out-of-batch downstream consumers of the shared cost-model definition; the unresolved finding records that limit.
