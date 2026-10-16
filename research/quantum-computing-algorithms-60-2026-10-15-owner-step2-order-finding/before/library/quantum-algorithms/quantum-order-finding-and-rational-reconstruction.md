---
page: quantum-order-finding-and-rational-reconstruction
title: Quantum Order Finding and Rational Reconstruction
status: draft
items:
  - lem-qa-finite-rational-legendre-criterion
  - lem-qa-rational-reconstruction-candidate-uniqueness
  - lem-qa-totient-ratio-logarithmic-lower-bound
  - def-qa-rational-phase-reconstruction
  - alg-qa-rational-reconstruction-from-phase-sample
  - thm-qa-rational-reconstruction-correctness
  - alg-qa-modular-multiplication-circuit
  - thm-qa-modular-multiplication-circuit-correctness
  - alg-qa-modular-order-finding
  - thm-qa-modular-arithmetic-cost
  - thm-qa-rational-reconstruction-bit-cost
  - thm-qa-modular-order-finding-success
  - thm-qa-modular-order-finding-cost
examples: []
---

This page defines denominator-bounded rational reconstruction using normalized finite continued fractions and an exact integer window. It proves the finite-rational Legendre bridge needed for a rational phase sample, candidate uniqueness, and the reconstruction bit bound. The order-finding construction starts from the valid residue $|1\rangle$, whose modular-multiplication orbit has Fourier eigenphases $k/r$; phase estimation therefore yields a uniform mixture over indices, not a promise that $|1\rangle$ is an eigenvector. A candidate denominator is retained only after the exact modular power test, and the algorithm returns the minimum retained value. The page gives an explicit clean reversible modular multiplier, its correctness and schoolbook resource bounds, then separates controlled-multiplier calls, black-box controlled-$U_x$ queries, gates, and classical bit work. The gate estimate uses ideal exact arbitrary-angle QFT gates; it claims no finite-alphabet compilation or uniform circuit family.
