---
dependency_level: 0
id: lem-gaussian-quadratic-form-centered-even-moment-bound
kind: lemma
title: Centered Gaussian quadratic forms have dimension-free even-moment bounds
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - thm-factorization-of-expectations-for-independent-variables
  - thm-orthogonal-transform-preserves-standard-normal-product-law
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: James M. Flegal and Galin L. Jones, Batch means and spectral variance estimators in Markov chain Monte Carlo, Lemma 10 (Whittle's quadratic-form bound)
      url: https://arxiv.org/pdf/0811.1729
axiom_use: AC is inherited from the normal-law and orthogonal Gaussian transformation interfaces; the finite expansion uses no additional choice.
---

## Statement

Assume AC. For every positive integer $r$ there is a finite constant $C_r$, depending only on $r$, such that for every integer $n\ge1$, independent standard-normal variables $U_1,\ldots,U_n$, and real symmetric $n\times n$ matrix $A$,
$$E\left|U^TAU-\operatorname{tr}A\right|^{2r}\le C_r\left(\sum_{i,k=1}^n A_{ik}^2\right)^r.$$
In particular $E(U^TAU)=\operatorname{tr}A$. The matrix may be singular or indefinite.

## Facts & Assumptions

**Given:** AC, a positive integer $r$, independent standard-normal coordinates of $U\in\mathbb R^n$, and a real symmetric matrix $A$ with $n\ge1$.

[A1] AC is assumed as in [[def-axiom-of-choice]] and the normal interfaces below.

[F1] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis. [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]

[F2] Orthogonal transformations preserve independence and the standard-normal coordinate laws. [[thm-orthogonal-transform-preserves-standard-normal-product-law]]

[F3] The standard-normal law has density $e^{-z^2/2}/\sqrt{2\pi}$. [[def-standard-normal-and-normal-laws]]

[F4] Expectations of integrable products of functions of independent variables factor. [[thm-factorization-of-expectations-for-independent-variables]]

## Proof

1.1 By [F1] choose an orthogonal matrix $O$ with $A=O\operatorname{diag}(\lambda_1,\ldots,\lambda_n)O^T$. By [F2], $Z=O^TU$ has independent standard-normal coordinates. Integration by parts in the density [F3], with $ze^{-z^2/2}\to0$ at both infinities, gives $EZ_i^2=1$. Every absolute moment of $V_i=Z_i^2-1$ is finite: for an integer $k\ge1$, $|z^2-1|^k\le(1+z^2)^k$, and this polynomial is integrable against $e^{-z^2/2}$. Thus $EV_i=0$, $E(U^TAU)=\sum_i\lambda_i=\operatorname{tr}A$, and $U^TAU-\operatorname{tr}A=\sum_i\lambda_iV_i$. [A1, F1, F2, F3, given, algebra]

1.2 Expand the even power $(\sum_i\lambda_iV_i)^{2r}$ over ordered tuples of $2r$ indices. By [F4], a term whose tuple has an index appearing exactly once has expectation zero. Group all other terms by the partition of their $2r$ positions into equal-index blocks. Such a partition has block sizes $k_1,\ldots,k_q\ge2$ with $\sum_a k_a=2r$. For each fixed partition, taking absolute values and dropping the restriction that different blocks have distinct indices bounds its contribution by $\prod_{a=1}^q E|V_1|^{k_a}\prod_{a=1}^q\sum_i|\lambda_i|^{k_a}$. All these quantities are finite by step 1.1. [F4, step 1.1, algebra]

2.1 Put $L=(\sum_i\lambda_i^2)^{1/2}$. If $L=0$, the centered form is identically zero and the bound holds. Otherwise $|\lambda_i|/L\le1$ and $\sum_i(|\lambda_i|/L)^2=1$, so for every integer $k\ge2$, $\sum_i|\lambda_i|^k\le L^k$. Consequently each partition contribution in step 1.2 is bounded by $L^{2r}\prod_a E|V_1|^{k_a}$. There are finitely many partitions of the fixed set of $2r$ positions; the sum of these moment products over the partitions without singleton blocks is a finite constant $C_r$ depending only on $r$. [step 1.1, step 1.2, algebra]

2.2 Since $2r$ is even, the expanded power is the absolute $2r$th power. Summing the bounds of step 2.1 therefore gives $E|U^TAU-\operatorname{tr}A|^{2r}\le C_r L^{2r}$. Finally $L^2=\operatorname{tr}(A^2)=\sum_{i,k}A_{ik}^2$ by symmetry and orthogonal diagonalization. This proves the bound and the expectation assertion, including $A=0$, singular matrices and matrices of either sign. [step 1.1, step 2.1, algebra] ∎
