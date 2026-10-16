# Step 3a reader report — batch 54

## Status

Review complete for batch 54. The live autopilot status is `running`; stage `3a-read` remains incomplete for batches 42, 54, and 57. The current run-level blocker is the existing `1-scaffold` prerequisite-identity error for `def-qc-effective-unitary-matrix-input` in batch 12. It does not block this batch review. No batch-54 blocker remains.

## Page inventory and verdicts

- A page: `library/quantum-algorithms/quantum-optimization-sdp-and-variational-algorithms.md` — **pass**. The summary matches the reviewed local SDP/MMW, Gibbs/trace, two-sparse, threshold-search, membership/separation, and variational items and retains the declared query/gate boundaries. The native escalation note is historical: the batch coverage and run receipts remain separately recorded; the current reference-state item is an explicit supplied-access contract and does not claim a construction for every dimension.
- B page: `library/quantum-algorithms/quantum-optimization-sdp-and-variational-algorithms-examples.md` — **pass**. Its three examples agree with their stated SDP, VQE, and one-edge QAOA computations.

## Assigned inventory opened

Manifest: `research/quantum-computing-algorithms-60-2026-10-15-batch-54.pages.json`. I opened both listed pages, all 44 A-page items, all 3 B-page items, and the dependency statements/proofs needed for the checks. Items were reviewed in supplier-before-consumer order.

### A-page items (44)

- `lem-qa-30-hermitian-product-trace-real`, `lem-qa-30-positive-product-trace-nonnegative`, `alg-qa-30-capped-generalized-minimum`, `def-qa-30-sdp-primal-dual-pair`
- `lem-qa-30-capamplify-state-output-bound`, `lem-qa-30-normalized-hermitian-observable-effects`, `def-qa-30-mmw-game`, `lem-qa-30-normalized-sdp-strong-duality`
- `thm-qa-30-generalized-minimum-guarantee`, `thm-qa-30-sdp-weak-duality`, `lem-qa-30-exp-quadratic-bound`, `thm-qa-30-mmw-regret-bound`
- `lem-qa-30-mmw-dual-output-feasibility`, `def-qa-30-variational-quantum-algorithm`, `lem-qa-30-estimated-polytope-threshold-soundness`, `def-qa-30-classical-optimizer-interface`
- `def-qa-30-qaoa-circuit-and-objective`, `def-qa-30-vqe-rayleigh-objective`, `lem-qa-30-two-sparse-estimated-oracle`, `thm-qa-30-parameter-shift-rule`
- `thm-qa-30-qaoa-expectation-bound`, `thm-qa-30-vqe-rayleigh-ritz-guarantee`, `def-qa-30-sdp-reference-state-access`, `lem-qa-30-finite-grid-quantum-subgradient`
- `lem-qa-30-sdp-trace-mean-ratio-identity`, `def-qa-30-quantum-membership-separation-model`, `def-qa-30-sdp-sparse-oracle-model`, `alg-qa-30-quantum-membership-to-separation`
- `lem-qa-30-centroid-weak-separation-optimization`, `lem-qa-30-membership-height-geometry`, `thm-qa-30-quantum-membership-separation-cost`, `thm-qa-30-smooth-fourier-approximation`
- `lem-qa-30-spectral-minimum-shift`, `alg-qa-30-sdp-gibbs-purification`, `thm-qa-30-sdp-gibbs-state-error-cost`, `thm-qa-30-flagged-trace-error-and-cost`
- `alg-qa-30-sdp-matrix-expectation-oracle`, `lem-qa-30-mmw-to-sdp-feasibility`, `thm-qa-30-sdp-binary-search-correctness`, `thm-qa-30-sdp-matrix-expectation-cost`
- `alg-qa-30-quantum-sdp-solver`, `thm-qa-30-quantum-sdp-solver-guarantee`, `thm-qa-30-sparse-sdp-resource-substitution`, `thm-qa-30-quantum-sdp-solver-cost`

### B-page items (3)

- `ex-qa-30-sdp-weak-duality`
- `cex-qa-30-variational-global-optimum`
- `ex-qa-30-vqe-and-qaoa-objectives`

### Dependencies and external sources checked

For the repaired arguments and their direct consumers, I checked the relevant local statements/proofs in `def-qa-30-sdp-primal-dual-pair`, `def-qa-30-mmw-game`, `lem-qa-30-mmw-dual-output-feasibility`, `lem-qa-30-positive-product-trace-nonnegative`, `def-qc-controlled-unitary-access`, `def-qc-inverse-unitary-access`, `def-qc-projective-measurement`, `thm-qc-reflection-unitary-involution`, `thm-exponential-is-strictly-increasing`, `def-natural-logarithm`, `thm-complex-exponential-addition-and-real-extension`, `thm-riemann-fubini-on-product-rectangles`, `def-subgradient-and-subdifferential`, `def-qa-30-quantum-membership-separation-model`, `thm-nearest-point-in-a-nonempty-closed-convex-set`, `cor-bolzano-weierstrass-in-rn`, `thm-heine-borel-rn`, and the direct generalized-minimum, solver, trace, Fourier, and sparse-access suppliers.

Primary-source checks:

- van Apeldoorn, Gilyen, Gribling, and de Wolf, [Convex optimization using quantum oracles](https://arxiv.org/abs/1809.00643v4), §3.2 (Lemma 14 and Corollary 15: finite Fourier/phase-estimation approximate-gradient construction and its error/query conditions) and §4 (oracle model).
- van Apeldoorn et al., [Quantum SDP-solvers](https://arxiv.org/abs/1705.01843v4), Appendix C (generalized minimum finding and the normalized minimum-label output convention).
- Tilly et al., [The Variational Quantum Eigensolver: a review of methods and best practices](https://arxiv.org/abs/2012.09265v2), §II.3.1 (VQE and parameter-shift context).

## Repairs made

- `lem-qa-30-normalized-hermitian-observable-effects`, Proof 1.1 and 2.1: derived real eigenvalues from self-adjointness and conjugate symmetry; grounded the Born weights in the finite POVM law and trace cyclicity. Its proof contract was updated.
- `def-qa-30-mmw-game`, Facts & Assumptions and Proof 1.1–2.1: derived the real spectrum needed by its Gibbs update from the adjoint identity; tied the exponential and density-state interface to the local definitions. Its proof contract was updated.
- `lem-qa-30-capamplify-state-output-bound`, Statement, Facts F3–F7, and Proof 1.1–4.1: made the two-outcome flag-only instrument an explicit input, so the good branch returns the normalized projection without measuring score/label/work registers. Replaced the angle-existence/trigonometric recurrence with a direct complex-coordinate recurrence and exact finite geometric-sum bound. Replaced the logarithmic round ceiling with a terminating exact rational comparison `(15/16)^N <= rho`; the proof gives the success and `O(1+ln(1/rho))` bounds.
- `alg-qa-30-capped-generalized-minimum`, Definition: made confidence rational and chose the repetition count as the least integer with the exact rational comparison `8^(-R) <= delta`, found by finite multiplication/comparison.
- `thm-qa-30-generalized-minimum-guarantee`, Statement, Facts F1–F5, and Proof 1.1, 2.1, and 4.1: made the confidence interface rational, updated the random-iteration estimate to use the supplier’s algebraic recurrence, handled the zero-improvement case, and proved the repetition probability and logarithmic call bound from the exact rational cap.
- `alg-qa-30-sdp-gibbs-purification`, Definition step 4: the optional normalized-output branch now measures only the supplied success flag and returns its good branch; it does not measure payload registers.
- `lem-qa-30-estimated-polytope-threshold-soundness`, Statement paragraphs 1–2 and Proof 1.1, 3.1: stated the normalized finite SDP hypotheses, bounded attained dual, per-round exact MMW state/loss setup, and `T, eta` conditions required by the cited dual-feasibility lemma. Its proof contract and direct consumer citations were refreshed.
- `lem-qa-30-finite-grid-quantum-subgradient`, Statement, Fact F1, and Proof 1.1 and 4.1: fixed the ambient dimension of `C` and the returned vector; corrected the Riemann-Fubini fact to its integrability hypothesis and proved the finite-difference functions are Riemann integrable; handled `d=1` directly; supplied the telescoping Fourier-tail estimate. Its proof contract and direct consumer citation were refreshed.
- `lem-qa-30-membership-height-geometry`, Proof 2.2: closed the empty-erosion-interval case by deriving the required `t <= h(y)+2R epsilon/r` bound. Its proof contract was refreshed.
- `alg-qa-30-quantum-sdp-solver`, Definition opening paragraph; `lem-qa-30-spectral-minimum-shift`, Statement opening paragraph; and `thm-qa-30-quantum-sdp-solver-guarantee`, Statement first paragraph: propagated the rational-confidence input required by the exact finite minimum-repetition loop.
- Refreshed exact source quotes in the batch-54 proof-contract file for direct consumers of changed statements, and synchronized derivation records for the repaired proof steps. Historical boundary-review evidence was retained. None of the changed items had a stale `verification.judge` record.

## Defects not edited

None confirmed. All confirmed defects were in in-flight batch-54 items and were repaired. No assigned B-page change was needed. No published or other-batch dependency was found defective.

## Validation and blocker

For all 12 changed item paths, `reflow.mts` returned `unchanged`. `precheck.mts` passed for the direct items; for the algorithm-only items it reported `0 checked, 0 failing`. The earlier two repairs also passed direct precheck. I ran the required batched `proof-layout.mjs` command once on these 12 paths after the final item edits; it reported `12 items, 50 steps, 0 defects`.

Batch-54 review blocker: none. Run-level blocker: `1-scaffold` still reports an invalid unit prerequisite identity for `def-qc-effective-unitary-matrix-input` in batch 12 (from the live status command).
