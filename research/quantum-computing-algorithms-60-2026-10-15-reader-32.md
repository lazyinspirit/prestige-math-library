# Step 3a reader report — batch 32

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Scope: batch `32`

## Inventory opened

Pages:

- `library/quantum-algorithms/quantum-order-finding-and-rational-reconstruction.md` (A)
- `library/quantum-algorithms/quantum-order-finding-and-rational-reconstruction-examples.md` (B)

The assigned A page contains these 13 items: `lem-qa-finite-rational-legendre-criterion`, `lem-qa-rational-reconstruction-candidate-uniqueness`, `lem-qa-totient-ratio-logarithmic-lower-bound`, `def-qa-rational-phase-reconstruction`, `alg-qa-rational-reconstruction-from-phase-sample`, `thm-qa-rational-reconstruction-correctness`, `alg-qa-modular-multiplication-circuit`, `thm-qa-modular-multiplication-circuit-correctness`, `alg-qa-modular-order-finding`, `thm-qa-modular-arithmetic-cost`, `thm-qa-rational-reconstruction-bit-cost`, `thm-qa-modular-order-finding-success`, and `thm-qa-modular-order-finding-cost`.

The examples page contains `ex-qa-rational-reconstruction-boundary` and `ex-qa-order-finding-noncoprime-phase`.

I also opened the batch-32 item bundle, authoring notes, coverage/source evidence, and proof contracts. Those records were used to locate dependencies and contract clauses, not as mathematical verdicts.

## Dependency review

For the finite-rational continued-fraction proof and reconstruction, I inspected `def-regular-continued-fraction`, `def-convergents-of-regular-continued-fraction`, `def-continued-fraction-complete-quotients`, `lem-continued-fraction-convergent-recurrence`, `lem-continued-fraction-determinant-identity`, `lem-continued-fraction-complete-quotient-formula`, `thm-rational-continued-fraction-termination`, `thm-normalized-finite-continued-fraction-uniqueness`, `def-coprime`, `lem-coprime-divides-product`, `lem-rat-triangle`, `def-rat-operations`, `def-common-divisor-and-gcd`, and `thm-standard-representatives-modulo-n`.

For the totient and modular-arithmetic arguments, I inspected `thm-euler-totient-product-formula`, `thm-fundamental-theorem-of-arithmetic`, `def-prime`, `def-divides-in-z`, `thm-int-comm-ring`, `def-integers-modulo-n`, `def-addition-and-multiplication-modulo-n`, `thm-integers-modulo-n-basic-algebra`, `def-unit-group-modulo-n-and-euler-totient`, `thm-unit-criterion-modulo-n`, `thm-division-algorithm-in-z`, `thm-bezout-identity`, `lem-order-characterisation`, `cor-order-of-element-divides-group-order`, and `lem-orthogonality-of-characters-on-a-finite-cyclic-group`.

For the QPE and reversible-circuit arguments, I inspected `alg-qa-quantum-phase-estimation`, `def-qa-eigenphase-estimation-model`, `def-qa-circular-phase-distance`, `thm-qa-phase-estimation-superposition-law`, `thm-qa-phase-estimation-success-and-tail`, `lem-qa-phase-estimation-outcome-kernel`, `lem-qa-phase-estimation-geometric-sum`, `lem-qa-phase-estimation-nearest-grid-bound`, `lem-qa-phase-estimation-tail-bound`, `lem-qa-phase-estimation-sine-chord-bounds`, `thm-qa-phase-estimation-exact-grid`, `def-qc-register-and-computational-basis`, `def-qc-ordered-bitstring-encoding`, `def-qc-tensor-register-and-permutation`, `def-qc-dirac-notation-conversion`, `def-qc-clean-and-dirty-ancillas`, `def-qc-coherent-function-oracle`, `def-qc-circuit-denotational-semantics`, `alg-qc-reversible-embedding`, `thm-qc-reversible-embedding-cost`, `thm-qc-reversible-xor-oracle-unitary`, `lem-qc-fresh-target-not-and-or-gadgets`, `lem-qc-toffoli-clean-target-and-uncomputation`, `lem-qc-ancilla-identities-stable-under-reference-and-mixtures`, `lem-qc-x-cnot-toffoli-and-fredkin-are-involutions`, `thm-qc-bitstring-index-is-bijection`, `def-qc-tensor-map`, `def-qc-controlled-unitary-access`, `lem-qc-tensor-product-basis-and-dimension`, `def-qc-elementary-circuit-resources`, `def-qc-toffoli-and-fredkin`, `def-qc-cnot-and-control-target-order`, `def-qc-pauli-matrices`, and `thm-qc-computational-basis-orthonormal`.

For the cost and inverse-computation claims, I inspected `def-qa-classical-bit-cost`, `def-qc-circuit-cost-model`, `thm-qa-phase-estimation-access-cost`, `thm-qa-exact-binary-qft-gate-count`, `def-qa-qft-gate-cost-model`, `def-qa-cyclic-quantum-fourier-transform`, `alg-qa-exact-binary-qft-circuit`, `thm-qa-exact-binary-qft-circuit-correct`, `alg-qa-euclidean-modular-inverse`, `thm-euclidean-algorithm`, and `thm-qa-euclidean-modular-inverse-correctness-cost`.

The order-finding probability proof's constant estimate was checked against the cited identities and definitions: `thm-archimedean-polygon-perimeter-characterization-of-pi`, `thm-cofunction-supplementary-and-reflection-identities`, `thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions`, `thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-quarter-turn-values-and-shift-formulas`, `def-tangent-cotangent-secant-cosecant`, and `def-pi-via-first-positive-cosine-zero`.

## Source check

I opened the relevant primary-source passages, not just the bibliography entries:

- Childs, *Lecture Notes on Quantum Algorithms*, §9.1, PDF page identifiers P45–P46: the order-finding phase sample is within half a grid step of a rational phase, and the standard strict Legendre condition `|x-p/q| < 1/(2q^2)` makes the rational a continued-fraction convergent when the denominator bound is met. This is the classical criterion used as context for the local finite-rational proof.
- de Wolf, *Quantum Computing: Lecture Notes*, §§5.3–5.4, PDF page identifiers P52–P53: a nearest-grid phase sample occurs with probability at least `4/pi^2`; fractions with denominators at most `N` are separated by at least `1/N^2`; the continued-fraction section gives the Euclidean digit procedure and convergent recurrences.
- Shor, *Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer*, §3, PDF pp. 8–11, gives reversible logic and modular-exponentiation construction/cost context; §5, PDF pp. 16–19, gives the order-finding procedure, continued-fraction postprocessing, and the `phi(r)` count. Shor’s sharper totient estimate is not used in place of the local elementary lower bound.

The local proofs establish the finite-rational endpoint hypotheses, exact integer candidate test, multiplier behavior on invalid encodings, and separate query/gate/bit cost claims. The citations document context rather than replacing those local arguments.

## Repairs

1. In `items/def-qa-rational-phase-reconstruction.md`, added `thm-normalized-finite-continued-fraction-uniqueness` to `deps`. The definition takes the normalized finite continued fraction of the rational label `y/Q`; this theorem supplies the unique normalized expansion and depends on rational continued-fraction termination.
2. In `items/alg-qa-rational-reconstruction-from-phase-sample.md`, added `thm-rational-continued-fraction-termination` to `deps` and specified the quotient/remainder loop, its zero-label branch, convergent recurrence, denominator test, and exact integer acceptance test. Added `thm-qa-rational-reconstruction-bit-cost` to `justified_by`; that theorem proves the loop terminates after `O(L)` divisions and bounds the multitape work by `O(L^3)`.
3. In `items/alg-qa-modular-order-finding.md`, replaced the unnamed Euclidean inverse call with the existing `alg-qa-euclidean-modular-inverse` subprocedure and added both it and `thm-qa-euclidean-modular-inverse-correctness-cost` to `deps`. The helper theorem proves that a unit input returns its modular inverse and that the procedure terminates. I also wrote the repeated-squaring loop for the exact test `x^q mod N`, and added `thm-qa-modular-order-finding-cost` to `justified_by` for the finite sampling and operation bound.
4. Updated the affected batch-32 proof-contract source quotations for the two changed algorithm definitions in `thm-qa-rational-reconstruction-correctness`, `thm-qa-rational-reconstruction-bit-cost`, `thm-qa-modular-order-finding-cost`, and `ex-qa-order-finding-noncoprime-phase`.
5. Corrected Shor source locators in eight assigned items. The cited order-finding argument is §5, not §4; the modular-exponentiation cost discussion is in §3. The changed items are `lem-qa-finite-rational-legendre-criterion`, `lem-qa-totient-ratio-logarithmic-lower-bound`, `thm-qa-rational-reconstruction-correctness`, `alg-qa-modular-order-finding`, `thm-qa-modular-arithmetic-cost`, `thm-qa-modular-order-finding-success`, `thm-qa-modular-order-finding-cost`, and `ex-qa-rational-reconstruction-boundary`.

No stale `verification.judge` records were present on the edited carriers. The proof contracts contain no proof-step worksheets for the definition/algorithm items; the four affected existing consumer/example contracts were updated as listed above.

## Checks

Reflow reported `unchanged` for all 10 changed item paths. Precheck passed on all 10 paths; the three definition/algorithm items had zero proof sections to check, and each of the seven proof/example items had one checked section and zero failures. The final proof-layout command covered all 10 changed paths and reported `10 items, 34 steps, 0 defects`.

## Defects not repaired

No mathematical, statement, citation, or proof defect remained unedited in the assigned items or page prose. The newly explicit inverse helper is an out-of-batch current-run dependency; I did not edit its carrier or the run plan.

## Page verdicts

- `quantum-order-finding-and-rational-reconstruction` (A): pass after the dependency and procedure repairs. Its summary accurately describes finite rational reconstruction, the orbit Fourier mixture, exact modular verification, reversible multiplication, and the separated cost coordinates.
- `quantum-order-finding-and-rational-reconstruction-examples` (B): pass. Both numerical examples match the repaired procedures and their supplier statements; the boundary example distinguishes the weak integer test from the strict Legendre hypothesis, and the order example distinguishes a proper divisor from the exact order.

## Blockers and coverage limits

The live autopilot status still reports the run-wide `1-scaffold` blocker: the unit prerequisite graph contains the invalid construction-scheduling identity `def-qc-effective-unitary-matrix-input` in batch 12. This is outside batch 32 and was not changed. The new inverse-helper edge is also out of batch 32, so the run owner may need to reconcile its frozen scheduling coverage before later build stages.

I reviewed the assigned files and the direct suppliers listed above, but did not open every item in the evidence bundle’s 206-item transitive carrier walk. The review followed dependencies needed for the assigned continued-fraction, QPE, reversible-arithmetic, probability, and cost arguments; it does not claim a full audit of every transitive supplier file.
