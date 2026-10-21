---
id: thm-frobenius-projection-onto-psd-cone-is-spectral-clipping
kind: theorem
title: "Frobenius projection onto the positive-semidefinite cone is spectral clipping"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-non-negative-operator-characterisations
  - prop-operator-positivity-agrees-with-form-positivity-over-the-reals
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - def-frobenius-matrix-norm
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Nicholas J. Higham, Computing a Nearest Symmetric Positive Semidefinite Matrix, Linear Algebra and its Applications 103 (1988), 103–118"
      url: "https://nhigham.com/wp-content/uploads/2023/10/high88d.pdf"
    - title: "David Bindel, Matrix Computations, CS 6210, Matrix Nearness Problems, Fall 2022"
      url: "https://www.cs.cornell.edu/courses/cs6210/2022fa/lec/2022-10-06.pdf"
    - title: "Kilian Q. Weinberger and Lawrence K. Saul, Distance Metric Learning for Large Margin Nearest Neighbor Classification, JMLR 10 (2009), 207–244"
      url: "https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf"
aliases: []
landmark: false
proof_strategy: direct
---

## Statement

Let $d\ge1$ and let $A\in\mathbb R^{d\times d}$ be symmetric. There exists an orthogonal eigendecomposition $A=U\operatorname{diag}(\lambda_1,\ldots,\lambda_d)U^T$. For any such decomposition define $\lambda_i^+=\max\{\lambda_i,0\}$ and $A_+=U\operatorname{diag}(\lambda_1^+,\ldots,\lambda_d^+)U^T$. Let $\mathbb S_+^d$ be the set of real symmetric matrices $Z$ with $v^TZv\ge0$ for every $v\in\mathbb R^d$, and let $\|B\|_F=(\sum_{i,j}B_{ij}^2)^{1/2}$. Then $A_+$ is the unique minimizer of $\|A-Z\|_F$ over $Z\in\mathbb S_+^d$, so its value is independent of the chosen orthogonal eigendecomposition.

## Statement references

[[cor-real-spectral-theorem-for-self-adjoint-endomorphisms|Real spectral theorem]]

[[thm-non-negative-operator-characterisations|Nonnegative operators and nonnegative eigenvalues]]

[[prop-operator-positivity-agrees-with-form-positivity-over-the-reals|Positive semidefinite forms and operators over the reals]]

[[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison|Orthogonal invariance of the Frobenius norm]]

[[def-frobenius-matrix-norm|Entry-sum Frobenius norm]]

[Higham, §2, Theorem 2.1, article pp. 105–106](https://nhigham.com/wp-content/uploads/2023/10/high88d.pdf)

[Bindel, §6, PDF p. 5](https://www.cs.cornell.edu/courses/cs6210/2022fa/lec/2022-10-06.pdf)

[Weinberger and Saul, Appendix A.2, printed p. 240](https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf)

## Facts & Assumptions

**Given:** A real symmetric matrix $A\in\mathbb R^{d\times d}$, $d\ge1$, and its orthogonal eigendecomposition from the Statement.

[F1] Every self-adjoint endomorphism of a finite-dimensional real inner-product space has an orthonormal eigenbasis ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[F2] A self-adjoint operator is nonnegative exactly when its eigenvalues are nonnegative ([[thm-non-negative-operator-characterisations]]).

[F3] For a finite-dimensional real inner-product space, a self-adjoint operator is nonnegative exactly when its associated symmetric form is positive semidefinite ([[prop-operator-positivity-agrees-with-form-positivity-over-the-reals]]).

[F4] Orthogonal multiplication on either side preserves the Frobenius norm ([[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

[F5] The squared Frobenius norm is the sum of the squares of all matrix entries ([[def-frobenius-matrix-norm]]).

## Proof

1.1 By [F1], choose an orthogonal eigendecomposition of $A$ and define $A_+$ as in the Statement. It is symmetric and has eigenvalues $\lambda_i^+\ge0$. By [F2] its associated operator is nonnegative, and by [F3] its quadratic form is positive semidefinite; hence $A_+\in\mathbb S_+^d$. [F1, F2, F3, given]

1.2 Let $Z\in\mathbb S_+^d$ and set $W=U^TZU$. For each coordinate vector $e_i$, $W_{ii}=e_i^TWe_i=(Ue_i)^TZ(Ue_i)\ge0$; also $W$ is symmetric. Orthogonal invariance [F4] gives $\|A-Z\|_F^2=\|\operatorname{diag}(\lambda_1,\ldots,\lambda_d)-W\|_F^2$. [F4, given]

2.1 Expanding the entry sum [F5], the last square is $\sum_i(\lambda_i-W_{ii})^2+\sum_{i\ne j}W_{ij}^2$. For every $w\ge0$, $(\lambda_i-w)^2\ge(\lambda_i-\lambda_i^+)^2$: if $\lambda_i\ge0$ the right side is zero and equality is attained only at $w=\lambda_i$, while if $\lambda_i<0$ then $w-\lambda_i\ge-\lambda_i$ and equality is attained only at $w=0$. Thus every feasible $Z$ has squared distance at least $\sum_i(\lambda_i-\lambda_i^+)^2$. [step 1.2, F5, algebra]

3.1 For $Z=A_+$ the conjugated matrix $W$ is $\operatorname{diag}(\lambda_1^+,\ldots,\lambda_d^+)$, so all off-diagonal terms vanish and every diagonal term attains its lower bound from step 2.1. Hence $A_+$ is a minimizer. [step 2.1, given, algebra]

4.1 Equality in the lower bound requires every off-diagonal square in step 2.1 to vanish and every diagonal term to attain its unique scalar minimum. Therefore $W=\operatorname{diag}(\lambda_1^+,\ldots,\lambda_d^+)$ and $Z=U W U^T=A_+$. The minimizer is unique; since the argument applies to any orthogonal eigendecomposition, every allowed decomposition gives this same nearest matrix. [step 2.1, step 3.1, algebra] ∎
## Remarks

The proof above is choice-free: it constructs the unique minimizer from a finite orthogonal eigendecomposition and checks the objective directly. The separate abstract Hilbert-projection route used in the LMNN procedure is recorded under its own Countable Choice assumption.
