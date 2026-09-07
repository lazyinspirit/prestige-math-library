---
page: arithmetization-and-the-sum-check-protocol
title: "Arithmetization and the Sum-Check Protocol"
status: draft
items: [def-arithmetization-of-a-boolean-formula, lem-arithmetization-agrees-on-boolean-inputs, lem-formula-arithmetization-degree-and-evaluation-cost, def-multilinear-extension, thm-existence-and-uniqueness-of-multilinear-extension, lem-multilinear-extension-streaming-evaluation, lem-multilinear-extension-table-evaluation, lem-degree-under-arithmetized-quantifiers, rem-polynomial-identity-bounds-for-sum-check, def-sum-check-instance-and-protocol, lem-sum-check-perfect-completeness, lem-first-false-round-is-caught-by-root-bound, thm-sum-check-soundness, lem-sum-check-verifier-is-polynomial-time-given-point-evaluation, cor-sum-check-field-size-error-budget, prop-arithmetized-formula-counting-sum, def-linearity-test, def-boolean-cube-fourier-coefficients, lem-boolean-cube-fourier-inversion-and-parseval, lem-blr-acceptance-fourier-identity, thm-blr-linearity-test-soundness, def-self-correction-of-a-noisy-linear-function, thm-linear-self-correction]
examples: [fs-sum-check-computes-all-exponential-summands]
---

Formula gates turn Boolean values into field polynomials. Boolean-cube interpolation then supplies multilinear extensions and explicit full-table evaluators. Sum-check verifies a claimed cube sum using coefficient messages, fresh challenges and one trusted point evaluation; its soundness proof follows the first false claim that becomes true. The final section proves the BLR test and pointwise linear self-correction by finite Fourier sums.

Field arithmetic costs and bit costs are distinct. Exact integer counts require the supplied prime-field hypothesis, and interpolation of a full table by itself gives no efficient evaluator for a succinct table.
