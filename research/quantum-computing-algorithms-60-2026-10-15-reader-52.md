# Reader report — batch 52

Run: `quantum-computing-algorithms-60-2026-10-15`  
Review date: 2026-10-16  
Role: Step 3a reader, label `reader-52`

## Opened inventory

Assigned pages:

- A page: [quantum-spectral-estimation-and-matrix-functions](../library/quantum-algorithms/quantum-spectral-estimation-and-matrix-functions.md).
- B page: [quantum-spectral-estimation-and-matrix-functions-examples](../library/quantum-algorithms/quantum-spectral-estimation-and-matrix-functions-examples.md).

Assigned items, read in dependency order:

- A: `thm-qa-28-polynomial-matrix-function-error`, `def-qa-28-state-spectral-distribution`, `lem-qa-28-normalized-function-target`, `def-qa-28-spectral-estimation-access`, `alg-qa-28-phase-spectral-estimation`, `alg-qa-28-median-spectral-estimation`, `thm-qa-28-spectral-law-measurement`, `alg-qa-28-qsvt-matrix-function`, `thm-qa-28-spectral-estimation-guarantee`, and `thm-qa-28-matrix-function-error-cost`.
- B examples: `ex-qa-28-exponential-polynomial` and `ex-qa-28-two-level-spectral-estimate`.

I also opened the A page's listed prerequisite pages: `quantum-phase-estimation`, `hamiltonian-simulation-and-product-formulas`, `quantum-singular-value-transformation`, `the-spectral-theorem-and-singular-value-decomposition`, `pure-and-mixed-states-ensembles-and-schmidt-decomposition`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `block-encodings`, `controlled-gates-phase-and-entanglement`, `uniform-circuit-families-promise-problems-and-complexity`, `measurements-povms-and-instruments`, and `effective-numberings-reductions-resources-and-randomness`.

Claim-relevant item suppliers opened include the finite spectral calculus and operator-norm items; pure-state and Dirac-notation definitions; Hamiltonian dynamics and simulation/access contracts; controlled and inverse-unitary access and circuit-cost definitions; the QPE circuit, exact outcome kernel, circular-distance, nearest-grid, tail, exact-grid and success-and-tail results; the projective-measurement definition and outcome law; block-encoding definitions and access model; PUE/SVD data and invariant-subspace decomposition; odd/even singular-value-transform definition; QSP signal-sequence definition and unitarity result; QSVT procedure, singular-space action, query-count and robustness results; projector-phase implementation; real-polynomial completion and QSP phase-factorization/correctness; LCU construction and correctness; the relevant complex-exponential, trigonometric-series, alternating-series, sine/π, logarithm, mean-value, Archimedean, triangle-inequality and Cauchy–Schwarz items. I read `research/quantum-algorithms-planning/operational-contracts.md` at OP0 and OP1 for the procedures called by the assigned algorithms.

## Repairs and evidence

- [alg-qa-28-qsvt-matrix-function](../items/alg-qa-28-qsvt-matrix-function.md): made the QSVT degree admissible condition explicit: `d_j` is a degree bound and the polynomial parity must equal `d_j mod 2`. Added the required phase-source alternatives, positive OP1 synthesis tolerance, LCU access record, and failure/output instructions; completed the zero-target example with degree and phase data. This closes the missing parity condition in the QSVT supplier and removes ambiguity about phase generation and LCU circuit access. The primary QSVT source states the same parity and boundedness hypotheses in Corollary 18, §3.2, PDF p. 18 of [Gilyén et al.](https://arxiv.org/pdf/1806.01838). The exact QPE and QSVT conventions were checked against §4.3, equations 4.14–4.17 of [Childs, Lecture Notes on Quantum Algorithms](https://www.cs.umd.edu/~amchilds/qa/qa.pdf) and Theorem 17/Corollary 18 of Gilyén et al.
- [thm-qa-28-spectral-law-measurement](../items/thm-qa-28-spectral-law-measurement.md): added a finite-dimensional complex inner-product space, Hermitian endomorphism, and unit-vector hypothesis to the statement. The finite spectral sum and eigenspace projections require this scope; the prior statement did not say it.
- [thm-qa-28-spectral-estimation-guarantee](../items/thm-qa-28-spectral-estimation-guarantee.md): its approximate-run proof applied Cauchy–Schwarz to complex inner products while citing only the finite-real-list inequality. Added the published complex inner-product Cauchy–Schwarz theorem and the projective-readout supplier to `deps` and Facts. Expanded the proof to reduce each inner-product sum to the real finite-list inequality, use orthogonality to recover vector norms, and state the finite-event and product-law total-variation bounds.
- Updated the A-page summary to describe the certified phase-list route and the rational/exact-algebraic OP1 synthesis route accurately.
- Regenerated the affected batch proof-contract entries for `thm-qa-28-spectral-law-measurement`, `thm-qa-28-matrix-function-error-cost`, and `thm-qa-28-spectral-estimation-guarantee`. No stale `verification.judge` record was present on the repaired items.

Validation after the final item edits:

- Reflow reported all three edited items unchanged.
- Precheck passed for the two theorem items; the algorithm had zero proof rows and zero failures.
- Strict proof-contract validation reported 0 errors, 0 warnings, and 3/3 entries checked.
- Batched proof-layout reported 3 items, 9 steps, and 0 defects.

## Unedited defects

None confirmed. No proposed withdrawal or defect in a published or other-batch dependency remains to route.

## Page verdicts

| Page | Verdict | Evidence |
|---|---|---|
| `quantum-spectral-estimation-and-matrix-functions` | Pass after the summary wording repair | The summary now matches the two phase-source paths in the QSVT procedure; its spectral-law, additive-accuracy, and matrix-function claims are supported by the opened assigned results and suppliers. |
| `quantum-spectral-estimation-and-matrix-functions-examples` | Pass | Both finite examples' spectral weights, QPE phase resolution/query count, dilation, phase lists, normalization and Taylor-error calculations check. |

## Blocker and coverage limit

There was no batch-52-specific blocker. The run status showed a separate `1-scaffold` unit-prerequisite error involving `def-qc-effective-unitary-matrix-input` in batch 12, and 3a-read retry blockers for batches 38 and 44. These remain run-level issues outside this assignment.

I opened the current OP1 generator and its correctness theorem but did not independently re-prove every transitive exact-algebraic root-isolation and coefficient-completion supplier used internally by that generator. The assigned QSVT procedure's phase-source requirements and degree/parity interface were checked; this limitation concerns the generator's deeper arithmetic implementation, not an observed defect in batch 52.
