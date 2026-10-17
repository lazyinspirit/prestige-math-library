---
page: numerical-inverse-problems-and-regularization-error
title: "Numerical Inverse Problems and Regularization Error"
status: draft
items:
  - lem-hilbert-tikhonov-normal-operator-invertible
  - lem-truncated-svd-bias-and-data-noise-decomposition
  - lem-hilbert-tikhonov-noise-amplification-bound
  - thm-tikhonov-error-chain-with-discretization-and-residual
  - cor-l2-inverse-error-budget-and-cross-term-condition
  - lem-computed-augmented-tikhonov-solve-residual-and-output-error
examples: []
---

This page separates the main error sources in regularized inverse problems.
For the NA-44 compact Hilbert-space forward model, under Countable Choice, the
shifted normal operator is well-defined for every $\lambda>0$, and the Tikhonov
data-noise map has norm at most $1/(2\sqrt\lambda)$. Under the same assumption,
both estimates also hold for bounded maps more generally. The bias, data perturbation, regularized-operator
discretization, forward residual discarded before inversion, and solve
residual appear as separate differences in an exact error chain.

The finite-dimensional Tikhonov formula uses the canonical least-squares
supplier and the convention
$\|Ax-b\|^2+\lambda\|x\|^2$. The truncated-SVD result keeps its threshold
explicit and identifies the discarded right-singular directions, including
the nullspace, as bias. Neither the Hilbert-space bounds nor this bookkeeping
give a discretization rate or a universal parameter-choice rule.

The exact residual term records algebraic error, including an iterative
stopping residual. Residual-evaluation error and the difference between an
exact-arithmetic output and a computed output remain separate conditional
terms and require their own certified arithmetic bounds.

When the increment norms and the norm of their sum are measurable, and each
increment norm is square-integrable, the pathwise chain gives an $L^2$ bound by
Minkowski. If their scalar pairings are measurable, root-sum-square equality is
equivalent to the aggregate sum of integrated cross terms vanishing. Individual
cross integrals may be nonzero and cancel; separate
vanishing is sufficient but not necessary. Independence alone does not provide
the condition without corresponding centering assumptions.

A concrete augmented-QR and certified-normal-residual lemma supplies the finite-matrix computed-output allowance, with complex realification, square-root representation and rank/range checks. Explicit isometric coefficient embeddings connect this computation to the Hilbert-space discrete operator; arbitrary finite rank alone does not identify a numerical coordinate representation.
