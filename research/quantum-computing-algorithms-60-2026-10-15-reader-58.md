# Step 3a reader report — batch 58

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: reader  
Reviewed: 2026-10-16

## Inventory opened

Pages:

- `library/quantum-algorithms/algorithm-composition-precision-and-dequantization.md` (A page)
- `library/quantum-algorithms/algorithm-composition-precision-and-dequantization-examples.md` (B page)

Assigned A-page items, read in dependency order:

- `def-qa-34-threshold-band-svd-target`
- `thm-qa-34-best-frobenius-rank-k-approximation`
- `thm-qa-34-product-state-error-bound`
- `def-qa-34-output-and-cost-types`
- `def-qa-34-end-to-end-error-contract`
- `def-qa-34-heralded-verification-contract`
- `def-qa-34-l2-sample-query-access`
- `thm-qa-34-classical-output-writing-lower-bound`
- `thm-qa-34-channel-hybrid-bound`
- `thm-qa-34-tensor-error-bound`
- `alg-qa-34-error-budget-allocation`
- `alg-qa-34-modfkv-low-rank-description`
- `alg-qa-34-rejection-sampler-linear-combination`
- `lem-qa-34-modfkv-sampling-gram-bound`
- `lem-qa-34-normalized-vector-distribution-tv-bound`
- `prop-qa-34-sample-inner-product-estimator`
- `thm-qa-34-adaptive-failure-union-bound`
- `thm-qa-34-error-budget-allocation-correctness`
- `thm-qa-34-linear-combination-sampler-correct-and-cost`
- `lem-qa-34-exponential-gram-concentration`
- `lem-qa-34-two-sketch-threshold-band-bound`
- `thm-qa-34-modfkv-low-rank-approximation`
- `thm-qa-34-tang-recommendation-sampler`
- `rem-qa-34-dequantization-scope`

Assigned B-page items:

- `ex-qa-34-three-stage-budget`
- `cex-qa-34-state-output-not-amplitude-list`
- `ex-qa-34-heralded-success-branch`
- `cex-qa-34-tang-without-sampling-access`

Dependencies opened to verify these items included:

- Linear algebra and probability: `thm-singular-value-decomposition`, `def-orthogonal-projection`, `def-frobenius-matrix-norm`, `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-finite-probability-space-and-event`, `def-independence-of-finite-random-variables`, `lem-finite-probability-basic-laws`, `thm-markov-inequality`, `thm-chebyshev-inequality`, `thm-finite-union-bound`, `lem-exponential-dominates-one-plus-x`, `thm-countable-product-of-probability-spaces`, `thm-finite-and-countable-subadditivity-of-measures`, `cor-first-borel-cantelli-lemma-for-events`, `def-countable-choice`, and `def-dependent-choice`.
- Quantum states, maps, and errors: `def-qc-density-operator`, `def-qc-trace-norm`, `def-trace-of-an-endomorphism`, `def-qc-trace-distance`, `def-qc-tensor-map`, `def-qc-tensor-register-and-permutation`, `lem-qc-trace-norm-tensor-product`, `thm-non-negative-operator-characterisations`, `thm-qc-measurement-variation-at-most-trace-distance`, `thm-qc-trace-norm-duality-and-norm-properties`, `def-qc-quantum-channel`, `def-qc-completely-positive-map`, `def-qc-diamond-norm`, `def-qc-povm-and-outcome-law`, `def-qc-instrument-and-conditional-state`, `def-qc-quantum-acceptance-probability`, `thm-qc-channel-composition-hybrid-bound`, `thm-qc-diamond-norm-ancilla-dimension-bound`, `thm-qc-channels-compose-and-tensor`, `thm-qc-channel-tensor-error-bound`, and `def-qc-circuit-denotational-semantics`.
- Output and state preparation: `def-qc-circuit-cost-model`, `def-qc-state-preparation-cost-model`, `alg-qc-state-preparation`, `thm-qc-state-preparation-rotation-level-upper-bound`, `thm-qc-state-preparation-cost`, `alg-qc-solovay-kitaev-unitary-compiler`, `thm-qc-solovay-kitaev-error-and-resource-bound`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, and `thm-operator-norm-is-the-largest-singular-value`.
- Example basis and effects: `def-qc-register-and-computational-basis`, `thm-qc-computational-basis-orthonormal`, `lem-qc-tensor-product-basis-and-dimension`, and `def-non-negative-and-positive-operator`.

The current batch proof-contract file and the run aggregate were opened for the 19 proof-bearing carriers in scope. The Tang source-cited proof sections were checked against the authored text.

## Repairs

1. In `def-qa-34-threshold-band-svd-target`, the final sentence of the Definition said that choices on zero singular directions do not change the target. This is false when the threshold band contains both a nonzero singular direction and a kernel direction: an allowed orthogonal projection may have a range mixing them. For example, take (A=\operatorname{diag}(1/2,0)), \(\sigma=1/2\), \(\eta=1\); the projection onto \((e_1+e_2)/\sqrt2\) gives a different \(AP_E\) from the projection onto \(e_1\). I replaced the sentence with the accurate caveat that kernel-supported ranges contribute zero, while allowed mixed projections can change the target. I checked its consumers: `lem-qa-34-two-sketch-threshold-band-bound`, `thm-qa-34-modfkv-low-rank-approximation`, `thm-qa-34-tang-recommendation-sampler`, and downstream `rem-qa-34-dequantization-scope`; their arguments do not rely on the false sentence. No proof contract applies to this definition.

2. In `thm-qa-34-tang-recommendation-sampler`, proof step 7.1 used \(M\) although this theorem had not defined it. The intended matrix is \(VV^T\). I made the identity \(D_{i,*}=A_{i,*}VV^T\) explicit and derived \(\|VV^T\|_{\rm op}=\lambda_{\max}(V^TV)\le1+tK\le3/2\) from the threshold-band eigenvalue bound and the SVD/operator-norm suppliers. The resulting \(\|D_{i,*}\|\le(3/2)b\) estimate justifies the cost-ratio simplification. I added the cited operator-norm suppliers to the dependencies and updated the item’s F1/F8 facts.

3. The same Tang item’s `axiom_use` field referred to nonexistent proof step 2.2. Countable/dependent choice is used through F5 in step 3.1 to define the joint law of potential fresh sample batches. I corrected that locator to step 3.1.

4. I updated the Tang derivation and source-citation rows in `research/quantum-computing-algorithms-60-2026-10-15-batch-58.proof-contracts.json` and the matching record in `research/quantum-computing-algorithms-60-2026-10-15-proof-contracts.json`. The Tang carrier had no `verification.judge` record to remove. Existing boundary-review entries remain preserved with their original pre-repair hashes; they were not rebound to the edited item.

## Source checks

- Tang, *A quantum-inspired classical algorithm for recommendation systems*, v3: §2.1, PDF pp. 7–8, defines the threshold-band family as a positive contraction on the middle singular subspace; §4.1, PDF pp. 11–12, gives Proposition 4.3’s mixture proposal and rejection sampling; §4.2, PDF pp. 13–15, gives ModFKV, its sketch description, and the query/SVD costs; §4.3, PDF pp. 16–17, gives the row-sampling algorithm. Source: <https://arxiv.org/pdf/1807.04271v3>.
- The exact Princeton 1998 Frieze–Kannan–Vempala PDF cited by the best-rank item returned HTTP 403. I checked the authors’ hosted manuscript at <https://www.math.cmu.edu/~af1p/Texfiles/SVD.pdf>, PDF p. 6, where the text states the Eckart–Young Frobenius minimizer and its truncated-SVD formula. The assigned theorem’s local proof supplies the full derivation, so no proof step depends on the unavailable copy.

## Page verdicts

- A page `algorithm-composition-precision-and-dequantization`: **pass**. Its summary accurately describes the current channel/error contracts, finite hybrid bounds, error allocation, real-matrix ModFKV/Tang scope, and countable-model termination result, with the repaired threshold-target caveat now accurate in the item.
- B page `algorithm-composition-precision-and-dequantization-examples`: **pass**. The three-stage budget, measurement, heralded zero-success case, amplitude-list cost example, and entry-query lower-bound example match their stated hypotheses and dependencies.

## Validation and blockers

- `node tools/tsx-run.mjs tools/reflow.mts` reported both changed items unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts` passed for `thm-qa-34-tang-recommendation-sampler`; the definition reported 0 checked proofs and 0 failures.
- Final combined formatting check: `node tools/proof-layout.mjs items/def-qa-34-threshold-band-svd-target.md items/thm-qa-34-tang-recommendation-sampler.md` — 2 items, 8 steps, 0 defects.
- The Tang contract's existing boundary-review hashes remain bound to the pre-repair item bytes. I preserved those records and did not re-certify them; any downstream current-hash review that depends on them must be refreshed by its owner.
- No uneditable mathematical defect remains in the reviewed scope. The live run status observed at 2026-10-16T02:57:27Z still reports a specification blocker in batch 12 (`def-qc-effective-unitary-matrix-input`), three-attempt reader failures for batches 38 and 44, and a three-attempt collect failure for batch 29. These are outside reader-58 scope and were not changed.

