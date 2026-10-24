---
id: alg-gaussian-randomized-range-finder
kind: algorithm
title: Exact Gaussian randomized range finder
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-standard-real-and-normalized-complex-gaussian-matrix-law, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]
justified_by: [lem-finite-scan-range-basis-is-borel]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Algorithm 4.1"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §11.1.1"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: n/a
---

## Definition

Input a fixed matrix $A\in F^{m\times n}$, a positive integer sketch width $\ell$,
and a Gaussian draw primitive as in
[[def-standard-real-and-normalized-complex-gaussian-matrix-law]]. Draw
$\Omega\in F^{n\times\ell}$ with iid entries in the chosen field and form
$Y=A\Omega$. Select $Q$ deterministically by scanning columns of $Y$ in
order, subtracting projections onto already retained columns, skipping zero
residuals, and normalizing each nonzero residual. In the complex case fix each
phase by making its first nonzero coordinate positive real. Return this
orthonormal basis $Q$ and the approximation $\widehat A=QQ^*A$.

Empty ranges return the empty basis. All operations use exact arithmetic.
No truncated rank-$k$ factorization, finite-precision stability result, or
deterministic error certificate is part of the procedure.
