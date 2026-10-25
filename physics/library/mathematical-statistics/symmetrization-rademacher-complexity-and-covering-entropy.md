---
page: symmetrization-rademacher-complexity-and-covering-entropy
title: "Empirical-Process Complexity"
status: published
items:
  - def-empirical-process-and-rademacher-process
  - def-vc-class-of-sets-and-index
  - lem-bounded-variable-hoeffding-mgf
  - lem-finite-grid-interval-discrepancy
  - lem-real-power-preserves-measurability
  - def-covering-packing-bracketing-number-and-metric-entropy
  - def-one-sided-empirical-rademacher-complexity
  - def-vc-subgraph-class-and-index
  - thm-finite-class-uniform-deviation
  - thm-independent-process-symmetrization
  - lem-packing-covering-number-comparison
  - thm-one-sided-coordinate-rademacher-contraction
  - lem-vc-set-covering-entropy
  - thm-absolute-rademacher-contraction
  - thm-vc-covering-entropy
examples: []
requires:
  - concentration-inequalities-and-tail-bounds
  - asymptotic-convergence-consistency-and-identification
  - independence-borel-cantelli-and-zero-one-laws
  - linear-algebra-methods-in-combinatorics
---

This page defines empirical and Rademacher processes with an explicit countability and outer-probability convention, then proves the independent-copy convex-moment symmetrization inequality with its factor 2 inside the convex function. It is an expectation statement; tail inequalities require their own measurability and integrability premises.

The Rademacher complexity here is one-sided and has no absolute value. Coordinate contraction has factor $L$ without requiring the coordinate maps to vanish at zero. The separate absolute-value theorem assumes they do vanish at zero and has factor $2L$. For a finite class of $[0,1]$-valued functions, the uniform deviation bound is $2|\mathcal F|e^{-2n\epsilon^2}$.

For VC-subgraph classes, the entropy statement gives the exact finite-$r$ logarithmic form for every $1\le r<\infty$, with the first-unshattered index convention and a finite nonzero envelope. Sauer–Shelah is applied only to traces on finite sampled sets; the proof does not assert an exponent uniform in $r$. Its envelope transfer uses a finite weighted grid and product integration, so it does not inherit the Countable Choice hypothesis of the continuous Lebesgue-interval route.
