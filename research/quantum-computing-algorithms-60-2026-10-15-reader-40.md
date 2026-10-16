# Step 3a reader report — batch 40

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Scope: batch `40`

## Opened inventory

Read the assigned manifest `research/quantum-computing-algorithms-60-2026-10-15-batch-40.pages.json`, the reader brief, the batch-40 coverage record and cross-batch dependency ledger, and both listed pages:

- `library/quantum-algorithms/adversary-methods-and-quantum-query-complexity.md`
- `library/quantum-algorithms/adversary-methods-and-quantum-query-complexity-examples.md`

Opened all 31 assigned items, in supplier-first review order:

- `lem-qa-16-finite-sdp-strong-duality`, `lem-qa-16-schur-product-psd`, `lem-qa-16-effective-spectral-gap`, `lem-qa-16-query-unitary-normal-form`.
- `def-qa-16-boolean-query-domain`, `def-qa-16-input-mismatch-matrices`, `def-qa-16-query-address-projectors`, `def-qa-16-filtered-gamma2`, `lem-qa-16-general-adversary-finite-and-attained`, `alg-qa-16-controlled-consistency-reflection`, `thm-qa-16-controlled-consistency-reflection-correct`, `def-qa-16-general-adversary-bound`, `lem-qa-16-filtered-gamma2-well-defined`, `thm-qa-16-controlled-consistency-reflection-query-cost`, `def-qa-16-nonnegative-adversary-bound`.
- `lem-qa-16-adversary-progress-endpoints`, `lem-qa-16-nonconstant-adversary-at-least-one`, `lem-qa-16-one-query-progress-change`, `thm-qa-16-dual-vector-characterization`, `lem-qa-16-nonnegative-dual-overlap-upper-bound`, `prop-qa-16-general-versus-nonnegative-adversary`, `thm-qa-16-filtered-gamma-adversary-equality`, `thm-qa-16-general-adversary-lower-bound`.
- `alg-qa-16-dual-adversary-reflection-evaluator`, `prop-qa-16-ambainis-base-separation`, `thm-qa-16-adversary-composition-lower-bound`, `thm-qa-16-dual-evaluator-success`, `thm-qa-16-dual-evaluator-query-cost`, `thm-qa-16-general-adversary-tightness`.
- Companion-page examples: `ex-qa-16-or-dual-certificate`, `cex-qa-16-negative-weights-matter`.

Opened the 41 direct external item suppliers listed by the manifest: `alg-qa-quantum-phase-estimation`; `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`; `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`; `def-adjoint-of-a-linear-map-between-inner-product-spaces`; `def-inner-product-space`; `def-metric-interior-closure-boundary`; `def-non-negative-and-positive-operator`; `def-operator-norm-on-a-finite-dimensional-inner-product-space`; `def-qa-quantum-query-algorithm`; `def-qa-quantum-query-complexity`; `def-qa-standard-bit-query`; `def-qa-task-and-promise-domain`; `def-qc-clean-and-dirty-ancillas`; `def-qc-controlled-unitary-access`; `def-qc-dirac-notation-conversion`; `def-qc-pure-state-and-ray`; `def-qc-quantum-acceptance-probability`; `def-qc-reflection`; `def-qc-register-and-computational-basis`; `def-trace-of-a-square-matrix`; `def-trace-of-an-endomorphism`; `lem-qa-13-pi-rational-bounds`; `thm-cauchy-schwarz-and-the-euclidean-norm`; `thm-cauchy-schwarz-in-an-inner-product-space`; `thm-compact-subset-is-closed-and-bounded`; `thm-complex-spectral-theorem-for-normal-endomorphisms`; `thm-continuous-image-of-a-compact-space-is-compact`; `thm-extreme-value-metric`; `thm-finite-dimensional-orthogonal-decomposition`; `thm-heine-borel-rn`; `thm-non-negative-operator-characterisations`; `thm-operator-norm-is-the-largest-singular-value`; `thm-qa-phase-estimation-access-cost`; `thm-qa-phase-estimation-success-and-tail`; `thm-qc-computational-basis-orthonormal`; `thm-qc-controlled-global-phase-is-relative-phase`; `thm-qc-deferred-measurement`; `thm-qc-reflection-unitary-involution`; `thm-qc-standalone-global-phase-invariance`; `thm-singular-value-decomposition`; `thm-strict-separation-of-a-point-from-a-closed-convex-set`.

Additional supplier context opened: `def-real-and-complex-inner-product-space`, `def-qa-promise-query-instance`, and `def-qc-ordered-bitstring-encoding`. The dependency statements and proof passages used by the assigned arguments were checked; transitive supplier proofs outside those uses were not audited as a separate full-closure project.

## Source passages checked

- Andrew M. Childs, *Lecture Notes on Quantum Algorithms*, cached text `research/quantum-computing-planning/sources/qc_r6/childs-lecture-notes.txt`: §23.2 (adversary progress and query change), §24.1 (dual vector constraints), and §24.6 (two reflections, witness normalization, and the evaluator).
- Ronald de Wolf, *Quantum Computing: Lecture Notes*, cached text `research/quantum-computing-planning/sources/qc_r3/de-wolf-1907.09415.txt`: §§12.1–12.4 (general adversary, dual constraints, upper construction, and the OR certificate).
- Lee, Mittal, Reichardt, Špalek, and Szegedy, *Quantum Query Complexity of State Conversion*, cached text `research/quantum-algorithms-planning/sources/qa_r3/state-conversion-1011.3020.txt`: Theorem 3.4’s filtered-γ₂/adversary comparison, Lemma 4.2’s effective spectral gap in §4.1, and Appendix A.1’s filtered-γ₂ dual formulation.
- Høyer, Lee, and Špalek, *Negative Weights Make Adversaries Stronger*, cached text `research/quantum-computing-algorithms-60-2026-10-15-batch-40.sources/hoyer-lee-spalek-negative-weights.txt`: §§6.1–6.2 (composition matrix and lower composition bound) and §7.1 (sorted four-bit function and witness table).

## Edits and evidence

1. `alg-qa-16-controlled-consistency-reflection`, Definition/Inputs: specified that the distinguished `|start⟩` is a unit vector orthogonal to the query summand. The procedure uses `|start⟩⟨start|` as a projection, so this condition is necessary. The address labels are explicitly identified with the standard coordinate basis by `|i⟩=e_{i−1}` for `i∈[N]`.
2. `thm-qa-16-controlled-consistency-reflection-correct`, Statement and Proof 1.1: stated the unit-start hypothesis and used it to justify `|start⟩⟨start|` as an orthogonal projection. The proof now gives the coordinate-basis orthonormality calculation used for the query summands. This closes the missing prerequisite in the claim that the displayed consistency sum is a projection.
3. `alg-qa-16-dual-adversary-reflection-evaluator`, Definition/Inputs: specified the unit start vector and its orthogonality to the query summand, and stated the exact dual-certificate equations and class costs required as input. Also made the query-address basis identification explicit. The formula `ν_x=1+(1/(2A))Σ_i||v_{x,i}||²` normalizes the state only with a unit start vector.
4. `thm-qa-16-dual-evaluator-success`, Statement and Proof 1.1: carried the unit-start condition into the theorem and used the algorithm’s stated input to justify the normalization `||ψ_x||=1`.

Updated the affected batch-40 proof contracts: the repaired Step 1.1 derivations for the two theorem items and exact source-section quotes for the changed algorithm definitions and evaluator theorem statement. The four items had no `verification.judge` record to remove. Reflow reported all four unchanged; precheck passed for both theorem items and reported no failures for both algorithms. The required batched `proof-layout` run reported `4 items, 10 steps, 0 defects`.

No other assigned-item defect requiring repair was found. No uneditable defect was confirmed.

## Page verdicts

- `adversary-methods-and-quantum-query-complexity` (A page): after the four repairs above, no unresolved mathematical defect was identified in the finite SDP, progress bounds, dual characterization, lower bound, reflection evaluator, query cost, tightness statement, or page summary.
- `adversary-methods-and-quantum-query-complexity-examples` (B page): no defect identified. The OR certificate has matching vector and matrix bounds. The four-bit signed witness, overlap distributions, filtered-norm bounds, and iterated composition argument support the stated strict separation.

## Blocker

The batch review itself was not blocked. The recomputed run status at `2026-10-16 03:05:21 UTC` still reported an invalid `1-scaffold` prerequisite graph because `def-qc-effective-unitary-matrix-input` is an invalid construction scheduling item in batch 12. It also reported `collect-36` failed three times in `3a-collect`; batch 40 remained among the uncovered read/split batches at that time. These run-level conditions are outside this reader assignment.
