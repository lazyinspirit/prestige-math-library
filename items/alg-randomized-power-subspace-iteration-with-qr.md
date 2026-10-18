---
id: alg-randomized-power-subspace-iteration-with-qr
kind: algorithm
title: Reorthogonalized randomized power subspace iteration
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-standard-real-and-normalized-complex-gaussian-matrix-law, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, alg-gaussian-randomized-range-finder]
justified_by: [lem-power-rangefinder-projector-is-borel]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Algorithms 4.3–4.4"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §11.6"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: n/a
---

## Definition

Input $F\in\{\mathbb R,\mathbb C\}$, a fixed matrix $A\in F^{m\times n}$,
integers $\ell\ge1$ and $q\ge0$, and draw $\Omega\in F^{n\times\ell}$ with
iid standard real or normalized complex Gaussian entries as in
[[def-standard-real-and-normalized-complex-gaussian-matrix-law]]. Put $Q_0$
equal to the orthonormal basis
selected by the finite scan in [[alg-gaussian-randomized-range-finder]] for
$\operatorname{Ran}(A\Omega)$. For $j=1,\ldots,q$, form $A^*Q_{j-1}$ and
select $\widetilde Q_j$ from its range by the same scan, then form
$A\widetilde Q_j$ and select $Q_j$ from its range by that scan. Return $Q_q$.
Thus exact QR/range orthogonalization follows each application of $A^*$ and
$A$; empty or rank-deficient ranges return bases of their actual ranges. The procedure is defined in exact arithmetic and makes no
finite-precision error guarantee.
